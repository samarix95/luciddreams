(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{395:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){return!!Object.keys(t).every((function(t){return e.hasOwnProperty(t)}))&&Object.keys(e).every((function(a){return"object"==n(e[a])?r(e[a],t[a]):e[a]===t[a]}))}a.d(t,"a",(function(){return r}))},863:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),i=a(3),c=a.n(i),l=a(539),s=a(348),u=a(247),m=a(243),d=a(251),p=a(245),g=a(541),f=a(248),h=a(126),b=a(872),y=a(244),v=a(868),E=a(382),w=a.n(E),S=a(334),D=a(89),O=a(242),j=a(291),x=a(862),N=a(873),k=a(401),L=a.n(k),I=a(538),C=a.n(I),_=a(12),T=a(50),P=a(7),R=a(70),M=a(395);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(Object(a),!0).forEach((function(t){W(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function W(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var U=[];function A(e){var t=Object(_.d)(),a=e.lang,n=e.themeMode,o=e.history,i=e.auth,c=e.setSnackbar,E=Object(D.a)(n);Object.assign(E,{overrides:{MUIRichTextEditor:{root:{border:"1px solid gray",borderRadius:"4px",height:"100%"},container:{height:"100%",margin:"0 !Important"},toolbar:{display:"flex",alignItems:"center",justifyContent:"center",height:"20%",minHeight:"48px",margin:"0 !Important",borderBottom:"1px solid gray",borderRadius:"4px"},placeHolder:{height:"72%"},editor:{height:"72%",width:"100%",position:"relative",overflow:"hidden"},editorContainer:{margin:"0 !Important",padding:"0px 14px",borderRadius:"4px",position:"relative",boxSizing:"border-box",maxHeight:"100%",overflow:"auto"}}}});var k=z(r.a.useState(!1),2),I=k[0],T=k[1],J=z(r.a.useState(!1),2),W=J[0],A=J[1],G=z(r.a.useState(""),2),H=G[0],K=G[1],Z=z(r.a.useState(new Date),2),V=Z[0],F=Z[1],Q=z(r.a.useState(),2),X=Q[0],Y=Q[1],$=z(r.a.useState(),2),ee=$[0],te=$[1],ae=z(r.a.useState([]),2),ne=ae[0],re=ae[1],oe=z(r.a.useState({}),2),ie=oe[0],ce=oe[1],le=function(e){se(),F(e)},se=function(){var e={};window.localStorage.getItem("postDreamData")&&(e=JSON.parse(window.localStorage.getItem("postDreamData"))),e.selectedDate=V,0!==H.length&&(e.titleText=H),void 0!==ee&&0!==ee.length&&(e.contentText=ee),window.localStorage.setItem("postDreamData",JSON.stringify(e))};return r.a.useEffect((function(){if(window.localStorage.getItem("postDreamData")&&function(){var e=JSON.parse(window.localStorage.getItem("postDreamData")),t=e.selectedDate,a=e.titleText,n=e.contentText;void 0!==t&&F(new Date(t)),void 0!==a&&K(a),void 0!==n&&(Y(n),te(n))}(),U=[],R.a.get("/gettags").then((function(e){ce(e.data)})).catch((function(e){console.log(e)})),void 0!==e.location.defaultData){T(!0);var t=e.location.defaultData,a=t.post_title,n=t.dream_date,r=t.post_content,o=t.tags;K(a),F(n),Y(r),te(r),"string"==typeof o[0][0]&&(o.forEach((function(e){var t={};t.id=Number(e[0]),t.name_rus=e[1],t.name_eng=e[2],t.img_url=e[3],U.push(t)})),re(U))}}),[e.location.defaultData,a.currLang]),r.a.createElement(O.a,{theme:E},r.a.createElement(m.a,null),r.a.createElement("div",{className:t.root},r.a.createElement(y.a,{container:!0,className:"".concat(t.height12),direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(y.a,{item:!0,className:"".concat(t.mainGridBodyItem," ").concat(t.height11)},r.a.createElement(h.a,{className:t.paper},r.a.createElement(y.a,{container:!0,className:"".concat(t.height12),direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(y.a,{item:!0,className:"".concat(t.fullMinWidth," ").concat(t.height2)},r.a.createElement(p.a,{className:t.inputDiv,required:!0,id:"outlined-required",value:H,label:a.currLang.texts.title,variant:"outlined",onChange:function(e){K(e.target.value)},onBlur:se})),r.a.createElement(y.a,{item:!0,className:"".concat(t.fullMinWidth," ").concat(t.height2)},r.a.createElement(j.a,{utils:l.a,locale:(a.currLang.current,s.a)},r.a.createElement(y.a,{container:!0,className:t.pickerGridContainer,direction:"row",justify:"center",alignItems:"stretch"},r.a.createElement(y.a,{item:!0,xs:7},r.a.createElement(x.a,{className:t.pickers,id:"date-picker-dialog",label:a.currLang.texts.pickDate,format:"dd.MM.yyyy",value:V,onChange:le,KeyboardButtonProps:{"aria-label":"change date"}})),r.a.createElement(y.a,{item:!0,xs:5},r.a.createElement(N.a,{className:t.pickers,id:"time-picker",label:a.currLang.texts.pickTime,value:V,onChange:le,ampm:!1,KeyboardButtonProps:{"aria-label":"change time"}}))))),r.a.createElement(y.a,{item:!0,className:"".concat(t.fullMinWidth," ").concat(t.height5)},r.a.createElement("div",{className:t.inputScrollableDiv},r.a.createElement(w.a,{value:X,onChange:function(e){var t=e.getCurrentContent(),a=Object(S.convertToRaw)(t),n=JSON.stringify(a);ee!==n&&(se(),te(n))},label:a.currLang.texts.content,inlineToolbar:!1,controls:["bold","italic","underline","strikethrough","colorfill"],customControls:[{name:"colorfill",icon:r.a.createElement(L.a,null),type:"inline",inlineStyle:{backgroundColor:"yellow",color:"black"}}]}))),r.a.createElement(y.a,{item:!0,className:"".concat(t.fullMinWidth," ").concat(t.height3)},r.a.createElement(y.a,{container:!0,className:"".concat(t.height12),direction:"row",justify:"center",alignItems:"stretch"},r.a.createElement(y.a,{item:!0,xs:10,style:{position:"relative"}},ie.length?r.a.createElement(v.a,{multiple:!0,className:t.inputDiv,id:"tags-outlined",size:"small",options:ie,getOptionLabel:function(e){return r.a.createElement(b.a,{size:"small",className:t.chip,avatar:r.a.createElement(g.a,{src:e.img_url}),label:"Ru"===a.currLang.current?e.name_rus:e.name_eng})},defaultValue:U.map((function(e){return ie[e.id-1]})),onChange:function(e,t){return function(e,t){re(t)}(0,t)},filterSelectedOptions:!0,renderInput:function(e){return r.a.createElement(p.a,B({},e,{label:a.currLang.texts.tags,fullWidth:!0}))}}):r.a.createElement("div",{className:t.inputDiv},r.a.createElement(u.a,null))),r.a.createElement(y.a,{item:!0,xs:2,style:{position:"relative"}},r.a.createElement(d.a,{onClick:function(){se(),o.push({pathname:"/addlocation",defaultData:{prevUrl:"/addregulardream"}})},className:"".concat(t.centerButton)},r.a.createElement(C.a,{fontSize:"small"})))))))),r.a.createElement(y.a,{item:!0,className:"".concat(t.mainGridBodyItem," ").concat(t.height1)},W?r.a.createElement(u.a,null):r.a.createElement(y.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center"},r.a.createElement(y.a,{item:!0},r.a.createElement(f.a,{variant:"contained",color:"secondary",className:t.actionButton,onClick:function(){I?o.push("/dreams"):o.push("/luciddreams"),window.localStorage.removeItem("postDreamData")}},a.currLang.buttons.close)),r.a.createElement(y.a,{item:!0},r.a.createElement(f.a,{variant:"contained",color:"primary",className:t.actionButton,onClick:function(){return function(){A(!0);var t=!1,n="";if(void 0!==H?0===H.length&&(n=a.currLang.errors.EmptyTitle,t=!0):(n=a.currLang.errors.EmptyTitle,t=!0),void 0!==ee?0===JSON.parse(ee).blocks[0].text.length&&(n=a.currLang.errors.EmptyDream,t=!0):(n=a.currLang.errors.EmptyDream,t=!0),t)c({type:P.g,snackbar:{open:!0,variant:"error",message:n}}),A(!1);else if(I){var r=!1,l=!1,s={post_id:e.location.defaultData.post_id};if(e.location.defaultData.post_title!==H&&(s.title=H,r=!0),e.location.defaultData.dream_date.getTime()!==V.getTime()&&(s.dreamDate=V.toLocaleString("ru-RU",{timeZone:"Europe/London"}),r=!0),e.location.defaultData.post_content!==ee&&(s.content=ee,r=!0),U.length===ne.length&&Object(M.a)(U,ne)||(r=!0,l=!0),r){if(l){var u=U.filter((function(e){return!ne.some((function(t){return t.id===e.id}))})),m=ne.filter((function(e){return!U.some((function(t){return t.id===e.id}))}));if(m.length>0){var d={};m.map((function(e,t){return d[t]=e})),s.tags=q({},s.tags,{add:d})}if(u.length>0){var p={};u.map((function(e,t){return p[t]=e})),s.tags=q({},s.tags,{remove:p})}}R.a.post("/actions/users/updatepost",s).then((function(e){A(!1),c({type:P.g,snackbar:{open:!0,variant:"success",message:a.currLang.texts.success}}),window.localStorage.removeItem("postDreamData"),o.push("/dreams")})).catch((function(e){console.log(e),A(!1)}))}else c({type:P.g,snackbar:{open:!0,variant:"error",message:a.currLang.errors.NoChanges}}),A(!1)}else{var g={title:H,dreamDate:V.toLocaleString("ru-RU",{timeZone:"Europe/London"}),content:ee,create_user:i.user.id,post_type:0,nickname:i.user.nickname,tags:ne};R.a.post("/actions/users/createpost",g).then((function(e){A(!1),c({type:P.g,snackbar:{open:!0,variant:"success",message:a.currLang.texts.success}}),window.localStorage.removeItem("postDreamData"),o.push("/luciddreams")})).catch((function(e){A(!1)}))}}()}},I?a.currLang.buttons.Save:a.currLang.buttons.add)))))))}A.propTypes={setSnackbar:c.a.func.isRequired,themeMode:c.a.object.isRequired,lang:c.a.object.isRequired,auth:c.a.object.isRequired};t.default=Object(o.b)((function(e){return{themeMode:e.themeMode,lang:e.lang,auth:e.auth}}),(function(e){return{setSnackbar:function(t){return e(Object(T.b)(t))}}}))(A)}}]);
//# sourceMappingURL=11.index-bundle.js.map