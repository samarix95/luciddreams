(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{658:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a(4),i=a.n(o),s=a(258),l=a(263),u=a(259),h=a(99),d=a(257),m=a(7),p=a(2),f=a(40),g=a(19),v=a(638),b=a(640),y=a(641),C=a(24),E=a(260),w=a(494),x=a.n(w);function S(e){var t=e.lang,a=e.themeMode,n=e.nameEn,c=e.nameRu,o=e.setNameEn,i=e.setNameRu,l=Object(g.c)(),m=Object(h.a)(a);return r.a.createElement(d.a,{theme:m},r.a.createElement(s.a,null),r.a.createElement(u.a,{item:!0,className:"".concat(l.width12," ").concat(l.height12)},r.a.createElement(u.a,{item:!0,className:"".concat(l.width12," ").concat(l.height2)}),r.a.createElement("div",{className:"".concat(l.height3," ").concat(l.width10," ").concat(l.SearchPaper," ").concat(l.relativePosition," ").concat(l.horizontalCenter)},r.a.createElement(x.a,{className:"".concat(l.margin)}),r.a.createElement(E.a,{value:c,label:t.currLang.texts.Name+" Ru",onChange:function(e){-1!==e.target.value.search(/[a-zA-Z]/g)?i(e.target.value.replace(reg,"")):i(e.target.value)}})),r.a.createElement(u.a,{item:!0,className:"".concat(l.width12," ").concat(l.height2)}),r.a.createElement("div",{className:"".concat(l.height3," ").concat(l.width10," ").concat(l.SearchPaper," ").concat(l.relativePosition," ").concat(l.horizontalCenter)},r.a.createElement(x.a,{className:"".concat(l.margin)}),r.a.createElement(E.a,{value:n,label:t.currLang.texts.Name+" En",onChange:function(e){-1!==e.target.value.search(/[а-яА-ЯёЁ]/g)?o(e.target.value.replace(reg,"")):o(e.target.value)}})),r.a.createElement(u.a,{item:!0,className:"".concat(l.width12," ").concat(l.height2)})))}S.propTypes={themeMode:i.a.object.isRequired,lang:i.a.object.isRequired};var k=Object(c.b)((function(e){return{themeMode:e.themeMode,lang:e.lang}}),(function(e){return Object(C.bindActionCreators)({},e)}))(S),R=a(267),W=a(310),O=a(153),N=a(265),j=a(266),I=a(145),P=a(212),L=a(142),B=a(496),M=a(221),A=a(307),_=a(349),F=a(140),D=a(369),q=a.n(D),T=a(370),H=a.n(T),z=a(495),G=a.n(z);function U(e,t,a,n){for(var r=[],c=G()("rgb(".concat(e,", ").concat(t,", ").concat(a,")")).toHsl(),o=9;o>1;o-=8/n)c.l=.1*o,r.push(G()(c).toRgb());return r}function J(e){return G()(e).toRgb()}function X(e,t){return{inside:function(a){return a>=e&&a<=t}}}function Y(e,t){return e-t/2}function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function K(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ee(e,t){return(ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var te=2*Math.PI,ae=te/4;function ne(e){var t=e.toString(16);return 1==t.length?"0"+t:t}var re=function(e){function t(){var e,a,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(e=!(n=Q(t).call(this))||"object"!==Z(n)&&"function"!=typeof n?V(a):n).state={rgb:null,innerWheelOpen:!1,centerCircleOpen:!1},e.outerWheelBounds=null,e.innerWheelBounds=null,e.centerCircleBounds=null,e.outerWheelRadius=null,e.innerWheelRadius=null,e.centerCircleRadius=null,e.firstSpacerRadius=null,e.secondSpacerRadius=null,e.canvasEl=null,e.ctx=null,e.onCanvasHover=e.onCanvasHover.bind(V(e)),e.onCanvasClick=e.onCanvasClick.bind(V(e)),e}var a,n,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ee(e,t)}(t,e),a=t,(n=[{key:"getRelativeMousePos",value:function(e,t){var a=this.props.radius,n=this.canvasEl.getBoundingClientRect(),r=2*a,c=2*a,o={x:e-n.left,y:t-n.top};return{fromCenter:Math.sqrt((o.x-c/2)*(o.x-c/2)+(o.y-r/2)*(o.y-r/2)),onCanvas:o}}},{key:"initCanvas",value:function(){var e=this.props.radius,t=2*e,a=2*e;this.ctx.clearRect(0,0,t,a),this.drawOuterWheel(),this.drawSpacers()}},{key:"componentWillMount",value:function(){var e=this.props,t=e.radius,a=e.lineWidth,n=e.padding;this.outerWheelRadius=t,this.innerWheelRadius=this.outerWheelRadius-a-n,this.centerCircleRadius=this.innerWheelRadius-a-n,this.firstSpacerRadius=this.outerWheelRadius-a,this.secondSpacerRadius=this.innerWheelRadius-a,this.outerWheelBounds=X(t-a,t),this.innerWheelBounds=X(this.innerWheelRadius-a,this.innerWheelRadius),this.centerCircleBounds=X(0,this.centerCircleRadius),this.firstSpacerBounds=X(this.firstSpacerRadius-n,this.firstSpacerRadius),this.secondSpacerBounds=X(this.secondSpacerRadius-n,this.secondSpacerRadius)}},{key:"componentDidMount",value:function(){var e=this;if(this.props.onRef(this),this.canvasEl=document.getElementById("colour-picker"),this.ctx=this.canvasEl.getContext("2d"),this.props.preset){var t=J(this.props.presetColour);this.setState({rgb:t},(function(){e.drawOuterWheel(),e.drawInnerWheel(),e.drawCenterCircle(),e.drawSpacers()}))}else this.drawOuterWheel(),this.drawSpacers()}},{key:"componentWillUnmount",value:function(){this.props.onRef(void 0)}},{key:"onCanvasHover",value:function(e){var t=e.clientX,a=e.clientY,n=this.getRelativeMousePos(t,a);this.outerWheelBounds.inside(n.fromCenter)?this.canvasEl.style.cursor="crosshair":this.innerWheelBounds.inside(n.fromCenter)&&this.state.innerWheelOpen?this.canvasEl.style.cursor="crosshair":this.centerCircleBounds.inside(n.fromCenter)&&this.state.centerCircleOpen?this.canvasEl.style.cursor="pointer":this.canvasEl.style.cursor="auto"}},{key:"onCanvasClick",value:function(e){var t=e.clientX,a=e.clientY,n=this.getRelativeMousePos(t,a);this.outerWheelBounds.inside(n.fromCenter)?this.outerWheelClicked(n.onCanvas):this.innerWheelBounds.inside(n.fromCenter)?this.innerWheelClicked(n.onCanvas):this.centerCircleBounds.inside(n.fromCenter)&&this.onCenterCircleClick()}},{key:"outerWheelClicked",value:function(e){var t=this,a=$(this.ctx.getImageData(e.x,e.y,1,1).data,3),n={r:a[0],g:a[1],b:a[2]};this.setState({rgb:n,innerWheelOpen:!0,centerCircleOpen:!0},(function(){t.drawInnerWheel(),t.drawCenterCircle()}))}},{key:"innerWheelClicked",value:function(e){var t=this,a=$(this.ctx.getImageData(e.x,e.y,1,1).data,3),n={r:a[0],g:a[1],b:a[2]};this.setState({rgb:n,centerCircleOpen:!0},(function(){t.drawCenterCircle()}))}},{key:"onCenterCircleClick",value:function(){var e=this.state.rgb;this.props.onCenterCircleClick("#"+ne(e.r)+ne(e.g)+ne(e.b))}},{key:"setPresetColour",value:function(e){var t=this,a=J(function(e){var t;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))return 3==(t=e.substring(1).split("")).length&&(t=[t[0],t[0],t[1],t[1],t[2],t[2]]),"rgba("+[(t="0x"+t.join(""))>>16&255,t>>8&255,255&t].join(",")+",1)";throw new Error("Bad Hex")}(e));this.setState({rgb:a},(function(){t.drawOuterWheel(),t.drawInnerWheel(),t.drawCenterCircle(),t.drawSpacers()}))}},{key:"clear",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.setState({rgb:null,innerWheelOpen:!1,centerCircleOpen:!1},(function(){e.initCanvas(),t&&t()}))}},{key:"drawOuterWheel",value:function(){var e=this,t=this.props,a=t.radius,n=t.colours,r=t.lineWidth,c=2*a,o=2*a,i=Y(a,r),s=n.map((function(e){return J(e)}));s.forEach((function(t,a){e.ctx.beginPath();var n=te/s.length*a,l=te/s.length*(a+1);e.ctx.arc(o/2,c/2,i,n,l),e.ctx.lineWidth=r,e.ctx.strokeStyle="rgb(".concat(t.r,", ").concat(t.g,", ").concat(t.b,")"),e.ctx.stroke(),e.ctx.closePath()}))}},{key:"drawSpacers",value:function(){this.props.spacers&&(this.drawSpacer(this.firstSpacerRadius),this.drawSpacer(this.secondSpacerRadius))}},{key:"drawSpacer",value:function(e){var t=this.props,a=t.radius,n=t.padding,r=t.spacers,c=r.colour,o=r.shadowColour,i=r.shadowBlur,s=2*a,l=2*a,u=Y(e,n);this.ctx.beginPath(),this.ctx.arc(l/2,s/2,u,0,te),this.ctx.lineWidth=n,this.ctx.shadowColor=o,this.ctx.shadowBlur=i,this.ctx.strokeStyle=c,this.ctx.stroke(),this.ctx.closePath(),this.ctx.shadowColor="transparent"}},{key:"drawInnerWheel",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.requestAnimationFrame=t;var a=this.state.rgb,n=a.r,r=a.g,c=a.b,o=this.props,i=o.radius,s=o.lineWidth,l=o.shades,u=o.animated,h=2*i,d=2*i,m=Y(this.innerWheelRadius,s);this.ctx.clearRect(0,0,d,h),this.drawOuterWheel(),this.drawSpacers();var p=U(n,r,c,l);function f(){var e=this;p.forEach((function(t,a){e.ctx.beginPath();var n=te/p.length*a+ae,r=te/p.length*(a+1)+.5*Math.PI;e.ctx.arc(d/2,h/2,m,n,r),e.ctx.lineWidth=s,e.ctx.strokeStyle="rgb(".concat(t.r,", ").concat(t.g,", ").concat(t.b,")"),e.ctx.stroke(),e.ctx.closePath()}))}function g(){var a=this;p.forEach((function(t,n){a.ctx.beginPath();var r=te/p.length*n+ae,c=te/p.length*(n+1)+.5*Math.PI;a.ctx.arc(d/2,h/2,m,r,c),a.ctx.lineWidth=s*e,a.ctx.strokeStyle="rgb(".concat(t.r,", ").concat(t.g,", ").concat(t.b,")"),a.ctx.stroke(),a.ctx.closePath()})),(e+=.1)<1&&t(g)}g=g.bind(this),f=f.bind(this),u?g():f()}},{key:"drawCenterCircle",value:function(){var e=this.state.rgb,t=this.props.radius,a=2*t,n=2*t;this.ctx.lineWidth=0,this.ctx.beginPath(),this.ctx.arc(n/2,a/2,this.centerCircleRadius,0,2*Math.PI),this.ctx.fillStyle="rgb(".concat(e.r,", ").concat(e.g,", ").concat(e.b,")"),this.ctx.fill(),this.ctx.lineWidth=.1,this.ctx.strokeStyle="rgb(".concat(e.r,", ").concat(e.g,", ").concat(e.b,")"),this.ctx.stroke(),this.ctx.closePath(),this.ctx.beginPath(),this.ctx.moveTo(t-t/10,t),this.ctx.lineTo(t-t/10,t),this.ctx.lineTo(t,t+t/12),this.ctx.lineTo(t+t/10,t-t/12),this.ctx.strokeStyle="black",this.ctx.lineWidth=5,this.ctx.stroke()}},{key:"render",value:function(){var e=this.props,t=e.radius;return e.dynamicCursor?r.a.createElement("canvas",{id:"colour-picker",onClick:this.onCanvasClick,onMouseMove:this.onCanvasHover,width:"".concat(2*t,"px"),height:"".concat(2*t,"px")}):r.a.createElement("canvas",{id:"colour-picker",onClick:this.onCanvasClick,width:"".concat(2*t,"px"),height:"".concat(2*t,"px")})}}])&&K(a.prototype,n),c&&K(a,c),t}(n.Component);re.propTypes={radius:i.a.number.isRequired,lineWidth:i.a.number.isRequired,colours:i.a.array,shades:i.a.number,padding:i.a.number,dynamicCursor:i.a.bool,spacers:i.a.object,preset:i.a.bool,componentToHex:i.a.func,setPresetColour:i.a.func,onCenterCircleClick:i.a.func},re.defaultProps={colours:["#00C3A9","#00B720","#008813","#000000","#FFFFFF","#F8E300","#FF6400","#E20000","#AC000D","#9E005F","#6D0E82","#3B3887","#175FDA","#0091E2","#00BCED","#14E4C5"],shades:16,padding:0,dynamicCursor:!0,preset:!1,animate:!1};var ce=re;function oe(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ie=(window.innerWidth-100)/2>200?200:(window.innerWidth-100)/2;function se(e){var t=e.lang,a=e.themeMode,n=e.palette,c=e.isIconsLoading,o=e.setIsIconsLoading,i=e.searchName,l=e.setSearchName,m=e.locationIcons,p=e.setLocationIcons,v=e.selectedIcon,b=e.setSelectedIcon,y=e.iconColor,C=e.setIconColor,E=Object(g.c)(),w=Object(h.a)(a),x=oe(r.a.useState(!1),2),S=x[0],k=x[1];return r.a.createElement(d.a,{theme:w},r.a.createElement(s.a,null),r.a.createElement(A.a,{onClose:function(){k(!1)},open:S},r.a.createElement(W.a,{style:{padding:"8px"}},r.a.createElement(ce,{radius:ie,padding:10,lineWidth:30,onCenterCircleClick:function(e){return C(e),void k(!1)},onRef:function(e){return ce.ColourWheel=e},spacers:{colour:"#00000000",shadowColour:"grey",shadowBlur:5},preset:!0,presetColour:y,animated:!0}))),r.a.createElement(u.a,{item:!0,className:"".concat(E.width12," ").concat(E.height12)},r.a.createElement(u.a,{item:!0,className:"".concat(E.mainGridBodyItem," ").concat(E.height7)},r.a.createElement("div",{className:"".concat(E.height3)}),r.a.createElement(F.a,{className:"".concat(E.height2," ").concat(E.width10," ").concat(E.SearchPaper," ").concat(E.relativePosition," ").concat(E.horizontalCenter)},r.a.createElement(j.a,{className:"".concat(E.margin),onClick:function(){l("")},disabled:!!c},r.a.createElement(q.a,null)),r.a.createElement(L.a,{style:{flex:1},disabled:!!c,value:i,placeholder:t.currLang.texts.FindIcon,onChange:function(e){var t=e.target.value,a=/[а-яА-ЯёЁ]/g;-1!==t.search(a)&&(t=t.replace(a,"")),l(t)}}),r.a.createElement(j.a,{className:"".concat(E.margin),onClick:function e(){if(0!==i.length){o(!0);var t={name:i.replace(/ /g,"%20")};f.l.post("/actions/users/geticons",t).then((function(t){0===t.data.length?e():(p(t.data),o(!1))}))}},disabled:!!c},r.a.createElement(H.a,null))),r.a.createElement("div",{className:"".concat(E.height2)}),r.a.createElement("div",{className:"".concat(E.height2," ").concat(E.width10," ").concat(E.SearchPaper," ").concat(E.relativePosition," ").concat(E.horizontalCenter)},r.a.createElement("div",{className:E.formControl},c?r.a.createElement(R.a,null):r.a.createElement(O.a,{disabled:0===m.length},r.a.createElement(P.a,{id:"select-icon"},t.currLang.texts.ChangeIcon),r.a.createElement(M.a,{value:v,style:{minWidth:100},labelId:"select-icon",onChange:function(e){b(e.target.value)},MenuProps:{PaperProps:{style:{maxHeight:224,width:"auto"}}}},m.map((function(e,t){return r.a.createElement(B.a,{key:t,value:e},r.a.createElement(_.a,{className:E.smallAvatar,src:e,style:"dark"===n.type?{filter:"invert(1)"}:{}}))})))))),r.a.createElement("div",{className:"".concat(E.height3)})),r.a.createElement(u.a,{item:!0,className:"".concat(E.mainGridBodyItem," ").concat(E.height5)},r.a.createElement(F.a,{className:"".concat(E.width4," ").concat(E.height4," ").concat(E.centerButton),style:{backgroundColor:y}},r.a.createElement(I.a,{className:"".concat(E.width12," ").concat(E.height12),onClick:function(){k(!0)}},r.a.createElement(N.a,{variant:"body2"},t.currLang.errors.ColorNotChange))))))}se.propTypes={themeMode:i.a.object.isRequired,lang:i.a.object.isRequired,palette:i.a.object.isRequired};var le=Object(c.b)((function(e){return{themeMode:e.themeMode,lang:e.lang,palette:e.themeMode.palette}}),(function(e){return Object(C.bindActionCreators)({},e)}))(se);function ue(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function he(e){var t=e.lang,a=e.themeMode,n=e.history,c=e.setSnackbar,o=Object(g.c)(),i=Object(h.a)(a),m=ue(r.a.useState(!1),2),C=m[0],E=m[1],w=ue(r.a.useState(""),2),x=w[0],S=w[1],R=ue(r.a.useState(!1),2),W=R[0],O=R[1],N=ue(r.a.useState([]),2),j=N[0],I=N[1],P=ue(r.a.useState(""),2),L=P[0],B=P[1],M=ue(r.a.useState(""),2),A=M[0],_=M[1],F=ue(r.a.useState(""),2),D=F[0],q=F[1],T=ue(r.a.useState(""),2),H=T[0],z=T[1],G=ue(r.a.useState("#ffffff"),2),U=G[0],J=G[1],X=ue(r.a.useState(1),2),Y=X[0],Z=X[1],$=[t.currLang.texts.AddLocationStep1,t.currLang.texts.AddLocationStep2],K=[r.a.createElement(k,{nameEn:L,nameRu:A,setNameEn:B,setNameRu:_},null),r.a.createElement(le,{isIconsLoading:W,setIsIconsLoading:O,searchName:D,setSearchName:q,locationIcons:j,setLocationIcons:I,selectedIcon:H,setSelectedIcon:z,iconColor:U,setIconColor:J},null)];return r.a.useEffect((function(){if(void 0!==e.location.defaultData){if("number"==typeof e.location.defaultData.id){E(!0);var t=e.location.defaultData,a=t.name_rus,n=t.name_eng,r=t.img_url,c=t.color,o=t.prevUrl;_(a),B(n),z(r),J(c),S(o),O(!0),function e(t,a){f.l.post("/actions/users/geticons",t).then((function(n){if(0===n.data.length)e(t,a);else{var r=[];r.push(a);var c=r.concat(n.data);I(c),O(!1)}}))}({name:n},r)}else{var i=e.location.defaultData.prevUrl;S(i)}}}),[e.location.defaultData]),r.a.createElement(d.a,{theme:i},r.a.createElement(s.a,null),r.a.createElement("div",{className:o.root},r.a.createElement(u.a,{container:!0,className:"".concat(o.height12),direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(u.a,{item:!0,className:"".concat(o.width12," ").concat(o.height2)},r.a.createElement(v.a,{activeStep:Y,alternativeLabel:!0},$.map((function(e){return r.a.createElement(b.a,{key:e},r.a.createElement(y.a,null,e))})))),r.a.createElement(u.a,{item:!0,className:"".concat(o.width12," ").concat(o.height9)},K[Y]),r.a.createElement(u.a,{item:!0,className:"".concat(o.mainGridBodyItem," ").concat(o.height1)},r.a.createElement(u.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center"},r.a.createElement(u.a,{item:!0},r.a.createElement(l.a,{className:o.actionButton,variant:"outlined",color:"secondary",onClick:function(){0===Y?0===x.length?n.push("/dreammap"):n.push(x):Z(Y-1)}},Y!==K.length-1?t.currLang.buttons.close:t.currLang.buttons.Back)),r.a.createElement(u.a,{item:!0},r.a.createElement(l.a,{variant:"outlined",color:"primary",className:o.actionButton,onClick:function(){Y===K.length?function(){var a="",r=!1;if(C){var o=!1,i={id:e.location.defaultData.id};A!==e.location.defaultData.name_rus&&(i.name_rus=A,o=!0),L!==e.location.defaultData.name_eng&&(i.name_eng=L,o=!0),H!==e.location.defaultData.img_url&&(i.img_url=H,o=!0),U!==e.location.defaultData.color&&(i.color=U,o=!0),o?f.l.post("/actions/users/updatelocation",i).then((function(e){c({type:p.O,snackbar:{open:!0,variant:"success",message:t.currLang.texts.success}}),0===x.length?n.push("/dreammap"):n.push(x)})).catch((function(e){c({type:p.O,snackbar:{open:!0,variant:"error",message:t.currLang.errors.CantUpdateLocation}})})):c({type:p.O,snackbar:{open:!0,variant:"error",message:t.currLang.errors.NO_CHANGES}})}else if(0===U.length&&(a=t.currLang.errors.ColorNotChange,r=!0),0===H.length&&(a=t.currLang.errors.IconNotChange,r=!0),0===A.length&&(a=t.currLang.errors.EmptyName,r=!0),0===L.length&&(a=t.currLang.errors.EmptyName,r=!0),r)c({type:p.O,snackbar:{open:!0,variant:"error",message:a}});else{var s={name_rus:A,name_eng:L,img_url:H,color:U};f.l.post("/actions/users/createlocation",s).then((function(e){c({type:p.O,snackbar:{open:!0,variant:"success",message:t.currLang.texts.success}}),0===x.length?n.push("/dreammap"):n.push(x)})).catch((function(e){c({type:p.O,snackbar:{open:!0,variant:"error",message:t.currLang.errors.CantAddLocation}})}))}}():Z(Y+1)}},Y===K.length-1?C?t.currLang.buttons.Save:t.currLang.buttons.add:t.currLang.buttons.Next)))))))}he.propTypes={setSnackbar:i.a.func.isRequired,themeMode:i.a.object.isRequired,lang:i.a.object.isRequired};t.default=Object(c.b)((function(e){return{themeMode:e.themeMode,lang:e.lang}}),(function(e){return{setSnackbar:function(t){return e(Object(m.M)(t))}}}))(he)}}]);
//# sourceMappingURL=18.index-bundle.js.map