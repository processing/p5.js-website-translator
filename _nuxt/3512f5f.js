(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{178:function(t,e,n){var content=n(231);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("034b8fe3",content,!0,{sourceMap:!1})},180:function(t,e,n){var content=n(237);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("9df88428",content,!0,{sourceMap:!1})},197:function(t,e,n){"use strict";var o={data:function(){return{drawer:null,items:[{icon:"mdi-home",text:"Home",to:"/"},{heading:"Sections"},{icon:"mdi-folder",text:"Reference (JSON)",to:"/reference"},{icon:"mdi-folder",text:"Website (YAML)",to:"/website"},{icon:"mdi-folder",text:"Examples",to:"/examples"}],title:"p5.js-website-translator"}}},r=(n(236),n(72)),l=n(100),c=n.n(l),d=n(307),v=n(312),f=n(308),m=n(309),_=n(140),x=n(141),h=n(142),k=n(93),w=n(143),V=n(61),y=n(310),A=n(311),L=n(299),N=n(192),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[t._l(t.items,(function(e){return[e.heading?n("v-subheader",{key:e.heading},[t._v("\n          "+t._s(e.heading)+"\n        ")]):e.children?n("v-list-group",{key:e.text,attrs:{"prepend-icon":e.model?e.icon:e["icon-alt"],"append-icon":""},scopedSlots:t._u([{key:"activator",fn:function(){return[n("v-list-item-content",[n("v-list-item-title",[t._v("\n                "+t._s(e.text)+"\n              ")])],1)]},proxy:!0}],null,!0),model:{value:e.model,callback:function(n){t.$set(e,"model",n)},expression:"item.model"}},[t._v(" "),t._l(e.children,(function(o,i){return n("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[o.icon?n("v-list-item-action",[n("v-icon",[t._v(t._s(o.icon))])],1):t._e(),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n                "+t._s(o.text)+"\n              ")])],1)],1)}))],2):n("v-list-item",{key:e.text,attrs:{to:e.to,router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n              "+t._s(e.text)+"\n            ")])],1)],1)]}))],2)],1),t._v(" "),n("v-app-bar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,app:"",color:"pink",dark:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-toolbar-title",{staticClass:"ml-0 pl-4",staticStyle:{width:"300px"}},[n("span",{domProps:{textContent:t._s(t.title)}})])],1),t._v(" "),n("v-main",[n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("nuxt")],1)],1)],1)}),[],!1,null,"42701644",null);e.a=component.exports;c()(component,{VApp:d.a,VAppBar:v.a,VAppBarNavIcon:f.a,VContainer:m.a,VIcon:_.a,VList:x.a,VListGroup:h.a,VListItem:k.a,VListItemAction:w.a,VListItemContent:V.a,VListItemTitle:V.b,VMain:y.a,VNavigationDrawer:A.a,VSubheader:L.a,VToolbarTitle:N.a})},206:function(t,e,n){n(207),t.exports=n(208)},230:function(t,e,n){"use strict";n(178)},231:function(t,e,n){(e=n(14)(!1)).push([t.i,"h1[data-v-11696f22]{font-size:20px}",""]),t.exports=e},236:function(t,e,n){"use strict";n(180)},237:function(t,e,n){(e=n(14)(!1)).push([t.i,".v-application[data-v-42701644]{background-color:#f5f5f5}",""]),t.exports=e},62:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(230),n(72)),l=n(100),c=n.n(l),d=n(307),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("Home page")])],1)}),[],!1,null,"11696f22",null);e.a=component.exports;c()(component,{VApp:d.a})}},[[206,7,2,8]]]);