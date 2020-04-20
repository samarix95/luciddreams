(this["webpackJsonpmobile-web-frontend-luciddreams"]=this["webpackJsonpmobile-web-frontend-luciddreams"]||[]).push([[17],{186:function(e,t,n){"use strict";var a=n(62),i=n(258);t.a=Object(i.a)((function(e){var t;return{root:{position:"relative",flexGrow:1},stickyTop:{position:"sticky",top:0,zIndex:1e4},paper:(t={position:"relative"},Object(a.a)(t,e.breakpoints.up("xs"),{marginLeft:"15%",marginRight:"15%"}),Object(a.a)(t,e.breakpoints.up("sm"),{marginLeft:"25%",marginRight:"25%"}),Object(a.a)(t,e.breakpoints.up("md"),{marginLeft:"35%",marginRight:"35%"}),t),input:{width:"100%",flex:1},MuiRteRead:{backgroundColor:e.palette.text.main,padding:10},skeletonCard:{minHeight:150,borderRadius:8},smallAvatar:{width:e.spacing(1),height:e.spacing(1)},largeAvatar:{width:e.spacing(7),height:e.spacing(7)},filterFab:{position:"fixed",bottom:e.spacing(1),right:e.spacing(1)},addPostFab:{position:"fixed",bottom:e.spacing(10),right:e.spacing(1)},flexSpaceBetween:{display:"flex",flexDirection:"column",justifyContent:"space-between"},margin1:{margin:e.spacing(1)},margin2:{margin:e.spacing(2)},padding1:{padding:e.spacing(1)},padding2:{padding:e.spacing(2)},fullWidth:{width:"100%"}}}))},258:function(e,t,n){"use strict";var a=n(1),i=n(160),r=n(46);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i.a)(e,Object(a.a)({defaultTheme:r.a},t))}},259:function(e,t,n){"use strict";var a=n(4),i=n(1),r=n(0),c=(n(6),n(5)),o=n(7),s=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var d=r.forwardRef((function(e,t){var n=e.alignContent,o=void 0===n?"stretch":n,s=e.alignItems,l=void 0===s?"stretch":s,g=e.classes,d=e.className,m=e.component,p=void 0===m?"div":m,u=e.container,f=void 0!==u&&u,x=e.direction,v=void 0===x?"row":x,b=e.item,h=void 0!==b&&b,w=e.justify,j=void 0===w?"flex-start":w,y=e.lg,S=void 0!==y&&y,C=e.md,E=void 0!==C&&C,O=e.sm,k=void 0!==O&&O,W=e.spacing,I=void 0===W?0:W,N=e.wrap,z=void 0===N?"wrap":N,M=e.xl,R=void 0!==M&&M,G=e.xs,T=void 0!==G&&G,B=e.zeroMinWidth,D=void 0!==B&&B,P=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),F=Object(c.a)(g.root,d,f&&[g.container,0!==I&&g["spacing-xs-".concat(String(I))]],h&&g.item,D&&g.zeroMinWidth,"row"!==v&&g["direction-xs-".concat(String(v))],"wrap"!==z&&g["wrap-xs-".concat(String(z))],"stretch"!==l&&g["align-items-xs-".concat(String(l))],"stretch"!==o&&g["align-content-xs-".concat(String(o))],"flex-start"!==j&&g["justify-xs-".concat(String(j))],!1!==T&&g["grid-xs-".concat(String(T))],!1!==k&&g["grid-sm-".concat(String(k))],!1!==E&&g["grid-md-".concat(String(E))],!1!==S&&g["grid-lg-".concat(String(S))],!1!==R&&g["grid-xl-".concat(String(R))]);return r.createElement(p,Object(i.a)({className:F,ref:t},P))})),m=Object(o.a)((function(e){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return s.forEach((function(a){var i=e.spacing(a);0!==i&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(g(i,2)),width:"calc(100% + ".concat(g(i),")"),"& > $item":{padding:g(i,2)}})})),n}(e,"xs"),{},e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(i.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(d);t.a=m},490:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(33),c=n(90),o=n(123),s=n(121),l=n(259),g=n(53),d=n(13),m=n(186),p=n(43),u=n(44);t.default=Object(r.b)((function(e){return{language:Object(u.a)(e)}}),null)((function(e){var t=e.language,n=Object(m.a)();return i.a.createElement("div",{className:n.root},i.a.createElement(l.a,{container:!0,direction:"column",justify:"center",alignItems:"stretch"},i.a.createElement(l.a,{item:!0,className:"".concat(n.padding2)},i.a.createElement(c.a,{className:"".concat(n.margin2),component:"div",variant:"h6",align:"center",paragraph:!0},p.a[t].texts.SignPageText1),i.a.createElement(c.a,{className:"".concat(n.margin2),component:"div",variant:"subtitle2",align:"center",paragraph:!0},p.a[t].texts.SignPageText2),i.a.createElement(c.a,{className:"".concat(n.margin2),component:"div",variant:"h6",align:"center",paragraph:!0},p.a[t].texts.SignPageText3)),i.a.createElement(l.a,{item:!0},i.a.createElement(s.a,{className:n.paper},i.a.createElement(l.a,{spacing:1,container:!0,direction:"column",justify:"center",alignItems:"stretch"},i.a.createElement(l.a,{item:!0,className:"".concat(n.margin1)},i.a.createElement(o.a,{fullWidth:!0,size:"small",onClick:function(){g.a.push(d.a.SignIn)},variant:"outlined",color:"primary"},p.a[t].buttons.SignIn)),i.a.createElement(l.a,{item:!0,className:"".concat(n.margin1)},i.a.createElement(o.a,{fullWidth:!0,size:"small",onClick:function(){g.a.push(d.a.SignUp)},variant:"outlined",color:"primary"},p.a[t].buttons.SignUp)))))))}))}}]);
//# sourceMappingURL=17.38fd62a8.chunk.js.map