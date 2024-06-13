import{p as Q,m as ue,k as pe,l as Pe,q as Z,c as w,v as ee,h as n,x as z,y as J,M as ke,I as ae,E as ie,z as Fe,A as Se,B as Re,C as Be,D as Te,F as $e,G as De,H as Ee,r as T,J as Le,K as Oe,L as Ae,w as We,N as Me,O as Ne,P as Ue,Q as Ke,R as L,S as G,T as qe,U as je,W as ze,X as He,Y as Xe,Z as Ye,$ as Ge,n as ce,a0 as Je,_ as Qe,s as Ze,d as et,e as E,V as tt,f as N,a1 as fe,i as m,a2 as K,a3 as ve,u as q,t as me,j,a4 as nt,a5 as lt}from"./index-CxnSRrpJ.js";import{u as at}from"./list-d4o6J0Ov.js";import{V as X,a as it}from"./VRow-DHHSEl-4.js";import{V as ot,m as st,u as be,a as rt,b as ut,c as he,d as ge}from"./VInput-BK6aih4j.js";class oe{constructor(o){let{x:a,y:i,width:t,height:l}=o;this.x=a,this.y=i,this.width=t,this.height=l}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function dt(e){const o=e.getBoundingClientRect(),a=getComputedStyle(e),i=a.transform;if(i){let t,l,s,d,c;if(i.startsWith("matrix3d("))t=i.slice(9,-1).split(/, /),l=+t[0],s=+t[5],d=+t[12],c=+t[13];else if(i.startsWith("matrix("))t=i.slice(7,-1).split(/, /),l=+t[0],s=+t[3],d=+t[4],c=+t[5];else return new oe(o);const f=a.transformOrigin,h=o.x-d-(1-l)*parseFloat(f),g=o.y-c-(1-s)*parseFloat(f.slice(f.indexOf(" ")+1)),p=l?o.width/l:e.offsetWidth+1,b=s?o.height/s:e.offsetHeight+1;return new oe({x:h,y:g,width:p,height:b})}else return new oe(o)}function ct(e,o,a){if(typeof e.animate>"u")return{finished:Promise.resolve()};let i;try{i=e.animate(o,a)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(t=>{i.onfinish=()=>{t(i)}})),i}const ft="cubic-bezier(0.4, 0, 0.2, 1)",vt=Q({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...ue(),...pe({transition:{component:Pe}})},"VCounter"),mt=Z()({name:"VCounter",functional:!0,props:vt(),setup(e,o){let{slots:a}=o;const i=w(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return ee(()=>n(ke,{transition:e.transition},{default:()=>[z(n("div",{class:["v-counter",{"text-error":e.max&&!e.disabled&&parseFloat(e.value)>parseFloat(e.max)},e.class],style:e.style},[a.default?a.default({counter:i.value,max:e.max,value:e.value}):i.value]),[[J,e.active]])]})),{}}}),ht=Q({floating:Boolean,...ue()},"VFieldLabel"),Y=Z()({name:"VFieldLabel",props:ht(),setup(e,o){let{slots:a}=o;return ee(()=>n(ot,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},a)),{}}}),gt=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],xe=Q({appendInnerIcon:ae,bgColor:String,clearable:Boolean,clearIcon:{type:ae,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:ae,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>gt.includes(e)},"onClick:clear":ie(),"onClick:appendInner":ie(),"onClick:prependInner":ie(),...ue(),...Fe(),...Se(),...Re()},"VField"),_e=Z()({name:"VField",inheritAttrs:!1,props:{id:String,...st(),...xe()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,o){let{attrs:a,emit:i,slots:t}=o;const{themeClasses:l}=Be(e),{loaderClasses:s}=Te(e),{focusClasses:d,isFocused:c,focus:f,blur:h}=be(e),{InputIcon:g}=rt(e),{roundedClasses:p}=$e(e),{rtlClasses:b}=De(),F=w(()=>e.dirty||e.active),_=w(()=>!e.singleLine&&!!(e.label||t.label)),C=Ee(),v=w(()=>e.id||`input-${C}`),r=w(()=>`${v.value}-messages`),$=T(),V=T(),H=T(),u=w(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:P,backgroundColorStyles:k}=Le(Oe(e,"bgColor")),{textColorClasses:S,textColorStyles:ne}=Ae(w(()=>e.error||e.disabled?void 0:F.value&&c.value?e.color:e.baseColor));We(F,y=>{if(_.value){const x=$.value.$el,R=V.value.$el;requestAnimationFrame(()=>{const B=dt(x),I=R.getBoundingClientRect(),U=I.x-B.x,A=I.y-B.y-(B.height/2-I.height/2),W=I.width/.75,M=Math.abs(W-B.width)>1?{maxWidth:Me(W)}:void 0,Ce=getComputedStyle(x),de=getComputedStyle(R),Ve=parseFloat(Ce.transitionDuration)*1e3||150,Ie=parseFloat(de.getPropertyValue("--v-field-label-scale")),we=de.getPropertyValue("color");x.style.visibility="visible",R.style.visibility="hidden",ct(x,{transform:`translate(${U}px, ${A}px) scale(${Ie})`,color:we,...M},{duration:Ve,easing:ft,direction:y?"normal":"reverse"}).finished.then(()=>{x.style.removeProperty("visibility"),R.style.removeProperty("visibility")})})}},{flush:"post"});const O=w(()=>({isActive:F,isFocused:c,controlRef:H,blur:h,focus:f}));function le(y){y.target!==document.activeElement&&y.preventDefault()}function D(y){var x;y.key!=="Enter"&&y.key!==" "||(y.preventDefault(),y.stopPropagation(),(x=e["onClick:clear"])==null||x.call(e,new MouseEvent("click")))}return ee(()=>{var U,A,W;const y=e.variant==="outlined",x=!!(t["prepend-inner"]||e.prependInnerIcon),R=!!(e.clearable||t.clear),B=!!(t["append-inner"]||e.appendInnerIcon||R),I=()=>t.label?t.label({...O.value,label:e.label,props:{for:v.value}}):e.label;return n("div",G({class:["v-field",{"v-field--active":F.value,"v-field--appended":B,"v-field--center-affix":e.centerAffix??!u.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":x,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!I(),[`v-field--variant-${e.variant}`]:!0},l.value,P.value,d.value,s.value,p.value,b.value,e.class],style:[k.value,e.style],onClick:le},a),[n("div",{class:"v-field__overlay"},null),n(Ne,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:t.loader}),x&&n("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&n(g,{key:"prepend-icon",name:"prependInner"},null),(U=t["prepend-inner"])==null?void 0:U.call(t,O.value)]),n("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&_.value&&n(Y,{key:"floating-label",ref:V,class:[S.value],floating:!0,for:v.value,style:ne.value},{default:()=>[I()]}),n(Y,{ref:$,for:v.value},{default:()=>[I()]}),(A=t.default)==null?void 0:A.call(t,{...O.value,props:{id:v.value,class:"v-field__input","aria-describedby":r.value},focus:f,blur:h})]),R&&n(Ue,{key:"clear"},{default:()=>[z(n("div",{class:"v-field__clearable",onMousedown:M=>{M.preventDefault(),M.stopPropagation()}},[n(Ke,{defaults:{VIcon:{icon:e.clearIcon}}},{default:()=>[t.clear?t.clear({...O.value,props:{onKeydown:D,onFocus:f,onBlur:h,onClick:e["onClick:clear"]}}):n(g,{name:"clear",onKeydown:D,onFocus:f,onBlur:h},null)]})]),[[J,e.dirty]])]}),B&&n("div",{key:"append",class:"v-field__append-inner"},[(W=t["append-inner"])==null?void 0:W.call(t,O.value),e.appendInnerIcon&&n(g,{key:"append-icon",name:"appendInner"},null)]),n("div",{class:["v-field__outline",S.value],style:ne.value},[y&&n(L,null,[n("div",{class:"v-field__outline__start"},null),_.value&&n("div",{class:"v-field__outline__notch"},[n(Y,{ref:V,floating:!0,for:v.value},{default:()=>[I()]})]),n("div",{class:"v-field__outline__end"},null)]),u.value&&_.value&&n(Y,{ref:V,floating:!0,for:v.value},{default:()=>[I()]})])])}),{controlRef:H}}});function yt(e){const o=Object.keys(_e.props).filter(a=>!qe(a)&&a!=="class"&&a!=="style");return je(e,o)}const se=Symbol("Forwarded refs");function re(e,o){let a=e;for(;a;){const i=Reflect.getOwnPropertyDescriptor(a,o);if(i)return i;a=Object.getPrototypeOf(a)}}function bt(e){for(var o=arguments.length,a=new Array(o>1?o-1:0),i=1;i<o;i++)a[i-1]=arguments[i];return e[se]=a,new Proxy(e,{get(t,l){if(Reflect.has(t,l))return Reflect.get(t,l);if(!(typeof l=="symbol"||l.startsWith("$")||l.startsWith("__"))){for(const s of a)if(s.value&&Reflect.has(s.value,l)){const d=Reflect.get(s.value,l);return typeof d=="function"?d.bind(s.value):d}}},has(t,l){if(Reflect.has(t,l))return!0;if(typeof l=="symbol"||l.startsWith("$")||l.startsWith("__"))return!1;for(const s of a)if(s.value&&Reflect.has(s.value,l))return!0;return!1},set(t,l,s){if(Reflect.has(t,l))return Reflect.set(t,l,s);if(typeof l=="symbol"||l.startsWith("$")||l.startsWith("__"))return!1;for(const d of a)if(d.value&&Reflect.has(d.value,l))return Reflect.set(d.value,l,s);return!1},getOwnPropertyDescriptor(t,l){var d;const s=Reflect.getOwnPropertyDescriptor(t,l);if(s)return s;if(!(typeof l=="symbol"||l.startsWith("$")||l.startsWith("__"))){for(const c of a){if(!c.value)continue;const f=re(c.value,l)??("_"in c.value?re((d=c.value._)==null?void 0:d.setupState,l):void 0);if(f)return f}for(const c of a){const f=c.value&&c.value[se];if(!f)continue;const h=f.slice();for(;h.length;){const g=h.shift(),p=re(g.value,l);if(p)return p;const b=g.value&&g.value[se];b&&h.push(...b)}}}}})}const xt=["color","file","time","date","datetime-local","week","month"],_t=Q({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...ut(),...xe()},"VTextField"),ye=Z()({name:"VTextField",directives:{Intersect:ze},inheritAttrs:!1,props:_t(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,o){let{attrs:a,emit:i,slots:t}=o;const l=He(e,"modelValue"),{isFocused:s,focus:d,blur:c}=be(e),f=w(()=>typeof e.counterValue=="function"?e.counterValue(l.value):typeof e.counterValue=="number"?e.counterValue:(l.value??"").toString().length),h=w(()=>{if(a.maxlength)return a.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),g=w(()=>["plain","underlined"].includes(e.variant));function p(u,P){var k,S;!e.autofocus||!u||(S=(k=P[0].target)==null?void 0:k.focus)==null||S.call(k)}const b=T(),F=T(),_=T(),C=w(()=>xt.includes(e.type)||e.persistentPlaceholder||s.value||e.active);function v(){var u;_.value!==document.activeElement&&((u=_.value)==null||u.focus()),s.value||d()}function r(u){i("mousedown:control",u),u.target!==_.value&&(v(),u.preventDefault())}function $(u){v(),i("click:control",u)}function V(u){u.stopPropagation(),v(),ce(()=>{l.value=null,Je(e["onClick:clear"],u)})}function H(u){var k;const P=u.target;if(l.value=P.value,(k=e.modelModifiers)!=null&&k.trim&&["text","search","password","tel","url"].includes(e.type)){const S=[P.selectionStart,P.selectionEnd];ce(()=>{P.selectionStart=S[0],P.selectionEnd=S[1]})}}return ee(()=>{const u=!!(t.counter||e.counter!==!1&&e.counter!=null),P=!!(u||t.details),[k,S]=Xe(a),{modelValue:ne,...O}=he.filterProps(e),le=yt(e);return n(he,G({ref:b,modelValue:l.value,"onUpdate:modelValue":D=>l.value=D,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":g.value},e.class],style:e.style},k,O,{centerAffix:!g.value,focused:s.value}),{...t,default:D=>{let{id:y,isDisabled:x,isDirty:R,isReadonly:B,isValid:I}=D;return n(_e,G({ref:F,onMousedown:r,onClick:$,"onClick:clear":V,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},le,{id:y.value,active:C.value||R.value,dirty:R.value||e.dirty,disabled:x.value,focused:s.value,error:I.value===!1}),{...t,default:U=>{let{props:{class:A,...W}}=U;const M=z(n("input",G({ref:_,value:l.value,onInput:H,autofocus:e.autofocus,readonly:B.value,disabled:x.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:v,onBlur:c},W,S),null),[[Ye("intersect"),{handler:p},null,{once:!0}]]);return n(L,null,[e.prefix&&n("span",{class:"v-text-field__prefix"},[n("span",{class:"v-text-field__prefix__text"},[e.prefix])]),t.default?n("div",{class:A,"data-no-activator":""},[t.default(),M]):Ge(M,{class:A}),e.suffix&&n("span",{class:"v-text-field__suffix"},[n("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:P?D=>{var y;return n(L,null,[(y=t.details)==null?void 0:y.call(t,D),u&&n(L,null,[n("span",null,null),n(mt,{active:e.persistentCounter||s.value,value:f.value,max:h.value,disabled:e.disabled},t.counter)])])}:void 0})}),bt({},b,F,_)}}),te=e=>(nt("data-v-a0a8cb00"),e=e(),lt(),e),Ct=te(()=>m("h1",{class:"text-center"},"代辦事項",-1)),Vt=te(()=>m("thead",null,[m("tr",null,[m("th",null,"名稱"),m("th",null,"操作")])],-1)),It=te(()=>m("h1",{class:"text-center"},"完成事項",-1)),wt=te(()=>m("thead",null,[m("tr",null,[m("th",null,"名稱"),m("th",null,"操作")])],-1)),pt={__name:"list",setup(e){const o=at(),{addItem:a,editItem:i,delItem:t,cancelEditItem:l,confirmEditItem:s,delFinishItem:d}=o,{items:c,finishedItems:f}=Ze(o),h=T(""),g=T(null),p=T([]),b={required:C=>!!C||"欄位必填",length:C=>C.length>=3||"必須三個字以上"},F=async()=>{const C=await g.value.validate();console.log(C),!(C.length>0)&&(a(h.value),g.value.reset())},_=async(C,v)=>{(await p.value[v].validate()).length>0||s(C)};return(C,v)=>(N(),et(tt,null,{default:E(()=>[n(it,null,{default:E(()=>[n(X,{cols:"12"},{default:E(()=>[Ct]),_:1}),n(X,{cols:"12"},{default:E(()=>[n(ye,{variant:"outlined",label:"新增事項",clearable:"","append-icon":"mdi-plus",onKeydown:fe(F,["enter"]),"onClick:append":F,modelValue:h.value,"onUpdate:modelValue":v[0]||(v[0]=r=>h.value=r),rules:[b.required,b.length],ref_key:"newItemTextField",ref:g},null,8,["modelValue","rules"]),n(ge,null,{default:E(()=>[Vt,m("tbody",null,[(N(!0),K(L,null,ve(q(c),(r,$)=>(N(),K("tr",{key:r.id},[m("td",null,[z(m("span",null,me(r.name),513),[[J,!r.edit]]),z(n(ye,{modelValue:r.model,"onUpdate:modelValue":V=>r.model=V,rules:[b.required,b.length],autofocus:"",onKeydown:fe(V=>_(r.id,$),["enter"]),ref_for:!0,ref_key:"editItemTextField",ref:p},null,8,["modelValue","onUpdate:modelValue","rules","onKeydown"]),[[J,r.edit]])]),m("td",null,[r.edit?(N(),K(L,{key:1},[n(j,{icon:"mdi-check",onClick:V=>_(r.id,$)},null,8,["onClick"]),n(j,{icon:"mdi-undo",onClick:V=>q(l)(r.id)},null,8,["onClick"])],64)):(N(),K(L,{key:0},[n(j,{icon:"mdi-pencil",onClick:V=>q(i)(r.id)},null,8,["onClick"]),n(j,{icon:"mdi-delete",onClick:V=>q(t)(r.id)},null,8,["onClick"])],64))])]))),128))])]),_:1})]),_:1}),n(X,{cols:"12"},{default:E(()=>[It]),_:1}),n(X,{cols:"12"},{default:E(()=>[n(ge,null,{default:E(()=>[wt,m("tbody",null,[(N(!0),K(L,null,ve(q(f),r=>(N(),K("tr",{key:r.id},[m("td",null,me(r.name),1),m("td",null,[n(j,{icon:"mdi-delete",onClick:$=>q(d)(r.id)},null,8,["onClick"])])]))),128))])]),_:1})]),_:1})]),_:1})]),_:1}))}},Rt=Qe(pt,[["__scopeId","data-v-a0a8cb00"]]);export{Rt as default};
