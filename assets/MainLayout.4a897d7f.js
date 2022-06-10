var oe=Object.defineProperty;var k=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var M=(e,s,t)=>s in e?oe(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,W=(e,s)=>{for(var t in s||(s={}))ie.call(s,t)&&M(e,t,s[t]);if(k)for(var t of k(s))le.call(s,t)&&M(e,t,s[t]);return e};import{c as q,h as X,a as ae,b as re,Q as D}from"./QBtn.4fc6df29.js";import{Q as se}from"./QInput.df413376.js";import{c as v,h as m,r as w,i as Y,o as V,n as I,a as R,b as Z,g as Q,l as B,w as _,d as ee,e as N,p as te,f as ue,j as C,k as ce,_ as de,m as U,q as A,s as z,t as T,T as fe,u as ve,v as K,x as he,y as me}from"./index.751bff78.js";import{g as ge,a as pe,b as be,c as F}from"./scroll.40cb92f2.js";import"./use-key-composition.758729f2.js";import"./use-dark.f6b877d5.js";var ye=q({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:s}){const t=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>m("div",{class:t.value},X(s.default))}});function we(){const e=w(!Y.value);return e.value===!1&&V(()=>{e.value=!0}),e}const ne=typeof ResizeObserver!="undefined",G=ne===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var E=q({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:s}){let t=null,n,o={width:-1,height:-1};function u(r){r===!0||e.debounce===0||e.debounce==="0"?c():t===null&&(t=setTimeout(c,e.debounce))}function c(){if(clearTimeout(t),t=null,n){const{offsetWidth:r,offsetHeight:a}=n;(r!==o.width||a!==o.height)&&(o={width:r,height:a},s("resize",o))}}const f=Q();if(Object.assign(f.proxy,{trigger:u}),ne===!0){let r;return V(()=>{I(()=>{n=f.proxy.$el.parentNode,n&&(r=new ResizeObserver(u),r.observe(n),c())})}),R(()=>{clearTimeout(t),r!==void 0&&(r.disconnect!==void 0?r.disconnect():n&&r.unobserve(n))}),Z}else{let y=function(){clearTimeout(t),a!==void 0&&(a.removeEventListener!==void 0&&a.removeEventListener("resize",u,B.passive),a=void 0)},g=function(){y(),n&&n.contentDocument&&(a=n.contentDocument.defaultView,a.addEventListener("resize",u,B.passive),c())};const r=we();let a;return V(()=>{I(()=>{n=f.proxy.$el,n&&g()})}),R(y),()=>{if(r.value===!0)return m("object",{style:G.style,tabindex:-1,type:"text/html",data:G.url,"aria-hidden":"true",onLoad:g})}}}}),xe=q({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:s,emit:t}){const{proxy:{$q:n}}=Q(),o=ee(N,()=>{console.error("QHeader needs to be child of QLayout")}),u=w(parseInt(e.heightHint,10)),c=w(!0),f=v(()=>e.reveal===!0||o.view.value.indexOf("H")>-1||n.platform.is.ios&&o.isContainer.value===!0),r=v(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return c.value===!0?u.value:0;const i=u.value-o.scroll.value.position;return i>0?i:0}),a=v(()=>e.modelValue!==!0||f.value===!0&&c.value!==!0),y=v(()=>e.modelValue===!0&&a.value===!0&&e.reveal===!0),g=v(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(a.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),x=v(()=>{const i=o.rows.value.top,p={};return i[0]==="l"&&o.left.space===!0&&(p[n.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),i[2]==="r"&&o.right.space===!0&&(p[n.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),p});function d(i,p){o.update("header",i,p)}function b(i,p){i.value!==p&&(i.value=p)}function H({height:i}){b(u,i),d("size",i)}function P(i){y.value===!0&&b(c,!0),t("focusin",i)}_(()=>e.modelValue,i=>{d("space",i),b(c,!0),o.animate()}),_(r,i=>{d("offset",i)}),_(()=>e.reveal,i=>{i===!1&&b(c,e.modelValue)}),_(c,i=>{o.animate(),t("reveal",i)}),_(o.scroll,i=>{e.reveal===!0&&b(c,i.direction==="up"||i.position<=e.revealOffset||i.position-i.inflectionPoint<100)});const L={};return o.instances.header=L,e.modelValue===!0&&d("size",u.value),d("space",e.modelValue),d("offset",r.value),R(()=>{o.instances.header===L&&(o.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const i=ae(s.default,[]);return e.elevated===!0&&i.push(m("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(m(E,{debounce:0,onResize:H})),m("header",{class:g.value,style:x.value,onFocusin:P},i)}}}),ze=q({name:"QPageContainer",setup(e,{slots:s}){const{proxy:{$q:t}}=Q(),n=ee(N,()=>{console.error("QPageContainer needs to be child of QLayout")});te(ue,!0);const o=v(()=>{const u={};return n.header.space===!0&&(u.paddingTop=`${n.header.size}px`),n.right.space===!0&&(u[`padding${t.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(u.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(u[`padding${t.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),u});return()=>m("div",{class:"q-page-container",style:o.value},X(s.default))}});const{passive:J}=B,Te=["both","horizontal","vertical"];var Se=q({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Te.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:s}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,o,u;_(()=>e.scrollTarget,()=>{r(),f()});function c(){n!==null&&n();const g=Math.max(0,pe(o)),x=be(o),d={top:g-t.position.top,left:x-t.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const b=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";t.position={top:g,left:x},t.directionChanged=t.direction!==b,t.delta=d,t.directionChanged===!0&&(t.direction=b,t.inflectionPoint=t.position),s("scroll",W({},t))}function f(){o=ge(u,e.scrollTarget),o.addEventListener("scroll",a,J),a(!0)}function r(){o!==void 0&&(o.removeEventListener("scroll",a,J),o=void 0)}function a(g){if(g===!0||e.debounce===0||e.debounce==="0")c();else if(n===null){const[x,d]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];n=()=>{d(x),n=null}}}const y=Q();return V(()=>{u=y.proxy.$el.parentNode,f()}),R(()=>{n!==null&&n(),r()}),Object.assign(y.proxy,{trigger:a,getPosition:()=>t}),Z}}),_e=q({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:s,emit:t}){const{proxy:{$q:n}}=Q(),o=w(null),u=w(n.screen.height),c=w(e.container===!0?0:n.screen.width),f=w({position:0,direction:"down",inflectionPoint:0}),r=w(0),a=w(Y.value===!0?0:F()),y=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),g=v(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),x=v(()=>a.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),d=v(()=>a.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function b(l){if(e.container===!0||document.qScrollPrevented!==!0){const h={position:l.position.top,direction:l.direction,directionChanged:l.directionChanged,inflectionPoint:l.inflectionPoint.top,delta:l.delta.top};f.value=h,e.onScroll!==void 0&&t("scroll",h)}}function H(l){const{height:h,width:S}=l;let $=!1;u.value!==h&&($=!0,u.value=h,e.onScrollHeight!==void 0&&t("scroll-height",h),L()),c.value!==S&&($=!0,c.value=S),$===!0&&e.onResize!==void 0&&t("resize",l)}function P({height:l}){r.value!==l&&(r.value=l,L())}function L(){if(e.container===!0){const l=u.value>r.value?F():0;a.value!==l&&(a.value=l)}}let i;const p={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:o,height:u,containerHeight:r,scrollbarWidth:a,totalWidth:v(()=>c.value+a.value),rows:v(()=>{const l=e.view.toLowerCase().split(" ");return{top:l[0].split(""),middle:l[1].split(""),bottom:l[2].split("")}}),header:C({size:0,offset:0,space:!1}),right:C({size:300,offset:0,space:!1}),footer:C({size:0,offset:0,space:!1}),left:C({size:300,offset:0,space:!1}),scroll:f,animate(){i!==void 0?clearTimeout(i):document.body.classList.add("q-body--layout-animate"),i=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),i=void 0},155)},update(l,h,S){p[l][h]=S}};if(te(N,p),F()>0){let S=function(){l=null,h.classList.remove("hide-scrollbar")},$=function(){if(l===null){if(h.scrollHeight>n.screen.height)return;h.classList.add("hide-scrollbar")}else clearTimeout(l);l=setTimeout(S,300)},O=function(j){l!==null&&j==="remove"&&(clearTimeout(l),S()),window[`${j}EventListener`]("resize",$)},l=null;const h=document.body;_(()=>e.container!==!0?"add":"remove",O),e.container!==!0&&O("add"),ce(()=>{O("remove")})}return()=>{const l=re(s.default,[m(Se,{onScroll:b}),m(E,{onResize:H})]),h=m("div",{class:y.value,style:g.value,ref:e.container===!0?void 0:o,tabindex:-1},l);return e.container===!0?m("div",{class:"q-layout-container overflow-hidden",ref:o},[m(E,{onResize:P}),m("div",{class:"absolute-full",style:x.value},[m("div",{class:"scroll",style:d.value},[h])])]):h}}});const qe={data(){return{nameToFiltring:""}}},Le=K("div",{class:"infoText q-ml-xl"},[he("AppGavi "),K("div",{class:"text-center"},"V 0.1.0")],-1);function $e(e,s,t,n,o,u){const c=me("router-view");return U(),A(_e,{view:"lHh Lpr lFf "},{default:z(()=>[T(xe,{elevated:"",class:"myQHeader"},{default:z(()=>[T(ye,{class:"flex justify-between q-py-sm q-px-lg myToolBar"},{default:z(()=>[T(se,{modelValue:o.nameToFiltring,"onUpdate:modelValue":s[0]||(s[0]=f=>o.nameToFiltring=f),class:"myQInput q-mr-sm",color:"grey-10",rounded:"",outlined:"","bg-color":"blue-grey-1"},{prepend:z(()=>[T(D,{name:"search"})]),append:z(()=>[T(D,{color:"brown-6",name:"send"})]),_:1},8,["modelValue"]),Le]),_:1})]),_:1}),T(ze,null,{default:z(()=>[T(c,null,{default:z(({Component:f,route:r})=>[T(fe,{name:"fade"},{default:z(()=>[(U(),A(ve(f),{nameToFiltring:o.nameToFiltring,key:r.path},null,8,["nameToFiltring"]))]),_:2},1024)]),_:1})]),_:1})]),_:1})}var Fe=de(qe,[["render",$e]]);export{Fe as default};
