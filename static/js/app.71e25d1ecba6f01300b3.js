webpackJsonp([1],{"6ufL":function(e,t){},IWCv:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("div",{staticClass:"content-container"},[n("router-link",{staticClass:"logo",attrs:{to:"/"}},[e._v("Home")]),e._v(" "),e.isLoggedIn?n("router-link",{staticClass:"nav-link",attrs:{to:"/account"}},[e._v("My account")]):e._e(),e._v(" "),n("router-link",{staticClass:"nav-link",attrs:{to:"/messages"}},[e._v("Messages")]),e._v(" "),n("router-link",{staticClass:"nav-link",attrs:{to:"/premium"}},[e._v("Get premium")]),e._v(" "),n("router-link",{staticClass:"nav-link",attrs:{to:"/contact"}},[e._v("Contact")]),e._v(" "),e.isLoggedIn?e._e():n("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[e._v("Login")])],1)])},staticRenderFns:[]};var i=n("VU/8")({name:"Header",props:["isLoggedIn"]},a,!1,function(e){n("yvXG")},"data-v-1c265f8e",null).exports,r={name:"Header2",props:["isLoggedIn"],data:function(){return{isOpened:!1}},methods:{toggleMenu:function(){console.log("Got in"),this.isOpened=!this.isOpened}}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",[s("div",{staticClass:"content-container"},[s("router-link",{staticClass:"logo",attrs:{to:"/"}},[e._v("Home")]),e._v(" "),s("div",{staticClass:"drop-down-menu"},[s("div",{staticClass:"icon",on:{click:e.toggleMenu}},[e.isOpened?s("img",{attrs:{src:n("boHS")}}):s("img",{attrs:{src:n("uSDP")}})]),e._v(" "),e.isOpened?s("div",{staticClass:"nav-list"},[e.isLoggedIn?s("router-link",{staticClass:"nav-link",attrs:{to:"/account"}},[e._v("My account")]):e._e(),e._v(" "),s("router-link",{staticClass:"nav-link",attrs:{to:"/messages"}},[e._v("Messages")]),e._v(" "),s("router-link",{staticClass:"nav-link",attrs:{to:"/premium"}},[e._v("Get premium")]),e._v(" "),s("router-link",{staticClass:"nav-link",attrs:{to:"/contact"}},[e._v("Contact")]),e._v(" "),e.isLoggedIn?e._e():s("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[e._v("Login")])],1):e._e()])],1)])},staticRenderFns:[]};var c=n("VU/8")(r,o,!1,function(e){n("WwfO")},"data-v-8a0a01ce",null).exports,l={name:"Header2",props:["isLoggedIn"],data:function(){return{isOpened:!1}},methods:{toggleMenu:function(){console.log("Got in"),this.isOpened=!this.isOpened}}},u={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",[s("div",{staticClass:"content-container"},[s("div",{staticClass:"drop-down-menu"},[s("div",{staticClass:"icon",on:{click:e.toggleMenu}},[e.isOpened?s("img",{attrs:{src:n("boHS")}}):s("img",{attrs:{src:n("uSDP")}})]),e._v(" "),e.isOpened?s("div",{staticClass:"nav-list"},[e.isLoggedIn?s("router-link",{staticClass:"nav-link",attrs:{to:"/account"}},[e._v("My account")]):e._e(),e._v(" "),s("router-link",{staticClass:"nav-link",attrs:{to:"/messages"}},[e._v("Messages")]),e._v(" "),s("router-link",{staticClass:"nav-link",attrs:{to:"/premium"}},[e._v("Get premium")]),e._v(" "),s("router-link",{staticClass:"nav-link",attrs:{to:"/contact"}},[e._v("Contact")]),e._v(" "),e.isLoggedIn?e._e():s("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[e._v("Login")])],1):e._e()]),e._v(" "),s("router-link",{staticClass:"logo",attrs:{to:"/"}},[e._v("Home")])],1)])},staticRenderFns:[]};var d=n("VU/8")(l,u,!1,function(e){n("t7A5")},"data-v-4c0a3036",null).exports,m={name:"HeaderSelect",props:["isVisible","selectHeader","currentHeader"],methods:{selectChange:function(e){this.selectHeader(parseInt(e.target.value))}}},v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-select",class:{visible:e.isVisible}},[n("h2",[e._v("Choose navigation:")]),e._v(" "),n("label",{staticClass:"radio-container"},[n("input",{attrs:{type:"radio",name:"headers",value:"1"},domProps:{checked:1===e.currentHeader},on:{change:e.selectChange}}),e._v(" "),n("span",{staticClass:"checkmark"}),e._v("\n    Navigation 1\n  ")]),e._v(" "),n("label",{staticClass:"radio-container"},[n("input",{attrs:{type:"radio",name:"headers",value:"2"},domProps:{checked:2===e.currentHeader},on:{change:e.selectChange}}),e._v(" "),n("span",{staticClass:"checkmark"}),e._v("\n    Navigation 2\n  ")]),e._v(" "),n("label",{staticClass:"radio-container"},[n("input",{attrs:{type:"radio",name:"headers",value:"3"},domProps:{checked:3===e.currentHeader},on:{change:e.selectChange}}),e._v(" "),n("span",{staticClass:"checkmark"}),e._v("\n    Navigation 3\n  ")])])},staticRenderFns:[]};var p=n("VU/8")(m,v,!1,function(e){n("NdcW")},"data-v-630b1006",null).exports,g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("footer",{staticClass:"footer"},[t("div",{staticClass:"content-container"},[t("p",[t("router-link",{staticClass:"nav-link",attrs:{to:"/contact"}},[this._v("Contact")])],1),this._v(" "),t("p",[this._v("Created by Tomasz Morawski")])])])},staticRenderFns:[]};var h=n("VU/8")({name:"FooterDefault"},g,!1,function(e){n("TfCo")},"data-v-67184624",null).exports,_=n("mvHQ"),f=n.n(_),C=n("Dd8w"),I=n.n(C),k=n("Zrlr"),w=n.n(k),b=n("wxAW"),H=n.n(b),M=function(e,t){return t-e},y=new(function(){function e(){w()(this,e),this.startDate=null,this.endDate=null,this.pageViews=[],this.clicks=[]}return H()(e,[{key:"start",value:function(e){this.startDate=new Date,this.pageView(e)}},{key:"pageView",value:function(e){var t=new Date;this.pageViews.length>0&&(this.pageViews.slice(-1)[0].endDate=t),this.pageViews.push({startDate:t,routeName:e})}},{key:"trackClick",value:function(e,t){this.clicks.push({routeName:e,element:t.tagName+"#"+(t.id||"")+"."+t.classList.value})}},{key:"save",value:function(){var e=new Date;this.pageViews&&(this.pageViews.slice(-1)[0].endDate=e),this.endDate=e;var t={startDate:this.startDate.toISOString(),endDate:this.endDate.toISOString(),duration:M(this.startDate,this.endDate),pageViews:this.pageViews.map(function(e){return I()({},e,{startDate:e.startDate.toISOString(),endDate:e.endDate.toISOString(),duration:M(e.startDate,e.endDate)})}),clicks:this.clicks};console.log(t);fetch("http://tomaszmoraws.nazwa.pl/usability/api/save",{body:f()(t),headers:{"Content-type":"application/json",Accept:"application/json"},method:"POST"})}}]),e}()),D={name:"App",components:{Header1:i,Header2:c,Header3:d,HeaderSelect:p,FooterDefault:h},data:function(){return{currentHeader:parseInt(localStorage.getItem("currentHeader"))||Math.floor(3*Math.random())+1,headerSelectVisible:!1,user:{isLoggedIn:!1,username:"",password:""}}},methods:{selectHeader:function(e){e>0&&(this.currentHeader=e,localStorage.setItem("currentHeader",this.currentHeader))},hideSelectHeader:function(){this.headerSelectVisible=!1},showSelectHeader:function(){this.headerSelectVisible=!0},updateUser:function(e){var t=e.username,n=e.password,s=e.isLoggedIn;this.user.username=t,this.user.password=n,this.user.isLoggedIn=s}},mounted:function(){var e=this;document.addEventListener("keydown",function(t){var n=t.key,s=t.ctrlKey;"o"===n&&s?e.showSelectHeader():"h"===n&&s&&e.hideSelectHeader()}),localStorage.setItem("currentHeader",this.currentHeader),y.start(this.$route.name),document.addEventListener("click",function(t){y.trackClick(e.$route.name,t.target)},!0)}},S={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[1===e.currentHeader?n("header1",{attrs:{"is-logged-in":e.user.isLoggedIn}}):e._e(),e._v(" "),2===e.currentHeader?n("header2",{attrs:{"is-logged-in":e.user.isLoggedIn}}):e._e(),e._v(" "),3===e.currentHeader?n("header3",{attrs:{"is-logged-in":e.user.isLoggedIn}}):e._e(),e._v(" "),n("router-view",{attrs:{user:e.user,updateUser:e.updateUser}}),e._v(" "),n("header-select",{attrs:{"is-visible":e.headerSelectVisible,"select-header":e.selectHeader,currentHeader:e.currentHeader}}),e._v(" "),n("footer-default")],1)},staticRenderFns:[]};var L=n("VU/8")(D,S,!1,function(e){n("ZaQ+")},null,null).exports,A=n("/ocq"),P={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"post"},[n("h2",{staticClass:"post-title"},[e._v(e._s(e.postData.title))]),e._v(" "),n("p",{staticClass:"post-content"},[e._v(e._s(e.postData.content))]),e._v(" "),n("p",{staticClass:"comment"},[n("router-link",{attrs:{to:e.postUrl}},[e._v("Comments")])],1)])},staticRenderFns:[]};var x={posts:[{id:0,title:"Very urgent news",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. ",comments:[{author:"Angela045",content:"Omg, I hope they will be ok!",date:"09.06.2018"},{author:"Ned Stark",content:"Winter is coming",date:"09.06.2018"}]},{id:1,title:"Also very urgent news",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. ",comments:[{author:"Angela045",content:"Omg, I hope they will be ok!",date:"09.06.2018"},{author:"Ned Stark",content:"Winter is coming",date:"09.06.2018"}]},{id:2,title:"Another urgent news",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. ",comments:[{author:"Angela045",content:"Omg, I hope they will be ok!",date:"09.06.2018"},{author:"Ned Stark",content:"Winter is coming",date:"09.06.2018"}]},{id:3,title:"Not so urgent news",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. ",comments:[{author:"Angela045",content:"Omg, I hope they will be ok!",date:"09.06.2018"},{author:"Ned Stark",content:"Winter is coming",date:"09.06.2018"}]},{id:4,title:"Let's say urgent news",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam. Quisque semper justo at risus. Donec venenatis, turpis vel hendrerit interdum, dui ligula ultricies purus, sed posuere libero dui id orci. ",comments:[{author:"Angela045",content:"Omg, I hope they will be ok!",date:"09.06.2018"},{author:"Ned Stark",content:"Winter is coming",date:"09.06.2018"}]}]},V={name:"Home",data:function(){return{posts:x.posts}},components:{Post:n("VU/8")({name:"Post",props:["postData"],computed:{postUrl:function(){return"/comments/"+this.postData.id}}},P,!1,function(e){n("SzcW")},"data-v-c3639cc8",null).exports}},j={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"content-container"},[t("h1",[this._v("Recent news")]),this._v(" "),this._l(this.posts,function(e){return t("post",{key:e.id,staticClass:"post",attrs:{"post-data":e}})})],2)},staticRenderFns:[]};var z=n("VU/8")(V,j,!1,function(e){n("cxiQ")},"data-v-d14948d6",null).exports,N={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"content-container"},[this._v("My Account")])},staticRenderFns:[]};var O=n("VU/8")({name:"MyAccount"},N,!1,function(e){n("6ufL")},"data-v-646d8296",null).exports,E={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"content-container"},[this._v("\n  Actually you can't contact me\n")])},staticRenderFns:[]};var R=n("VU/8")({name:"Contact"},E,!1,function(e){n("IWCv")},"data-v-261f7b8c",null).exports,U={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"content-container"},[this._v("\n  There's no premium :(\n")])},staticRenderFns:[]};var Z=n("VU/8")({name:"GetPremium"},U,!1,function(e){n("kKeF")},"data-v-7b7563d9",null).exports,W={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"content-container"},[this._v("\n  There you would see some messages between you and other users if I wasn't to lazy to implement it.\n")])},staticRenderFns:[]};var q=n("VU/8")({name:"Messages"},W,!1,function(e){n("ZXda")},"data-v-4daecb4c",null).exports,G={name:"Comments",data:function(){return{posts:x.posts,addingComment:!1,comment:""}},props:["user"],methods:{startWritingComment:function(){if(!this.user.isLoggedIn)return alert("You need to login first"),null;this.addingComment=!0},save:function(){var e={content:this.comment,date:(new Date).toLocaleString("en-GB",{year:"numeric",month:"numeric",day:"numeric"}),author:this.user.username};this.addingComment=!1,this.postData.comments=this.postData.comments.concat([e]),this.comment="",y.save("home")}},computed:{postData:function(){var e=this.$route.params.newsId;return this.posts[e]}}},T={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-container"},[n("div",{staticClass:"post"},[n("h2",{staticClass:"post-title"},[e._v(e._s(e.postData.title))]),e._v(" "),n("p",{staticClass:"post-content"},[e._v(e._s(e.postData.content))])]),e._v(" "),n("ul",{staticClass:"comments"},e._l(e.postData.comments,function(t){return n("li",{staticClass:"comment"},[n("div",{staticClass:"top-bar"},[n("div",{staticClass:"date"},[e._v(e._s(t.date))]),e._v(" "),n("div",{staticClass:"author"},[e._v(e._s(t.author))])]),e._v(" "),n("div",{staticClass:"content"},[e._v("\n        "+e._s(t.content)+"\n      ")])])})),e._v(" "),e.addingComment?e._e():n("button",{staticClass:"add-comment",on:{click:e.startWritingComment}},[e._v("Add comment")]),e._v(" "),e.addingComment?n("div",{staticClass:"new-comment"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.comment,expression:"comment"}],attrs:{name:"",id:""},domProps:{value:e.comment},on:{input:function(t){t.target.composing||(e.comment=t.target.value)}}}),e._v(" "),n("button",{staticClass:"save",on:{click:e.save}},[e._v("Save")])]):e._e()])},staticRenderFns:[]};var F=n("VU/8")(G,T,!1,function(e){n("VSNL")},"data-v-42f3abac",null).exports,$={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-container"},[n("div",{staticClass:"login-box"},[n("span",[e._v("username")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._v(" "),n("span",[e._v("password")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),n("button",{staticClass:"login-button",on:{click:e.save}},[e._v("Login")]),e._v(" "),n("p",[e._v("It's not even real login page. You can put whatever you want in here.")])])])},staticRenderFns:[]};var B=n("VU/8")({name:"Login",props:["user","updateUser"],data:function(){return{username:"",password:""}},methods:{save:function(){this.updateUser({username:this.username,password:this.password,isLoggedIn:!0}),this.$router.go(-1)}}},$,!1,function(e){n("ddXA")},"data-v-17ffbd6a",null).exports;s.a.use(A.a);var Q=new A.a({routes:[{path:"/",name:"Home",component:z},{path:"/account",name:"MyAccount",component:O},{path:"/contact",name:"Contact",component:R},{path:"/premium",name:"GetPremium",component:Z},{path:"/messages",name:"Messages",component:q},{path:"/comments/:newsId",name:"Comments",component:F},{path:"/login",name:"Login",component:B}],base:"usability"});Q.beforeEach(function(e,t,n){y.pageView(e.name),n()});var X=Q;s.a.config.productionTip=!1,new s.a({el:"#app",router:X,components:{App:L},template:"<App/>"})},NdcW:function(e,t){},SzcW:function(e,t){},TfCo:function(e,t){},VSNL:function(e,t){},WwfO:function(e,t){},ZXda:function(e,t){},"ZaQ+":function(e,t){},boHS:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyIiB3aWR0aD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8bGluZSB4MT0iMCIgeTE9IjAiIHgyPSIzMSIgeTI9IjMxIiBzdHlsZT0ic3Ryb2tlOiNDMEIyODM7c3Ryb2tlLXdpZHRoOjIiIC8+CiAgPGxpbmUgeDE9IjAiIHkxPSIzMSIgeDI9IjMxIiB5Mj0iMCIgc3R5bGU9InN0cm9rZTojQzBCMjgzO3N0cm9rZS13aWR0aDoyIiAvPgo8L3N2Zz4K"},cxiQ:function(e,t){},ddXA:function(e,t){},kKeF:function(e,t){},t7A5:function(e,t){},uSDP:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyIiB3aWR0aD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8bGluZSB4MT0iMCIgeTE9IjEwIiB4Mj0iMzIiIHkyPSIxMCIgc3R5bGU9InN0cm9rZTojQzBCMjgzO3N0cm9rZS13aWR0aDoyIiAvPgogIDxsaW5lIHgxPSIwIiB5MT0iMTYiIHgyPSIzMiIgeTI9IjE2IiBzdHlsZT0ic3Ryb2tlOiNDMEIyODM7c3Ryb2tlLXdpZHRoOjIiIC8+CiAgPGxpbmUgeDE9IjAiIHkxPSIyMiIgeDI9IjMyIiB5Mj0iMjIiIHN0eWxlPSJzdHJva2U6I0MwQjI4MztzdHJva2Utd2lkdGg6MiIgLz4KPC9zdmc+Cg=="},yvXG:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.71e25d1ecba6f01300b3.js.map