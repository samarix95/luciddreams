(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{860:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(22),o=t(3),i=t.n(o),l=t(559),s=t(254),u=t(245),m=t(142),d=t(199),g=t(247),h=t(500),p=t(250),f=t(416),v=t(208),y=t(128),E=t(246),b=t(89),N=t(244),I=t(50),L=t(9),S=t(70),j=t(12);function k(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],n=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(t.push(o.value),!a||t.length!==a);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function C(e){var a=e.lang,t=e.themeMode,n=e.history,c=e.palette,o=e.setSnackbar,i=Object(j.d)(),I=Object(b.a)(t),C=k(r.a.useState(!1),2),D=C[0],_=C[1],w=k(r.a.useState(""),2),B=w[0],x=w[1],M=k(r.a.useState(!1),2),G=M[0],q=M[1],O=k(r.a.useState([]),2),A=O[0],R=O[1],P=k(r.a.useState(""),2),U=P[0],W=P[1],J=k(r.a.useState(""),2),T=J[0],F=J[1],H=k(r.a.useState(""),2),z=H[0],K=H[1],Q=k(r.a.useState(""),2),V=Q[0],X=Q[1],Y=k(r.a.useState(""),2),Z=Y[0],$=Y[1];return r.a.useEffect((function(){if(void 0!==e.location.defaultData){if("number"==typeof e.location.defaultData.id){_(!0);var a=e.location.defaultData,t=a.name_rus,n=a.name_eng,r=a.img_url,c=a.color,o=a.prevUrl;K(t),F(n),X(r),$(c),x(o),q(!0),function e(a,t){S.a.post("/actions/users/geticons",a).then((function(n){if(0===n.data.length)e(a,t);else{var r=[];r.push(t);var c=r.concat(n.data);R(c),q(!1)}}))}({name:n},r)}else{var i=e.location.defaultData.prevUrl;x(i)}}}),[e.location.defaultData]),r.a.createElement(N.a,{theme:I},r.a.createElement(u.a,null),r.a.createElement("div",{className:i.root},r.a.createElement(E.a,{container:!0,className:"".concat(i.height12),direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(E.a,{item:!0,className:"".concat(i.mainGridBodyItem," ").concat(i.height11)},r.a.createElement(y.a,{className:i.paper},r.a.createElement(E.a,{className:"".concat(i.height12),container:!0,direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(E.a,{item:!0,className:"".concat(i.mainGridBodyItem," ").concat(i.height5)},r.a.createElement(E.a,{container:!0,className:"".concat(i.height6),direction:"column",justify:"center",alignItems:"center"},r.a.createElement(E.a,{item:!0,className:i.fullMinWidth},r.a.createElement(g.a,{className:i.inputDiv,disabled:!!G,required:!0,id:"input-ru",value:z,label:a.currLang.texts.Name+" Ru",variant:"outlined",onChange:function(e){K(e.target.value)}}))),r.a.createElement(E.a,{container:!0,className:"".concat(i.height6),direction:"column",justify:"center",alignItems:"center"},r.a.createElement(E.a,{item:!0,className:i.fullMinWidth},r.a.createElement(g.a,{className:i.inputDiv,disabled:!!G,required:!0,id:"input-en",value:T,label:a.currLang.texts.Name+" En",variant:"outlined",onChange:function(e){var a=e.target.value,t=/[а-яА-ЯёЁ]/g;-1!==a.search(t)&&(a=a.replace(t,"")),F(a)}})))),r.a.createElement(E.a,{item:!0,className:"".concat(i.mainGridBodyItem," ").concat(i.height3)},r.a.createElement(E.a,{className:"".concat(i.height12),container:!0,direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(E.a,{item:!0,className:"".concat(i.mainGridBodyItem," ").concat(i.height6)},r.a.createElement(g.a,{className:i.inputDiv,disabled:!!G,value:U,id:"input-search",label:a.currLang.texts.FindIcon,variant:"outlined",onChange:function(e){var a=e.target.value,t=/[а-яА-ЯёЁ]/g;-1!==a.search(t)&&(a=a.replace(t,"")),W(a)},onBlur:function e(){if(0!==U.length){q(!0);var a={name:U.replace(/ /g,"%20")};S.a.post("/actions/users/geticons",a).then((function(a){0===a.data.length?e():(R(a.data),q(!1))}))}}})),r.a.createElement(E.a,{item:!0,className:"".concat(i.mainGridBodyItem," ").concat(i.height6)},r.a.createElement("div",{className:i.formControl},G?r.a.createElement(s.a,null):r.a.createElement(m.a,{disabled:0===A.length},r.a.createElement(d.a,{id:"select-icon"},a.currLang.texts.ChangeIcon),r.a.createElement(v.a,{value:V,style:{minWidth:100},labelId:"select-icon",onChange:function(e){X(e.target.value)},MenuProps:{PaperProps:{style:{maxHeight:224,width:"auto"}}}},A.map((function(e,a){return r.a.createElement(h.a,{key:a,value:e},r.a.createElement(f.a,{className:i.smallAvatar,src:e,style:"dark"===c.type?{filter:"invert(1)"}:{}}))})))))))),r.a.createElement(E.a,{item:!0,className:"".concat(i.mainGridBodyItem," ").concat(i.height4)},r.a.createElement(l.SliderPicker,{className:i.inputDiv,color:Z,onChangeComplete:function(e,a){$(e.hex)}}))))),r.a.createElement(E.a,{item:!0,className:"".concat(i.mainGridBodyItem," ").concat(i.height1)},r.a.createElement(E.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center"},r.a.createElement(E.a,{item:!0},r.a.createElement(p.a,{className:i.actionButton,variant:"contained",color:"secondary",onClick:function(){0===B.length?n.push("/dreammap"):n.push(B)}},a.currLang.buttons.close)),r.a.createElement(E.a,{item:!0},r.a.createElement(p.a,{variant:"contained",color:"primary",className:i.actionButton,onClick:function(){return function(){var t="",r=!1;if(D){var c=!1,i={id:e.location.defaultData.id};z!==e.location.defaultData.name_rus&&(i.name_rus=z,c=!0),T!==e.location.defaultData.name_eng&&(i.name_eng=T,c=!0),V!==e.location.defaultData.img_url&&(i.img_url=V,c=!0),Z!==e.location.defaultData.color&&(i.color=Z,c=!0),c?S.a.post("/actions/users/updatelocation",i).then((function(e){o({type:L.d,snackbar:{open:!0,variant:"success",message:a.currLang.texts.success}}),0===B.length?n.push("/dreammap"):n.push(B)})).catch((function(e){o({type:L.d,snackbar:{open:!0,variant:"error",message:a.currLang.errors.CantUpdateLocation}})})):o({type:L.d,snackbar:{open:!0,variant:"error",message:a.currLang.errors.NoChanges}})}else if(0===Z.length&&(t=a.currLang.errors.ColorNotChange,r=!0),0===V.length&&(t=a.currLang.errors.IconNotChange,r=!0),0===z.length&&(t=a.currLang.errors.EmptyName,r=!0),0===T.length&&(t=a.currLang.errors.EmptyName,r=!0),r)o({type:L.d,snackbar:{open:!0,variant:"error",message:t}});else{var l={name_rus:z,name_eng:T,img_url:V,color:Z};S.a.post("/actions/users/createlocation",l).then((function(e){o({type:L.d,snackbar:{open:!0,variant:"success",message:a.currLang.texts.success}}),0===B.length?n.push("/dreammap"):n.push(B)})).catch((function(e){o({type:L.d,snackbar:{open:!0,variant:"error",message:a.currLang.errors.CantAddLocation}})}))}}()}},D?a.currLang.buttons.Save:a.currLang.buttons.add)))))))}C.propTypes={setSnackbar:i.a.func.isRequired,themeMode:i.a.object.isRequired,lang:i.a.object.isRequired,palette:i.a.object.isRequired};a.default=Object(c.b)((function(e){return{themeMode:e.themeMode,palette:e.themeMode.palette,lang:e.lang}}),(function(e){return{setSnackbar:function(a){return e(Object(I.b)(a))}}}))(C)}}]);
//# sourceMappingURL=15.index-bundle.js.map