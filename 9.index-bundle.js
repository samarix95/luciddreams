(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{394:function(e,t,a){"use strict";var n=a(20);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),r=(0,n(a(42)).default)(c.default.createElement("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"}),"Save");t.default=r},405:function(e,t,a){"use strict";t.a={current:"Ru",buttons:{signIn:"Вход",signOut:"Выход",signUp:"Регистрация",dreamJoirnal:"Дневник снов",addDream:"Добавить сон",addCDream:"Добавить ос",techniques:"Техники",adventures:"Приключения",close:"Назад",about:"О сайте",cancel:"Отмена",add:"Добавить",Edit:"Изменить",Delete:"Удалить",Save:"Сохранить",addTag:"+ место",Filter:"Фильтр",Apply:"Применить",Reset:"Сброс"},texts:{about:"О нас О нас О нас О нас О нас О нас О нас О нас О нас О нас О нас О нас",Nothink:"Ничего",nickname:"Отображаемое имя",password:"Пароль",passwordAgain:"Поторите пароль",cancel:"Отмена",sucessRegistration:"Вы успешно зарегистрировались",hello:"Привет, ",changleLanguage:"Сохранить изменение языка на ",success:"Успешно",title:"Заголовок",description:"Описание",content:"Что снилось",tags:"Места",dreams:"Снов",technics:"Техники",rating:"Реалистичность",Dream:"Обычный сон",Cdream:"ОC",All:"Все",NoDreams:"У вас нет снов",pickDate:"Дата",pickTime:"Время",TapToShow:"Нажмите на текст, чтобы отобразить подсвечивание",Public:"Опубликовано",Publish:"Опубликовать",Unpublish:"Скрыть",PublicAlert:"Вы точно хотите опубликовать сон?",PublicText:"После публикации ваши друзья смогут прочитать этот сон.",PublicDescription:"Ваши друзья могут прочитать этот сон",UnpublicAlert:"Вы точно хотите скрыть сон?",UnpublicText:"После скрытия ваши друзья не смогут прочитать этот сон.",UnpublicDescription:"Ваши друзья не могут прочитать этот сон",DeleteAlert:"Вы точно хотите удалить?",DeleteText:"После удаления запись не получится восстановить.",Name:"Наименование",ChangeIcon:"Иконка",FindIcon:"Поиск иконки (English only)",LogOutQuestion:"Вы точно хотите выйти?"},errors:{emailLenght:"Введите email",nicknameLenght:"Введите отображаемое имя",passwordLenght:"Введите пароль",password2Lenght:"Введите пароль",passwordsCompare:"Пароли не совпадают",UserNotExist:"Неверный email или пароль",EmailIsNotValid:"Введен некорректный email",IncorrectPassword:"Неверный email или пароль",EmailIsBusy:"Email занят",PasswordLenght5Symbols:"Длина пароля - больше 5 символов",NotLogin:"Вы не авторизированы",EmptyName:"Пустое наименование",EmptyTitle:"Пустой заголовок",EmptyDescription:"Пустое описание",EmptyDream:"Пустое поле сна",NoChanges:"Нет изменений",CantDeletePost:"Ошибка удаления сна",CantAddLocation:"Ошибка добавления локации",CantUpdateLocation:"Ошибка обновления локации",IconNotChange:"Выберите иконку",ColorNotChange:"Выберите цвет"}}},453:function(e,t,a){"use strict";var n=a(1),c=a(0),r=a.n(c),i=(a(3),a(5)),o=a(250),s=r.a.forwardRef((function(e,t){return r.a.createElement(o.a,Object(n.a)({component:"p",variant:"body1",color:"textSecondary",ref:t},e))}));t.a=Object(i.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(s)},864:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),i=a(3),o=a.n(i),s=a(453),l=a(204),u=a(550),m=a(551),d=a(549),g=a(131),p=a(251),h=a(250),f=a(252),b=a(546),E=a(248),y=a(854),v=a(244),N=a(7),k=a(50),C=a(12),L=a(70),j=a(88),B=a(54),O=a(89),w=a(242),D=a(243),S=a(106),I=a.n(S),R=a(394),x=a.n(R),A=a(405),T=a(87);function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,c=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){c=!0,r=e}finally{try{n||null==o.return||o.return()}finally{if(c)throw r}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function U(e){return c.a.createElement(y.a,P({},e,{direction:"down"}))}function q(e){var t=Object(C.d)(),a=e.lang,n=e.themeMode,r=e.auth,i=e.history,o=e.setCurrLangAction,y=e.setTheme,S=e.setSnackbar,R=Object(O.a)(n),P=M(c.a.useState(void 0),2),q=P[0],G=P[1],z=M(c.a.useState(!1),2),J=z[0],Y=z[1],F=M(c.a.useState(""),2),V=F[0],H=F[1],Q=M(c.a.useState(void 0),2),_=Q[0],K=Q[1],W=M(c.a.useState(!1),2),X=W[0],Z=W[1],$=function(){Z(!1)},ee=function(e){e!==a.currLang.current&&("Ru"===e&&(G(a.currLang.current),o(A.a),H(e),K((function(){return U})),Y(!0)),"En"!==a.currLang.current&&(G(a.currLang.current),o(T.a),H(e),K((function(){return U})),Y(!0)))},te=function(){switch(q){case"En":o(T.a);break;case"Ru":o(A.a);break;default:o(T.a)}Y(!1)};return c.a.useEffect((function(){var e={id:r.user.id};L.a.post("/actions/users/getuserdata",e).then((function(e){0===e.data.result.language?o(T.a):o(A.a)}))}),[t,y,o,r.user.id]),c.a.createElement(w.a,{theme:R},c.a.createElement(D.a,null),c.a.createElement(f.a,{key:"top, center",open:J,anchorOrigin:{vertical:"top",horizontal:"center"},TransitionComponent:_},c.a.createElement(l.a,{"aria-describedby":"lang-snackbar",message:c.a.createElement(h.a,{id:"lang-snackbar",className:"".concat(t.height12),align:"center",variant:"body2"},a.currLang.texts.changleLanguage+V+" ?"),action:[c.a.createElement("div",{key:"lang-snackbar-buttons"},c.a.createElement(p.a,{key:"save","aria-label":"save",color:"inherit",onClick:function(){var e;switch(a.currLang.current){case"En":e=0;break;case"Ru":e=1;break;default:e=0}var t={language:e,id:r.user.id,nickname:r.user.nickname};Object(j.a)()?L.a.post("/actions/users/updateuserdata",t).then((function(e){S({type:N.g,snackbar:{open:!0,variant:"success",message:a.currLang.texts.success}}),Y(!1)})).catch((function(e){te()})):(S({type:N.g,snackbar:{open:!0,variant:"error",message:a.currLang.errors.NotLogin}}),te())}},c.a.createElement(x.a,null)),c.a.createElement(p.a,{key:"close","aria-label":"close",color:"inherit",onClick:te},c.a.createElement(I.a,null)))]})),c.a.createElement(b.a,{open:X,onClose:$,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},c.a.createElement(d.a,{id:"alert-dialog-title"},a.currLang.buttons.signOut),c.a.createElement(u.a,null,c.a.createElement(s.a,{id:"alert-dialog-description"},a.currLang.texts.LogOutQuestion)),c.a.createElement(m.a,null,c.a.createElement(E.a,{color:"secondary",onClick:$},a.currLang.texts.cancel),c.a.createElement(E.a,{color:"primary",onClick:function(){Object(B.a)(!1),localStorage.removeItem("jwtToken"),Object(k.d)({type:N.e,payload:null}),i.push("/")},autoFocus:!0},a.currLang.buttons.signOut))),c.a.createElement("div",{className:t.root},c.a.createElement(v.a,{container:!0,className:"".concat(t.height12),direction:"column",justify:"center",alignItems:"stretch"},c.a.createElement(v.a,{item:!0,className:"".concat(t.mainGridBodyItem," ").concat(t.height4)},c.a.createElement(v.a,{container:!0,className:t.mainGridContainer,direction:"row",justify:"space-around",alignItems:"stretch"},c.a.createElement(v.a,{item:!0,xs:4},c.a.createElement(g.a,{className:t.AstronautButton,type:"button",focusRipple:!0,onClick:function(){alert("Тут должны перейти на страницу космонафта")}},c.a.createElement("div",{className:t.AstronautDiv},c.a.createElement("div",{className:t.AstronautImg,style:"light"===n.palette.type?{filter:"invert(0)"}:{filter:"invert(1)"}})))),c.a.createElement(v.a,{item:!0,xs:4},c.a.createElement(g.a,{className:t.image,type:"button",focusRipple:!0,onClick:function(){var e="light"===n.palette.type?"dark":"light",t="light"===n.palette.type?"#f9a825":"#3f51b5",a=(n.palette.type,"#f50057");y({type:N.i,palette:{type:e,primary:{main:t},secondary:{main:a}}})}},c.a.createElement("div",{className:t.SkyDiv},c.a.createElement("div",{className:t.SunSrc,style:"dark"===n.palette.type?{transform:"translateY(36vw)"}:{transform:"translateY(0)"}}),c.a.createElement("div",{className:t.MoonSrc,style:"dark"===n.palette.type?{transform:"translateY(0)"}:{transform:"translateY(-36vw)"}})))),c.a.createElement(v.a,{item:!0,xs:4},c.a.createElement(g.a,{className:t.MapButton,type:"button",focusRipple:!0,onClick:function(){Object(j.a)()?i.push("/dreammap"):i.push("/")}},c.a.createElement("div",{className:t.MapDiv},c.a.createElement("div",{className:t.MapImg,style:"light"===n.palette.type?{filter:"invert(0)"}:{filter:"invert(1)"}})))))),c.a.createElement(v.a,{item:!0,className:"".concat(t.mainGridBodyItem," ").concat(t.height1)},c.a.createElement(v.a,{container:!0,className:"".concat(t.menuButtonContainer),direction:"column",justify:"center",alignItems:"stretch"},c.a.createElement(v.a,{item:!0,className:"".concat(t.mainGridBodyItem," ").concat(t.height12)},c.a.createElement(h.a,{className:t.mainGridContainer,align:"center",variant:"h6"},a.currLang.texts.hello+r.user.nickname)))),c.a.createElement(v.a,{item:!0,className:"".concat(t.mainGridBodyItem," ").concat(t.height6)},c.a.createElement(v.a,{container:!0,className:"".concat(t.menuButtonContainer," ").concat(t.height12),direction:"column",justify:"center",alignItems:"stretch"},c.a.createElement(v.a,{item:!0,className:"".concat(t.menuDivButton," ").concat(t.height2),align:"center"},c.a.createElement(E.a,{variant:"contained",color:"primary",className:"".concat(t.menuButton," ").concat(t.centerButton),onClick:function(){Object(j.a)()?i.push("/dreams"):i.push("/")}},a.currLang.buttons.dreamJoirnal)),c.a.createElement(v.a,{item:!0,className:"".concat(t.menuDivButton," ").concat(t.height2),align:"center"},c.a.createElement(E.a,{variant:"contained",color:"primary",className:"".concat(t.menuButton," ").concat(t.centerButton),onClick:function(){Object(j.a)()?i.push("/addregulardream"):i.push("/")}},a.currLang.buttons.addDream)),c.a.createElement(v.a,{item:!0,className:"".concat(t.menuDivButton," ").concat(t.height2),align:"center"},c.a.createElement(E.a,{variant:"contained",color:"primary",className:"".concat(t.menuButton," ").concat(t.centerButton),onClick:function(){Object(j.a)()?i.push("/addcdream"):i.push("/")}},a.currLang.buttons.addCDream)),c.a.createElement(v.a,{item:!0,className:"".concat(t.menuDivButton," ").concat(t.height2),align:"center"},c.a.createElement(E.a,{variant:"contained",color:"primary",className:"".concat(t.menuButton," ").concat(t.centerButton),onClick:function(){Object(j.a)()?i.push("/technics"):i.push("/")}},a.currLang.buttons.techniques)),c.a.createElement(v.a,{item:!0,className:"".concat(t.menuDivButton," ").concat(t.height2),align:"center"},c.a.createElement(E.a,{variant:"contained",color:"primary",className:"".concat(t.menuButton," ").concat(t.centerButton)},a.currLang.buttons.adventures)),c.a.createElement(v.a,{item:!0,className:"".concat(t.menuDivButton," ").concat(t.height2),align:"center"},c.a.createElement(E.a,{variant:"contained",color:"primary",className:"".concat(t.menuButton," ").concat(t.centerButton),onClick:function(){Z(!0)}},a.currLang.buttons.signOut)))),c.a.createElement(v.a,{item:!0,className:"".concat(t.mainGridBodyItem," ").concat(t.height1)},c.a.createElement(v.a,{container:!0,className:"".concat(t.menuButtonContainer),direction:"row",justify:"center",alignItems:"center"},c.a.createElement(v.a,{item:!0},c.a.createElement(E.a,{onClick:function(){ee("Ru")}},"RU")),c.a.createElement(v.a,{item:!0},c.a.createElement(E.a,{onClick:function(){ee("En")}},"EN")))))))}q.propTypes={setCurrLangAction:o.a.func.isRequired,setTheme:o.a.func.isRequired,setSnackbar:o.a.func.isRequired,setUserState:o.a.func.isRequired,lang:o.a.object.isRequired,themeMode:o.a.object.isRequired,auth:o.a.object.isRequired};t.default=Object(r.b)((function(e){return{lang:e.lang,themeMode:e.themeMode,auth:e.auth}}),(function(e){return{setCurrLangAction:function(t){return e(Object(k.a)(t))},setTheme:function(t){return e(Object(k.c)(t))},setSnackbar:function(t){return e(Object(k.b)(t))},setUserState:function(t){return e(Object(k.d)(t))}}}))(q)}}]);
//# sourceMappingURL=9.index-bundle.js.map