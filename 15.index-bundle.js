(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{869:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(23),i=t(4),o=t.n(i),l=t(574),s=t(270),u=t(261),m=t(156),d=t(215),g=t(263),h=t(514),p=t(266),f=t(373),v=t(224),E=t(142),y=t(262),b=t(96),N=t(260),j=t(8),I=t(2),L=t(46),k=t(13);function C(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],n=!0,r=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(t.push(i.value),!a||t.length!==a);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function S(e){var a=e.lang,t=e.themeMode,n=e.history,c=e.palette,i=e.setSnackbar,o=Object(k.d)(),j=Object(b.a)(t),S=C(r.a.useState(!1),2),D=S[0],_=S[1],w=C(r.a.useState(""),2),B=w[0],x=w[1],M=C(r.a.useState(!1),2),G=M[0],q=M[1],O=C(r.a.useState([]),2),A=O[0],R=O[1],P=C(r.a.useState(""),2),U=P[0],W=P[1],J=C(r.a.useState(""),2),T=J[0],F=J[1],H=C(r.a.useState(""),2),z=H[0],K=H[1],Q=C(r.a.useState(""),2),V=Q[0],X=Q[1],Y=C(r.a.useState(""),2),Z=Y[0],$=Y[1];return r.a.useEffect((function(){if(void 0!==e.location.defaultData){if("number"==typeof e.location.defaultData.id){_(!0);var a=e.location.defaultData,t=a.name_rus,n=a.name_eng,r=a.img_url,c=a.color,i=a.prevUrl;K(t),F(n),X(r),$(c),x(i),q(!0),function e(a,t){L.j.post("/actions/users/geticons",a).then((function(n){if(0===n.data.length)e(a,t);else{var r=[];r.push(t);var c=r.concat(n.data);R(c),q(!1)}}))}({name:n},r)}else{var o=e.location.defaultData.prevUrl;x(o)}}}),[e.location.defaultData]),r.a.createElement(N.a,{theme:j},r.a.createElement(u.a,null),r.a.createElement("div",{className:o.root},r.a.createElement(y.a,{container:!0,className:"".concat(o.height12),direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(y.a,{item:!0,className:"".concat(o.mainGridBodyItem," ").concat(o.height11)},r.a.createElement(E.a,{className:o.paper},r.a.createElement(y.a,{className:"".concat(o.height12),container:!0,direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(y.a,{item:!0,className:"".concat(o.mainGridBodyItem," ").concat(o.height5)},r.a.createElement(y.a,{container:!0,className:"".concat(o.height6),direction:"column",justify:"center",alignItems:"center"},r.a.createElement(y.a,{item:!0,className:o.fullMinWidth},r.a.createElement(g.a,{className:o.inputDiv,disabled:!!G,required:!0,id:"input-ru",value:z,label:a.currLang.texts.Name+" Ru",variant:"outlined",onChange:function(e){K(e.target.value)}}))),r.a.createElement(y.a,{container:!0,className:"".concat(o.height6),direction:"column",justify:"center",alignItems:"center"},r.a.createElement(y.a,{item:!0,className:o.fullMinWidth},r.a.createElement(g.a,{className:o.inputDiv,disabled:!!G,required:!0,id:"input-en",value:T,label:a.currLang.texts.Name+" En",variant:"outlined",onChange:function(e){var a=e.target.value,t=/[а-яА-ЯёЁ]/g;-1!==a.search(t)&&(a=a.replace(t,"")),F(a)}})))),r.a.createElement(y.a,{item:!0,className:"".concat(o.mainGridBodyItem," ").concat(o.height3)},r.a.createElement(y.a,{className:"".concat(o.height12),container:!0,direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(y.a,{item:!0,className:"".concat(o.mainGridBodyItem," ").concat(o.height6)},r.a.createElement(g.a,{className:o.inputDiv,disabled:!!G,value:U,id:"input-search",label:a.currLang.texts.FindIcon,variant:"outlined",onChange:function(e){var a=e.target.value,t=/[а-яА-ЯёЁ]/g;-1!==a.search(t)&&(a=a.replace(t,"")),W(a)},onBlur:function e(){if(0!==U.length){q(!0);var a={name:U.replace(/ /g,"%20")};L.j.post("/actions/users/geticons",a).then((function(a){0===a.data.length?e():(R(a.data),q(!1))}))}}})),r.a.createElement(y.a,{item:!0,className:"".concat(o.mainGridBodyItem," ").concat(o.height6)},r.a.createElement("div",{className:o.formControl},G?r.a.createElement(s.a,null):r.a.createElement(m.a,{disabled:0===A.length},r.a.createElement(d.a,{id:"select-icon"},a.currLang.texts.ChangeIcon),r.a.createElement(v.a,{value:V,style:{minWidth:100},labelId:"select-icon",onChange:function(e){X(e.target.value)},MenuProps:{PaperProps:{style:{maxHeight:224,width:"auto"}}}},A.map((function(e,a){return r.a.createElement(h.a,{key:a,value:e},r.a.createElement(f.a,{className:o.smallAvatar,src:e,style:"dark"===c.type?{filter:"invert(1)"}:{}}))})))))))),r.a.createElement(y.a,{item:!0,className:"".concat(o.mainGridBodyItem," ").concat(o.height4)},r.a.createElement(l.SliderPicker,{className:o.inputDiv,color:Z,onChangeComplete:function(e,a){$(e.hex)}}))))),r.a.createElement(y.a,{item:!0,className:"".concat(o.mainGridBodyItem," ").concat(o.height1)},r.a.createElement(y.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center"},r.a.createElement(y.a,{item:!0},r.a.createElement(p.a,{className:o.actionButton,variant:"contained",color:"secondary",onClick:function(){0===B.length?n.push("/dreammap"):n.push(B)}},a.currLang.buttons.Back)),r.a.createElement(y.a,{item:!0},r.a.createElement(p.a,{variant:"contained",color:"primary",className:o.actionButton,onClick:function(){return function(){var t="",r=!1;if(D){var c=!1,o={id:e.location.defaultData.id};z!==e.location.defaultData.name_rus&&(o.name_rus=z,c=!0),T!==e.location.defaultData.name_eng&&(o.name_eng=T,c=!0),V!==e.location.defaultData.img_url&&(o.img_url=V,c=!0),Z!==e.location.defaultData.color&&(o.color=Z,c=!0),c?L.j.post("/actions/users/updatelocation",o).then((function(e){i({type:I.E,snackbar:{open:!0,variant:"success",message:a.currLang.texts.success}}),0===B.length?n.push("/dreammap"):n.push(B)})).catch((function(e){i({type:I.E,snackbar:{open:!0,variant:"error",message:a.currLang.errors.CantUpdateLocation}})})):i({type:I.E,snackbar:{open:!0,variant:"error",message:a.currLang.errors.NoChanges}})}else if(0===Z.length&&(t=a.currLang.errors.ColorNotChange,r=!0),0===V.length&&(t=a.currLang.errors.IconNotChange,r=!0),0===z.length&&(t=a.currLang.errors.EmptyName,r=!0),0===T.length&&(t=a.currLang.errors.EmptyName,r=!0),r)i({type:I.E,snackbar:{open:!0,variant:"error",message:t}});else{var l={name_rus:z,name_eng:T,img_url:V,color:Z};L.j.post("/actions/users/createlocation",l).then((function(e){i({type:I.E,snackbar:{open:!0,variant:"success",message:a.currLang.texts.success}}),0===B.length?n.push("/dreammap"):n.push(B)})).catch((function(e){i({type:I.E,snackbar:{open:!0,variant:"error",message:a.currLang.errors.CantAddLocation}})}))}}()}},D?a.currLang.buttons.Save:a.currLang.buttons.add)))))))}S.propTypes={setSnackbar:o.a.func.isRequired,themeMode:o.a.object.isRequired,lang:o.a.object.isRequired,palette:o.a.object.isRequired};a.default=Object(c.b)((function(e){return{themeMode:e.themeMode,palette:e.themeMode.palette,lang:e.lang}}),(function(e){return{setSnackbar:function(a){return e(Object(j.C)(a))}}}))(S)}}]);
//# sourceMappingURL=15.index-bundle.js.map