(this.webpackJsonpNoTR=this.webpackJsonpNoTR||[]).push([[0],{30:function(e,n,t){e.exports={Button:"style_Button__jE-WW",Button__upperCase:"style_Button__upperCase__fAzJ4",Button_waveAnimation:"style_Button_waveAnimation__gey_3",Button_waveAnimation__play:"style_Button_waveAnimation__play__3iO9F",weave:"style_weave__165ZZ"}},31:function(e,n,t){e.exports={UserMenu:"style_UserMenu__2qPsM","UserMenu_content-wrapper":"style_UserMenu_content-wrapper__1QnQ-",UserMenu_avatar:"style_UserMenu_avatar__9aonS"}},53:function(e,n,t){},56:function(e,n,t){},57:function(e,n,t){},62:function(e,n,t){},63:function(e,n,t){"use strict";t.r(n);var r=t(6),c=t.n(r),a=t(40),u=t.n(a),s=(t(53),t(7));var i=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(k,{children:Object(s.jsx)(z,{})})})},o=t(13),l=t(0),j=t.n(l),b=t(1),p=t(27),f=t(41),d=t(46),O=t(35),h=Object(f.a)({apiKey:"AIzaSyDqN77ygdYm-9SuwTLC0xddMCuh8dI1EPs",authDomain:"notr-6524b.firebaseapp.com",projectId:"notr-6524b",storageBucket:"notr-6524b.appspot.com",messagingSenderId:"250836179113",appId:"1:250836179113:web:3c29aeedee5b4db33ef1b8",measurementId:"G-MZR62J6FEF"}),_=(Object(d.a)(h),new O.a),m=Object(O.b)(h);function v(e){return function(n){return!!n&&!!n[e]}}var x=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.c)(m,_).then((function(e){var n=p.a.credentialFromResult(e);null===n||void 0===n||n.accessToken;return e.user})).catch((function(e){e.code,e.message,e.email;return p.a.credentialFromError(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(b.a)(j.a.mark((function e(n,t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.onAuthStateChanged(function(){var e=Object(b.a)(j.a.mark((function e(r){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=4;break}n(r),e.next=10;break;case 4:if(!t){e.next=10;break}return e.next=7,x();case 7:c=e.sent,v("displayName")(c)&&n(c);case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),y=function(){var e=Object(b.a)(j.a.mark((function e(n,t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m.signOut().then((function(){t&&t("success")}),(function(){t&&t("error")})).finally((function(){return n()}));case 1:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),w={user:null,checkAuth:function(){return null},logIn:function(){return null},logOut:function(){return null}},B=Object(r.createContext)(w),M=function(e){var n=e.children,t=Object(r.useState)(null),c=Object(o.a)(t,2),a=c[0],u=c[1],i=Object(r.useCallback)((function(e){g((function(e){return u(e)}),e)}),[]),l=Object(r.useCallback)((function(){i(!0)}),[]),j=Object(r.useCallback)((function(){y((function(){return u(null)}),(function(e){console.log(e)}))}),[]);return Object(r.useEffect)((function(){i()}),[]),Object(s.jsx)(B.Provider,{value:{user:a,checkAuth:i,logIn:l,logOut:j},children:n})},k=function(e){var n=e.children;return Object(s.jsx)(M,{children:n})},N=t(23),C=(t(56),function(e){var n=e.isOpen,t=e.setOpen,c=e.className,a=e.color,u=Object(r.useMemo)((function(){return{background:a}}),[a]);return Object(s.jsxs)("button",{className:Object(N.a)("BurgerMenu_root",c),onClick:function(){t(!n)},children:[Object(s.jsx)("div",{className:Object(N.a)("BurgerMenu_line",n&&"BurgerMenu_line__first-line-opened"),style:u}),Object(s.jsx)("div",{className:Object(N.a)("BurgerMenu_line",n&&"BurgerMenu_line__second-line-opened"),style:u}),Object(s.jsx)("div",{className:Object(N.a)("BurgerMenu_line",n&&"BurgerMenu_line__third-line-opened"),style:u})]})}),A=t(36),S=t(48),I=t(30),T=t.n(I),U=["upperCase","className","onClick","children"],E=function(){var e=[];return{pushTimeout:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=setTimeout((function(){n()}),t);e.push(r)},clearTimeouts:function(){e.forEach((function(e){clearTimeout(e)})),e.length=0}}}(),F=E.clearTimeouts,R=E.pushTimeout,D=function(e){var n=e.upperCase,t=e.className,c=e.onClick,a=e.children,u=Object(S.a)(e,U),i=Object(r.useState)(null),l=Object(o.a)(i,2),j=l[0],b=l[1],p=Object(r.useCallback)((function(){b(null)}),[]),f=Object(r.useMemo)((function(){return function(e,n){var t=0;return function(){var r=Number(new Date);r-t>=n&&(e(),t=r)}}((function(){p(),F()}),300)}),[]);return Object(s.jsxs)("button",Object(A.a)(Object(A.a)({},u),{},{className:Object(N.a)(t,T.a.Button,n&&T.a.Button__upperCase),onClick:function(e){c&&c(e),f();var n=e.clientX,t=e.clientY,r=e.currentTarget;R((function(){b({x:n-r.offsetLeft,y:t-r.offsetTop})}))},children:[Object(s.jsx)("span",{className:Object(N.a)(T.a.Button_waveAnimation,j&&T.a.Button_waveAnimation__play),style:{left:null===j||void 0===j?void 0:j.x,top:null===j||void 0===j?void 0:j.y},onAnimationEnd:p}),a]}))},J=t(31),P=t.n(J),L=function(){var e=Object(r.useContext)(B),n=e.user,t=e.logOut,c=e.logIn;return Object(s.jsx)("div",{className:P.a.UserMenu,children:n?Object(s.jsx)("div",{className:P.a["UserMenu_content-wrapper"],onContextMenu:function(e){e.preventDefault(),t()},children:Object(s.jsx)("img",{src:n.photoURL||"",alt:n.displayName||"",className:P.a.UserMenu_avatar})}):Object(s.jsx)(D,{className:P.a["UserMenu_login-button"],onClick:c,children:"log in"})})},Z=(t(57),function(e){var n=e.isSideBarOpen,t=e.setIsSideBarOpen;return Object(s.jsxs)("header",{className:"header",children:[Object(s.jsx)(C,{isOpen:n,setOpen:t}),Object(s.jsx)("div",{children:Object(s.jsx)(L,{})})]})}),q=function(){return Object(s.jsx)("div",{})},z=function(){var e=Object(r.useState)(!1),n=Object(o.a)(e,2),t=n[0],c=n[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)(Z,{isSideBarOpen:t,setIsSideBarOpen:c}),Object(s.jsxs)("div",{children:[Object(s.jsx)(q,{}),Object(s.jsx)(G,{})]})]})},Q=t(43),W=t(11),Y=[{path:"/notes",component:function(){return Object(s.jsx)("div",{children:"Notes PAge"})}},{path:"/",redirect:"/notes"},{path:"/main",component:function(){return Object(s.jsx)("div",{children:"Main page"})}},{path:"*",component:function(){return Object(s.jsx)("div",{children:"404 page"})}}],G=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("main",{children:Object(s.jsx)(Q.a,{children:Object(s.jsx)(W.d,{children:Y.map((function(e){var n=e.component,t=e.path,r=e.redirect;return n?Object(s.jsx)(W.b,{exact:!0,path:t,children:n}):r?Object(s.jsx)(W.a,{exact:!0,from:t,to:r}):null}))})})})})};t(62);u.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(i,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.1d9452dd.chunk.js.map