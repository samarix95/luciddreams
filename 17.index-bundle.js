(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{667:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a(24),i=a(4),l=a.n(i),s=a(626),u=a(267),m=a(258),d=a(265),f=a(263),p=a(259),g=a(501),h=a(628),b=a.n(h),E=a(627),y=a.n(E),v=a(629),j=a.n(v),O=a(40),k=a(90),w=a(91),x=a(103),N=a(54),P=a(99),M=a(257),C=a(153),S=a(266),I=a(496),_=a(214),D=a(221),R=a(349),q=a(316),z=a.n(q),T=a(19);function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function L(e){var t=Object(T.c)(),a=e.i,n=e.j,c=e.cellWidth,o=e.id,i=e.locations,l=e.palette,s=e.lang,u=e.history,m=e.user_id,g=e.posts,h=e.viewMode,b=B(r.a.useState(null),2),E=b[0],y=b[1],v=B(r.a.useState(o||null),2),j=v[0],k=v[1],w=B(r.a.useState(0),2),x=w[0],N=w[1],P=Boolean(E),M=P?"simple-popover":void 0,q=j===o,L=function(e){var t=0;h||g.map((function(a){return a.tags.map((function(a){return parseInt(a[0])===e?t++:t+=0}))})),N(t)};return r.a.createElement("td",{style:{height:c+"px",minWidth:c+"px",maxWidth:c+"px",padding:0,margin:0,border:"1px rgb(128,128,128,0.8) solid"}},i.length?r.a.createElement("div",{className:t.aboutGridContainer,onClick:function(e){y(e.currentTarget),L(j)},style:"number"==typeof j?{backgroundImage:"url("+i.find((function(e){return e.id===j})).img_url+")",backgroundSize:"contain",backgroundColor:i.find((function(e){return e.id===j})).color,overflow:"hidden"}:{backgroundSize:"contain",backgroundColor:"rgb(192,192,192,0.6)",overflow:"hidden"}}):"",r.a.createElement(_.a,{id:M,open:P,anchorEl:E,anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"}},r.a.createElement(p.a,{container:!0,className:"".concat(t.height12," ").concat(t.minWidth200px),direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(p.a,{item:!0,className:"".concat(t.mainGridBodyItem," ").concat(t.height11),style:{padding:"16px"}},i.length?r.a.createElement(p.a,{container:!0,className:"".concat(t.height12),direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(p.a,{item:!0,className:"".concat(t.height6," ").concat(t.minHeight20px)},r.a.createElement(p.a,{container:!0,className:"".concat(t.height12),direction:"row",justify:"center",alignItems:"stretch"},r.a.createElement(p.a,{item:!0,xs:10,style:{textAlign:"center",position:"relative"}},r.a.createElement(d.a,{className:"".concat(t.centerButton)},"number"==typeof j?"Ru"===s.currLang.current?i.find((function(e){return e.id===j})).name_rus:i.find((function(e){return e.id===j})).name_eng:s.currLang.texts.Nothink)),h?r.a.createElement(r.a.Fragment,null):r.a.createElement(p.a,{item:!0,xs:2},r.a.createElement(S.a,{onClick:function(){u.push({pathname:"/addlocation",defaultData:{id:j,name_rus:i.find((function(e){return e.id===j})).name_rus,name_eng:i.find((function(e){return e.id===j})).name_eng,img_url:i.find((function(e){return e.id===j})).img_url,color:i.find((function(e){return e.id===j})).color,prevUrl:"/dreammap"}})},disabled:"number"!=typeof j},r.a.createElement(z.a,{fontSize:"small"}))))),r.a.createElement(p.a,{item:!0,className:"".concat(t.height6)},r.a.createElement(p.a,{container:!0,direction:"row",justify:"space-around",alignItems:"center"},r.a.createElement(p.a,{item:!0},r.a.createElement(C.a,null,r.a.createElement(D.a,{disabled:h,value:"number"==typeof j?j:"",onChange:function(e){k(e.target.value),L(e.target.value)},MenuProps:{PaperProps:{style:{maxHeight:224,width:"auto"}}}},i.map((function(e,a){return r.a.createElement(I.a,{key:a,value:e.id},r.a.createElement(R.a,{className:t.smallAvatar,src:e.id?e.img_url:"https://static.thenounproject.com/png/1446402-200.png",style:"dark"===l.type?{filter:"invert(1)"}:{}}))}))))),h?r.a.createElement(r.a.Fragment,null):r.a.createElement(p.a,{item:!0},r.a.createElement(f.a,{disabled:0===x,onClick:function(){u.push({pathname:"/dreams",defaultData:{mode:"fromMap",location:i.find((function(e){return e.id===j})),prevUrl:"/dreammap"}})}},s.currLang.texts.CountDreams,": ",x))))):""),r.a.createElement(p.a,{item:!0,className:"".concat(t.mainGridBodyItem," ").concat(t.height1)},r.a.createElement(p.a,{container:!0,direction:"row",justify:"space-around",alignItems:"stretch",style:{padding:"16px"}},r.a.createElement(p.a,{item:!0},r.a.createElement(f.a,{className:t.poppupButton,variant:"contained",color:"secondary",onClick:function(){k(o),y(null)}},s.currLang.buttons.close)),h?r.a.createElement(r.a.Fragment,null):r.a.createElement(p.a,{item:!0},r.a.createElement(f.a,{className:t.poppupButton,disabled:q,variant:"contained",color:"primary",onClick:function(){var e={user_id:m,i:a,j:n};e.oldLoc=o,e.newLoc=j,O.l.post("/actions/users/updateusermap",e).then((function(e){})).catch((function(e){console.log(e)})),y(null)}},s.currLang.buttons.Save)))))))}L.propTypes={lang:l.a.object.isRequired,palette:l.a.object.isRequired};var A=Object(c.b)((function(e){return{lang:e.lang,palette:e.themeMode.palette}}),(function(e){return{}}))(L);function U(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var a=[],n=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,c=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw c}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var F=(window.innerWidth-32)/20,G=!0,J=!0;function H(e){var t=e.lang,a=e.themeMode,n=e.history,c=e.user_id,o=e.tags,i=e.tagsError,l=(e.tagsPending,e.fetchTags),h=e.userPosts,E=e.userPostsError,v=e.userPostsPending,O=e.fetchUserPosts,k=e.userMap,w=e.userMapError,x=e.userMapPending,C=e.fetchUserMap;i&&(console.log("DreamMap"),console.log(i),alert("Error")),E&&(console.log("DreamMap"),console.log(E),alert("Error")),w&&(console.log("DreamMap"),console.log(w),alert("Error"));var S=Object(T.c)(),I=Object(P.a)(a),_=W(r.a.useState(null),2),D=_[0],R=_[1],q=W(r.a.useState(null),2),z=q[0],B=q[1],L=W(r.a.useState(!1),2),H=L[0],K=L[1];v||null!=E||G||H||(G=!0,B(h)),x||null!=w||J||(J=!0,R(JSON.parse(k)));var Q=r.a.useCallback((function(e){J=!1,l(),C(e,Object(N.b)())}),[c]),V=r.a.useCallback((function(){G=!1,O(c,Object(N.b)())}),[c]);return r.a.useEffect((function(){void 0!==e.location.defaultData?"fromFriend"===e.location.defaultData.mode&&(K(!0),Q(e.location.defaultData.friend_id)):(Q(c),V())}),[Q,V]),r.a.createElement(M.a,{theme:I},r.a.createElement(m.a,null),r.a.createElement("div",{className:S.root},r.a.createElement(p.a,{container:!0,className:"".concat(S.height12),direction:"column",justify:"center",alignItems:"stretch"},r.a.createElement(p.a,{item:!0,className:"".concat(S.hiddenOverflow," ").concat(S.height2," ").concat(S.relativePosition),align:"center"},r.a.createElement(d.a,{variant:"h6",component:"div",className:"".concat(S.centerButton)},t.currLang.texts.DreamsMap," ",void 0!==e.location.defaultData?" "+e.location.defaultData.nickName:"")),r.a.createElement(p.a,{item:!0,className:"".concat(S.hiddenOverflow," ").concat(S.height9)},r.a.createElement("div",{style:{padding:16},className:"".concat(S.formControl," ").concat(S.fullMinWidthAbs)},x?r.a.createElement("div",{className:"".concat(S.formControl," ").concat(S.centerTextAlign)},r.a.createElement("div",{className:"".concat(S.inlineBlock," ").concat(S.relativePosition)},r.a.createElement(u.a,null)),r.a.createElement(d.a,{className:"".concat(S.relativePosition),component:"div"},t.currLang.texts.Loading)):r.a.createElement(s.TransformWrapper,{defaultScale:1.5,options:{minScale:.5,maxScale:2.5},zoomIn:{step:10},zoomOut:{step:10},doubleClick:{disabled:!0}},(function(e){var t,a,i,l=e.zoomIn,u=e.zoomOut,m=e.resetTransform;U(e,["zoomIn","zoomOut","resetTransform"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.TransformComponent,null,r.a.createElement("table",{style:{borderCollapse:"collapse"}},r.a.createElement("tbody",null,null!==D?(t=[],a=0,i=0,Object.keys(D).forEach((function(e){var l=[];Object.keys(D[e]).forEach((function(t){l.push(r.a.createElement(A,{key:"cell"+a+i,i:a,j:i,cellWidth:F,dreamMap:D,id:D[e][t].id,locations:o,history:n,user_id:c,posts:z,viewMode:H})),a++})),t.push(r.a.createElement("tr",{key:"row"+i},l)),i++,a=0})),t):r.a.createElement("tr",null,r.a.createElement("td",null))))),r.a.createElement(p.a,{container:!0,className:"tools",direction:"row",justify:"space-evenly",alignItems:"center",style:{marginTop:16}},r.a.createElement(p.a,{item:!0,xs:2,align:"center"}),r.a.createElement(p.a,{item:!0,xs:2,align:"center"},r.a.createElement(g.a,{size:"small",onClick:u},r.a.createElement(y.a,null))),r.a.createElement(p.a,{item:!0,xs:4,align:"center"},r.a.createElement(g.a,{size:"small",onClick:m},r.a.createElement(b.a,null))),r.a.createElement(p.a,{item:!0,xs:2,align:"center"},r.a.createElement(g.a,{size:"small",onClick:l},r.a.createElement(j.a,null))),r.a.createElement(p.a,{item:!0,xs:2,align:"center"})))})))),r.a.createElement(p.a,{item:!0,className:"".concat(S.mainGridBodyItem," ").concat(S.height1)},r.a.createElement(p.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center"},r.a.createElement(p.a,{item:!0},r.a.createElement(f.a,{className:S.actionButton,variant:"contained",color:"secondary",onClick:function(){void 0!==e.location.defaultData?"fromFriend"===e.location.defaultData.mode?n.push({pathname:e.location.defaultData.prevUrl,defaultData:{friend_id:e.location.defaultData.friend_id,prevUrl:"/dreammap"}}):n.push(e.location.defaultData.prevUrl):n.push("/")}},t.currLang.buttons.Back)),H?r.a.createElement(r.a.Fragment,null):r.a.createElement(p.a,{item:!0},r.a.createElement(f.a,{className:S.actionButton,variant:"contained",color:"primary",onClick:function(){n.push("/addlocation")}},t.currLang.buttons.add)))))))}H.propTypes={themeMode:l.a.object.isRequired,lang:l.a.object.isRequired,user_id:l.a.number.isRequired,tagsError:l.a.object.isRequired,tags:l.a.object.isRequired,tagsPending:l.a.object.isRequired,userPostsError:l.a.object.isRequired,userPosts:l.a.object.isRequired,userPostsPending:l.a.object.isRequired,userMapError:l.a.object.isRequired,userMap:l.a.object.isRequired,userMapPending:l.a.object.isRequired};t.default=Object(c.b)((function(e){return{themeMode:e.themeMode,lang:e.lang,user_id:e.auth.user.id,tagsError:Object(k.b)(e),tags:[{id:null}].concat(Object(k.a)(e)),tagsPending:Object(k.c)(e),userPostsError:Object(w.b)(e),userPosts:Object(w.a)(e),userPostsPending:Object(w.c)(e),userMapError:Object(x.b)(e),userMap:Object(x.a)(e),userMapPending:Object(x.c)(e)}}),(function(e){return Object(o.bindActionCreators)({fetchTags:O.f,fetchUserPosts:O.k,fetchUserMap:O.j},e)}))(H)}}]);
//# sourceMappingURL=17.index-bundle.js.map