import{s as H,r as h,d as m,e as K,f as e,V as O,h as t,m as R,u as s,p as v,j as n,k as o,l as d,F as I,q as D,v as L,i as x}from"./index-BFhKDSCK.js";import{u as M}from"./list-f6zxEQ0s.js";import{_ as U,V as z,a as V}from"./VDataTable-CfULFITK.js";import{V as C,a as b,b as A}from"./VCard-C_6fX1oO.js";const w=i=>(D("data-v-b93c486d"),i=i(),L(),i),G=w(()=>x("h1",{class:"text-center"},"To-do list",-1)),J=w(()=>x("h1",{class:"text-center"},"Finished",-1)),P={__name:"list",setup(i){const f=M(),{addItem:y,editItem:F,delItem:T,cancelEditItem:g,confirmEditItem:B,delFinishItem:N}=f,{items:S,finishedItems:$}=H(f),r=h(""),u=h(null),p={required:l=>!!l||"Field required",length:l=>l.length>=3||"Must be more than three words"},_=async()=>{(await u.value.validate()).length>0||(y(r.value),u.value.reset())},q=async l=>{B(l)},E=[{text:"Name",value:"name"},{text:"Operate",value:"operate",sortable:!1}],j=[{text:"Name",value:"name"},{text:"Operate",value:"operate",sortable:!1}];return(l,k)=>(m(),K(O,{class:"background"},{default:e(()=>[t(A,{justify:"center"},{default:e(()=>[t(C,{cols:"12",md:"8"},{default:e(()=>[t(b,{class:"pa-4"},{default:e(()=>[G,t(z,{variant:"outlined",label:"New Items",clearable:"","append-icon":"mdi-plus",onKeydown:R(_,["enter"]),"onClick:append":_,modelValue:r.value,"onUpdate:modelValue":k[0]||(k[0]=a=>r.value=a),rules:[p.required,p.length],ref_key:"newItemTextField",ref:u},null,8,["modelValue","rules"]),t(V,{headers:E,items:s(S),"item-key":"id"},{"item.operate":e(({item:a})=>[a.edit?(m(),v(I,{key:1},[t(n,{icon:"",onClick:c=>q(a.id)},{default:e(()=>[t(o,null,{default:e(()=>[d("mdi-check")]),_:1})]),_:2},1032,["onClick"]),t(n,{icon:"",onClick:c=>s(g)(a.id)},{default:e(()=>[t(o,null,{default:e(()=>[d("mdi-undo")]),_:1})]),_:2},1032,["onClick"])],64)):(m(),v(I,{key:0},[t(n,{icon:"",onClick:c=>s(F)(a.id)},{default:e(()=>[t(o,null,{default:e(()=>[d("mdi-pencil")]),_:1})]),_:2},1032,["onClick"]),t(n,{icon:"",onClick:c=>s(T)(a.id)},{default:e(()=>[t(o,null,{default:e(()=>[d("mdi-delete")]),_:1})]),_:2},1032,["onClick"])],64))]),_:1},8,["items"])]),_:1})]),_:1}),t(C,{cols:"12",md:"8",class:"mt-5"},{default:e(()=>[t(b,{class:"pa-4"},{default:e(()=>[J,t(V,{headers:j,items:s($),"item-key":"id"},{"item.operate":e(({item:a})=>[t(n,{icon:"",onClick:c=>s(N)(a.id)},{default:e(()=>[t(o,null,{default:e(()=>[d("mdi-delete")]),_:1})]),_:2},1032,["onClick"])]),_:1},8,["items"])]),_:1})]),_:1})]),_:1})]),_:1}))}},Z=U(P,[["__scopeId","data-v-b93c486d"]]);export{Z as default};
