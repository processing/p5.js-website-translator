(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{323:function(e,t,n){var r=n(333),o=n(327);e.exports={buildCardsData:function(e,t,n,r,o){var data=[];for(var c in r){if("Translated"===t){if(r[c]===o[c])continue}else if("To be translated"===t&&r[c]!==o[c])continue;var l={page:n,language:e,strKey:c,originalStr:r[c],translatedStr:o[c],cardColor:r[c]===o[c]?"border-left: 4px solid green;":"border: none"};data.push(l)}return data},buildEditedTranslatedFile:function(e,t){for(var n in t)e[n]=t[n];return e},getLanguages:function(e){return e.languages.filter((function(e){return"en"!==e}))},downloadFileJSON:function(e,t){var n=o.unflatten(t,{delimiter:"/"}),r=JSON.stringify(n,null,2),c=new Blob([r],{type:"application/json"}),a=document.createElement("a");a.download="reference_"+e,a.href=URL.createObjectURL(c),a.dataset.downloadurl=["application/json",a.download,a.href].join(":"),document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout((function(){URL.revokeObjectURL(a.href)}),1500)},downloadFileYAML:function(e,t){var n=o.unflatten(t,{delimiter:"/"}),c=r.safeDump(n),l=new Blob([c],{type:"application/x-yaml"}),a=document.createElement("a");a.download="website_"+e,a.href=URL.createObjectURL(l),a.dataset.downloadurl=["application/x-yaml",a.download,a.href].join(":"),document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout((function(){URL.revokeObjectURL(a.href)}),1500)}}},326:function(e,t,n){"use strict";n.r(t);n(48);var r=n(13),o=n(323),c=n.n(o),l={props:{page:{type:String,default:function(){return""}}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://raw.githubusercontent.com/processing/p5.js-website/main/package.json",t.next=3,e.$http.$get("https://raw.githubusercontent.com/processing/p5.js-website/main/package.json");case 3:n=t.sent,e.languages=c.a.getLanguages(n);case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{languages:[],language:"",originalFileSHA:"",translatedFileSHA:"",filterOption:"",filterOptions:["All","Translated","To be translated"]}},methods:{emitLang:function(e){this.$emit("setLang",this.language)},emitFilter:function(e){this.$emit("setFilter",this.filterOption)},downloadFile:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="p5js-website-translator.files.".concat(e.page,".").concat(e.language),t.next=3,e.$localForage.getItem(n);case 3:return r=t.sent,o="p5js-website-translator.changes.".concat(e.page,".").concat(e.language),t.next=7,e.$localForage.getItem(o);case 7:l=t.sent,d=c.a.buildEditedTranslatedFile(r.file,l),"reference"===e.page?c.a.downloadFileJSON(e.language,d):c.a.downloadFileYAML(e.language,d);case 10:case"end":return t.stop()}}),t)})))()},restoreFile:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="p5js-website-translator.changes.".concat(e.page,".").concat(e.language),t.next=3,e.$localForage.setItem(n,{});case 3:e.$nuxt.refresh();case 4:case"end":return t.stop()}}),t)})))()},getCommitSHAs:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="p5js-website-translator.files.".concat(e.page,".").concat(e.language),t.next=3,e.$localForage.getItem(n);case 3:return r=t.sent,o="p5js-website-translator.files.".concat(e.page,".").concat(e.language),t.next=7,e.$localForage.getItem(o);case 7:c=t.sent,e.originalFileSHA=r.commitSHA,e.translatedFileSHA=c.commitSHA;case 10:case"end":return t.stop()}}),t)})))()},isLanguageSet:function(e){return 0===e.length}},fetchOnServer:!1},d=n(72),f=n(100),m=n.n(f),v=n(198),h=n(405),w=n(140),x=n(406),j=n(410),F=n(409),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{staticClass:"d-flex justify-space-between"},[n("v-col",{attrs:{cols:"6",md:"4"}},[n("v-select",{attrs:{label:"Language",outlined:"",dense:"",items:e.languages},on:{change:e.emitLang},model:{value:e.language,callback:function(t){e.language=t},expression:"language"}})],1),e._v(" "),n("v-spacer"),e._v(" "),n("v-col",{attrs:{cols:"6",md:"4"}},[n("v-select",{attrs:{label:"Filter",outlined:"",dense:"",items:e.filterOptions,disabled:e.isLanguageSet(e.language)},on:{change:e.emitFilter},model:{value:e.filterOption,callback:function(t){e.filterOption=t},expression:"filterOption"}})],1),e._v(" "),n("v-col",{attrs:{cols:"6",md:"2"}},[n("v-btn",{attrs:{justified:"","min-height":"40",disabled:e.isLanguageSet(e.language)},on:{click:function(t){return e.restoreFile()}}},[e._v("\n      RESTORE\n    ")])],1),e._v(" "),n("v-col",{attrs:{cols:"6",md:"2"}},[n("v-btn",{staticClass:"white--text",attrs:{color:"green lighten-1","min-height":"40",download:"",disabled:e.isLanguageSet(e.language)},on:{click:function(t){return e.downloadFile()}}},[e._v("\n      DOWNLOAD\n      "),n("v-icon",{attrs:{right:""}},[e._v("mdi-download")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:v.a,VCol:h.a,VIcon:w.a,VRow:x.a,VSelect:j.a,VSpacer:F.a})},335:function(e,t,n){"use strict";n(48);var r=n(13),o={props:{source:{type:Object,default:function(){return{}}}},methods:{saveChange:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,c,l,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.source.strKey,r=e.source.translatedStr,o="p5js-website-translator.files.".concat(e.source.page,".").concat(e.source.language),t.next=5,e.$localForage.getItem(o);case 5:return c=t.sent,l="p5js-website-translator.changes.".concat(e.source.page,".").concat(e.source.language),t.next=9,e.$localForage.getItem(l);case 9:if(d=t.sent,r!==c.file[n]){t.next=17;break}if(!d[n]){t.next=15;break}return delete d[n],t.next=15,e.$localForage.setItem(l,d);case 15:t.next=22;break;case 17:return d||(d={}),d[n]=r,t.next=21,e.$localForage.setItem(l,d);case 21:e.$nuxt.refresh();case 22:case"end":return t.stop()}}),t)})))()},originalVal:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.source.strKey,r="p5js-website-translator.files.".concat(e.source.page,".").concat(e.source.language),t.next=4,e.$localForage.getItem(r);case 4:o=t.sent,c=o.file[n],e.source.translatedStr=c;case 7:case"end":return t.stop()}}),t)})))()},editedVal:function(){this.$nuxt.refresh()},restoreKey:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.source.strKey,r="p5js-website-translator.changes.".concat(e.source.page,".").concat(e.source.language),t.next=4,e.$localForage.getItem(r);case 4:return delete(o=t.sent)[n],t.next=8,e.$localForage.setItem(r,o);case 8:e.$nuxt.refresh();case 9:case"end":return t.stop()}}),t)})))()},isLangChosen:function(){return 0===this.source.language.length}}},c=n(72),l=n(100),d=n.n(l),f=n(198),m=n(315),v=n(314),h=n(405),w=n(309),x=n(140),j=n(406),F=n(407),$=n(408),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex"},[n("v-card",{staticClass:"my-3",attrs:{elevation:1}},[n("v-container",[n("div",{staticClass:"pl-2",style:e.source.cardColor},[n("v-row",[n("v-col",{staticClass:"pa-0",attrs:{cols:"4"}},[n("v-card-title",[e._v(e._s(e.source.strKey))])],1),e._v(" "),n("v-col",{staticClass:"col-8 pa-0"},[n("v-card-actions",{staticClass:"justify-end"},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:"",disabled:e.isLangChosen()},on:{mousedown:function(t){return e.originalVal()},mouseup:function(t){return e.editedVal()}}},"v-btn",o,!1),r),[n("v-icon",[e._v("mdi-compare")])],1)]}}])},[e._v(" "),n("span",[e._v("Compare")])]),e._v(" "),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:"",disabled:e.isLangChosen()},on:{click:function(t){return e.restoreKey()}}},"v-btn",o,!1),r),[n("v-icon",[e._v("mdi-restore")])],1)]}}])},[e._v(" "),n("span",[e._v("Restore")])])],1)],1)],1),e._v(" "),n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("v-card-text",{staticClass:"pa-0"},[e._v(e._s(e.source.originalStr))])],1),e._v(" "),n("v-col",{attrs:{cols:"6"}},[n("v-textarea",{attrs:{"auto-grow":"",outlined:"",rows:"1"},on:{change:e.saveChange},model:{value:e.source.translatedStr,callback:function(t){e.$set(e.source,"translatedStr",t)},expression:"source.translatedStr"}})],1)],1)],1)])],1)],1)}),[],!1,null,null,null);t.a=component.exports;d()(component,{VBtn:f.a,VCard:m.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VCol:h.a,VContainer:w.a,VIcon:x.a,VRow:j.a,VTextarea:F.a,VTooltip:$.a})},411:function(e,t,n){"use strict";n.r(t);n(48);var r=n(13),o=n(327),c=n.n(o),l=n(337),d=n.n(l),f=n(335),m=n(326),v=n(323),h=n.n(v),w={components:{"virtual-list":d.a,"tool-bar":m.default},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,d,f,m,v,w,x,j,F,$,_,k,O,S,y,C;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={},r="p5js-website-translator.files.reference.en",t.next=4,e.$localForage.getItem(r);case 4:if(!(o=t.sent)){t.next=9;break}n=o.file,t.next=22;break;case 9:return"https://raw.githubusercontent.com/processing/p5.js-website/main/src/data/reference/en.json",t.next=12,e.$http.$get("https://raw.githubusercontent.com/processing/p5.js-website/main/src/data/reference/en.json");case 12:return l=t.sent,"https://api.github.com/repos/processing/p5.js-website/commits?path=src/data/reference/en.json",t.next=16,e.$http.$get("https://api.github.com/repos/processing/p5.js-website/commits?path=src/data/reference/en.json");case 16:return d=t.sent,f=d[0].sha,n=c.a.flatten(l,{delimiter:"/"}),m={commitSHA:f,file:n},t.next=22,e.$localForage.setItem(r,m);case 22:if(v={},!e.language){t.next=52;break}return w="p5js-website-translator.files.reference."+e.language,t.next=27,e.$localForage.getItem(w);case 27:if(!(x=t.sent)){t.next=36;break}return j="p5js-website-translator.changes.reference."+e.language,t.next=32,e.$localForage.getItem(j);case 32:F=t.sent,v=h.a.buildEditedTranslatedFile(x.file,F),t.next=52;break;case 36:return $="https://raw.githubusercontent.com/processing/p5.js-website/main/src/data/reference/"+e.language+".json",t.next=39,e.$http.$get($);case 39:return _=t.sent,k="https://api.github.com/repos/processing/p5.js-website/commits?path=src/data/reference/"+e.language+".json",t.next=43,e.$http.$get(k);case 43:return O=t.sent,S=O[0].sha,v=c.a.flatten(_,{delimiter:"/"}),y={commitSHA:S,file:v},t.next=49,e.$localForage.setItem(w,y);case 49:return C="p5js-website-translator.changes.reference."+e.language,t.next=52,e.$localForage.setItem(C,{});case 52:e.data=h.a.buildCardsData(e.language,e.filterOption,"reference",n,v);case 53:case"end":return t.stop()}}),t)})))()},data:function(){return{item:f.a,data:[],strKey:"",language:"",filterOption:""}},methods:{setLanguage:function(e){this.language=e,this.$nuxt.refresh()},setFilter:function(e){this.filterOption=e,this.$nuxt.refresh()}},fetchOnServer:!1},x=n(72),j=n(100),F=n.n(j),$=n(336),component=Object(x.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[n("tool-bar",{attrs:{page:"reference"},on:{setLang:function(t){return e.setLanguage(t)},setFilter:function(t){return e.setFilter(t)}}}),e._v(" "),n("virtual-list",{staticClass:"list",staticStyle:{height:"100vh","overflow-y":"auto",width:"100%"},attrs:{"data-key":"strKey","data-sources":e.data,"data-component":e.item,"estimate-size":50,keeps:50}})],1)}),[],!1,null,null,null);t.default=component.exports;F()(component,{ToolBar:n(326).default}),F()(component,{VLayout:$.a})}}]);