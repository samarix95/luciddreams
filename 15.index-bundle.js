(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{882:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(22),i=t(4),o=t.n(i),l=t(577),s=t(272),u=t(263),m=t(158),d=t(217),g=t(265),h=t(517),p=t(268),f=t(380),v=t(226),y=t(145),E=t(264),b=t(99),N=t(262),I=t(7),L=t(2),S=t(40),k=t(39);function j(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],n=!0,r=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(t.push(i.value),!a||t.length!==a);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}return t}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function C(e){var a=e.lang,t=e.themeMode,n=e.history,c=e.palette,i=e.setSnackbar,o=Object(k.b)(),I=Object(b.a)(t),C=j(r.a.useState(!1),2),D=C[0],O=C[1],_=j(r.a.useState(""),2),w=_[0],B=_[1],x=j(r.a.useState(!1),2),M=x[0],G=x[1],q=j(r.a.useState([]),2),A=q[0],R=q[1],P=j(r.a.useState(""),2),U=P[0],W=P[1],H=j(r.a.useState(""),2),J=H[0],T=H[1],F=j(r.a.useState(""),2),z=F[0],K=F[1],Q=j(r.a.useState(""),2),V=Q[0],X=Q[1],Y=j(r.a.useState(""),2),Z=Y[0],$=Y[1];return r.a.useEffect((function(){if(void 0!==e.location.defaultData){if("number"==typeof e.location.defaultData.id){O(!0);var a=e.location.defaultData,t=a.name_rus,n=a.name_eng,r=a.img_url,c=a.color,i=a.prevUrl;K(t),T(n),X(r),$(c),B(i),G(!0),function e(a,t){S.l.post("/actions/users/geticons",a).then((function(n){if(0===n.data.length)e(a,t);else{var r=[];r.push(t);var c=r.concat(n.data);R(c),G(!1)}}))}({name:n},r)}else{var o=e.location.defaultData.prevUrl;B(o)}}}),[e.location.defaultData]),r.a.createElement(N.a,{theme:I},r.a.createElement(u.a,null),r.a.createElement("div",{className:o.root},r.a.createElement(E.a,{container:!0,className:"".concat(o.height12),direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(E.a,{item:!0,className:"".concat(o.mainGridBodyItem," ").concat(o.height11)},r.a.createElement(y.a,{className:o.paper},r.a.createElement(E.a,{className:"".concat(o.height12),container:!0,direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(E.a,{item:!0,className:"".concat(o.mainGridBodyItem," ").concat(o.height5)},r.a.createElement(E.a,{container:!0,className:"".concat(o.height6),direction:"column",justify:"center",alignItems:"center"},r.a.createElement(E.a,{item:!0,className:o.fullMinWidth},r.a.createElement(g.a,{className:o.inputDiv,disabled:!!M,required:!0,id:"input-ru",value:z,label:a.currLang.texts.Name+" Ru",variant:"outlined",onChange:function(e){K(e.target.value)}}))),r.a.createElement(E.a,{container:!0,className:"".concat(o.height6),direction:"column",justify:"center",alignItems:"center"},r.a.createElement(E.a,{item:!0,className:o.fullMinWidth},r.a.createElement(g.a,{className:o.inputDiv,disabled:!!M,required:!0,id:"input-en",value:J,label:a.currLang.texts.Name+" En",variant:"outlined",onChange:function(e){var a=e.target.value,t=/[а-яА-ЯёЁ]/g;-1!==a.search(t)&&(a=a.replace(t,"")),T(a)}})))),r.a.createElement(E.a,{item:!0,className:"".concat(o.mainGridBodyItem," ").concat(o.height3)},r.a.createElement(E.a,{className:"".concat(o.height12),container:!0,direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(E.a,{item:!0,className:"".concat(o.mainGridBodyItem," ").concat(o.height6)},r.a.createElement(g.a,{className:o.inputDiv,disabled:!!M,value:U,id:"input-search",label:a.currLang.texts.FindIcon,variant:"outlined",onChange:function(e){var a=e.target.value,t=/[а-яА-ЯёЁ]/g;-1!==a.search(t)&&(a=a.replace(t,"")),W(a)},onBlur:function e(){if(0!==U.length){G(!0);var a={name:U.replace(/ /g,"%20")};S.l.post("/actions/users/geticons",a).then((function(a){0===a.data.length?e():(R(a.data),G(!1))}))}}})),r.a.createElement(E.a,{item:!0,className:"".concat(o.mainGridBodyItem," ").concat(o.height6)},r.a.createElement("div",{className:o.formControl},M?r.a.createElement(s.a,null):r.a.createElement(m.a,{disabled:0===A.length},r.a.createElement(d.a,{id:"select-icon"},a.currLang.texts.ChangeIcon),r.a.createElement(v.a,{value:V,style:{minWidth:100},labelId:"select-icon",onChange:function(e){X(e.target.value)},MenuProps:{PaperProps:{style:{maxHeight:224,width:"auto"}}}},A.map((function(e,a){return r.a.createElement(h.a,{key:a,value:e},r.a.createElement(f.a,{className:o.smallAvatar,src:e,style:"dark"===c.type?{filter:"invert(1)"}:{}}))})))))))),r.a.createElement(E.a,{item:!0,className:"".concat(o.mainGridBodyItem," ").concat(o.height4)},r.a.createElement(l.SliderPicker,{className:o.inputDiv,color:Z,onChangeComplete:function(e,a){$(e.hex)}}))))),r.a.createElement(E.a,{item:!0,className:"".concat(o.mainGridBodyItem," ").concat(o.height1)},r.a.createElement(E.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center"},r.a.createElement(E.a,{item:!0},r.a.createElement(p.a,{className:o.actionButton,variant:"contained",color:"secondary",onClick:function(){0===w.length?n.push("/dreammap"):n.push(w)}},a.currLang.buttons.Back)),r.a.createElement(E.a,{item:!0},r.a.createElement(p.a,{variant:"contained",color:"primary",className:o.actionButton,onClick:function(){return function(){var t="",r=!1;if(D){var c=!1,o={id:e.location.defaultData.id};z!==e.location.defaultData.name_rus&&(o.name_rus=z,c=!0),J!==e.location.defaultData.name_eng&&(o.name_eng=J,c=!0),V!==e.location.defaultData.img_url&&(o.img_url=V,c=!0),Z!==e.location.defaultData.color&&(o.color=Z,c=!0),c?S.l.post("/actions/users/updatelocation",o).then((function(e){i({type:L.O,snackbar:{open:!0,variant:"success",message:a.currLang.texts.success}}),0===w.length?n.push("/dreammap"):n.push(w)})).catch((function(e){i({type:L.O,snackbar:{open:!0,variant:"error",message:a.currLang.errors.CantUpdateLocation}})})):i({type:L.O,snackbar:{open:!0,variant:"error",message:a.currLang.errors.NO_CHANGES}})}else if(0===Z.length&&(t=a.currLang.errors.ColorNotChange,r=!0),0===V.length&&(t=a.currLang.errors.IconNotChange,r=!0),0===z.length&&(t=a.currLang.errors.EmptyName,r=!0),0===J.length&&(t=a.currLang.errors.EmptyName,r=!0),r)i({type:L.O,snackbar:{open:!0,variant:"error",message:t}});else{var l={name_rus:z,name_eng:J,img_url:V,color:Z};S.l.post("/actions/users/createlocation",l).then((function(e){i({type:L.O,snackbar:{open:!0,variant:"success",message:a.currLang.texts.success}}),0===w.length?n.push("/dreammap"):n.push(w)})).catch((function(e){i({type:L.O,snackbar:{open:!0,variant:"error",message:a.currLang.errors.CantAddLocation}})}))}}()}},D?a.currLang.buttons.Save:a.currLang.buttons.add)))))))}C.propTypes={setSnackbar:o.a.func.isRequired,themeMode:o.a.object.isRequired,lang:o.a.object.isRequired,palette:o.a.object.isRequired};a.default=Object(c.b)((function(e){return{themeMode:e.themeMode,palette:e.themeMode.palette,lang:e.lang}}),(function(e){return{setSnackbar:function(a){return e(Object(I.M)(a))}}}))(C)}}]);
//# sourceMappingURL=15.index-bundle.js.map