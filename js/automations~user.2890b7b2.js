(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["automations~user"],{"10be":function(t,e,n){"use strict";n("271d")},"1e6a":function(t,e,n){"use strict";var a=n("5530");e["a"]={methods:{installAutomation:function(t){var e=Object(a["a"])(Object(a["a"])({},t),{},{id:t.objectId}),n=new CustomEvent("ihelpers",{detail:{action:"installAutomation",data:e}});document.dispatchEvent(n)}}}},"267e":function(t,e,n){"use strict";n.d(e,"d",(function(){return a})),n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u}));n("99af");var a={INSTALL_AUTOMATION:"installAutomation",INSTALL_DONE:"installDone"},r={HIGHLIGHT_ENGLISH_SYNTAX:"highlightEnglishSyntax",KILL_ELEMENT:"killElement",READ_MODE:"readMode",ZEN_MODE:"zenMode",PICTURE_IN_PICTURE:"pictureInPicture",HASH_ELEMENT:"hashElement",CODE_COPY:"codeCopy",GOTO_ELEMENT:"gotoElement",DOWNLOAD:"download",FULL_SCREEN:"fullScreen",TIME_UPDATE:"timeupdate",CLICK:"click"},i=[{value:r.READ_MODE,label:"Read Mode",args:[{tips:"metaKey",name:"metaKey",type:"boolean",value:!1,defaultValue:!1}]},{value:r.ZEN_MODE,label:"Zen Mode",args:[{tips:"Text to be displayed",name:"word",type:"string",value:"Zen",defaultValue:"Zen"},{tips:"How long to delay displaying the page",name:"delay",type:"string",value:0,defaultValue:0,placeholder:"0 means never display"},{tips:"Background Color",name:"bgcolor",type:"string",value:"#35363a",defaultValue:"#35363a"},{tips:"Font Color",name:"color",type:"string",value:"#ffffff",defaultValue:"#ffffff"}]},{value:r.KILL_ELEMENT,label:"Kill Element",args:[{tips:"metaKey",name:"metaKey",type:"boolean",value:!1,defaultValue:!1}]},{value:r.PICTURE_IN_PICTURE,label:"PIP Mode",args:[]},{value:r.HIGHLIGHT_ENGLISH_SYNTAX,label:"English Syntax highlighting"},{value:r.HASH_ELEMENT,label:"Add anchor for elements"},{value:r.TIME_UPDATE,label:"Add time tag for video"},{value:r.DOWNLOAD,label:"Download element",args:[{tips:"auto close the new tab opened by automation",name:"autoclose",type:"boolean",value:!1,defaultValue:!1}]},{value:r.FULL_SCREEN,label:"FullScreen element"},{value:r.CODE_COPY,label:"Code copy",args:[{tips:"child of <pre> tag",name:"inpre",type:"boolean",value:!1,defaultValue:!1},{tips:"<pre> tag",name:"pre",type:"boolean",value:!1,defaultValue:!1},{tips:"Remove some elements",name:"rm",type:"string",value:"",defaultValue:"",placeholder:"css selector"},{tips:"Position of btn",name:"pos",type:"string",value:"tl",defaultValue:"tl",placeholder:"tl|tr"}]},{value:r.CLICK,label:"Click"},{value:r.GOTO_ELEMENT,label:"Goto element",args:[{tips:"Auto Goto",name:"auto",type:"boolean",value:!1,defaultValue:!1},{tips:"Target",name:"to",type:"string",value:"",defaultValue:"",placeholder:"css selector"},{tips:"Order",name:"order",type:"string",value:"asc",defaultValue:"asc",placeholder:"desc/asc"},{tips:"Handle, The available functions are: {text|trim|number|siblingText}",name:"handle",type:"string",value:"",defaultValue:"",placeholder:"[.selector,fn]"}]}],o=[{value:"",label:"All"}].concat(i),u=[{value:0,label:"Immediately"},{value:1,label:"DomReady"}]},"271d":function(t,e,n){},"2b60":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"automation-row"},[n("div",{staticClass:"am-main"},[n("div",{staticClass:"am-name"},[n("router-link",{attrs:{to:"/automation/"+t.automation.objectId}},[t._v(" "+t._s(t.automation.name)+" ")])],1),n("div",{staticClass:"am-intro"},[t._v(t._s(t.automation.pattern))])]),n("div",{staticClass:"am-right"},[n("div",{staticClass:"am-btns"},[n("div",{staticClass:"am-ins"},[n("a-popconfirm",{attrs:{title:t.$t("confirm.install",{name:t.automation.name})},on:{confirm:function(e){return t.installAutomation(t.automation)}}},[n("my-icon",{attrs:{type:"icon-anzhuang"}})],1),t.automation.installations?n("span",{staticClass:"count"},[t._v(" "+t._s(t.automation.installations.count)+" ")]):t._e()],1),t.editable?n("div",{staticClass:"am-edit"},[n("router-link",{staticClass:"am-edit",attrs:{to:"/automation/update/"+t.id}},[t.editable?n("a-icon",{staticStyle:{"margin-left":"10px"},attrs:{type:"edit",theme:"filled"}}):t._e(),t._v(" Edit ")],1)],1):t._e()]),n("div",{staticClass:"am-created"},[n("div",{staticClass:"author"},[t._v("by "),n("router-link",{attrs:{to:"/user/"+t.automation.author.objectId}},[t._v(" "+t._s(t.automation.author.username)+" ")])],1),n("div",{staticClass:"time"},[t._v(t._s(t._f("timeago")(t.automation.createdAt)))])])])])},r=[],i=n("5530"),o=n("d610"),u=["second","minute","hour","day","week","month","year"],s=function(t,e){if(0===e)return["just now","right now"];var n=u[Math.floor(e/2)];return t>1&&(n+="s"),[t+" "+n+" ago","in "+t+" "+n]},c=["秒","分钟","小时","天","周","个月","年"],l=function(t,e){if(0===e)return["刚刚","片刻后"];var n=c[~~(e/2)];return[t+" "+n+"前",t+" "+n+"后"]},d={},f=function(t,e){d[t]=e},h=function(t){return d[t]||d["en_US"]},m=[60,60,24,7,365/7/12,12];function v(t){return t instanceof Date?t:!isNaN(t)||/^\d+$/.test(t)?new Date(parseInt(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(t))}function p(t,e){var n=t<0?1:0;t=Math.abs(t);for(var a=t,r=0;t>=m[r]&&r<m.length;r++)t/=m[r];return t=Math.floor(t),r*=2,t>(0===r?9:1)&&(r+=1),e(t,r,a)[n].replace("%s",t.toString())}function g(t,e){var n=e?v(e):new Date;return(+n-+v(t))/1e3}var b=function(t,e,n){var a=g(t,n&&n.relativeDate);return p(a,h(e))};f("en_US",s),f("zh_CN",l);n("5a0c");function y(t){return b(t,localStorage.getItem("language")||"en")}var $=n("1e6a"),_=n("2f62"),M={props:["automation","id"],name:"AutomationRow",filters:{timeago:y},mixins:[$["a"]],components:{MyIcon:o["a"]},computed:Object(i["a"])(Object(i["a"])({},Object(_["c"])("account",["loggedIn","user","uid"])),{},{editable:function(){return this.uid===this.automation.author.objectId}}),methods:{}},D=M,E=(n("10be"),n("2877")),O=Object(E["a"])(D,a,r,!1,null,"64557108",null);e["a"]=O.exports},"5a0c":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t=1e3,e=6e4,n=36e5,a="millisecond",r="second",i="minute",o="hour",u="day",s="week",c="month",l="quarter",d="year",f="date",h="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t,e,n){var a=String(t);return!a||a.length>=e?t:""+Array(e+1-a.length).join(n)+t},b={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),a=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+g(a,2,"0")+":"+g(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var a=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(a,c),i=n-r<0,o=e.clone().add(a+(i?-1:1),c);return+(-(a+(n-r)/(i?r-o:o-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:s,d:u,D:f,h:o,m:i,s:r,ms:a,Q:l}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",$={};$[y]=p;var _=function(t){return t instanceof O},M=function(t,e,n){var a;if(!t)return y;if("string"==typeof t)$[t]&&(a=t),e&&($[t]=e,a=t);else{var r=t.name;$[r]=t,a=r}return!n&&a&&(y=a),a||!n&&y},D=function(t,e){if(_(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new O(n)},E=b;E.l=M,E.i=_,E.w=function(t,e){return D(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var O=function(){function p(t){this.$L=M(t.locale,null,!0),this.parse(t)}var g=p.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(E.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var a=e.match(m);if(a){var r=a[2]-1||0,i=(a[7]||"0").substring(0,3);return n?new Date(Date.UTC(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)):new Date(a[1],r,a[3]||1,a[4]||0,a[5]||0,a[6]||0,i)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return E},g.isValid=function(){return!(this.$d.toString()===h)},g.isSame=function(t,e){var n=D(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return D(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<D(t)},g.$g=function(t,e,n){return E.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,a=!!E.u(e)||e,l=E.p(t),h=function(t,e){var r=E.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return a?r:r.endOf(u)},m=function(t,e){return E.w(n.toDate()[t].apply(n.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,p=this.$M,g=this.$D,b="set"+(this.$u?"UTC":"");switch(l){case d:return a?h(1,0):h(31,11);case c:return a?h(1,p):h(0,p+1);case s:var y=this.$locale().weekStart||0,$=(v<y?v+7:v)-y;return h(a?g-$:g+(6-$),p);case u:case f:return m(b+"Hours",0);case o:return m(b+"Minutes",1);case i:return m(b+"Seconds",2);case r:return m(b+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var n,s=E.p(t),l="set"+(this.$u?"UTC":""),h=(n={},n[u]=l+"Date",n[f]=l+"Date",n[c]=l+"Month",n[d]=l+"FullYear",n[o]=l+"Hours",n[i]=l+"Minutes",n[r]=l+"Seconds",n[a]=l+"Milliseconds",n)[s],m=s===u?this.$D+(e-this.$W):e;if(s===c||s===d){var v=this.clone().set(f,1);v.$d[h](m),v.init(),this.$d=v.set(f,Math.min(this.$D,v.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[E.p(t)]()},g.add=function(a,l){var f,h=this;a=Number(a);var m=E.p(l),v=function(t){var e=D(h);return E.w(e.date(e.date()+Math.round(t*a)),h)};if(m===c)return this.set(c,this.$M+a);if(m===d)return this.set(d,this.$y+a);if(m===u)return v(1);if(m===s)return v(7);var p=(f={},f[i]=e,f[o]=n,f[r]=t,f)[m]||1,g=this.$d.getTime()+a*p;return E.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var a=t||"YYYY-MM-DDTHH:mm:ssZ",r=E.z(this),i=this.$H,o=this.$m,u=this.$M,s=n.weekdays,c=n.months,l=function(t,n,r,i){return t&&(t[n]||t(e,a))||r[n].substr(0,i)},d=function(t){return E.s(i%12||12,t,"0")},f=n.meridiem||function(t,e,n){var a=t<12?"AM":"PM";return n?a.toLowerCase():a},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:E.s(u+1,2,"0"),MMM:l(n.monthsShort,u,c,3),MMMM:l(c,u),D:this.$D,DD:E.s(this.$D,2,"0"),d:String(this.$W),dd:l(n.weekdaysMin,this.$W,s,2),ddd:l(n.weekdaysShort,this.$W,s,3),dddd:s[this.$W],H:String(i),HH:E.s(i,2,"0"),h:d(1),hh:d(2),a:f(i,o,!0),A:f(i,o,!1),m:String(o),mm:E.s(o,2,"0"),s:String(this.$s),ss:E.s(this.$s,2,"0"),SSS:E.s(this.$ms,3,"0"),Z:r};return a.replace(v,(function(t,e){return e||m[t]||r.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(a,f,h){var m,v=E.p(f),p=D(a),g=(p.utcOffset()-this.utcOffset())*e,b=this-p,y=E.m(this,p);return y=(m={},m[d]=y/12,m[c]=y,m[l]=y/3,m[s]=(b-g)/6048e5,m[u]=(b-g)/864e5,m[o]=b/n,m[i]=b/e,m[r]=b/t,m)[v]||b,h?y:E.a(y)},g.daysInMonth=function(){return this.endOf(c).$D},g.$locale=function(){return $[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),a=M(t,e,!0);return a&&(n.$L=a),n},g.clone=function(){return E.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},p}(),w=O.prototype;return D.prototype=w,[["$ms",a],["$s",r],["$m",i],["$H",o],["$W",u],["$M",c],["$y",d],["$D",f]].forEach((function(t){w[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),D.extend=function(t,e){return t.$i||(t(e,O,D),t.$i=!0),D},D.locale=M,D.isDayjs=_,D.unix=function(t){return D(1e3*t)},D.en=$[y],D.Ls=$,D.p={},D}))},"7db0":function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").find,i=n("44d2"),o="find",u=!0;o in[]&&Array(1)[o]((function(){u=!1})),a({target:"Array",proto:!0,forced:u},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(o)},"99af":function(t,e,n){"use strict";var a=n("23e7"),r=n("d039"),i=n("e8b5"),o=n("861d"),u=n("7b0b"),s=n("50c4"),c=n("8418"),l=n("65f0"),d=n("1dde"),f=n("b622"),h=n("2d00"),m=f("isConcatSpreadable"),v=9007199254740991,p="Maximum allowed index exceeded",g=h>=51||!r((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),b=d("concat"),y=function(t){if(!o(t))return!1;var e=t[m];return void 0!==e?!!e:i(t)},$=!g||!b;a({target:"Array",proto:!0,forced:$},{concat:function(t){var e,n,a,r,i,o=u(this),d=l(o,0),f=0;for(e=-1,a=arguments.length;e<a;e++)if(i=-1===e?o:arguments[e],y(i)){if(r=s(i.length),f+r>v)throw TypeError(p);for(n=0;n<r;n++,f++)n in i&&c(d,f,i[n])}else{if(f>=v)throw TypeError(p);c(d,f++,i)}return d.length=f,d}})},"9a70":function(t,e,n){"use strict";var a=n("267e"),r=n("b1c8");e["a"]={created:function(){this.bindInstallEvents()},methods:{bindInstallEvents:function(){var t=this;document.addEventListener("stewardHelper",(function(e){var n=e.detail,r=n.action,i=n.data;switch(r){case a["d"].INSTALL_DONE:t.onInstallOk(i);break;default:break}}))},getAutomation:function(){return null},onInstallOk:function(t){var e=t.id,n=this.getAutomation(e);n&&Object(r["c"])(n.installations.objectId).then((function(t){n.installations.count=t.attributes.count}))}}}},b0c0:function(t,e,n){var a=n("83ab"),r=n("9bf2").f,i=Function.prototype,o=i.toString,u=/^\s*function ([^ (]*)/,s="name";a&&!(s in i)&&r(i,s,{configurable:!0,get:function(){try{return o.call(this).match(u)[1]}catch(t){return""}}})},b1c8:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return v})),n.d(e,"a",(function(){return b}));n("7db0"),n("b0c0"),n("d3b7");var a=n("c72e"),r=n.n(a),i=r.a.Object.extend("Installations"),o={item:u,create:s};function u(){}function s(t){var e=new i;return e.save().then((function(){return t.set("installations",e),t.save()}))}function c(t){var e=new r.a.ACL;e.setPublicReadAccess(!0),e.setWriteAccess(r.a.User.current(),!0),t.setACL(e)}var l=r.a.Object.extend("Automation"),d={list:f,listOfAuthor:h,updateOne:y,item:m};function f(t,e){var n=new r.a.Query("Automation");return t&&n.equalTo("type",t),e&&n.contains("name",e),n.descending("updatedAt"),n.include("author"),n.include("installations"),n.find()}function h(t){var e=new r.a.Query("Automation");return e.equalTo("author",r.a.Object.createWithoutData("User",t)),e.include("author"),e.include("installations"),e.find()}function m(t){var e=new r.a.Query("Automation");return e.include("author"),e.include("installations"),e.get(t)}function v(t){var e=r.a.Object.createWithoutData("Installations",t);return e.increment("count",1),e.save(null,{fetchWhenSave:!0})}function p(t,e){var n=new r.a.Query("Automation");return n.equalTo("instructions",t),n.equalTo("pattern",e),n.first().then((function(t){return Boolean(t)}))}function g(t){var e=t.instructions,n=t.pattern,a=t.name,i=t.intro,u=t.type,s=t.video,d=t.runAt,f=new l;return f.set("instructions",e),f.set("pattern",n),f.set("name",a),f.set("intro",i),f.set("video",s),f.set("type",u),f.set("runAt",d),f.set("author",r.a.User.current()),c(f),f.save().then((function(t){return o.create(t)}))}function b(t){var e=t.instructions,n=t.pattern;return p(e,n).then((function(e){return e?Promise.reject("Automation has existed"):g(t)}))}function y(t,e){var n=r.a.Object.createWithoutData("Automation",t),a=e.instructions,i=e.pattern,o=e.name,u=e.intro,s=e.type,c=e.video,l=e.runAt;return n.set("instructions",a),n.set("pattern",i),n.set("name",o),n.set("intro",u),n.set("video",c),n.set("type",s),n.set("runAt",l),n.increment("version",1),n.save()}},bf19:function(t,e,n){"use strict";var a=n("23e7");a({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},d610:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("0c63"),r=a["a"].createFromIconfontCN({scriptUrl:"//at.alicdn.com/t/font_1867097_5ewbsgfi50q.js"})},d81d:function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").map,i=n("1dde"),o=i("map");a({target:"Array",proto:!0,forced:!o},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=automations~user.2890b7b2.js.map