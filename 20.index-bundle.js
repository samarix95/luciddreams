(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{903:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a(24),i=a(4),l=a.n(i),s=a(272),u=a(270),m=a(481),d=a(268),b=a(264),h=a(263),p=a(99),f=a(262),g=a(74),y=a(480),E=a(572),j=a(352),O=a(398),v=a(575),k=a(574),w=a(351),A=a(573),C=a(348),P=a(571),N=a(13),L=a(7);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){S(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function S(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function q(e){var t=e.item,a=e.lang,n=e.auth,c=e.history,o=Object(N.d)(),i=T(r.a.useState(!1),2),l=i[0],s=i[1],m=T(r.a.useState({header:"",body:"",commit:"",action:""}),2),h=m[0],p=m[1],f=function(n){switch(n){case"edit":c.push({pathname:"/addtechnics",defaultData:{item:t}});break;case"delete":var r=h;r=R({},r,{header:a.currLang.texts.DeleteAlert}),r=R({},r,{body:a.currLang.texts.DeleteText}),r=R({},r,{commit:a.currLang.buttons.Delete}),r=R({},r,{action:"deleteOk"}),p(r),s(!0);break;case"deleteOk":s(!1),e.loadTechnics();break;case"closeAlert":s(!1)}};return r.a.createElement(b.a,{item:!0,className:o.dreamCardDiv},r.a.createElement(C.a,{open:l,onClose:function(){return f("closeAlert")},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(w.a,{id:"alert-dialog-title"},h.header),r.a.createElement(j.a,null,r.a.createElement(y.a,{id:"alert-dialog-description"},h.body)),r.a.createElement(O.a,null,r.a.createElement(d.a,{onClick:function(){return f("closeAlert")},color:"secondary"},a.currLang.buttons.cancel),r.a.createElement(d.a,{onClick:function(){return f(h.action)},color:"primary",autoFocus:!0},h.commit))),r.a.createElement(P.a,{raised:!0,className:o.card},r.a.createElement(E.a,null,r.a.createElement(A.a,{className:o.media,image:"https://4.bp.blogspot.com/-imM00o7SslA/V8NXohT8AmI/AAAAAAAAFOM/F7h1SZjMaCU4mJ6PlwUlx7tpePjVJWlcACLcB/s1600/Cockpit%2B2.png"}),r.a.createElement(k.a,null,r.a.createElement(u.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Ru"===a.currLang.current?t.name_rus:t.name_eng),r.a.createElement(u.a,{variant:"body2",color:"textSecondary",component:"p"},"Ru"===a.currLang.current?t.description_rus:t.description_eng))),n.user.roles<2?r.a.createElement(v.a,null,r.a.createElement(d.a,{size:"small",color:"secondary",onClick:function(){f("delete")}},a.currLang.buttons.Delete),r.a.createElement(d.a,{size:"small",color:"primary",onClick:function(){f("edit")}},a.currLang.buttons.Edit)):""))}q.propTypes={setSnackbar:l.a.func.isRequired,lang:l.a.object.isRequired,palette:l.a.object.isRequired,auth:l.a.object.isRequired};var x=Object(c.b)((function(e){return{lang:e.lang,palette:e.themeMode.palette,auth:e.auth}}),(function(e){return{setSnackbar:function(t){return e(Object(L.I)(t))}}}))(q),B=a(40),I=a(93);function M(e){var t=e.lang,a=e.themeMode,n=e.history,c=e.auth,o=e.technics,i=e.technicsError,l=e.technicsPending,y=e.fetchTechnics;i&&(console.log("Technics"),console.log(i));var E=Object(p.a)(a),j=Object(N.d)(),O=r.a.useCallback((function(){y()}),[]);return r.a.useEffect((function(){O()}),[O]),r.a.createElement(f.a,{theme:E},r.a.createElement(h.a,null),r.a.createElement("div",{className:j.root},r.a.createElement(b.a,{container:!0,className:"".concat(j.height12),direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(b.a,{item:!0,className:"".concat(j.hiddenOverflow," ").concat(j.height11)},l?r.a.createElement("div",{className:"".concat(j.formControl," ").concat(j.centerTextAlign)},r.a.createElement("div",{className:"".concat(j.inlineBlock," ").concat(j.relativePosition)},r.a.createElement(s.a,null)),r.a.createElement(u.a,{className:"".concat(j.relativePosition),component:"div"},t.currLang.texts.Loading)):r.a.createElement(m.a,{className:j.mainGridDreamsBodyItemContainer},r.a.createElement(b.a,{container:!0,className:j.mainGridDreamsContainer,direction:"column",justify:"center",alignItems:"stretch"},o.map((function(e,t){return r.a.createElement(x,{key:t,item:e,loadTechnics:O,history:n})}))))),r.a.createElement(b.a,{item:!0,className:"".concat(j.mainGridBodyItem," ").concat(j.height1)},r.a.createElement(b.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center"},r.a.createElement(b.a,{item:!0},r.a.createElement(d.a,{variant:"contained",color:"secondary",className:j.actionButton,onClick:function(){n.push("/luciddreams")}},t.currLang.buttons.Back)),c.user.roles<2?r.a.createElement(b.a,{item:!0,align:"center"},r.a.createElement(d.a,{variant:"contained",color:"primary",className:j.actionButton,onClick:function(){Object(g.a)()?n.push("/addtechnics"):n.push("/")}},t.currLang.buttons.add)):r.a.createElement(b.a,{item:!0,xs:6}))))))}M.propTypes={themeMode:l.a.object.isRequired,lang:l.a.object.isRequired,auth:l.a.object.isRequired,technicsError:l.a.object.isRequired,technics:l.a.object.isRequired,technicsPending:l.a.object.isRequired};t.default=Object(c.b)((function(e){return{themeMode:e.themeMode,lang:e.lang,auth:e.auth,technicsError:Object(I.b)(e),technics:Object(I.a)(e),technicsPending:Object(I.c)(e)}}),(function(e){return Object(o.bindActionCreators)({fetchTechnics:B.f},e)}))(M)}}]);
//# sourceMappingURL=20.index-bundle.js.map