(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{878:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a(3),i=a.n(o),l=a(254),u=a(252),s=a(464),m=a(250),d=a(246),b=a(245),f=a(89),p=a(244),h=a(88),y=a(462),g=a(554),E=a(461),j=a(463),v=a(557),O=a(556),w=a(460),A=a(555),k=a(457),S=a(553),C=a(12),N=a(50);function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(Object(a),!0).forEach((function(t){D(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function D(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function R(e){var t=e.item,a=e.lang,n=e.auth,c=e.history,o=Object(C.d)(),i=x(r.a.useState(!1),2),l=i[0],s=i[1],b=x(r.a.useState({header:"",body:"",commit:"",action:""}),2),f=b[0],p=b[1],h=function(n){switch(n){case"edit":c.push({pathname:"/addtechnics",defaultData:{item:t}});break;case"delete":var r=f;r=P({},r,{header:a.currLang.texts.DeleteAlert}),r=P({},r,{body:a.currLang.texts.DeleteText}),r=P({},r,{commit:a.currLang.buttons.Delete}),r=P({},r,{action:"deleteOk"}),p(r),s(!0);break;case"deleteOk":s(!1),e.loadTechnics();break;case"closeAlert":s(!1)}};return r.a.createElement(d.a,{item:!0,className:o.dreamCardDiv},r.a.createElement(k.a,{open:l,onClose:function(){return h("closeAlert")},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(w.a,{id:"alert-dialog-title"},f.header),r.a.createElement(E.a,null,r.a.createElement(y.a,{id:"alert-dialog-description"},f.body)),r.a.createElement(j.a,null,r.a.createElement(m.a,{onClick:function(){return h("closeAlert")},color:"secondary"},a.currLang.buttons.cancel),r.a.createElement(m.a,{onClick:function(){return h(f.action)},color:"primary",autoFocus:!0},f.commit))),r.a.createElement(S.a,{raised:!0,className:o.card},r.a.createElement(g.a,null,r.a.createElement(A.a,{className:o.media,image:"https://4.bp.blogspot.com/-imM00o7SslA/V8NXohT8AmI/AAAAAAAAFOM/F7h1SZjMaCU4mJ6PlwUlx7tpePjVJWlcACLcB/s1600/Cockpit%2B2.png"}),r.a.createElement(O.a,null,r.a.createElement(u.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Ru"===a.currLang.current?t.name_rus:t.name_eng),r.a.createElement(u.a,{variant:"body2",color:"textSecondary",component:"p"},"Ru"===a.currLang.current?t.description_rus:t.description_eng))),n.user.roles<2?r.a.createElement(v.a,null,r.a.createElement(m.a,{size:"small",color:"secondary",onClick:function(){h("delete")}},a.currLang.buttons.Delete),r.a.createElement(m.a,{size:"small",color:"primary",onClick:function(){h("edit")}},a.currLang.buttons.Edit)):""))}R.propTypes={setSnackbar:i.a.func.isRequired,lang:i.a.object.isRequired,palette:i.a.object.isRequired,auth:i.a.object.isRequired};var T=Object(c.b)((function(e){return{lang:e.lang,palette:e.themeMode.palette,auth:e.auth}}),(function(e){return{setSnackbar:function(t){return e(Object(N.b)(t))}}}))(R),B=a(70);function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function M(e){var t=e.lang,a=e.themeMode,n=e.history,c=e.auth,o=Object(f.a)(a),i=Object(C.d)(),y=I(r.a.useState(!0),2),g=y[0],E=y[1],j=I(r.a.useState([]),2),v=j[0],O=j[1],w=r.a.useCallback((function(){E(!0),B.a.get("/gettechnics").then((function(e){O(e.data),E(!1)})).catch((function(e){E(!1)}))}),[]);return r.a.useEffect((function(){w()}),[w]),r.a.createElement(p.a,{theme:o},r.a.createElement(b.a,null),r.a.createElement("div",{className:i.root},r.a.createElement(d.a,{container:!0,className:"".concat(i.height12),direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(d.a,{item:!0,className:"".concat(i.hiddenOverflow," ").concat(i.height11)},g?r.a.createElement("div",{className:"".concat(i.formControl," ").concat(i.centerTextAlign)},r.a.createElement("div",{className:"".concat(i.inlineBlock," ").concat(i.relativePosition)},r.a.createElement(l.a,null)),r.a.createElement(u.a,{className:"".concat(i.relativePosition),component:"div"},t.currLang.texts.Loading)):r.a.createElement(s.a,{className:i.mainGridDreamsBodyItemContainer},r.a.createElement(d.a,{container:!0,className:i.mainGridDreamsContainer,direction:"column",justify:"center",alignItems:"stretch"},v.map((function(e,t){return r.a.createElement(T,{key:t,item:e,loadTechnics:w,history:n})}))))),r.a.createElement(d.a,{item:!0,className:"".concat(i.mainGridBodyItem," ").concat(i.height1)},r.a.createElement(d.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center"},r.a.createElement(d.a,{item:!0},r.a.createElement(m.a,{variant:"contained",color:"secondary",className:i.actionButton,onClick:function(){n.push("/luciddreams")}},t.currLang.buttons.close)),c.user.roles<2?r.a.createElement(d.a,{item:!0,align:"center"},r.a.createElement(m.a,{variant:"contained",color:"primary",className:i.actionButton,onClick:function(){Object(h.a)()?n.push("/addtechnics"):n.push("/")}},t.currLang.buttons.add)):r.a.createElement(d.a,{item:!0,xs:6}))))))}M.propTypes={themeMode:i.a.object.isRequired,lang:i.a.object.isRequired,auth:i.a.object.isRequired};t.default=Object(c.b)((function(e){return{themeMode:e.themeMode,lang:e.lang,auth:e.auth}}),(function(e){return{}}))(M)}}]);
//# sourceMappingURL=17.index-bundle.js.map