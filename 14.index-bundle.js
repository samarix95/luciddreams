(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{426:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){return!!Object.keys(t).every((function(t){return e.hasOwnProperty(t)}))&&Object.keys(e).every((function(a){return"object"==n(e[a])?r(e[a],t[a]):e[a]===t[a]}))}a.d(t,"a",(function(){return r}))},886:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),i=a(24),c=a(4),l=a.n(c),s=a(562),u=a(372),m=a(265),d=a(261),g=a(269),p=a(263),f=a(373),h=a(266),b=a(142),y=a(897),v=a(262),E=a(892),j=a(414),w=a.n(j),O=a(357),D=a(96),S=a(260),x=a(312),k=a(885),N=a(898),L=a(432),I=a.n(L),C=a(371),P=a.n(C),T=a(13),_=a(8),R=a(2),M=a(46),B=a(89),q=a(426);function J(){return(J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function W(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(Object(a),!0).forEach((function(t){z(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function z(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var G=[];function H(e){var t=Object(T.d)(),a=e.lang,n=e.themeMode,o=e.history,i=e.auth,c=e.setSnackbar,l=e.tags,j=e.tagsError,L=e.tagsPending,C=e.fetchTags;j&&(console.log("AddCDream"),console.log(j));var _=Object(D.a)(n);Object.assign(_,{overrides:{MUIRichTextEditor:{root:{border:"1px solid gray",borderRadius:"4px",height:"100%"},container:{height:"100%",margin:"0 !Important"},toolbar:{display:"flex",alignItems:"center",justifyContent:"center",height:"20%",minHeight:"48px",margin:"0 !Important",borderBottom:"1px solid gray",borderRadius:"4px"},placeHolder:{height:"72%"},editor:{height:"72%",width:"100%",position:"relative",overflow:"hidden"},editorContainer:{margin:"0 !Important",padding:"0px 14px",borderRadius:"4px",position:"relative",boxSizing:"border-box",maxHeight:"100%",overflow:"auto"}}}});var B=U(r.a.useState(!1),2),A=B[0],z=B[1],H=U(r.a.useState(!1),2),K=H[0],Z=H[1],V=U(r.a.useState(""),2),F=V[0],Q=V[1],X=U(r.a.useState(new Date),2),Y=X[0],$=X[1],ee=U(r.a.useState(),2),te=ee[0],ae=ee[1],ne=U(r.a.useState(),2),re=ne[0],oe=ne[1],ie=U(r.a.useState([]),2),ce=ie[0],le=ie[1],se=function(e){ue(),$(e)},ue=function(){var e={};window.localStorage.getItem("postDreamData")&&(e=JSON.parse(window.localStorage.getItem("postDreamData"))),e.selectedDate=Y,0!==F.length&&(e.titleText=F),void 0!==re&&0!==re.length&&(e.contentText=re),window.localStorage.setItem("postDreamData",JSON.stringify(e))};return r.a.useEffect((function(){if(window.localStorage.getItem("postDreamData")&&function(){var e=JSON.parse(window.localStorage.getItem("postDreamData")),t=e.selectedDate,a=e.titleText,n=e.contentText;void 0!==t&&$(new Date(t)),void 0!==a&&Q(a),void 0!==n&&(ae(n),oe(n))}(),G=[],C(),void 0!==e.location.defaultData){z(!0);var t=e.location.defaultData,a=t.post_title,n=t.dream_date,r=t.post_content,o=t.tags;Q(a),$(n),ae(r),oe(r),"string"==typeof o[0][0]&&(o.forEach((function(e){var t={};t.id=Number(e[0]),t.name_rus=e[1],t.name_eng=e[2],t.img_url=e[3],G.push(t)})),le(G))}}),[e.location.defaultData,a.currLang]),r.a.createElement(S.a,{theme:_},r.a.createElement(d.a,null),r.a.createElement("div",{className:t.root},r.a.createElement(v.a,{container:!0,className:"".concat(t.height12),direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(v.a,{item:!0,className:"".concat(t.mainGridBodyItem," ").concat(t.height11)},r.a.createElement(b.a,{className:t.paper},r.a.createElement(v.a,{container:!0,className:"".concat(t.height12),direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(v.a,{item:!0,className:"".concat(t.fullMinWidth," ").concat(t.height2)},r.a.createElement(p.a,{className:t.inputDiv,required:!0,id:"outlined-required",value:F,label:a.currLang.texts.title,variant:"outlined",onChange:function(e){Q(e.target.value)},onBlur:ue})),r.a.createElement(v.a,{item:!0,className:"".concat(t.fullMinWidth," ").concat(t.height2)},r.a.createElement(x.a,{utils:s.a,locale:(a.currLang.current,u.a)},r.a.createElement(v.a,{container:!0,className:t.pickerGridContainer,direction:"row",justify:"center",alignItems:"stretch"},r.a.createElement(v.a,{item:!0,xs:7},r.a.createElement(k.a,{className:t.pickers,id:"date-picker-dialog",label:a.currLang.texts.pickDate,format:"dd.MM.yyyy",value:Y,onChange:se,KeyboardButtonProps:{"aria-label":"change date"}})),r.a.createElement(v.a,{item:!0,xs:5},r.a.createElement(N.a,{className:t.pickers,id:"time-picker",label:a.currLang.texts.pickTime,value:Y,onChange:se,ampm:!1,KeyboardButtonProps:{"aria-label":"change time"}}))))),r.a.createElement(v.a,{item:!0,className:"".concat(t.fullMinWidth," ").concat(t.height5)},r.a.createElement("div",{className:t.inputScrollableDiv},r.a.createElement(w.a,{value:te,onChange:function(e){var t=e.getCurrentContent(),a=Object(O.convertToRaw)(t),n=JSON.stringify(a);re!==n&&(ue(),oe(n))},label:a.currLang.texts.content,inlineToolbar:!1,controls:["bold","italic","underline","strikethrough","colorfill"],customControls:[{name:"colorfill",icon:r.a.createElement(I.a,null),type:"inline",inlineStyle:{backgroundColor:"yellow",color:"black"}}]}))),r.a.createElement(v.a,{item:!0,className:"".concat(t.fullMinWidth," ").concat(t.height3)},r.a.createElement(v.a,{container:!0,className:"".concat(t.height12),direction:"row",justify:"center",alignItems:"stretch"},r.a.createElement(v.a,{item:!0,xs:10,style:{position:"relative"}},L?r.a.createElement("div",{className:t.inputDiv},r.a.createElement(m.a,null)):r.a.createElement(E.a,{multiple:!0,className:t.inputDiv,id:"tags-outlined",size:"small",options:l,getOptionLabel:function(e){return r.a.createElement(y.a,{size:"small",className:t.chip,avatar:r.a.createElement(f.a,{src:e.img_url}),label:"Ru"===a.currLang.current?e.name_rus:e.name_eng})},defaultValue:G.map((function(e){return l[e.id-1]})),onChange:function(e,t){return function(e,t){le(t)}(0,t)},filterSelectedOptions:!0,renderInput:function(e){return r.a.createElement(p.a,J({},e,{label:a.currLang.texts.tags,fullWidth:!0}))}})),r.a.createElement(v.a,{item:!0,xs:2,style:{position:"relative"}},r.a.createElement(g.a,{onClick:function(){ue(),o.push({pathname:"/addlocation",defaultData:{prevUrl:"/addregulardream"}})},className:"".concat(t.centerButton)},r.a.createElement(P.a,{fontSize:"small"})))))))),r.a.createElement(v.a,{item:!0,className:"".concat(t.mainGridBodyItem," ").concat(t.height1)},K?r.a.createElement(m.a,null):r.a.createElement(v.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center"},r.a.createElement(v.a,{item:!0},r.a.createElement(h.a,{variant:"contained",color:"secondary",className:t.actionButton,onClick:function(){A?o.push("/dreams"):o.push("/luciddreams"),window.localStorage.removeItem("postDreamData")}},a.currLang.buttons.Back)),r.a.createElement(v.a,{item:!0},r.a.createElement(h.a,{variant:"contained",color:"primary",className:t.actionButton,onClick:function(){return function(){Z(!0);var t=!1,n="";if(void 0!==F?0===F.length&&(n=a.currLang.errors.EmptyTitle,t=!0):(n=a.currLang.errors.EmptyTitle,t=!0),void 0!==re?0===JSON.parse(re).blocks[0].text.length&&(n=a.currLang.errors.EmptyDream,t=!0):(n=a.currLang.errors.EmptyDream,t=!0),t)c({type:R.E,snackbar:{open:!0,variant:"error",message:n}}),Z(!1);else if(A){var r=!1,l=!1,s={post_id:e.location.defaultData.post_id};if(e.location.defaultData.post_title!==F&&(s.title=F,r=!0),e.location.defaultData.dream_date.getTime()!==Y.getTime()&&(s.dreamDate=Y.toLocaleString("ru-RU",{timeZone:"Europe/London"}),r=!0),e.location.defaultData.post_content!==re&&(s.content=re,r=!0),G.length===ce.length&&Object(q.a)(G,ce)||(r=!0,l=!0),r){if(l){var u=G.filter((function(e){return!ce.some((function(t){return t.id===e.id}))})),m=ce.filter((function(e){return!G.some((function(t){return t.id===e.id}))}));if(m.length>0){var d={};m.map((function(e,t){return d[t]=e})),s.tags=W({},s.tags,{add:d})}if(u.length>0){var g={};u.map((function(e,t){return g[t]=e})),s.tags=W({},s.tags,{remove:g})}}M.j.post("/actions/users/updatepost",s).then((function(e){Z(!1),c({type:R.E,snackbar:{open:!0,variant:"success",message:a.currLang.texts.success}}),window.localStorage.removeItem("postDreamData"),o.push("/dreams")})).catch((function(e){console.log(e),Z(!1)}))}else c({type:R.E,snackbar:{open:!0,variant:"error",message:a.currLang.errors.NoChanges}}),Z(!1)}else{var p={title:F,dreamDate:Y.toLocaleString("ru-RU",{timeZone:"Europe/London"}),content:re,create_user:i.user.id,post_type:0,nickname:i.user.nickname,tags:ce};M.j.post("/actions/users/createpost",p).then((function(e){Z(!1),c({type:R.E,snackbar:{open:!0,variant:"success",message:a.currLang.texts.success}}),window.localStorage.removeItem("postDreamData"),o.push("/luciddreams")})).catch((function(e){Z(!1)}))}}()}},A?a.currLang.buttons.Save:a.currLang.buttons.add)))))))}H.propTypes={setSnackbar:l.a.func.isRequired,themeMode:l.a.object.isRequired,lang:l.a.object.isRequired,auth:l.a.object.isRequired,tagsError:l.a.object.isRequired,tags:l.a.object.isRequired,tagsPending:l.a.object.isRequired};t.default=Object(o.b)((function(e){return{themeMode:e.themeMode,lang:e.lang,auth:e.auth,tagsError:Object(B.b)(e),tags:Object(B.a)(e),tagsPending:Object(B.c)(e)}}),(function(e){return Object(i.bindActionCreators)({setSnackbar:function(t){return e(Object(_.C)(t))},fetchTags:M.d},e)}))(H)}}]);
//# sourceMappingURL=14.index-bundle.js.map