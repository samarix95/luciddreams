(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{387:function(e,t,a){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){return!!Object.keys(t).every((function(t){return e.hasOwnProperty(t)}))&&Object.keys(e).every((function(a){return"object"==n(e[a])?r(e[a],t[a]):e[a]===t[a]}))}a.d(t,"a",(function(){return r}))},486:function(e,t,a){"use strict";var n=a(1),r=a(4),i=a(0),o=a.n(i),c=(a(3),a(5)),l=a(30),s=a(6),u=a(93),m=a(11),d=a(8),f=a(320),p=Object(f.a)(o.a.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");function g(e,t){if(null==e)return e;var a,n=Math.round(e/t)*t;return Number(n.toFixed((a=t.toString().split(".")[1])?a.length:0))}function v(e){e.value;var t=Object(r.a)(e,["value"]);return o.a.createElement("span",t)}var h=o.a.createElement(p,{fontSize:"inherit"});function b(e){return"".concat(e," Star").concat(1!==e?"s":"")}var y=o.a.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.disabled,f=void 0!==s&&s,p=e.emptyIcon,y=e.emptyLabelText,E=void 0===y?"Empty":y,O=e.getLabelText,j=void 0===O?b:O,x=e.icon,S=void 0===x?h:x,w=e.IconContainerComponent,N=void 0===w?v:w,D=e.max,C=void 0===D?5:D,k=e.name,L=e.onChange,I=e.onChangeActive,M=e.onMouseLeave,R=e.onMouseMove,T=e.precision,P=void 0===T?1:T,_=e.readOnly,z=void 0!==_&&_,A=e.size,F=void 0===A?"medium":A,q=e.value,B=void 0===q?null:q,W=Object(r.a)(e,["classes","className","disabled","emptyIcon","emptyLabelText","getLabelText","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"]),G=o.a.useState(),H=G[0],J=G[1],V=k||H;o.a.useEffect((function(){J("mui-rating-".concat(Math.round(1e5*Math.random())))}),[]);var U=g(B,P),X=Object(l.a)(),$=o.a.useState({hover:-1,focus:-1}),K=$[0],Z=K.hover,Y=K.focus,Q=$[1],ee=U;-1!==Z&&(ee=Z),-1!==Y&&(ee=Y);var te=Object(u.a)(),ae=te.isFocusVisible,ne=te.onBlurVisible,re=te.ref,ie=o.a.useState(!1),oe=ie[0],ce=ie[1],le=o.a.useRef(),se=Object(m.a)(re,le),ue=Object(m.a)(se,t),me=function(e){L&&L(e,parseFloat(e.target.value))},de=function(e){0===e.clientX&&0===e.clientY||(Q({hover:-1,focus:-1}),L&&parseFloat(e.target.value)===U&&L(e,null))},fe=function(e){ae(e)&&ce(!0);var t=parseFloat(e.target.value);Q((function(e){return{hover:e.hover,focus:t}})),I&&Y!==t&&I(e,t)},pe=function(e){if(-1===Z){!1!==oe&&(ce(!1),ne());Q((function(e){return{hover:e.hover,focus:-1}})),I&&-1!==Y&&I(e,-1)}},ge=function(e,t){var r="".concat(V,"-").concat(String(e.value).replace(".","-")),i=o.a.createElement(N,Object(n.a)({},e,{className:Object(c.a)(a.icon,t.filled?a.iconFilled:a.iconEmpty,t.hover&&a.iconHover,t.focus&&a.iconFocus,t.active&&a.iconActive)}),p&&!t.filled?p:S);return z||f?o.a.createElement(o.a.Fragment,{key:e.value},i):o.a.createElement(o.a.Fragment,{key:e.value},o.a.createElement("label",{className:a.label,htmlFor:r},i,o.a.createElement("span",{className:a.visuallyhidden},j(e.value))),o.a.createElement("input",{onFocus:fe,onBlur:pe,onChange:me,onClick:de,value:e.value,id:r,type:"radio",name:V,checked:t.checked,className:a.visuallyhidden}))};return o.a.createElement("span",Object(n.a)({ref:ue,onMouseMove:function(e){R&&R(e);var t,n=le.current,r=n.getBoundingClientRect(),i=r.right,o=r.left,c=n.querySelector(".".concat(a.label)).getBoundingClientRect().width;t="rtl"===X.direction?(i-e.clientX)/(c*C):(e.clientX-o)/(c*C);var l=g(C*t+P/2,P);l=function(e,t,a){return e<t?t:e>a?a:e}(l,P,C),Q((function(e){return e.hover===l&&e.focus===l?e:{hover:l,focus:l}})),ce(!1),I&&Z!==l&&I(e,l)},onMouseLeave:function(e){M&&M(e);Q({hover:-1,focus:-1}),I&&-1!==Z&&I(e,-1)},className:Object(c.a)(a.root,i,"medium"!==F&&a["size".concat(Object(d.a)(F))],f&&a.disabled,oe&&a.focusVisible,z&&a.readOnly),role:z?"img":null,"aria-label":z?j(ee):null},W),!z&&!f&&null==U&&o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{value:"",id:"".concat(V,"-empty"),type:"radio",name:V,defaultChecked:!0,className:a.visuallyhidden}),o.a.createElement("label",{className:a.pristine,htmlFor:"".concat(V,"-empty")},o.a.createElement("span",{className:a.visuallyhidden},E))),Array.from(new Array(C)).map((function(e,t){var n=t+1;if(P<1){var r=Array.from(new Array(1/P));return o.a.createElement("span",{key:n,className:Object(c.a)(a.decimal,n===Math.ceil(ee)&&(-1!==Z||-1!==Y)&&a.iconActive)},r.map((function(e,t){var a=g(n-1+(t+1)*P,P);return ge({value:a,style:r.length-1===t?{}:{width:a===ee?"".concat((t+1)*P*100,"%"):"0%",overflow:"hidden",zIndex:1,position:"absolute"}},{filled:a<=ee,hover:a<=Z,focus:a<=Y,checked:a===U})})))}return ge({value:n},{active:n===ee&&(-1!==Z||-1!==Y),filled:n<=ee,hover:n<=Z,focus:n<=Y,checked:n===U})})))}));t.a=Object(s.a)((function(e){return{root:{display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#ffb400",cursor:"pointer",WebkitTapHighlightColor:"transparent","&$disabled":{opacity:.5,pointerEvents:"none"},"&$focusVisible $iconActive":{outline:"1px solid #999"}},sizeSmall:{fontSize:e.typography.pxToRem(18)},sizeLarge:{fontSize:e.typography.pxToRem(30)},readOnly:{pointerEvents:"none"},disabled:{},focusVisible:{},visuallyhidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,color:"#000",overflow:"hidden",padding:0,position:"absolute",top:20,width:1},pristine:{"input:focus ~ &":{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"}},label:{cursor:"inherit"},icon:{display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none"},iconEmpty:{color:e.palette.action.disabled},iconFilled:{},iconHover:{},iconFocus:{},iconActive:{transform:"scale(1.2)"},decimal:{position:"relative"}}}),{name:"MuiRating"})(y)},636:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(23),o=a(24),c=a(3),l=a.n(c),s=a(484),u=a(355),m=a(262),d=a(258),f=a(265),p=a(266),g=a(260),v=a(356),h=a(263),b=a(140),y=a(668),E=a(259),O=a(662),j=a(337),x=a.n(j),S=a(339),w=a(486),N=a(99),D=a(257),C=a(298),k=a(652),L=a(669),I=a(352),M=a.n(I),R=a(353),T=a.n(R),P=a(19),_=a(2),z=a(7),A=a(41),F=a(90),q=a(95),B=a(387);function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function G(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function H(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?G(Object(a),!0).forEach((function(t){J(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):G(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function J(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var U=[],X=[];function $(e){var t=Object(P.c)(),a=e.lang,n=e.themeMode,i=e.history,o=e.auth,c=e.setSnackbar,l=e.tags,j=e.tagsError,I=e.tagsPending,R=e.fetchTags,z=e.technics,F=e.technicsError,q=e.technicsPending,G=e.fetchTechnics;j&&(console.log("AddCDream"),console.log(j)),F&&(console.log("AddCDream"),console.log(F));var J=Object(N.a)(n);Object.assign(J,{overrides:{MUIRichTextEditor:{root:{border:"1px solid gray",borderRadius:"4px",height:"100%"},container:{height:"100%",margin:"0 !Important"},toolbar:{display:"flex",alignItems:"center",justifyContent:"center",height:"20%",minHeight:"48px",margin:"0 !Important",borderBottom:"1px solid gray",borderRadius:"4px"},placeHolder:{height:"72%"},editor:{height:"72%",width:"100%",position:"relative",overflow:"hidden"},editorContainer:{margin:"0 !Important",padding:"0px 14px",borderRadius:"4px",position:"relative",boxSizing:"border-box",maxHeight:"100%",overflow:"auto"}}}});var $=V(r.a.useState(!1),2),K=$[0],Z=$[1],Y=V(r.a.useState(!1),2),Q=Y[0],ee=Y[1],te=V(r.a.useState(""),2),ae=te[0],ne=te[1],re=V(r.a.useState(new Date),2),ie=re[0],oe=re[1],ce=V(r.a.useState(),2),le=ce[0],se=ce[1],ue=V(r.a.useState(),2),me=ue[0],de=ue[1],fe=V(r.a.useState([]),2),pe=fe[0],ge=fe[1],ve=V(r.a.useState([]),2),he=ve[0],be=ve[1],ye=V(r.a.useState(1),2),Ee=ye[0],Oe=ye[1],je=function(e){xe(),oe(e)},xe=function(){var e={};window.localStorage.getItem("postСDreamData")&&(e=JSON.parse(window.localStorage.getItem("postСDreamData"))),e.selectedDate=ie,0!==ae.length&&(e.titleText=ae),void 0!==me&&0!==me.length&&(e.contentText=me),window.localStorage.setItem("postСDreamData",JSON.stringify(e))};return r.a.useEffect((function(){if(window.localStorage.getItem("postСDreamData")&&function(){var e=JSON.parse(window.localStorage.getItem("postСDreamData")),t=e.selectedDate,a=e.titleText,n=e.contentText;void 0!==t&&oe(new Date(t)),void 0!==a&&ne(a),void 0!==n&&(se(n),de(n))}(),U=[],X=[],R(),G(),void 0!==e.location.defaultData){Z(!0),U=[],X=[];var t=e.location.defaultData,a=t.post_title,n=t.dream_date,r=t.post_content,i=t.technics,o=t.tags,c=t.rating;ne(a),oe(n),se(r),de(r),"string"==typeof o[0][0]&&(o.forEach((function(e){var t={};t.id=Number(e[0]),t.name_rus=e[1],t.name_eng=e[2],t.img_url=e[3],X.push(t)})),ge(X)),"string"==typeof i[0][0]&&(i.forEach((function(e){var t={};t.id=Number(e[0]),t.name_rus=e[1],t.name_eng=e[2],U.push(t)})),be(U)),Oe(c)}}),[e.location.defaultData,a.currLang]),r.a.createElement(D.a,{theme:J},r.a.createElement(d.a,null),r.a.createElement("div",{className:t.root},r.a.createElement(E.a,{className:t.mainGridContainer,container:!0,direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(E.a,{item:!0,xs:11,className:t.mainGridBodyItem},r.a.createElement(b.a,{className:t.paper},r.a.createElement(E.a,{className:"".concat(t.mainGridContainer," ").concat(t.noWrap),container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(E.a,{item:!0,xs:2,className:t.fullMinWidth},r.a.createElement(g.a,{className:t.inputDiv,required:!0,id:"outlined-required",value:ae,label:a.currLang.texts.title,variant:"outlined",onChange:function(e){ne(e.target.value)},onBlur:xe})),r.a.createElement(E.a,{item:!0,xs:1,className:t.fullMinWidth},r.a.createElement(C.a,{utils:s.a,locale:(a.currLang.current,u.a)},r.a.createElement(E.a,{className:t.pickerGridContainer,container:!0,direction:"row",justify:"center",alignItems:"stretch"},r.a.createElement(E.a,{item:!0,xs:7},r.a.createElement(k.a,{className:t.pickers,id:"date-picker-dialog",label:a.currLang.texts.pickDate,format:"dd.MM.yyyy",value:ie,onChange:je,KeyboardButtonProps:{"aria-label":"change date"}})),r.a.createElement(E.a,{item:!0,xs:5},r.a.createElement(L.a,{className:t.pickers,id:"time-picker",label:a.currLang.texts.pickTime,value:ie,onChange:je,ampm:!1,KeyboardButtonProps:{"aria-label":"change time"}}))))),r.a.createElement(E.a,{item:!0,xs:4,className:t.fullMinWidth},r.a.createElement("div",{className:t.inputScrollableDiv},r.a.createElement(x.a,{value:le,onChange:function(e){var t=e.getCurrentContent(),a=Object(S.convertToRaw)(t),n=JSON.stringify(a);me!==n&&(xe(),de(n))},label:a.currLang.texts.content,inlineToolbar:!1,draftEditorProps:{spellCheck:!0},controls:["bold","italic","underline","strikethrough","colorfill"],customControls:[{name:"colorfill",icon:r.a.createElement(M.a,null),type:"inline",inlineStyle:{backgroundColor:"yellow",color:"black"}}]}))),r.a.createElement(E.a,{item:!0,xs:2,className:t.fullMinWidth},r.a.createElement(E.a,{container:!0,className:t.mainGridContainer,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(E.a,{item:!0,xs:12,style:{position:"relative"}},q?r.a.createElement("div",{className:t.inputDiv},r.a.createElement(m.a,null)):r.a.createElement(O.a,{multiple:!0,className:t.inputDiv,id:"technics-outlined",size:"small",options:z,getOptionLabel:function(e){return r.a.createElement(y.a,{size:"small",className:t.chip,label:"Ru"===a.currLang.current?e.name_rus:e.name_eng})},defaultValue:U.map((function(e){return z[e.id-1]})),onChange:function(e,t){return function(e,t){be(t)}(0,t)},filterSelectedOptions:!0,renderInput:function(e){return r.a.createElement(g.a,W({},e,{label:a.currLang.texts.technics,fullWidth:!0}))}})))),r.a.createElement(E.a,{item:!0,xs:2,className:t.fullMinWidth},r.a.createElement(E.a,{container:!0,className:t.mainGridContainer,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(E.a,{item:!0,xs:10,style:{position:"relative"}},I?r.a.createElement("div",{className:t.inputDiv},r.a.createElement(m.a,null)):r.a.createElement(O.a,{multiple:!0,className:t.inputDiv,id:"tags-outlined",size:"small",options:l,getOptionLabel:function(e){return r.a.createElement(y.a,{size:"small",className:t.chip,avatar:r.a.createElement(v.a,{src:e.img_url}),label:"Ru"===a.currLang.current?e.name_rus:e.name_eng})},defaultValue:X.map((function(e){return l[e.id-1]})),onChange:function(e,t){return function(e,t){ge(t)}(0,t)},filterSelectedOptions:!0,renderInput:function(e){return r.a.createElement(g.a,W({},e,{label:a.currLang.texts.tags,fullWidth:!0}))}})),r.a.createElement(E.a,{item:!0,xs:2},r.a.createElement(p.a,{onClick:function(){xe(),i.push({pathname:"/addlocation",defaultData:{prevUrl:"/addcdream"}})}},r.a.createElement(T.a,{fontSize:"small"}))))),r.a.createElement(E.a,{item:!0,xs:1,className:t.fullMinWidth},r.a.createElement("div",{className:t.div85width},r.a.createElement(E.a,{className:t.ratingGridContainer,container:!0,direction:"row",justify:"center",alignItems:"stretch"},r.a.createElement(E.a,{item:!0,xs:6},r.a.createElement(f.a,{variant:"body2"},a.currLang.texts.rating,":")),r.a.createElement(E.a,{item:!0,xs:6},r.a.createElement(w.a,{name:"simple-controlled",value:Ee,onChange:function(e,t){Oe(t)}})))))))),r.a.createElement(E.a,{item:!0,xs:1,className:t.mainGridBodyItem},Q?r.a.createElement(m.a,null):r.a.createElement(E.a,{className:"".concat(t.relativePosition," ").concat(t.verticalCenter),container:!0,direction:"row",justify:"space-evenly",alignItems:"center"},r.a.createElement(E.a,{item:!0},r.a.createElement(h.a,{variant:"outlined",color:"primary",className:t.actionButton,onClick:function(){window.localStorage.removeItem("postСDreamData"),K?i.push("/dreams"):i.push("/")}},a.currLang.buttons.close)),r.a.createElement(E.a,{item:!0},r.a.createElement(h.a,{variant:"outlined",color:"primary",className:t.actionButton,onClick:function(){return function(){ee(!0);var t=!1,n="";if(void 0!==ae?0===ae.length&&(n=a.currLang.errors.EmptyTitle,t=!0):(n=a.currLang.errors.EmptyTitle,t=!0),void 0!==me?0===JSON.parse(me).blocks[0].text.length&&(n=a.currLang.errors.EmptyDream,t=!0):(n=a.currLang.errors.EmptyDream,t=!0),t)c({type:_.O,snackbar:{open:!0,variant:"error",message:n}}),ee(!1);else if(K){var r=!1,l=!1,s=!1,u={post_id:e.location.defaultData.post_id};if(e.location.defaultData.post_title!==ae&&(u.title=ae,r=!0),e.location.defaultData.dream_date.getTime()!==ie.getTime()&&(u.dreamDate=ie.toLocaleString("ru-RU",{timeZone:"Europe/London"}),r=!0),e.location.defaultData.post_content!==me&&(u.content=me,r=!0),e.location.defaultData.rating!==Ee&&(u.rating=Ee,r=!0),U.length===he.length&&Object(B.a)(U,he)||(r=!0,s=!0),X.length===pe.length&&Object(B.a)(X,pe)||(r=!0,l=!0),r){if(l){var m=X.filter((function(e){return!pe.some((function(t){return t.id===e.id}))})),d=pe.filter((function(e){return!X.some((function(t){return t.id===e.id}))}));if(d.length>0){var f={};d.map((function(e,t){return f[t]=e})),u.tags=H({},u.tags,{add:f})}if(m.length>0){var p={};m.map((function(e,t){return p[t]=e})),u.tags=H({},u.tags,{remove:p})}}if(s){var g=U.filter((function(e){return!he.some((function(t){return t.id===e.id}))})),v=he.filter((function(e){return!U.some((function(t){return t.id===e.id}))}));if(v.length>0){var h={};v.map((function(e,t){return h[t]=e})),u.technics=H({},u.technics,{add:h})}if(g.length>0){var b={};g.map((function(e,t){return b[t]=e})),u.technics=H({},u.technics,{remove:b})}}A.l.post("/actions/users/updatepost",u).then((function(e){ee(!1),c({type:_.O,snackbar:{open:!0,variant:"success",message:a.currLang.texts.success}}),window.localStorage.removeItem("postСDreamData"),i.push("/dreams")})).catch((function(e){console.log(e),ee(!1)}))}else c({type:_.O,snackbar:{open:!0,variant:"error",message:a.currLang.errors.NO_CHANGES}}),ee(!1)}else{var y={title:ae,dreamDate:ie.toLocaleString("ru-RU",{timeZone:"Europe/London"}),content:me,create_user:o.user.id,rating:Ee,post_type:1,nickname:o.user.nickname,tags:pe,technics:he};A.l.post("/actions/users/createpost",y).then((function(e){ee(!1),c({type:_.O,snackbar:{open:!0,variant:"success",message:a.currLang.texts.success}}),window.localStorage.removeItem("postСDreamData"),i.push("/")})).catch((function(e){ee(!1)}))}}()}},K?a.currLang.buttons.Save:a.currLang.buttons.add)))))))}$.propTypes={setSnackbar:l.a.func.isRequired,themeMode:l.a.object.isRequired,lang:l.a.object.isRequired,tagsError:l.a.object.isRequired,tags:l.a.object.isRequired,tagsPending:l.a.object.isRequired,technicsError:l.a.object.isRequired,technics:l.a.object.isRequired,technicsPending:l.a.object.isRequired};t.default=Object(i.b)((function(e){return{themeMode:e.themeMode,lang:e.lang,auth:e.auth,tagsError:Object(F.b)(e),tags:Object(F.a)(e),tagsPending:Object(F.c)(e),technicsError:Object(q.b)(e),technics:Object(q.a)(e),technicsPending:Object(q.c)(e)}}),(function(e){return Object(o.bindActionCreators)({setSnackbar:function(t){return e(Object(z.M)(t))},fetchTags:A.f,fetchTechnics:A.g},e)}))($)}}]);
//# sourceMappingURL=15.index-bundle.js.map