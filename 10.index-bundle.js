(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{393:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){return!!Object.keys(t).every((function(t){return e.hasOwnProperty(t)}))&&Object.keys(e).every((function(a){return"object"==n(e[a])?r(e[a],t[a]):e[a]===t[a]}))}a.d(t,"a",(function(){return r}))},845:function(e,t,a){"use strict";var n=a(1),r=a(2),o=a(0),i=a.n(o),c=(a(3),a(4)),l=a(27),s=a(5),u=a(85),m=a(10),d=a(6),f=a(345),p=Object(f.a)(i.a.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");function g(e,t){if(null==e)return e;var a,n=Math.round(e/t)*t;return Number(n.toFixed((a=t.toString().split(".")[1])?a.length:0))}function v(e){e.value;var t=Object(r.a)(e,["value"]);return i.a.createElement("span",t)}var h=i.a.createElement(p,{fontSize:"inherit"});function b(e){return"".concat(e," Star").concat(1!==e?"s":"")}var y=i.a.forwardRef((function(e,t){var a=e.classes,o=e.className,s=e.disabled,f=void 0!==s&&s,p=e.emptyIcon,y=e.emptyLabelText,E=void 0===y?"Empty":y,O=e.getLabelText,S=void 0===O?b:O,x=e.icon,w=void 0===x?h:x,j=e.IconContainerComponent,N=void 0===j?v:j,D=e.max,L=void 0===D?5:D,k=e.name,C=e.onChange,I=e.onChangeActive,M=e.onMouseLeave,T=e.onMouseMove,R=e.precision,_=void 0===R?1:R,z=e.readOnly,F=void 0!==z&&z,A=e.size,P=void 0===A?"medium":A,B=e.value,W=void 0===B?null:B,G=Object(r.a)(e,["classes","className","disabled","emptyIcon","emptyLabelText","getLabelText","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"]),q=i.a.useState(),J=q[0],V=q[1],H=k||J;i.a.useEffect((function(){V("mui-rating-".concat(Math.round(1e5*Math.random())))}),[]);var U=g(W,_),X=Object(l.a)(),$=i.a.useState({hover:-1,focus:-1}),K=$[0],Z=K.hover,Y=K.focus,Q=$[1],ee=U;-1!==Z&&(ee=Z),-1!==Y&&(ee=Y);var te=Object(u.a)(),ae=te.isFocusVisible,ne=te.onBlurVisible,re=te.ref,oe=i.a.useState(!1),ie=oe[0],ce=oe[1],le=i.a.useRef(),se=Object(m.a)(re,le),ue=Object(m.a)(se,t),me=function(e){C&&C(e,parseFloat(e.target.value))},de=function(e){0===e.clientX&&0===e.clientY||(Q({hover:-1,focus:-1}),C&&parseFloat(e.target.value)===U&&C(e,null))},fe=function(e){ae(e)&&ce(!0);var t=parseFloat(e.target.value);Q((function(e){return{hover:e.hover,focus:t}})),I&&Y!==t&&I(e,t)},pe=function(e){if(-1===Z){!1!==ie&&(ce(!1),ne());Q((function(e){return{hover:e.hover,focus:-1}})),I&&-1!==Y&&I(e,-1)}},ge=function(e,t){var r="".concat(H,"-").concat(String(e.value).replace(".","-")),o=i.a.createElement(N,Object(n.a)({},e,{className:Object(c.a)(a.icon,t.filled?a.iconFilled:a.iconEmpty,t.hover&&a.iconHover,t.focus&&a.iconFocus,t.active&&a.iconActive)}),p&&!t.filled?p:w);return F||f?i.a.createElement(i.a.Fragment,{key:e.value},o):i.a.createElement(i.a.Fragment,{key:e.value},i.a.createElement("label",{className:a.label,htmlFor:r},o,i.a.createElement("span",{className:a.visuallyhidden},S(e.value))),i.a.createElement("input",{onFocus:fe,onBlur:pe,onChange:me,onClick:de,value:e.value,id:r,type:"radio",name:H,checked:t.checked,className:a.visuallyhidden}))};return i.a.createElement("span",Object(n.a)({ref:ue,onMouseMove:function(e){T&&T(e);var t,n=le.current,r=n.getBoundingClientRect(),o=r.right,i=r.left,c=n.querySelector(".".concat(a.label)).getBoundingClientRect().width;t="rtl"===X.direction?(o-e.clientX)/(c*L):(e.clientX-i)/(c*L);var l=g(L*t+_/2,_);l=function(e,t,a){return e<t?t:e>a?a:e}(l,_,L),Q((function(e){return e.hover===l&&e.focus===l?e:{hover:l,focus:l}})),ce(!1),I&&Z!==l&&I(e,l)},onMouseLeave:function(e){M&&M(e);Q({hover:-1,focus:-1}),I&&-1!==Z&&I(e,-1)},className:Object(c.a)(a.root,o,"medium"!==P&&a["size".concat(Object(d.a)(P))],f&&a.disabled,ie&&a.focusVisible,F&&a.readOnly),role:F?"img":null,"aria-label":F?S(ee):null},G),!F&&!f&&null==U&&i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{value:"",id:"".concat(H,"-empty"),type:"radio",name:H,defaultChecked:!0,className:a.visuallyhidden}),i.a.createElement("label",{className:a.pristine,htmlFor:"".concat(H,"-empty")},i.a.createElement("span",{className:a.visuallyhidden},E))),Array.from(new Array(L)).map((function(e,t){var n=t+1;if(_<1){var r=Array.from(new Array(1/_));return i.a.createElement("span",{key:n,className:Object(c.a)(a.decimal,n===Math.ceil(ee)&&(-1!==Z||-1!==Y)&&a.iconActive)},r.map((function(e,t){var a=g(n-1+(t+1)*_,_);return ge({value:a,style:r.length-1===t?{}:{width:a===ee?"".concat((t+1)*_*100,"%"):"0%",overflow:"hidden",zIndex:1,position:"absolute"}},{filled:a<=ee,hover:a<=Z,focus:a<=Y,checked:a===U})})))}return ge({value:n},{active:n===ee&&(-1!==Z||-1!==Y),filled:n<=ee,hover:n<=Z,focus:n<=Y,checked:n===U})})))}));t.a=Object(s.a)((function(e){return{root:{display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#ffb400",cursor:"pointer",WebkitTapHighlightColor:"transparent","&$disabled":{opacity:.5,pointerEvents:"none"},"&$focusVisible $iconActive":{outline:"1px solid #999"}},sizeSmall:{fontSize:e.typography.pxToRem(18)},sizeLarge:{fontSize:e.typography.pxToRem(30)},readOnly:{pointerEvents:"none"},disabled:{},focusVisible:{},visuallyhidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,color:"#000",overflow:"hidden",padding:0,position:"absolute",top:20,width:1},pristine:{"input:focus ~ &":{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"}},label:{cursor:"inherit"},icon:{display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none"},iconEmpty:{color:e.palette.action.disabled},iconFilled:{},iconHover:{},iconFocus:{},iconActive:{transform:"scale(1.2)"},decimal:{position:"relative"}}}),{name:"MuiRating"})(y)},849:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),i=a(3),c=a.n(i),l=a(537),s=a(346),u=a(245),m=a(241),d=a(248),f=a(249),p=a(243),g=a(539),v=a(246),h=a(125),b=a(870),y=a(242),E=a(866),O=a(380),S=a.n(O),x=a(332),w=a(845),j=a(89),N=a(240),D=a(289),L=a(860),k=a(871),C=a(399),I=a.n(C),M=a(536),T=a.n(M),R=a(12),_=a(7),z=a(50),F=a(70),A=a(393);function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function W(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(Object(a),!0).forEach((function(t){G(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function G(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var J=[],V=[];function H(e){var t=Object(R.d)(),a=e.lang,n=e.themeMode,o=e.history,i=e.auth,c=e.setSnackbar,O=Object(j.a)(n);Object.assign(O,{overrides:{MUIRichTextEditor:{root:{border:"1px solid gray",borderRadius:"4px",height:"100%"},container:{height:"100%",margin:"0 !Important"},toolbar:{display:"flex",alignItems:"center",justifyContent:"center",height:"20%",minHeight:"48px",margin:"0 !Important",borderBottom:"1px solid gray",borderRadius:"4px"},placeHolder:{height:"72%"},editor:{height:"72%",width:"100%",position:"relative",overflow:"hidden"},editorContainer:{margin:"0 !Important",padding:"0px 14px",borderRadius:"4px",position:"relative",boxSizing:"border-box",maxHeight:"100%",overflow:"auto"}}}});var C=q(r.a.useState(!1),2),M=C[0],z=C[1],B=q(r.a.useState(!1),2),G=B[0],H=B[1],U=q(r.a.useState(""),2),X=U[0],$=U[1],K=q(r.a.useState(new Date),2),Z=K[0],Y=K[1],Q=q(r.a.useState(),2),ee=Q[0],te=Q[1],ae=q(r.a.useState(),2),ne=ae[0],re=ae[1],oe=q(r.a.useState([]),2),ie=oe[0],ce=oe[1],le=q(r.a.useState([]),2),se=le[0],ue=le[1],me=q(r.a.useState(1),2),de=me[0],fe=me[1],pe=q(r.a.useState({}),2),ge=pe[0],ve=pe[1],he=q(r.a.useState({}),2),be=he[0],ye=he[1],Ee=function(e){Oe(),Y(e)},Oe=function(){var e={};window.localStorage.getItem("postСDreamData")&&(e=JSON.parse(window.localStorage.getItem("postСDreamData"))),e.selectedDate=Z,0!==X.length&&(e.titleText=X),void 0!==ne&&0!==ne.length&&(e.contentText=ne),window.localStorage.setItem("postСDreamData",JSON.stringify(e))};return r.a.useEffect((function(){if(window.localStorage.getItem("postСDreamData")&&function(){var e=JSON.parse(window.localStorage.getItem("postСDreamData")),t=e.selectedDate,a=e.titleText,n=e.contentText;void 0!==t&&Y(new Date(t)),void 0!==a&&$(a),void 0!==n&&(te(n),re(n))}(),J=[],V=[],F.a.get("/gettags").then((function(e){ve(e.data)})).catch((function(e){console.log(e)})),F.a.get("/gettechnics").then((function(e){ye(e.data)})).catch((function(e){console.log(e)})),void 0!==e.location.defaultData){z(!0),J=[],V=[];var t=e.location.defaultData,a=t.post_title,n=t.dream_date,r=t.post_content,o=t.technics,i=t.tags,c=t.rating;$(a),Y(n),te(r),re(r),"string"==typeof i[0][0]&&(i.forEach((function(e){var t={};t.id=Number(e[0]),t.name_rus=e[1],t.name_eng=e[2],t.img_url=e[3],V.push(t)})),ce(V)),"string"==typeof o[0][0]&&(o.forEach((function(e){var t={};t.id=Number(e[0]),t.name_rus=e[1],t.name_eng=e[2],J.push(t)})),ue(J)),fe(c)}}),[e.location.defaultData,a.currLang]),r.a.createElement(N.a,{theme:O},r.a.createElement(m.a,null),r.a.createElement("div",{className:t.root},r.a.createElement(y.a,{className:t.mainGridContainer,container:!0,direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(y.a,{item:!0,xs:11,className:t.mainGridBodyItem},r.a.createElement(h.a,{className:t.paper},r.a.createElement(y.a,{className:"".concat(t.mainGridContainer," ").concat(t.noWrap),container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(y.a,{item:!0,xs:2,className:t.fullMinWidth},r.a.createElement(p.a,{className:t.inputDiv,required:!0,id:"outlined-required",value:X,label:a.currLang.texts.title,variant:"outlined",onChange:function(e){$(e.target.value)},onBlur:Oe})),r.a.createElement(y.a,{item:!0,xs:1,className:t.fullMinWidth},r.a.createElement(D.a,{utils:l.a,locale:(a.currLang.current,s.a)},r.a.createElement(y.a,{className:t.pickerGridContainer,container:!0,direction:"row",justify:"center",alignItems:"stretch"},r.a.createElement(y.a,{item:!0,xs:7},r.a.createElement(L.a,{className:t.pickers,id:"date-picker-dialog",label:a.currLang.texts.pickDate,format:"dd.MM.yyyy",value:Z,onChange:Ee,KeyboardButtonProps:{"aria-label":"change date"}})),r.a.createElement(y.a,{item:!0,xs:5},r.a.createElement(k.a,{className:t.pickers,id:"time-picker",label:a.currLang.texts.pickTime,value:Z,onChange:Ee,ampm:!1,KeyboardButtonProps:{"aria-label":"change time"}}))))),r.a.createElement(y.a,{item:!0,xs:4,className:t.fullMinWidth},r.a.createElement("div",{className:t.inputScrollableDiv},r.a.createElement(S.a,{value:ee,onChange:function(e){var t=e.getCurrentContent(),a=Object(x.convertToRaw)(t),n=JSON.stringify(a);ne!==n&&(Oe(),re(n))},label:a.currLang.texts.content,inlineToolbar:!1,controls:["bold","italic","underline","strikethrough","colorfill"],customControls:[{name:"colorfill",icon:r.a.createElement(I.a,null),type:"inline",inlineStyle:{backgroundColor:"yellow",color:"black"}}]}))),r.a.createElement(y.a,{item:!0,xs:2,className:t.fullMinWidth},r.a.createElement(y.a,{container:!0,className:t.mainGridContainer,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(y.a,{item:!0,xs:12,style:{position:"relative"}},be.length?r.a.createElement(E.a,{multiple:!0,className:t.inputDiv,id:"technics-outlined",size:"small",options:be,getOptionLabel:function(e){return r.a.createElement(b.a,{size:"small",className:t.chip,label:"Ru"===a.currLang.current?e.name_rus:e.name_eng})},defaultValue:J.map((function(e){return be[e.id-1]})),onChange:function(e,t){return function(e,t){ue(t)}(0,t)},filterSelectedOptions:!0,renderInput:function(e){return r.a.createElement(p.a,P({},e,{label:a.currLang.texts.technics,fullWidth:!0}))}}):r.a.createElement("div",{className:t.inputDiv},r.a.createElement(u.a,null))))),r.a.createElement(y.a,{item:!0,xs:2,className:t.fullMinWidth},r.a.createElement(y.a,{container:!0,className:t.mainGridContainer,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(y.a,{item:!0,xs:10,style:{position:"relative"}},ge.length?r.a.createElement(E.a,{multiple:!0,className:t.inputDiv,id:"tags-outlined",size:"small",options:ge,getOptionLabel:function(e){return r.a.createElement(b.a,{size:"small",className:t.chip,avatar:r.a.createElement(g.a,{src:e.img_url}),label:"Ru"===a.currLang.current?e.name_rus:e.name_eng})},defaultValue:V.map((function(e){return ge[e.id-1]})),onChange:function(e,t){return function(e,t){ce(t)}(0,t)},filterSelectedOptions:!0,renderInput:function(e){return r.a.createElement(p.a,P({},e,{label:a.currLang.texts.tags,fullWidth:!0}))}}):r.a.createElement("div",{className:t.inputDiv},r.a.createElement(u.a,null))),r.a.createElement(y.a,{item:!0,xs:2},r.a.createElement(f.a,{onClick:function(){Oe(),o.push({pathname:"/addlocation",defaultData:{prevUrl:"/addcdream"}})}},r.a.createElement(T.a,{fontSize:"small"}))))),r.a.createElement(y.a,{item:!0,xs:1,className:t.fullMinWidth},r.a.createElement("div",{className:t.div85width},r.a.createElement(y.a,{className:t.ratingGridContainer,container:!0,direction:"row",justify:"center",alignItems:"stretch"},r.a.createElement(y.a,{item:!0,xs:6},r.a.createElement(d.a,{variant:"body2"},a.currLang.texts.rating,":")),r.a.createElement(y.a,{item:!0,xs:6},r.a.createElement(w.a,{name:"simple-controlled",value:de,onChange:function(e,t){fe(t)}})))))))),r.a.createElement(y.a,{item:!0,xs:1,className:t.mainGridBodyItem},G?r.a.createElement(u.a,null):r.a.createElement(y.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center"},r.a.createElement(y.a,{item:!0},r.a.createElement(v.a,{variant:"contained",color:"secondary",className:t.actionButton,onClick:function(){window.localStorage.removeItem("postСDreamData"),M?o.push("/dreams"):o.push("/luciddreams")}},a.currLang.buttons.close)),r.a.createElement(y.a,{item:!0},r.a.createElement(v.a,{variant:"contained",color:"primary",className:t.actionButton,onClick:function(){return function(){H(!0);var t=!1,n="";if(void 0!==X?0===X.length&&(n=a.currLang.errors.EmptyTitle,t=!0):(n=a.currLang.errors.EmptyTitle,t=!0),void 0!==ne?0===JSON.parse(ne).blocks[0].text.length&&(n=a.currLang.errors.EmptyDream,t=!0):(n=a.currLang.errors.EmptyDream,t=!0),t)c({type:_.g,snackbar:{open:!0,variant:"error",message:n}}),H(!1);else if(M){var r=!1,l=!1,s=!1,u={post_id:e.location.defaultData.post_id};if(e.location.defaultData.post_title!==X&&(u.title=X,r=!0),e.location.defaultData.dream_date.getTime()!==Z.getTime()&&(u.dreamDate=Z.toLocaleString("ru-RU",{timeZone:"Europe/London"}),r=!0),e.location.defaultData.post_content!==ne&&(u.content=ne,r=!0),e.location.defaultData.rating!==de&&(u.rating=de,r=!0),J.length===se.length&&Object(A.a)(J,se)||(r=!0,s=!0),V.length===ie.length&&Object(A.a)(V,ie)||(r=!0,l=!0),r){if(l){var m=V.filter((function(e){return!ie.some((function(t){return t.id===e.id}))})),d=ie.filter((function(e){return!V.some((function(t){return t.id===e.id}))}));if(d.length>0){var f={};d.map((function(e,t){return f[t]=e})),u.tags=W({},u.tags,{add:f})}if(m.length>0){var p={};m.map((function(e,t){return p[t]=e})),u.tags=W({},u.tags,{remove:p})}}if(s){var g=J.filter((function(e){return!se.some((function(t){return t.id===e.id}))})),v=se.filter((function(e){return!J.some((function(t){return t.id===e.id}))}));if(v.length>0){var h={};v.map((function(e,t){return h[t]=e})),u.technics=W({},u.technics,{add:h})}if(g.length>0){var b={};g.map((function(e,t){return b[t]=e})),u.technics=W({},u.technics,{remove:b})}}F.a.post("/actions/users/updatepost",u).then((function(e){H(!1),c({type:_.g,snackbar:{open:!0,variant:"success",message:a.currLang.texts.success}}),window.localStorage.removeItem("postСDreamData"),o.push("/dreams")})).catch((function(e){console.log(e),H(!1)}))}else c({type:_.g,snackbar:{open:!0,variant:"error",message:a.currLang.errors.NoChanges}}),H(!1)}else{var y={title:X,dreamDate:Z.toLocaleString("ru-RU",{timeZone:"Europe/London"}),content:ne,create_user:i.user.id,rating:de,post_type:1,nickname:i.user.nickname,tags:ie,technics:se};F.a.post("/actions/users/createpost",y).then((function(e){H(!1),c({type:_.g,snackbar:{open:!0,variant:"success",message:a.currLang.texts.success}}),window.localStorage.removeItem("postСDreamData"),o.push("/luciddreams")})).catch((function(e){H(!1)}))}}()}},M?a.currLang.buttons.Save:a.currLang.buttons.add)))))))}H.propTypes={setSnackbar:c.a.func.isRequired,themeMode:c.a.object.isRequired,lang:c.a.object.isRequired,auth:c.a.object.isRequired};t.default=Object(o.b)((function(e){return{themeMode:e.themeMode,lang:e.lang,auth:e.auth}}),(function(e){return{setSnackbar:function(t){return e(Object(z.b)(t))}}}))(H)}}]);
//# sourceMappingURL=10.index-bundle.js.map