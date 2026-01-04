(()=>{(()=>{var TE={2683:(function(ht,Ae){var Xe,cn,Ce;(function(zt,nt){if(1)cn=[ht],Xe=nt,Ce=typeof Xe=="function"?Xe.apply(Ae,cn):Xe,Ce!==void 0&&(ht.exports=Ce);else var tt})(typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:this,function(zt){"use strict";if(!(globalThis.chrome&&globalThis.chrome.runtime&&globalThis.chrome.runtime.id))throw new Error("This script should only be loaded in a browser extension.");if(globalThis.browser&&globalThis.browser.runtime&&globalThis.browser.runtime.id)zt.exports=globalThis.browser;else{const nt="The message port closed before a response was received.",tt=je=>{const St={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(St).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class yt extends WeakMap{constructor(pe,Le=void 0){super(Le),this.createItem=pe}get(pe){return this.has(pe)||this.set(pe,this.createItem(pe)),super.get(pe)}}const yi=ye=>ye&&typeof ye=="object"&&typeof ye.then=="function",ut=(ye,pe)=>(...Le)=>{je.runtime.lastError?ye.reject(new Error(je.runtime.lastError.message)):pe.singleCallbackArg||Le.length<=1&&pe.singleCallbackArg!==!1?ye.resolve(Le[0]):ye.resolve(Le)},Mt=ye=>ye==1?"argument":"arguments",Qr=(ye,pe)=>function(Qe,...Ee){if(Ee.length<pe.minArgs)throw new Error(`Expected at least ${pe.minArgs} ${Mt(pe.minArgs)} for ${ye}(), got ${Ee.length}`);if(Ee.length>pe.maxArgs)throw new Error(`Expected at most ${pe.maxArgs} ${Mt(pe.maxArgs)} for ${ye}(), got ${Ee.length}`);return new Promise((ue,le)=>{if(pe.fallbackToNoCallback)try{Qe[ye](...Ee,ut({resolve:ue,reject:le},pe))}catch(re){console.warn(`${ye} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,re),Qe[ye](...Ee),pe.fallbackToNoCallback=!1,pe.noCallback=!0,ue()}else pe.noCallback?(Qe[ye](...Ee),ue()):Qe[ye](...Ee,ut({resolve:ue,reject:le},pe))})},mn=(ye,pe,Le)=>new Proxy(pe,{apply(Qe,Ee,ue){return Le.call(Ee,ye,...ue)}});let wn=Function.call.bind(Object.prototype.hasOwnProperty);const Ar=(ye,pe={},Le={})=>{let Qe=Object.create(null),Ee={has(le,re){return re in ye||re in Qe},get(le,re,oe){if(re in Qe)return Qe[re];if(!(re in ye))return;let be=ye[re];if(typeof be=="function")if(typeof pe[re]=="function")be=mn(ye,ye[re],pe[re]);else if(wn(Le,re)){let xe=Qr(re,Le[re]);be=mn(ye,ye[re],xe)}else be=be.bind(ye);else if(typeof be=="object"&&be!==null&&(wn(pe,re)||wn(Le,re)))be=Ar(be,pe[re],Le[re]);else if(wn(Le,"*"))be=Ar(be,pe[re],Le["*"]);else return Object.defineProperty(Qe,re,{configurable:!0,enumerable:!0,get(){return ye[re]},set(xe){ye[re]=xe}}),be;return Qe[re]=be,be},set(le,re,oe,be){return re in Qe?Qe[re]=oe:ye[re]=oe,!0},defineProperty(le,re,oe){return Reflect.defineProperty(Qe,re,oe)},deleteProperty(le,re){return Reflect.deleteProperty(Qe,re)}},ue=Object.create(ye);return new Proxy(ue,Ee)},Nn=ye=>({addListener(pe,Le,...Qe){pe.addListener(ye.get(Le),...Qe)},hasListener(pe,Le){return pe.hasListener(ye.get(Le))},removeListener(pe,Le){pe.removeListener(ye.get(Le))}}),Vn=new yt(ye=>typeof ye!="function"?ye:function(Le){const Qe=Ar(Le,{},{getContent:{minArgs:0,maxArgs:0}});ye(Qe)}),Zn=new yt(ye=>typeof ye!="function"?ye:function(Le,Qe,Ee){let ue=!1,le,re=new Promise(Fe=>{le=function(Ue){ue=!0,Fe(Ue)}}),oe;try{oe=ye(Le,Qe,le)}catch(Fe){oe=Promise.reject(Fe)}const be=oe!==!0&&yi(oe);if(oe!==!0&&!be&&!ue)return!1;const xe=Fe=>{Fe.then(Ue=>{Ee(Ue)},Ue=>{let lt;Ue&&(Ue instanceof Error||typeof Ue.message=="string")?lt=Ue.message:lt="An unexpected error occurred",Ee({__mozWebExtensionPolyfillReject__:!0,message:lt})}).catch(Ue=>{console.error("Failed to send onMessage rejected reply",Ue)})};return xe(be?oe:re),!0}),Xt=({reject:ye,resolve:pe},Le)=>{je.runtime.lastError?je.runtime.lastError.message===nt?pe():ye(new Error(je.runtime.lastError.message)):Le&&Le.__mozWebExtensionPolyfillReject__?ye(new Error(Le.message)):pe(Le)},br=(ye,pe,Le,...Qe)=>{if(Qe.length<pe.minArgs)throw new Error(`Expected at least ${pe.minArgs} ${Mt(pe.minArgs)} for ${ye}(), got ${Qe.length}`);if(Qe.length>pe.maxArgs)throw new Error(`Expected at most ${pe.maxArgs} ${Mt(pe.maxArgs)} for ${ye}(), got ${Qe.length}`);return new Promise((Ee,ue)=>{const le=Xt.bind(null,{resolve:Ee,reject:ue});Qe.push(le),Le.sendMessage(...Qe)})},Zt={devtools:{network:{onRequestFinished:Nn(Vn)}},runtime:{onMessage:Nn(Zn),onMessageExternal:Nn(Zn),sendMessage:br.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:br.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},vt={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return St.privacy={network:{"*":vt},services:{"*":vt},websites:{"*":vt}},Ar(je,Zt,St)};zt.exports=tt(chrome)}})}),3861:(function(ht){(function(Ae,Xe){ht.exports=Xe()})(this,(function(){"use strict";var Ae=1e3,Xe=6e4,cn=36e5,Ce="millisecond",zt="second",nt="minute",tt="hour",je="day",St="week",yt="month",yi="quarter",ut="year",Mt="date",Qr="Invalid Date",mn=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,wn=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Ar={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(Ee){var ue=["th","st","nd","rd"],le=Ee%100;return"["+Ee+(ue[(le-20)%10]||ue[le]||ue[0])+"]"}},Nn=function(Ee,ue,le){var re=String(Ee);return!re||re.length>=ue?Ee:""+Array(ue+1-re.length).join(le)+Ee},Vn={s:Nn,z:function(Ee){var ue=-Ee.utcOffset(),le=Math.abs(ue),re=Math.floor(le/60),oe=le%60;return(ue<=0?"+":"-")+Nn(re,2,"0")+":"+Nn(oe,2,"0")},m:function Ee(ue,le){if(ue.date()<le.date())return-Ee(le,ue);var re=12*(le.year()-ue.year())+(le.month()-ue.month()),oe=ue.clone().add(re,yt),be=le-oe<0,xe=ue.clone().add(re+(be?-1:1),yt);return+(-(re+(le-oe)/(be?oe-xe:xe-oe))||0)},a:function(Ee){return Ee<0?Math.ceil(Ee)||0:Math.floor(Ee)},p:function(Ee){return{M:yt,y:ut,w:St,d:je,D:Mt,h:tt,m:nt,s:zt,ms:Ce,Q:yi}[Ee]||String(Ee||"").toLowerCase().replace(/s$/,"")},u:function(Ee){return Ee===void 0}},Zn="en",Xt={};Xt[Zn]=Ar;var br="$isDayjsObject",Zt=function(Ee){return Ee instanceof Le||!(!Ee||!Ee[br])},vt=function Ee(ue,le,re){var oe;if(!ue)return Zn;if(typeof ue=="string"){var be=ue.toLowerCase();Xt[be]&&(oe=be),le&&(Xt[be]=le,oe=be);var xe=ue.split("-");if(!oe&&xe.length>1)return Ee(xe[0])}else{var Fe=ue.name;Xt[Fe]=ue,oe=Fe}return!re&&oe&&(Zn=oe),oe||!re&&Zn},ye=function(Ee,ue){if(Zt(Ee))return Ee.clone();var le=typeof ue=="object"?ue:{};return le.date=Ee,le.args=arguments,new Le(le)},pe=Vn;pe.l=vt,pe.i=Zt,pe.w=function(Ee,ue){return ye(Ee,{locale:ue.$L,utc:ue.$u,x:ue.$x,$offset:ue.$offset})};var Le=(function(){function Ee(le){this.$L=vt(le.locale,null,!0),this.parse(le),this.$x=this.$x||le.x||{},this[br]=!0}var ue=Ee.prototype;return ue.parse=function(le){this.$d=(function(re){var oe=re.date,be=re.utc;if(oe===null)return new Date(NaN);if(pe.u(oe))return new Date;if(oe instanceof Date)return new Date(oe);if(typeof oe=="string"&&!/Z$/i.test(oe)){var xe=oe.match(mn);if(xe){var Fe=xe[2]-1||0,Ue=(xe[7]||"0").substring(0,3);return be?new Date(Date.UTC(xe[1],Fe,xe[3]||1,xe[4]||0,xe[5]||0,xe[6]||0,Ue)):new Date(xe[1],Fe,xe[3]||1,xe[4]||0,xe[5]||0,xe[6]||0,Ue)}}return new Date(oe)})(le),this.init()},ue.init=function(){var le=this.$d;this.$y=le.getFullYear(),this.$M=le.getMonth(),this.$D=le.getDate(),this.$W=le.getDay(),this.$H=le.getHours(),this.$m=le.getMinutes(),this.$s=le.getSeconds(),this.$ms=le.getMilliseconds()},ue.$utils=function(){return pe},ue.isValid=function(){return this.$d.toString()!==Qr},ue.isSame=function(le,re){var oe=ye(le);return this.startOf(re)<=oe&&oe<=this.endOf(re)},ue.isAfter=function(le,re){return ye(le)<this.startOf(re)},ue.isBefore=function(le,re){return this.endOf(re)<ye(le)},ue.$g=function(le,re,oe){return pe.u(le)?this[re]:this.set(oe,le)},ue.unix=function(){return Math.floor(this.valueOf()/1e3)},ue.valueOf=function(){return this.$d.getTime()},ue.startOf=function(le,re){var oe=this,be=!!pe.u(re)||re,xe=pe.p(le),Fe=function(er,en){var Se=pe.w(oe.$u?Date.UTC(oe.$y,en,er):new Date(oe.$y,en,er),oe);return be?Se:Se.endOf(je)},Ue=function(er,en){return pe.w(oe.toDate()[er].apply(oe.toDate("s"),(be?[0,0,0,0]:[23,59,59,999]).slice(en)),oe)},lt=this.$W,Lt=this.$M,Ft=this.$D,dt="set"+(this.$u?"UTC":"");switch(xe){case ut:return be?Fe(1,0):Fe(31,11);case yt:return be?Fe(1,Lt):Fe(0,Lt+1);case St:var Mn=this.$locale().weekStart||0,An=(lt<Mn?lt+7:lt)-Mn;return Fe(be?Ft-An:Ft+(6-An),Lt);case je:case Mt:return Ue(dt+"Hours",0);case tt:return Ue(dt+"Minutes",1);case nt:return Ue(dt+"Seconds",2);case zt:return Ue(dt+"Milliseconds",3);default:return this.clone()}},ue.endOf=function(le){return this.startOf(le,!1)},ue.$set=function(le,re){var oe,be=pe.p(le),xe="set"+(this.$u?"UTC":""),Fe=(oe={},oe[je]=xe+"Date",oe[Mt]=xe+"Date",oe[yt]=xe+"Month",oe[ut]=xe+"FullYear",oe[tt]=xe+"Hours",oe[nt]=xe+"Minutes",oe[zt]=xe+"Seconds",oe[Ce]=xe+"Milliseconds",oe)[be],Ue=be===je?this.$D+(re-this.$W):re;if(be===yt||be===ut){var lt=this.clone().set(Mt,1);lt.$d[Fe](Ue),lt.init(),this.$d=lt.set(Mt,Math.min(this.$D,lt.daysInMonth())).$d}else Fe&&this.$d[Fe](Ue);return this.init(),this},ue.set=function(le,re){return this.clone().$set(le,re)},ue.get=function(le){return this[pe.p(le)]()},ue.add=function(le,re){var oe,be=this;le=Number(le);var xe=pe.p(re),Fe=function(Lt){var Ft=ye(be);return pe.w(Ft.date(Ft.date()+Math.round(Lt*le)),be)};if(xe===yt)return this.set(yt,this.$M+le);if(xe===ut)return this.set(ut,this.$y+le);if(xe===je)return Fe(1);if(xe===St)return Fe(7);var Ue=(oe={},oe[nt]=Xe,oe[tt]=cn,oe[zt]=Ae,oe)[xe]||1,lt=this.$d.getTime()+le*Ue;return pe.w(lt,this)},ue.subtract=function(le,re){return this.add(-1*le,re)},ue.format=function(le){var re=this,oe=this.$locale();if(!this.isValid())return oe.invalidDate||Qr;var be=le||"YYYY-MM-DDTHH:mm:ssZ",xe=pe.z(this),Fe=this.$H,Ue=this.$m,lt=this.$M,Lt=oe.weekdays,Ft=oe.months,dt=oe.meridiem,Mn=function(en,Se,Sr,cr){return en&&(en[Se]||en(re,be))||Sr[Se].slice(0,cr)},An=function(en){return pe.s(Fe%12||12,en,"0")},er=dt||function(en,Se,Sr){var cr=en<12?"AM":"PM";return Sr?cr.toLowerCase():cr};return be.replace(wn,(function(en,Se){return Se||(function(Sr){switch(Sr){case"YY":return String(re.$y).slice(-2);case"YYYY":return pe.s(re.$y,4,"0");case"M":return lt+1;case"MM":return pe.s(lt+1,2,"0");case"MMM":return Mn(oe.monthsShort,lt,Ft,3);case"MMMM":return Mn(Ft,lt);case"D":return re.$D;case"DD":return pe.s(re.$D,2,"0");case"d":return String(re.$W);case"dd":return Mn(oe.weekdaysMin,re.$W,Lt,2);case"ddd":return Mn(oe.weekdaysShort,re.$W,Lt,3);case"dddd":return Lt[re.$W];case"H":return String(Fe);case"HH":return pe.s(Fe,2,"0");case"h":return An(1);case"hh":return An(2);case"a":return er(Fe,Ue,!0);case"A":return er(Fe,Ue,!1);case"m":return String(Ue);case"mm":return pe.s(Ue,2,"0");case"s":return String(re.$s);case"ss":return pe.s(re.$s,2,"0");case"SSS":return pe.s(re.$ms,3,"0");case"Z":return xe}return null})(en)||xe.replace(":","")}))},ue.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},ue.diff=function(le,re,oe){var be,xe=this,Fe=pe.p(re),Ue=ye(le),lt=(Ue.utcOffset()-this.utcOffset())*Xe,Lt=this-Ue,Ft=function(){return pe.m(xe,Ue)};switch(Fe){case ut:be=Ft()/12;break;case yt:be=Ft();break;case yi:be=Ft()/3;break;case St:be=(Lt-lt)/6048e5;break;case je:be=(Lt-lt)/864e5;break;case tt:be=Lt/cn;break;case nt:be=Lt/Xe;break;case zt:be=Lt/Ae;break;default:be=Lt}return oe?be:pe.a(be)},ue.daysInMonth=function(){return this.endOf(yt).$D},ue.$locale=function(){return Xt[this.$L]},ue.locale=function(le,re){if(!le)return this.$L;var oe=this.clone(),be=vt(le,re,!0);return be&&(oe.$L=be),oe},ue.clone=function(){return pe.w(this.$d,this)},ue.toDate=function(){return new Date(this.valueOf())},ue.toJSON=function(){return this.isValid()?this.toISOString():null},ue.toISOString=function(){return this.$d.toISOString()},ue.toString=function(){return this.$d.toUTCString()},Ee})(),Qe=Le.prototype;return ye.prototype=Qe,[["$ms",Ce],["$s",zt],["$m",nt],["$H",tt],["$W",je],["$M",yt],["$y",ut],["$D",Mt]].forEach((function(Ee){Qe[Ee[1]]=function(ue){return this.$g(ue,Ee[0],Ee[1])}})),ye.extend=function(Ee,ue){return Ee.$i||(Ee(ue,Le,ye),Ee.$i=!0),ye},ye.locale=vt,ye.isDayjs=Zt,ye.unix=function(Ee){return ye(1e3*Ee)},ye.en=Xt[Zn],ye.Ls=Xt,ye.p={},ye}))}),5380:(function(ht,Ae,Xe){(function(cn,Ce){ht.exports=Ce()})(this,function(){"use strict";var cn=function(u,h){return(cn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(f,m){f.__proto__=m}||function(f,m){for(var y in m)Object.prototype.hasOwnProperty.call(m,y)&&(f[y]=m[y])})(u,h)},Ce=function(){return(Ce=Object.assign||function(u){for(var h,f=1,m=arguments.length;f<m;f++)for(var y in h=arguments[f])Object.prototype.hasOwnProperty.call(h,y)&&(u[y]=h[y]);return u}).apply(this,arguments)};function zt(u,h,f){if(f||arguments.length===2)for(var m,y=0,I=h.length;y<I;y++)!m&&y in h||((m=m||Array.prototype.slice.call(h,0,y))[y]=h[y]);return u.concat(m||Array.prototype.slice.call(h))}var nt=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:Xe.g,tt=Object.keys,je=Array.isArray;function St(u,h){return typeof h!="object"||tt(h).forEach(function(f){u[f]=h[f]}),u}typeof Promise=="undefined"||nt.Promise||(nt.Promise=Promise);var yt=Object.getPrototypeOf,yi={}.hasOwnProperty;function ut(u,h){return yi.call(u,h)}function Mt(u,h){typeof h=="function"&&(h=h(yt(u))),(typeof Reflect=="undefined"?tt:Reflect.ownKeys)(h).forEach(function(f){mn(u,f,h[f])})}var Qr=Object.defineProperty;function mn(u,h,f,m){Qr(u,h,St(f&&ut(f,"get")&&typeof f.get=="function"?{get:f.get,set:f.set,configurable:!0}:{value:f,configurable:!0,writable:!0},m))}function wn(u){return{from:function(h){return u.prototype=Object.create(h.prototype),mn(u.prototype,"constructor",u),{extend:Mt.bind(null,u.prototype)}}}}var Ar=Object.getOwnPropertyDescriptor,Nn=[].slice;function Vn(u,h,f){return Nn.call(u,h,f)}function Zn(u,h){return h(u)}function Xt(u){if(!u)throw new Error("Assertion Failed")}function br(u){nt.setImmediate?setImmediate(u):setTimeout(u,0)}function Zt(u,h){if(typeof h=="string"&&ut(u,h))return u[h];if(!h)return u;if(typeof h!="string"){for(var f=[],m=0,y=h.length;m<y;++m){var I=Zt(u,h[m]);f.push(I)}return f}var A=h.indexOf(".");if(A!==-1){var b=u[h.substr(0,A)];return b==null?void 0:Zt(b,h.substr(A+1))}}function vt(u,h,f){if(u&&h!==void 0&&!("isFrozen"in Object&&Object.isFrozen(u)))if(typeof h!="string"&&"length"in h){Xt(typeof f!="string"&&"length"in f);for(var m=0,y=h.length;m<y;++m)vt(u,h[m],f[m])}else{var I,A,b=h.indexOf(".");b!==-1?(I=h.substr(0,b),(A=h.substr(b+1))===""?f===void 0?je(u)&&!isNaN(parseInt(I))?u.splice(I,1):delete u[I]:u[I]=f:vt(b=!(b=u[I])||!ut(u,I)?u[I]={}:b,A,f)):f===void 0?je(u)&&!isNaN(parseInt(h))?u.splice(h,1):delete u[h]:u[h]=f}}function ye(u){var h,f={};for(h in u)ut(u,h)&&(f[h]=u[h]);return f}var pe=[].concat;function Le(u){return pe.apply([],u)}var Pr="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Le([8,16,32,64].map(function(u){return["Int","Uint","Float"].map(function(h){return h+u+"Array"})}))).filter(function(u){return nt[u]}),Qe=new Set(Pr.map(function(u){return nt[u]})),Ee=null;function ue(u){return Ee=new WeakMap,u=(function h(f){if(!f||typeof f!="object")return f;var m=Ee.get(f);if(m)return m;if(je(f)){m=[],Ee.set(f,m);for(var y=0,I=f.length;y<I;++y)m.push(h(f[y]))}else if(Qe.has(f.constructor))m=f;else{var A,b=yt(f);for(A in m=b===Object.prototype?{}:Object.create(b),Ee.set(f,m),f)ut(f,A)&&(m[A]=h(f[A]))}return m})(u),Ee=null,u}var le={}.toString;function re(u){return le.call(u).slice(8,-1)}var oe=typeof Symbol!="undefined"?Symbol.iterator:"@@iterator",be=typeof oe=="symbol"?function(u){var h;return u!=null&&(h=u[oe])&&h.apply(u)}:function(){return null};function xe(u,h){return h=u.indexOf(h),0<=h&&u.splice(h,1),0<=h}var Fe={};function Ue(u){var h,f,m,y;if(arguments.length===1){if(je(u))return u.slice();if(this===Fe&&typeof u=="string")return[u];if(y=be(u)){for(f=[];!(m=y.next()).done;)f.push(m.value);return f}if(u==null)return[u];if(typeof(h=u.length)!="number")return[u];for(f=new Array(h);h--;)f[h]=u[h];return f}for(h=arguments.length,f=new Array(h);h--;)f[h]=arguments[h];return f}var lt=typeof Symbol!="undefined"?function(u){return u[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},ps=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Cn=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(ps),Lt={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function Ft(u,h){this.name=u,this.message=h}function dt(u,h){return u+". Errors: "+Object.keys(h).map(function(f){return h[f].toString()}).filter(function(f,m,y){return y.indexOf(f)===m}).join(`
`)}function Mn(u,h,f,m){this.failures=h,this.failedKeys=m,this.successCount=f,this.message=dt(u,h)}function An(u,h){this.name="BulkError",this.failures=Object.keys(h).map(function(f){return h[f]}),this.failuresByPos=h,this.message=dt(u,this.failures)}wn(Ft).from(Error).extend({toString:function(){return this.name+": "+this.message}}),wn(Mn).from(Ft),wn(An).from(Ft);var er=Cn.reduce(function(u,h){return u[h]=h+"Error",u},{}),en=Ft,Se=Cn.reduce(function(u,h){var f=h+"Error";function m(y,I){this.name=f,y?typeof y=="string"?(this.message="".concat(y).concat(I?`
 `+I:""),this.inner=I||null):typeof y=="object"&&(this.message="".concat(y.name," ").concat(y.message),this.inner=y):(this.message=Lt[h]||f,this.inner=null)}return wn(m).from(en),u[h]=m,u},{});Se.Syntax=SyntaxError,Se.Type=TypeError,Se.Range=RangeError;var Sr=ps.reduce(function(u,h){return u[h+"Error"]=Se[h],u},{}),cr=Cn.reduce(function(u,h){return["Syntax","Type","Range"].indexOf(h)===-1&&(u[h+"Error"]=Se[h]),u},{});function it(){}function lo(u){return u}function im(u,h){return u==null||u===lo?h:function(f){return h(u(f))}}function vi(u,h){return function(){u.apply(this,arguments),h.apply(this,arguments)}}function Ol(u,h){return u===it?h:function(){var f=u.apply(this,arguments);f!==void 0&&(arguments[0]=f);var m=this.onsuccess,y=this.onerror;this.onsuccess=null,this.onerror=null;var I=h.apply(this,arguments);return m&&(this.onsuccess=this.onsuccess?vi(m,this.onsuccess):m),y&&(this.onerror=this.onerror?vi(y,this.onerror):y),I!==void 0?I:f}}function Nl(u,h){return u===it?h:function(){u.apply(this,arguments);var f=this.onsuccess,m=this.onerror;this.onsuccess=this.onerror=null,h.apply(this,arguments),f&&(this.onsuccess=this.onsuccess?vi(f,this.onsuccess):f),m&&(this.onerror=this.onerror?vi(m,this.onerror):m)}}function Vl(u,h){return u===it?h:function(f){var m=u.apply(this,arguments);St(f,m);var y=this.onsuccess,I=this.onerror;return this.onsuccess=null,this.onerror=null,f=h.apply(this,arguments),y&&(this.onsuccess=this.onsuccess?vi(y,this.onsuccess):y),I&&(this.onerror=this.onerror?vi(I,this.onerror):I),m===void 0?f===void 0?void 0:f:St(m,f)}}function Zh(u,h){return u===it?h:function(){return h.apply(this,arguments)!==!1&&u.apply(this,arguments)}}function Ml(u,h){return u===it?h:function(){var f=u.apply(this,arguments);if(f&&typeof f.then=="function"){for(var m=this,y=arguments.length,I=new Array(y);y--;)I[y]=arguments[y];return f.then(function(){return h.apply(m,I)})}return h.apply(this,arguments)}}cr.ModifyError=Mn,cr.DexieError=Ft,cr.BulkError=An;var tr=typeof location!="undefined"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function nr(u){tr=u}var hr={},Ll=100,Pr=typeof Promise=="undefined"?[]:(function(){var u=Promise.resolve();if(typeof crypto=="undefined"||!crypto.subtle)return[u,yt(u),u];var h=crypto.subtle.digest("SHA-512",new Uint8Array([0]));return[h,yt(h),u]})(),ps=Pr[0],Cn=Pr[1],Pr=Pr[2],Cn=Cn&&Cn.then,Ii=ps&&ps.constructor,Ti=!!Pr,co=function(u,h){bn.push([u,h]),xa&&(queueMicrotask(ed),xa=!1)},Fl=!0,xa=!0,Ei=[],Oa=[],Ul=lo,Yr={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:it,pgp:!1,env:{},finalize:it},De=Yr,bn=[],Rr=0,Na=[];function _e(u){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var h=this._PSD=De;if(typeof u!="function"){if(u!==hr)throw new TypeError("Not a function");return this._state=arguments[1],this._value=arguments[2],void(this._state===!1&&Bl(this,this._value))}this._state=null,this._value=null,++h.ref,(function f(m,y){try{y(function(I){if(m._state===null){if(I===m)throw new TypeError("A promise cannot be resolved with itself.");var A=m._lib&&Cr();I&&typeof I.then=="function"?f(m,function(b,k){I instanceof _e?I._then(b,k):I.then(b,k)}):(m._state=!0,m._value=I,ql(m)),A&&ms()}},Bl.bind(null,m))}catch(I){Bl(m,I)}})(this,u)}var Jr={get:function(){var u=De,h=fo;function f(m,y){var I=this,A=!u.global&&(u!==De||h!==fo),b=A&&!Xr(),k=new _e(function(x,U){Va(I,new wi(jl(m,u,A,b),jl(y,u,A,b),x,U,u))});return this._consoleTask&&(k._consoleTask=this._consoleTask),k}return f.prototype=hr,f},set:function(u){mn(this,"then",u&&u.prototype===hr?Jr:{get:function(){return u},set:Jr.set})}};function wi(u,h,f,m,y){this.onFulfilled=typeof u=="function"?u:null,this.onRejected=typeof h=="function"?h:null,this.resolve=f,this.reject=m,this.psd=y}function Bl(u,h){var f,m;Oa.push(h),u._state===null&&(f=u._lib&&Cr(),h=Ul(h),u._state=!1,u._value=h,m=u,Ei.some(function(y){return y._value===m._value})||Ei.push(m),ql(u),f&&ms())}function ql(u){var h=u._listeners;u._listeners=[];for(var f=0,m=h.length;f<m;++f)Va(u,h[f]);var y=u._PSD;--y.ref||y.finalize(),Rr===0&&(++Rr,co(function(){--Rr==0&&gs()},[]))}function Va(u,h){if(u._state!==null){var f=u._state?h.onFulfilled:h.onRejected;if(f===null)return(u._state?h.resolve:h.reject)(u._value);++h.psd.ref,++Rr,co(sm,[f,u,h])}else u._listeners.push(h)}function sm(u,h,f){try{var m,y=h._value;!h._state&&Oa.length&&(Oa=[]),m=tr&&h._consoleTask?h._consoleTask.run(function(){return u(y)}):u(y),h._state||Oa.indexOf(y)!==-1||(function(I){for(var A=Ei.length;A;)if(Ei[--A]._value===I._value)return Ei.splice(A,1)})(h),f.resolve(m)}catch(I){f.reject(I)}finally{--Rr==0&&gs(),--f.psd.ref||f.psd.finalize()}}function ed(){Sn(Yr,function(){Cr()&&ms()})}function Cr(){var u=Fl;return xa=Fl=!1,u}function ms(){var u,h,f;do for(;0<bn.length;)for(u=bn,bn=[],f=u.length,h=0;h<f;++h){var m=u[h];m[0].apply(null,m[1])}while(0<bn.length);xa=Fl=!0}function gs(){var u=Ei;Ei=[],u.forEach(function(m){m._PSD.onunhandled.call(null,m._value,m)});for(var h=Na.slice(0),f=h.length;f;)h[--f]()}function Ma(u){return new _e(hr,!1,u)}function It(u,h){var f=De;return function(){var m=Cr(),y=De;try{return kr(f,!0),u.apply(this,arguments)}catch(I){h&&h(I)}finally{kr(y,!1),m&&ms()}}}Mt(_e.prototype,{then:Jr,_then:function(u,h){Va(this,new wi(null,null,u,h,De))},catch:function(u){if(arguments.length===1)return this.then(null,u);var h=u,f=arguments[1];return typeof h=="function"?this.then(null,function(m){return(m instanceof h?f:Ma)(m)}):this.then(null,function(m){return(m&&m.name===h?f:Ma)(m)})},finally:function(u){return this.then(function(h){return _e.resolve(u()).then(function(){return h})},function(h){return _e.resolve(u()).then(function(){return Ma(h)})})},timeout:function(u,h){var f=this;return u<1/0?new _e(function(m,y){var I=setTimeout(function(){return y(new Se.Timeout(h))},u);f.then(m,y).finally(clearTimeout.bind(null,I))}):this}}),typeof Symbol!="undefined"&&Symbol.toStringTag&&mn(_e.prototype,Symbol.toStringTag,"Dexie.Promise"),Yr.env=xr(),Mt(_e,{all:function(){var u=Ue.apply(null,arguments).map(po);return new _e(function(h,f){u.length===0&&h([]);var m=u.length;u.forEach(function(y,I){return _e.resolve(y).then(function(A){u[I]=A,--m||h(u)},f)})})},resolve:function(u){return u instanceof _e?u:u&&typeof u.then=="function"?new _e(function(h,f){u.then(h,f)}):new _e(hr,!0,u)},reject:Ma,race:function(){var u=Ue.apply(null,arguments).map(po);return new _e(function(h,f){u.map(function(m){return _e.resolve(m).then(h,f)})})},PSD:{get:function(){return De},set:function(u){return De=u}},totalEchoes:{get:function(){return fo}},newPSD:Dr,usePSD:Sn,scheduler:{get:function(){return co},set:function(u){co=u}},rejectionMapper:{get:function(){return Ul},set:function(u){Ul=u}},follow:function(u,h){return new _e(function(f,m){return Dr(function(y,I){var A=De;A.unhandleds=[],A.onunhandled=I,A.finalize=vi(function(){var b,k=this;b=function(){k.unhandleds.length===0?y():I(k.unhandleds[0])},Na.push(function x(){b(),Na.splice(Na.indexOf(x),1)}),++Rr,co(function(){--Rr==0&&gs()},[])},A.finalize),u()},h,f,m)})}}),Ii&&(Ii.allSettled&&mn(_e,"allSettled",function(){var u=Ue.apply(null,arguments).map(po);return new _e(function(h){u.length===0&&h([]);var f=u.length,m=new Array(f);u.forEach(function(y,I){return _e.resolve(y).then(function(A){return m[I]={status:"fulfilled",value:A}},function(A){return m[I]={status:"rejected",reason:A}}).then(function(){return--f||h(m)})})})}),Ii.any&&typeof AggregateError!="undefined"&&mn(_e,"any",function(){var u=Ue.apply(null,arguments).map(po);return new _e(function(h,f){u.length===0&&f(new AggregateError([]));var m=u.length,y=new Array(m);u.forEach(function(I,A){return _e.resolve(I).then(function(b){return h(b)},function(b){y[A]=b,--m||f(new AggregateError(y))})})})}),Ii.withResolvers&&(_e.withResolvers=Ii.withResolvers));var Qt={awaits:0,echoes:0,id:0},om=0,La=[],ho=0,fo=0,td=0;function Dr(u,h,f,m){var y=De,I=Object.create(y);return I.parent=y,I.ref=0,I.global=!1,I.id=++td,Yr.env,I.env=Ti?{Promise:_e,PromiseProp:{value:_e,configurable:!0,writable:!0},all:_e.all,race:_e.race,allSettled:_e.allSettled,any:_e.any,resolve:_e.resolve,reject:_e.reject}:{},h&&St(I,h),++y.ref,I.finalize=function(){--this.parent.ref||this.parent.finalize()},m=Sn(I,u,f,m),I.ref===0&&I.finalize(),m}function _s(){return Qt.id||(Qt.id=++om),++Qt.awaits,Qt.echoes+=Ll,Qt.id}function Xr(){return!!Qt.awaits&&(--Qt.awaits==0&&(Qt.id=0),Qt.echoes=Qt.awaits*Ll,!0)}function po(u){return Qt.echoes&&u&&u.constructor===Ii?(_s(),u.then(function(h){return Xr(),h},function(h){return Xr(),kt(h)})):u}function Ut(){var u=La[La.length-1];La.pop(),kr(u,!1)}function kr(u,h){var f,m=De;(h?!Qt.echoes||ho++&&u===De:!ho||--ho&&u===De)||queueMicrotask(h?function(y){++fo,Qt.echoes&&--Qt.echoes!=0||(Qt.echoes=Qt.awaits=Qt.id=0),La.push(De),kr(y,!0)}.bind(null,u):Ut),u!==De&&(De=u,m===Yr&&(Yr.env=xr()),Ti&&(f=Yr.env.Promise,h=u.env,(m.global||u.global)&&(Object.defineProperty(nt,"Promise",h.PromiseProp),f.all=h.all,f.race=h.race,f.resolve=h.resolve,f.reject=h.reject,h.allSettled&&(f.allSettled=h.allSettled),h.any&&(f.any=h.any))))}function xr(){var u=nt.Promise;return Ti?{Promise:u,PromiseProp:Object.getOwnPropertyDescriptor(nt,"Promise"),all:u.all,race:u.race,allSettled:u.allSettled,any:u.any,resolve:u.resolve,reject:u.reject}:{}}function Sn(u,h,f,m,y){var I=De;try{return kr(u,!0),h(f,m,y)}finally{kr(I,!1)}}function jl(u,h,f,m){return typeof u!="function"?u:function(){var y=De;f&&_s(),kr(h,!0);try{return u.apply(this,arguments)}finally{kr(y,!1),m&&queueMicrotask(Xr)}}}function Fa(u){Promise===Ii&&Qt.echoes===0?ho===0?u():enqueueNativeMicroTask(u):setTimeout(u,0)}(""+Cn).indexOf("[native code]")===-1&&(_s=Xr=it);var kt=_e.reject,Zr="\uFFFF",jn="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",$e="String expected.",ei=[],mo="__dbnames",Ua="readonly",Ba="readwrite";function dr(u,h){return u?h?function(){return u.apply(this,arguments)&&h.apply(this,arguments)}:u:h}var nd={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function qa(u){return typeof u!="string"||/\./.test(u)?function(h){return h}:function(h){return h[u]===void 0&&u in h&&delete(h=ue(h))[u],h}}function $l(){throw Se.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function Ge(u,h){try{var f=ja(u),m=ja(h);if(f!==m)return f==="Array"?1:m==="Array"?-1:f==="binary"?1:m==="binary"?-1:f==="string"?1:m==="string"?-1:f==="Date"?1:m!=="Date"?NaN:-1;switch(f){case"number":case"Date":case"string":return h<u?1:u<h?-1:0;case"binary":return(function(y,I){for(var A=y.length,b=I.length,k=A<b?A:b,x=0;x<k;++x)if(y[x]!==I[x])return y[x]<I[x]?-1:1;return A===b?0:A<b?-1:1})(Kl(u),Kl(h));case"Array":return(function(y,I){for(var A=y.length,b=I.length,k=A<b?A:b,x=0;x<k;++x){var U=Ge(y[x],I[x]);if(U!==0)return U}return A===b?0:A<b?-1:1})(u,h)}}catch(y){}return NaN}function ja(u){var h=typeof u;return h!="object"?h:ArrayBuffer.isView(u)?"binary":(u=re(u),u==="ArrayBuffer"?"binary":u)}function Kl(u){return u instanceof Uint8Array?u:ArrayBuffer.isView(u)?new Uint8Array(u.buffer,u.byteOffset,u.byteLength):new Uint8Array(u)}function go(u,h,f){var m=u.schema.yProps;return m?(h&&0<f.numFailures&&(h=h.filter(function(y,I){return!f.failures[I]})),Promise.all(m.map(function(y){return y=y.updatesTable,h?u.db.table(y).where("k").anyOf(h).delete():u.db.table(y).clear()})).then(function(){return f})):f}var Ai=(_o.prototype.execute=function(u){var h=this["@@propmod"];if(h.add!==void 0){var f=h.add;if(je(f))return zt(zt([],je(u)?u:[],!0),f,!0).sort();if(typeof f=="number")return(Number(u)||0)+f;if(typeof f=="bigint")try{return BigInt(u)+f}catch(y){return BigInt(0)+f}throw new TypeError("Invalid term ".concat(f))}if(h.remove!==void 0){var m=h.remove;if(je(m))return je(u)?u.filter(function(y){return!m.includes(y)}).sort():[];if(typeof m=="number")return Number(u)-m;if(typeof m=="bigint")try{return BigInt(u)-m}catch(y){return BigInt(0)-m}throw new TypeError("Invalid subtrahend ".concat(m))}return f=(f=h.replacePrefix)===null||f===void 0?void 0:f[0],f&&typeof u=="string"&&u.startsWith(f)?h.replacePrefix[1]+u.substring(f.length):u},_o);function _o(u){this["@@propmod"]=u}function $a(u,h){for(var f=tt(h),m=f.length,y=!1,I=0;I<m;++I){var A=f[I],b=h[A],k=Zt(u,A);b instanceof Ai?(vt(u,A,b.execute(k)),y=!0):k!==b&&(vt(u,A,b),y=!0)}return y}var yo=(rt.prototype._trans=function(u,h,f){var m=this._tx||De.trans,y=this.name,I=tr&&typeof console!="undefined"&&console.createTask&&console.createTask("Dexie: ".concat(u==="readonly"?"read":"write"," ").concat(this.name));function A(x,U,P){if(!P.schema[y])throw new Se.NotFound("Table "+y+" not part of transaction");return h(P.idbtrans,P)}var b=Cr();try{var k=m&&m.db._novip===this.db._novip?m===De.trans?m._promise(u,A,f):Dr(function(){return m._promise(u,A,f)},{trans:m,transless:De.transless||De}):(function x(U,P,B,D){if(U.idbdb&&(U._state.openComplete||De.letThrough||U._vip)){var N=U._createTransaction(P,B,U._dbSchema);try{N.create(),U._state.PR1398_maxLoop=3}catch(V){return V.name===er.InvalidState&&U.isOpen()&&0<--U._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),U.close({disableAutoOpen:!1}),U.open().then(function(){return x(U,P,B,D)})):kt(V)}return N._promise(P,function(V,T){return Dr(function(){return De.trans=N,D(V,T,N)})}).then(function(V){if(P==="readwrite")try{N.idbtrans.commit()}catch(T){}return P==="readonly"?V:N._completion.then(function(){return V})})}if(U._state.openComplete)return kt(new Se.DatabaseClosed(U._state.dbOpenError));if(!U._state.isBeingOpened){if(!U._state.autoOpen)return kt(new Se.DatabaseClosed);U.open().catch(it)}return U._state.dbReadyPromise.then(function(){return x(U,P,B,D)})})(this.db,u,[this.name],A);return I&&(k._consoleTask=I,k=k.catch(function(x){return console.trace(x),kt(x)})),k}finally{b&&ms()}},rt.prototype.get=function(u,h){var f=this;return u&&u.constructor===Object?this.where(u).first(h):u==null?kt(new Se.Type("Invalid argument to Table.get()")):this._trans("readonly",function(m){return f.core.get({trans:m,key:u}).then(function(y){return f.hook.reading.fire(y)})}).then(h)},rt.prototype.where=function(u){if(typeof u=="string")return new this.db.WhereClause(this,u);if(je(u))return new this.db.WhereClause(this,"[".concat(u.join("+"),"]"));var h=tt(u);if(h.length===1)return this.where(h[0]).equals(u[h[0]]);var f=this.schema.indexes.concat(this.schema.primKey).filter(function(b){if(b.compound&&h.every(function(x){return 0<=b.keyPath.indexOf(x)})){for(var k=0;k<h.length;++k)if(h.indexOf(b.keyPath[k])===-1)return!1;return!0}return!1}).sort(function(b,k){return b.keyPath.length-k.keyPath.length})[0];if(f&&this.db._maxKey!==Zr){var I=f.keyPath.slice(0,h.length);return this.where(I).equals(I.map(function(k){return u[k]}))}!f&&tr&&console.warn("The query ".concat(JSON.stringify(u)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(h.join("+"),"]"));var m=this.schema.idxByName;function y(b,k){return Ge(b,k)===0}var A=h.reduce(function(P,k){var x=P[0],U=P[1],P=m[k],B=u[k];return[x||P,x||!P?dr(U,P&&P.multi?function(D){return D=Zt(D,k),je(D)&&D.some(function(N){return y(B,N)})}:function(D){return y(B,Zt(D,k))}):U]},[null,null]),I=A[0],A=A[1];return I?this.where(I.name).equals(u[I.keyPath]).filter(A):f?this.filter(A):this.where(h).equals("")},rt.prototype.filter=function(u){return this.toCollection().and(u)},rt.prototype.count=function(u){return this.toCollection().count(u)},rt.prototype.offset=function(u){return this.toCollection().offset(u)},rt.prototype.limit=function(u){return this.toCollection().limit(u)},rt.prototype.each=function(u){return this.toCollection().each(u)},rt.prototype.toArray=function(u){return this.toCollection().toArray(u)},rt.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},rt.prototype.orderBy=function(u){return new this.db.Collection(new this.db.WhereClause(this,je(u)?"[".concat(u.join("+"),"]"):u))},rt.prototype.reverse=function(){return this.toCollection().reverse()},rt.prototype.mapToClass=function(u){var h,f=this.db,m=this.name;function y(){return h!==null&&h.apply(this,arguments)||this}(this.schema.mappedClass=u).prototype instanceof $l&&((function(k,x){if(typeof x!="function"&&x!==null)throw new TypeError("Class extends value "+String(x)+" is not a constructor or null");function U(){this.constructor=k}cn(k,x),k.prototype=x===null?Object.create(x):(U.prototype=x.prototype,new U)})(y,h=u),Object.defineProperty(y.prototype,"db",{get:function(){return f},enumerable:!1,configurable:!0}),y.prototype.table=function(){return m},u=y);for(var I=new Set,A=u.prototype;A;A=yt(A))Object.getOwnPropertyNames(A).forEach(function(k){return I.add(k)});function b(k){if(!k)return k;var x,U=Object.create(u.prototype);for(x in k)if(!I.has(x))try{U[x]=k[x]}catch(P){}return U}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=b,this.hook("reading",b),u},rt.prototype.defineClass=function(){return this.mapToClass(function(u){St(this,u)})},rt.prototype.add=function(u,h){var f=this,m=this.schema.primKey,y=m.auto,I=m.keyPath,A=u;return I&&y&&(A=qa(I)(u)),this._trans("readwrite",function(b){return f.core.mutate({trans:b,type:"add",keys:h!=null?[h]:null,values:[A]})}).then(function(b){return b.numFailures?_e.reject(b.failures[0]):b.lastResult}).then(function(b){if(I)try{vt(u,I,b)}catch(k){}return b})},rt.prototype.upsert=function(u,h){var f=this,m=this.schema.primKey.keyPath;return this._trans("readwrite",function(y){return f.core.get({trans:y,key:u}).then(function(I){var A=I!=null?I:{};return $a(A,h),m&&vt(A,m,u),f.core.mutate({trans:y,type:"put",values:[A],keys:[u],upsert:!0,updates:{keys:[u],changeSpecs:[h]}}).then(function(b){return b.numFailures?_e.reject(b.failures[0]):!!I})})})},rt.prototype.update=function(u,h){return typeof u!="object"||je(u)?this.where(":id").equals(u).modify(h):(u=Zt(u,this.schema.primKey.keyPath),u===void 0?kt(new Se.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(u).modify(h))},rt.prototype.put=function(u,h){var f=this,m=this.schema.primKey,y=m.auto,I=m.keyPath,A=u;return I&&y&&(A=qa(I)(u)),this._trans("readwrite",function(b){return f.core.mutate({trans:b,type:"put",values:[A],keys:h!=null?[h]:null})}).then(function(b){return b.numFailures?_e.reject(b.failures[0]):b.lastResult}).then(function(b){if(I)try{vt(u,I,b)}catch(k){}return b})},rt.prototype.delete=function(u){var h=this;return this._trans("readwrite",function(f){return h.core.mutate({trans:f,type:"delete",keys:[u]}).then(function(m){return go(h,[u],m)}).then(function(m){return m.numFailures?_e.reject(m.failures[0]):void 0})})},rt.prototype.clear=function(){var u=this;return this._trans("readwrite",function(h){return u.core.mutate({trans:h,type:"deleteRange",range:nd}).then(function(f){return go(u,null,f)})}).then(function(h){return h.numFailures?_e.reject(h.failures[0]):void 0})},rt.prototype.bulkGet=function(u){var h=this;return this._trans("readonly",function(f){return h.core.getMany({keys:u,trans:f}).then(function(m){return m.map(function(y){return h.hook.reading.fire(y)})})})},rt.prototype.bulkAdd=function(u,h,f){var m=this,y=Array.isArray(h)?h:void 0,I=(f=f||(y?void 0:h))?f.allKeys:void 0;return this._trans("readwrite",function(A){var x=m.schema.primKey,b=x.auto,x=x.keyPath;if(x&&y)throw new Se.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(y&&y.length!==u.length)throw new Se.InvalidArgument("Arguments objects and keys must have the same length");var k=u.length,x=x&&b?u.map(qa(x)):u;return m.core.mutate({trans:A,type:"add",keys:y,values:x,wantResults:I}).then(function(N){var P=N.numFailures,B=N.results,D=N.lastResult,N=N.failures;if(P===0)return I?B:D;throw new An("".concat(m.name,".bulkAdd(): ").concat(P," of ").concat(k," operations failed"),N)})})},rt.prototype.bulkPut=function(u,h,f){var m=this,y=Array.isArray(h)?h:void 0,I=(f=f||(y?void 0:h))?f.allKeys:void 0;return this._trans("readwrite",function(A){var x=m.schema.primKey,b=x.auto,x=x.keyPath;if(x&&y)throw new Se.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(y&&y.length!==u.length)throw new Se.InvalidArgument("Arguments objects and keys must have the same length");var k=u.length,x=x&&b?u.map(qa(x)):u;return m.core.mutate({trans:A,type:"put",keys:y,values:x,wantResults:I}).then(function(N){var P=N.numFailures,B=N.results,D=N.lastResult,N=N.failures;if(P===0)return I?B:D;throw new An("".concat(m.name,".bulkPut(): ").concat(P," of ").concat(k," operations failed"),N)})})},rt.prototype.bulkUpdate=function(u){var h=this,f=this.core,m=u.map(function(A){return A.key}),y=u.map(function(A){return A.changes}),I=[];return this._trans("readwrite",function(A){return f.getMany({trans:A,keys:m,cache:"clone"}).then(function(b){var k=[],x=[];u.forEach(function(P,B){var D=P.key,N=P.changes,V=b[B];if(V){for(var T=0,$=Object.keys(N);T<$.length;T++){var W=$[T],Q=N[W];if(W===h.schema.primKey.keyPath){if(Ge(Q,D)!==0)throw new Se.Constraint("Cannot update primary key in bulkUpdate()")}else vt(V,W,Q)}I.push(B),k.push(D),x.push(V)}});var U=k.length;return f.mutate({trans:A,type:"put",keys:k,values:x,updates:{keys:m,changeSpecs:y}}).then(function(P){var B=P.numFailures,D=P.failures;if(B===0)return U;for(var N=0,V=Object.keys(D);N<V.length;N++){var T,$=V[N],W=I[Number($)];W!=null&&(T=D[$],delete D[$],D[W]=T)}throw new An("".concat(h.name,".bulkUpdate(): ").concat(B," of ").concat(U," operations failed"),D)})})})},rt.prototype.bulkDelete=function(u){var h=this,f=u.length;return this._trans("readwrite",function(m){return h.core.mutate({trans:m,type:"delete",keys:u}).then(function(y){return go(h,u,y)})}).then(function(A){var y=A.numFailures,I=A.lastResult,A=A.failures;if(y===0)return I;throw new An("".concat(h.name,".bulkDelete(): ").concat(y," of ").concat(f," operations failed"),A)})},rt);function rt(){}function ys(u){function h(A,b){if(b){for(var k=arguments.length,x=new Array(k-1);--k;)x[k-1]=arguments[k];return f[A].subscribe.apply(null,x),u}if(typeof A=="string")return f[A]}var f={};h.addEventType=I;for(var m=1,y=arguments.length;m<y;++m)I(arguments[m]);return h;function I(A,b,k){if(typeof A!="object"){var x;b=b||Zh;var U={subscribers:[],fire:k=k||it,subscribe:function(P){U.subscribers.indexOf(P)===-1&&(U.subscribers.push(P),U.fire=b(U.fire,P))},unsubscribe:function(P){U.subscribers=U.subscribers.filter(function(B){return B!==P}),U.fire=U.subscribers.reduce(b,k)}};return f[A]=h[A]=U}tt(x=A).forEach(function(P){var B=x[P];if(je(B))I(P,x[P][0],x[P][1]);else{if(B!=="asap")throw new Se.InvalidArgument("Invalid event config");var D=I(P,lo,function(){for(var N=arguments.length,V=new Array(N);N--;)V[N]=arguments[N];D.subscribers.forEach(function(T){br(function(){T.apply(null,V)})})})}})}}function vs(u,h){return wn(h).from({prototype:u}),h}function Or(u,h){return!(u.filter||u.algorithm||u.or)&&(h?u.justLimit:!u.replayFilter)}function Ka(u,h){u.filter=dr(u.filter,h)}function za(u,h,f){var m=u.replayFilter;u.replayFilter=m?function(){return dr(m(),h())}:h,u.justLimit=f&&!m}function vo(u,h){if(u.isPrimKey)return h.primaryKey;var f=h.getIndexByKeyPath(u.index);if(!f)throw new Se.Schema("KeyPath "+u.index+" on object store "+h.name+" is not indexed");return f}function fr(u,h,f){var m=vo(u,h.schema);return h.openCursor({trans:f,values:!u.keysOnly,reverse:u.dir==="prev",unique:!!u.unique,query:{index:m,range:u.range}})}function bi(u,h,f,m){var y=u.replayFilter?dr(u.filter,u.replayFilter()):u.filter;if(u.or){var I={},A=function(b,k,x){var U,P;y&&!y(k,x,function(B){return k.stop(B)},function(B){return k.fail(B)})||((P=""+(U=k.primaryKey))=="[object ArrayBuffer]"&&(P=""+new Uint8Array(U)),ut(I,P)||(I[P]=!0,h(b,k,x)))};return Promise.all([u.or._iterate(A,f),zl(fr(u,m,f),u.algorithm,A,!u.keysOnly&&u.valueMapper)])}return zl(fr(u,m,f),dr(u.algorithm,y),h,!u.keysOnly&&u.valueMapper)}function zl(u,h,f,m){var y=It(m?function(I,A,b){return f(m(I),A,b)}:f);return u.then(function(I){if(I)return I.start(function(){var A=function(){return I.continue()};h&&!h(I,function(b){return A=b},function(b){I.stop(b),A=it},function(b){I.fail(b),A=it})||y(I.value,I,function(b){return A=b}),A()})})}var rd=(Ze.prototype._read=function(u,h){var f=this._ctx;return f.error?f.table._trans(null,kt.bind(null,f.error)):f.table._trans("readonly",u).then(h)},Ze.prototype._write=function(u){var h=this._ctx;return h.error?h.table._trans(null,kt.bind(null,h.error)):h.table._trans("readwrite",u,"locked")},Ze.prototype._addAlgorithm=function(u){var h=this._ctx;h.algorithm=dr(h.algorithm,u)},Ze.prototype._iterate=function(u,h){return bi(this._ctx,u,h,this._ctx.table.core)},Ze.prototype.clone=function(u){var h=Object.create(this.constructor.prototype),f=Object.create(this._ctx);return u&&St(f,u),h._ctx=f,h},Ze.prototype.raw=function(){return this._ctx.valueMapper=null,this},Ze.prototype.each=function(u){var h=this._ctx;return this._read(function(f){return bi(h,u,f,h.table.core)})},Ze.prototype.count=function(u){var h=this;return this._read(function(f){var m=h._ctx,y=m.table.core;if(Or(m,!0))return y.count({trans:f,query:{index:vo(m,y.schema),range:m.range}}).then(function(A){return Math.min(A,m.limit)});var I=0;return bi(m,function(){return++I,!1},f,y).then(function(){return I})}).then(u)},Ze.prototype.sortBy=function(u,h){var f=u.split(".").reverse(),m=f[0],y=f.length-1;function I(k,x){return x?I(k[f[x]],x-1):k[m]}var A=this._ctx.dir==="next"?1:-1;function b(k,x){return Ge(I(k,y),I(x,y))*A}return this.toArray(function(k){return k.sort(b)}).then(h)},Ze.prototype.toArray=function(u){var h=this;return this._read(function(f){var m=h._ctx;if(m.dir==="next"&&Or(m,!0)&&0<m.limit){var y=m.valueMapper,I=vo(m,m.table.core.schema);return m.table.core.query({trans:f,limit:m.limit,values:!0,query:{index:I,range:m.range}}).then(function(b){return b=b.result,y?b.map(y):b})}var A=[];return bi(m,function(b){return A.push(b)},f,m.table.core).then(function(){return A})},u)},Ze.prototype.offset=function(u){var h=this._ctx;return u<=0||(h.offset+=u,Or(h)?za(h,function(){var f=u;return function(m,y){return f===0||(f===1?--f:y(function(){m.advance(f),f=0}),!1)}}):za(h,function(){var f=u;return function(){return--f<0}})),this},Ze.prototype.limit=function(u){return this._ctx.limit=Math.min(this._ctx.limit,u),za(this._ctx,function(){var h=u;return function(f,m,y){return--h<=0&&m(y),0<=h}},!0),this},Ze.prototype.until=function(u,h){return Ka(this._ctx,function(f,m,y){return!u(f.value)||(m(y),h)}),this},Ze.prototype.first=function(u){return this.limit(1).toArray(function(h){return h[0]}).then(u)},Ze.prototype.last=function(u){return this.reverse().first(u)},Ze.prototype.filter=function(u){var h;return Ka(this._ctx,function(f){return u(f.value)}),(h=this._ctx).isMatch=dr(h.isMatch,u),this},Ze.prototype.and=function(u){return this.filter(u)},Ze.prototype.or=function(u){return new this.db.WhereClause(this._ctx.table,u,this)},Ze.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Ze.prototype.desc=function(){return this.reverse()},Ze.prototype.eachKey=function(u){var h=this._ctx;return h.keysOnly=!h.isMatch,this.each(function(f,m){u(m.key,m)})},Ze.prototype.eachUniqueKey=function(u){return this._ctx.unique="unique",this.eachKey(u)},Ze.prototype.eachPrimaryKey=function(u){var h=this._ctx;return h.keysOnly=!h.isMatch,this.each(function(f,m){u(m.primaryKey,m)})},Ze.prototype.keys=function(u){var h=this._ctx;h.keysOnly=!h.isMatch;var f=[];return this.each(function(m,y){f.push(y.key)}).then(function(){return f}).then(u)},Ze.prototype.primaryKeys=function(u){var h=this._ctx;if(h.dir==="next"&&Or(h,!0)&&0<h.limit)return this._read(function(m){var y=vo(h,h.table.core.schema);return h.table.core.query({trans:m,values:!1,limit:h.limit,query:{index:y,range:h.range}})}).then(function(m){return m.result}).then(u);h.keysOnly=!h.isMatch;var f=[];return this.each(function(m,y){f.push(y.primaryKey)}).then(function(){return f}).then(u)},Ze.prototype.uniqueKeys=function(u){return this._ctx.unique="unique",this.keys(u)},Ze.prototype.firstKey=function(u){return this.limit(1).keys(function(h){return h[0]}).then(u)},Ze.prototype.lastKey=function(u){return this.reverse().firstKey(u)},Ze.prototype.distinct=function(){var u=this._ctx,u=u.index&&u.table.schema.idxByName[u.index];if(!u||!u.multi)return this;var h={};return Ka(this._ctx,function(y){var m=y.primaryKey.toString(),y=ut(h,m);return h[m]=!0,!y}),this},Ze.prototype.modify=function(u){var h=this,f=this._ctx;return this._write(function(m){var y=typeof u=="function"?u:function(V){return $a(V,u)},I=f.table.core,x=I.schema.primaryKey,A=x.outbound,b=x.extractKey,k=200,x=h.db._options.modifyChunkSize;x&&(k=typeof x=="object"?x[I.name]||x["*"]||200:x);function U(V,W){var $=W.failures,W=W.numFailures;B+=V-W;for(var Q=0,ee=tt($);Q<ee.length;Q++){var ae=ee[Q];P.push($[ae])}}var P=[],B=0,D=[],N=u===Wa;return h.clone().primaryKeys().then(function(V){function T(W){var Q=Math.min(k,V.length-W),ee=V.slice(W,W+Q);return(N?Promise.resolve([]):I.getMany({trans:m,keys:ee,cache:"immutable"})).then(function(ae){var ge=[],ie=[],ce=A?[]:null,he=N?ee:[];if(!N)for(var se=0;se<Q;++se){var Te=ae[se],Me={value:ue(Te),primKey:V[W+se]};y.call(Me,Me.value,Me)!==!1&&(Me.value==null?he.push(V[W+se]):A||Ge(b(Te),b(Me.value))===0?(ie.push(Me.value),A&&ce.push(V[W+se])):(he.push(V[W+se]),ge.push(Me.value)))}return Promise.resolve(0<ge.length&&I.mutate({trans:m,type:"add",values:ge}).then(function(Oe){for(var ze in Oe.failures)he.splice(parseInt(ze),1);U(ge.length,Oe)})).then(function(){return(0<ie.length||$&&typeof u=="object")&&I.mutate({trans:m,type:"put",keys:ce,values:ie,criteria:$,changeSpec:typeof u!="function"&&u,isAdditionalChunk:0<W}).then(function(Oe){return U(ie.length,Oe)})}).then(function(){return(0<he.length||$&&N)&&I.mutate({trans:m,type:"delete",keys:he,criteria:$,isAdditionalChunk:0<W}).then(function(Oe){return go(f.table,he,Oe)}).then(function(Oe){return U(he.length,Oe)})}).then(function(){return V.length>W+Q&&T(W+k)})})}var $=Or(f)&&f.limit===1/0&&(typeof u!="function"||N)&&{index:f.index,range:f.range};return T(0).then(function(){if(0<P.length)throw new Mn("Error modifying one or more objects",P,B,D);return V.length})})})},Ze.prototype.delete=function(){var u=this._ctx,h=u.range;return!Or(u)||u.table.schema.yProps||!u.isPrimKey&&h.type!==3?this.modify(Wa):this._write(function(f){var m=u.table.core.schema.primaryKey,y=h;return u.table.core.count({trans:f,query:{index:m,range:y}}).then(function(I){return u.table.core.mutate({trans:f,type:"deleteRange",range:y}).then(function(k){var b=k.failures,k=k.numFailures;if(k)throw new Mn("Could not delete some values",Object.keys(b).map(function(x){return b[x]}),I-k);return I-k})})})},Ze);function Ze(){}var Wa=function(u,h){return h.value=null};function id(u,h){return u<h?-1:u===h?0:1}function sd(u,h){return h<u?-1:u===h?0:1}function gn(u,h,f){return u=u instanceof od?new u.Collection(u):u,u._ctx.error=new(f||TypeError)(h),u}function Si(u){return new u.Collection(u,function(){return Wl("")}).limit(0)}function Io(u,h,f,m){var y,I,A,b,k,x,U,P=f.length;if(!f.every(function(N){return typeof N=="string"}))return gn(u,$e);function B(N){y=N==="next"?function(T){return T.toUpperCase()}:function(T){return T.toLowerCase()},I=N==="next"?function(T){return T.toLowerCase()}:function(T){return T.toUpperCase()},A=N==="next"?id:sd;var V=f.map(function(T){return{lower:I(T),upper:y(T)}}).sort(function(T,$){return A(T.lower,$.lower)});b=V.map(function(T){return T.upper}),k=V.map(function(T){return T.lower}),U=(x=N)==="next"?"":m}B("next"),u=new u.Collection(u,function(){return Nr(b[0],k[P-1]+m)}),u._ondirectionchange=function(N){B(N)};var D=0;return u._addAlgorithm(function(N,V,T){var $=N.key;if(typeof $!="string")return!1;var W=I($);if(h(W,k,D))return!0;for(var Q=null,ee=D;ee<P;++ee){var ae=(function(ge,ie,ce,he,se,Te){for(var Me=Math.min(ge.length,he.length),Oe=-1,ze=0;ze<Me;++ze){var hn=ie[ze];if(hn!==he[ze])return se(ge[ze],ce[ze])<0?ge.substr(0,ze)+ce[ze]+ce.substr(ze+1):se(ge[ze],he[ze])<0?ge.substr(0,ze)+he[ze]+ce.substr(ze+1):0<=Oe?ge.substr(0,Oe)+ie[Oe]+ce.substr(Oe+1):null;se(ge[ze],hn)<0&&(Oe=ze)}return Me<he.length&&Te==="next"?ge+ce.substr(ge.length):Me<ge.length&&Te==="prev"?ge.substr(0,ce.length):Oe<0?null:ge.substr(0,Oe)+he[Oe]+ce.substr(Oe+1)})($,W,b[ee],k[ee],A,x);ae===null&&Q===null?D=ee+1:(Q===null||0<A(Q,ae))&&(Q=ae)}return V(Q!==null?function(){N.continue(Q+U)}:T),!1}),u}function Nr(u,h,f,m){return{type:2,lower:u,upper:h,lowerOpen:f,upperOpen:m}}function Wl(u){return{type:1,lower:u,upper:u}}var od=(Object.defineProperty(Wt.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),Wt.prototype.between=function(u,h,f,m){f=f!==!1,m=m===!0;try{return 0<this._cmp(u,h)||this._cmp(u,h)===0&&(f||m)&&(!f||!m)?Si(this):new this.Collection(this,function(){return Nr(u,h,!f,!m)})}catch(y){return gn(this,jn)}},Wt.prototype.equals=function(u){return u==null?gn(this,jn):new this.Collection(this,function(){return Wl(u)})},Wt.prototype.above=function(u){return u==null?gn(this,jn):new this.Collection(this,function(){return Nr(u,void 0,!0)})},Wt.prototype.aboveOrEqual=function(u){return u==null?gn(this,jn):new this.Collection(this,function(){return Nr(u,void 0,!1)})},Wt.prototype.below=function(u){return u==null?gn(this,jn):new this.Collection(this,function(){return Nr(void 0,u,!1,!0)})},Wt.prototype.belowOrEqual=function(u){return u==null?gn(this,jn):new this.Collection(this,function(){return Nr(void 0,u)})},Wt.prototype.startsWith=function(u){return typeof u!="string"?gn(this,$e):this.between(u,u+Zr,!0,!0)},Wt.prototype.startsWithIgnoreCase=function(u){return u===""?this.startsWith(u):Io(this,function(h,f){return h.indexOf(f[0])===0},[u],Zr)},Wt.prototype.equalsIgnoreCase=function(u){return Io(this,function(h,f){return h===f[0]},[u],"")},Wt.prototype.anyOfIgnoreCase=function(){var u=Ue.apply(Fe,arguments);return u.length===0?Si(this):Io(this,function(h,f){return f.indexOf(h)!==-1},u,"")},Wt.prototype.startsWithAnyOfIgnoreCase=function(){var u=Ue.apply(Fe,arguments);return u.length===0?Si(this):Io(this,function(h,f){return f.some(function(m){return h.indexOf(m)===0})},u,Zr)},Wt.prototype.anyOf=function(){var u=this,h=Ue.apply(Fe,arguments),f=this._cmp;try{h.sort(f)}catch(I){return gn(this,jn)}if(h.length===0)return Si(this);var m=new this.Collection(this,function(){return Nr(h[0],h[h.length-1])});m._ondirectionchange=function(I){f=I==="next"?u._ascending:u._descending,h.sort(f)};var y=0;return m._addAlgorithm(function(I,A,b){for(var k=I.key;0<f(k,h[y]);)if(++y===h.length)return A(b),!1;return f(k,h[y])===0||(A(function(){I.continue(h[y])}),!1)}),m},Wt.prototype.notEqual=function(u){return this.inAnyRange([[-1/0,u],[u,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},Wt.prototype.noneOf=function(){var u=Ue.apply(Fe,arguments);if(u.length===0)return new this.Collection(this);try{u.sort(this._ascending)}catch(f){return gn(this,jn)}var h=u.reduce(function(f,m){return f?f.concat([[f[f.length-1][1],m]]):[[-1/0,m]]},null);return h.push([u[u.length-1],this.db._maxKey]),this.inAnyRange(h,{includeLowers:!1,includeUppers:!1})},Wt.prototype.inAnyRange=function($,h){var f=this,m=this._cmp,y=this._ascending,I=this._descending,A=this._min,b=this._max;if($.length===0)return Si(this);if(!$.every(function(W){return W[0]!==void 0&&W[1]!==void 0&&y(W[0],W[1])<=0}))return gn(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",Se.InvalidArgument);var k=!h||h.includeLowers!==!1,x=h&&h.includeUppers===!0,U,P=y;function B(W,Q){return P(W[0],Q[0])}try{(U=$.reduce(function(W,Q){for(var ee=0,ae=W.length;ee<ae;++ee){var ge=W[ee];if(m(Q[0],ge[1])<0&&0<m(Q[1],ge[0])){ge[0]=A(ge[0],Q[0]),ge[1]=b(ge[1],Q[1]);break}}return ee===ae&&W.push(Q),W},[])).sort(B)}catch(W){return gn(this,jn)}var D=0,N=x?function(W){return 0<y(W,U[D][1])}:function(W){return 0<=y(W,U[D][1])},V=k?function(W){return 0<I(W,U[D][0])}:function(W){return 0<=I(W,U[D][0])},T=N,$=new this.Collection(this,function(){return Nr(U[0][0],U[U.length-1][1],!k,!x)});return $._ondirectionchange=function(W){P=W==="next"?(T=N,y):(T=V,I),U.sort(B)},$._addAlgorithm(function(W,Q,ee){for(var ae,ge=W.key;T(ge);)if(++D===U.length)return Q(ee),!1;return!N(ae=ge)&&!V(ae)||(f._cmp(ge,U[D][1])===0||f._cmp(ge,U[D][0])===0||Q(function(){P===y?W.continue(U[D][0]):W.continue(U[D][1])}),!1)}),$},Wt.prototype.startsWithAnyOf=function(){var u=Ue.apply(Fe,arguments);return u.every(function(h){return typeof h=="string"})?u.length===0?Si(this):this.inAnyRange(u.map(function(h){return[h,h+Zr]})):gn(this,"startsWithAnyOf() only works with strings")},Wt);function Wt(){}function rr(u){return It(function(h){return ti(h),u(h.target.error),!1})}function ti(u){u.stopPropagation&&u.stopPropagation(),u.preventDefault&&u.preventDefault()}var Pi="storagemutated",Ga="x-storagemutated-1",pr=ys(null,Pi),ad=(ir.prototype._lock=function(){return Xt(!De.global),++this._reculock,this._reculock!==1||De.global||(De.lockOwnerFor=this),this},ir.prototype._unlock=function(){if(Xt(!De.global),--this._reculock==0)for(De.global||(De.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var u=this._blockedFuncs.shift();try{Sn(u[1],u[0])}catch(h){}}return this},ir.prototype._locked=function(){return this._reculock&&De.lockOwnerFor!==this},ir.prototype.create=function(u){var h=this;if(!this.mode)return this;var f=this.db.idbdb,m=this.db._state.dbOpenError;if(Xt(!this.idbtrans),!u&&!f)switch(m&&m.name){case"DatabaseClosedError":throw new Se.DatabaseClosed(m);case"MissingAPIError":throw new Se.MissingAPI(m.message,m);default:throw new Se.OpenFailed(m)}if(!this.active)throw new Se.TransactionInactive;return Xt(this._completion._state===null),(u=this.idbtrans=u||(this.db.core||f).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=It(function(y){ti(y),h._reject(u.error)}),u.onabort=It(function(y){ti(y),h.active&&h._reject(new Se.Abort(u.error)),h.active=!1,h.on("abort").fire(y)}),u.oncomplete=It(function(){h.active=!1,h._resolve(),"mutatedParts"in u&&pr.storagemutated.fire(u.mutatedParts)}),this},ir.prototype._promise=function(u,h,f){var m=this;if(u==="readwrite"&&this.mode!=="readwrite")return kt(new Se.ReadOnly("Transaction is readonly"));if(!this.active)return kt(new Se.TransactionInactive);if(this._locked())return new _e(function(I,A){m._blockedFuncs.push([function(){m._promise(u,h,f).then(I,A)},De])});if(f)return Dr(function(){var I=new _e(function(A,b){m._lock();var k=h(A,b,m);k&&k.then&&k.then(A,b)});return I.finally(function(){return m._unlock()}),I._lib=!0,I});var y=new _e(function(I,A){var b=h(I,A,m);b&&b.then&&b.then(I,A)});return y._lib=!0,y},ir.prototype._root=function(){return this.parent?this.parent._root():this},ir.prototype.waitFor=function(u){var h,f=this._root(),m=_e.resolve(u);f._waitingFor?f._waitingFor=f._waitingFor.then(function(){return m}):(f._waitingFor=m,f._waitingQueue=[],h=f.idbtrans.objectStore(f.storeNames[0]),(function I(){for(++f._spinCount;f._waitingQueue.length;)f._waitingQueue.shift()();f._waitingFor&&(h.get(-1/0).onsuccess=I)})());var y=f._waitingFor;return new _e(function(I,A){m.then(function(b){return f._waitingQueue.push(It(I.bind(null,b)))},function(b){return f._waitingQueue.push(It(A.bind(null,b)))}).finally(function(){f._waitingFor===y&&(f._waitingFor=null)})})},ir.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new Se.Abort))},ir.prototype.table=function(u){var h=this._memoizedTables||(this._memoizedTables={});if(ut(h,u))return h[u];var f=this.schema[u];if(!f)throw new Se.NotFound("Table "+u+" not part of transaction");return f=new this.db.Table(u,f,this),f.core=this.db.core.table(u),h[u]=f},ir);function ir(){}function To(u,h,f,m,y,I,A,b){return{name:u,keyPath:h,unique:f,multi:m,auto:y,compound:I,src:(f&&!A?"&":"")+(m?"*":"")+(y?"++":"")+ni(h),type:b}}function ni(u){return typeof u=="string"?u:u?"["+[].join.call(u,"+")+"]":""}function $n(u,h,f){return{name:u,primKey:h,indexes:f,mappedClass:null,idxByName:(m=function(y){return[y.name,y]},f.reduce(function(y,I,A){return A=m(I,A),A&&(y[A[0]]=A[1]),y},{}))};var m}var Is=function(u){try{return u.only([[]]),Is=function(){return[[]]},[[]]}catch(h){return Is=function(){return Zr},Zr}};function Ha(u){return u==null?function(){}:typeof u=="string"?(h=u).split(".").length===1?function(f){return f[h]}:function(f){return Zt(f,h)}:function(f){return Zt(f,u)};var h}function Ts(u){return[].slice.call(u)}var Qa=0;function Pn(u){return u==null?":id":typeof u=="string"?u:"[".concat(u.join("+"),"]")}function ud(u,h,k){function m(T){if(T.type===3)return null;if(T.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var D=T.lower,N=T.upper,V=T.lowerOpen,T=T.upperOpen;return D===void 0?N===void 0?null:h.upperBound(N,!!T):N===void 0?h.lowerBound(D,!!V):h.bound(D,N,!!V,!!T)}function y(B){var D,N=B.name;return{name:N,schema:B,mutate:function(V){var T=V.trans,$=V.type,W=V.keys,Q=V.values,ee=V.range;return new Promise(function(ae,ge){ae=It(ae);var ie=T.objectStore(N),ce=ie.keyPath==null,he=$==="put"||$==="add";if(!he&&$!=="delete"&&$!=="deleteRange")throw new Error("Invalid operation type: "+$);var se,Te=(W||Q||{length:1}).length;if(W&&Q&&W.length!==Q.length)throw new Error("Given keys array must have same length as given values array.");if(Te===0)return ae({numFailures:0,failures:{},results:[],lastResult:void 0});function Me(nn){++hn,ti(nn)}var Oe=[],ze=[],hn=0;if($==="deleteRange"){if(ee.type===4)return ae({numFailures:hn,failures:ze,results:[],lastResult:void 0});ee.type===3?Oe.push(se=ie.clear()):Oe.push(se=ie.delete(m(ee)))}else{var ce=he?ce?[Q,W]:[Q,null]:[W,null],te=ce[0],pt=ce[1];if(he)for(var Bt=0;Bt<Te;++Bt)Oe.push(se=pt&&pt[Bt]!==void 0?ie[$](te[Bt],pt[Bt]):ie[$](te[Bt])),se.onerror=Me;else for(Bt=0;Bt<Te;++Bt)Oe.push(se=ie[$](te[Bt])),se.onerror=Me}function Ps(nn){nn=nn.target.result,Oe.forEach(function(Mr,lu){return Mr.error!=null&&(ze[lu]=Mr.error)}),ae({numFailures:hn,failures:ze,results:$==="delete"?W:Oe.map(function(Mr){return Mr.result}),lastResult:nn})}se.onerror=function(nn){Me(nn),Ps(nn)},se.onsuccess=Ps})},getMany:function(V){var T=V.trans,$=V.keys;return new Promise(function(W,Q){W=It(W);for(var ee,ae=T.objectStore(N),ge=$.length,ie=new Array(ge),ce=0,he=0,se=function(Oe){Oe=Oe.target,ie[Oe._pos]=Oe.result,++he===ce&&W(ie)},Te=rr(Q),Me=0;Me<ge;++Me)$[Me]!=null&&((ee=ae.get($[Me]))._pos=Me,ee.onsuccess=se,ee.onerror=Te,++ce);ce===0&&W(ie)})},get:function(V){var T=V.trans,$=V.key;return new Promise(function(W,Q){W=It(W);var ee=T.objectStore(N).get($);ee.onsuccess=function(ae){return W(ae.target.result)},ee.onerror=rr(Q)})},query:(D=x,function(V){return new Promise(function(T,$){T=It(T);var W,Q,ee,ce=V.trans,ae=V.values,ge=V.limit,se=V.query,ie=ge===1/0?void 0:ge,he=se.index,se=se.range,ce=ce.objectStore(N),he=he.isPrimaryKey?ce:ce.index(he.name),se=m(se);if(ge===0)return T({result:[]});D?((ie=ae?he.getAll(se,ie):he.getAllKeys(se,ie)).onsuccess=function(Te){return T({result:Te.target.result})},ie.onerror=rr($)):(W=0,Q=!ae&&"openKeyCursor"in he?he.openKeyCursor(se):he.openCursor(se),ee=[],Q.onsuccess=function(Te){var Me=Q.result;return Me?(ee.push(ae?Me.value:Me.primaryKey),++W===ge?T({result:ee}):void Me.continue()):T({result:ee})},Q.onerror=rr($))})}),openCursor:function(V){var T=V.trans,$=V.values,W=V.query,Q=V.reverse,ee=V.unique;return new Promise(function(ae,ge){ae=It(ae);var he=W.index,ie=W.range,ce=T.objectStore(N),ce=he.isPrimaryKey?ce:ce.index(he.name),he=Q?ee?"prevunique":"prev":ee?"nextunique":"next",se=!$&&"openKeyCursor"in ce?ce.openKeyCursor(m(ie),he):ce.openCursor(m(ie),he);se.onerror=rr(ge),se.onsuccess=It(function(Te){var Me,Oe,ze,hn,te=se.result;te?(te.___id=++Qa,te.done=!1,Me=te.continue.bind(te),Oe=(Oe=te.continuePrimaryKey)&&Oe.bind(te),ze=te.advance.bind(te),hn=function(){throw new Error("Cursor not stopped")},te.trans=T,te.stop=te.continue=te.continuePrimaryKey=te.advance=function(){throw new Error("Cursor not started")},te.fail=It(ge),te.next=function(){var pt=this,Bt=1;return this.start(function(){return Bt--?pt.continue():pt.stop()}).then(function(){return pt})},te.start=function(pt){function Bt(){if(se.result)try{pt()}catch(nn){te.fail(nn)}else te.done=!0,te.start=function(){throw new Error("Cursor behind last entry")},te.stop()}var Ps=new Promise(function(nn,Mr){nn=It(nn),se.onerror=rr(Mr),te.fail=Mr,te.stop=function(lu){te.stop=te.continue=te.continuePrimaryKey=te.advance=hn,nn(lu)}});return se.onsuccess=It(function(nn){se.onsuccess=Bt,Bt()}),te.continue=Me,te.continuePrimaryKey=Oe,te.advance=ze,Bt(),Ps},ae(te)):ae(null)},ge)})},count:function(V){var T=V.query,$=V.trans,W=T.index,Q=T.range;return new Promise(function(ee,ae){var ge=$.objectStore(N),ie=W.isPrimaryKey?ge:ge.index(W.name),ge=m(Q),ie=ge?ie.count(ge):ie.count();ie.onsuccess=It(function(ce){return ee(ce.target.result)}),ie.onerror=rr(ae)})}}}var I,A,b,U=(A=k,b=Ts((I=u).objectStoreNames),{schema:{name:I.name,tables:b.map(function(B){return A.objectStore(B)}).map(function(B){var D=B.keyPath,T=B.autoIncrement,N=je(D),V={},T={name:B.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:D==null,compound:N,keyPath:D,autoIncrement:T,unique:!0,extractKey:Ha(D)},indexes:Ts(B.indexNames).map(function($){return B.index($)}).map(function(ee){var W=ee.name,Q=ee.unique,ae=ee.multiEntry,ee=ee.keyPath,ae={name:W,compound:je(ee),keyPath:ee,unique:Q,multiEntry:ae,extractKey:Ha(ee)};return V[Pn(ee)]=ae}),getIndexByKeyPath:function($){return V[Pn($)]}};return V[":id"]=T.primaryKey,D!=null&&(V[Pn(D)]=T.primaryKey),T})},hasGetAll:0<b.length&&"getAll"in A.objectStore(b[0])&&!(typeof navigator!="undefined"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604)}),k=U.schema,x=U.hasGetAll,U=k.tables.map(y),P={};return U.forEach(function(B){return P[B.name]=B}),{stack:"dbcore",transaction:u.transaction.bind(u),table:function(B){if(!P[B])throw new Error("Table '".concat(B,"' not found"));return P[B]},MIN_KEY:-1/0,MAX_KEY:Is(h),schema:k}}function ld(u,h,f,m){var y=f.IDBKeyRange;return f.indexedDB,{dbcore:(m=ud(h,y,m),u.dbcore.reduce(function(I,A){return A=A.create,Ce(Ce({},I),A(I))},m))}}function Eo(u,m){var f=m.db,m=ld(u._middlewares,f,u._deps,m);u.core=m.dbcore,u.tables.forEach(function(y){var I=y.name;u.core.schema.tables.some(function(A){return A.name===I})&&(y.core=u.core.table(I),u[I]instanceof u.Table&&(u[I].core=y.core))})}function wo(u,h,f,m){f.forEach(function(y){var I=m[y];h.forEach(function(A){var b=(function k(x,U){return Ar(x,U)||(x=yt(x))&&k(x,U)})(A,y);(!b||"value"in b&&b.value===void 0)&&(A===u.Transaction.prototype||A instanceof u.Transaction?mn(A,y,{get:function(){return this.table(y)},set:function(k){Qr(this,y,{value:k,writable:!0,configurable:!0,enumerable:!0})}}):A[y]=new u.Table(y,I))})})}function Ya(u,h){h.forEach(function(f){for(var m in f)f[m]instanceof u.Table&&delete f[m]})}function cd(u,h){return u._cfg.version-h._cfg.version}function hd(u,h,f,m){var y=u._dbSchema;f.objectStoreNames.contains("$meta")&&!y.$meta&&(y.$meta=$n("$meta",Hl("")[0],[]),u._storeNames.push("$meta"));var I=u._createTransaction("readwrite",u._storeNames,y);I.create(f),I._completion.catch(m);var A=I._reject.bind(I),b=De.transless||De;Dr(function(){return De.trans=I,De.transless=b,h!==0?(Eo(u,f),x=h,((k=I).storeNames.includes("$meta")?k.table("$meta").get("version").then(function(U){return U!=null?U:x}):_e.resolve(x)).then(function(U){return B=U,D=I,N=f,V=[],U=(P=u)._versions,T=P._dbSchema=bo(0,P.idbdb,N),(U=U.filter(function($){return $._cfg.version>=B})).length!==0?(U.forEach(function($){V.push(function(){var W=T,Q=$._cfg.dbschema;So(P,W,N),So(P,Q,N),T=P._dbSchema=Q;var ee=Ja(W,Q);ee.add.forEach(function(he){Xa(N,he[0],he[1].primKey,he[1].indexes)}),ee.change.forEach(function(he){if(he.recreate)throw new Se.Upgrade("Not yet support for changing primary key");var se=N.objectStore(he.name);he.add.forEach(function(Te){return Ao(se,Te)}),he.change.forEach(function(Te){se.deleteIndex(Te.name),Ao(se,Te)}),he.del.forEach(function(Te){return se.deleteIndex(Te)})});var ae=$._cfg.contentUpgrade;if(ae&&$._cfg.version>B){Eo(P,N),D._memoizedTables={};var ge=ye(Q);ee.del.forEach(function(he){ge[he]=W[he]}),Ya(P,[P.Transaction.prototype]),wo(P,[P.Transaction.prototype],tt(ge),ge),D.schema=ge;var ie,ce=lt(ae);return ce&&_s(),ee=_e.follow(function(){var he;(ie=ae(D))&&ce&&(he=Xr.bind(null,null),ie.then(he,he))}),ie&&typeof ie.then=="function"?_e.resolve(ie):ee.then(function(){return ie})}}),V.push(function(W){var Q,ee,ae=$._cfg.dbschema;Q=ae,ee=W,[].slice.call(ee.db.objectStoreNames).forEach(function(ge){return Q[ge]==null&&ee.db.deleteObjectStore(ge)}),Ya(P,[P.Transaction.prototype]),wo(P,[P.Transaction.prototype],P._storeNames,P._dbSchema),D.schema=P._dbSchema}),V.push(function(W){P.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(P.idbdb.version/10)===$._cfg.version?(P.idbdb.deleteObjectStore("$meta"),delete P._dbSchema.$meta,P._storeNames=P._storeNames.filter(function(Q){return Q!=="$meta"})):W.objectStore("$meta").put($._cfg.version,"version"))})}),(function $(){return V.length?_e.resolve(V.shift()(D.idbtrans)).then($):_e.resolve()})().then(function(){Gl(T,N)})):_e.resolve();var P,B,D,N,V,T}).catch(A)):(tt(y).forEach(function(U){Xa(f,U,y[U].primKey,y[U].indexes)}),Eo(u,f),void _e.follow(function(){return u.on.populate.fire(I)}).catch(A));var k,x})}function dd(u,h){Gl(u._dbSchema,h),h.db.version%10!=0||h.objectStoreNames.contains("$meta")||h.db.createObjectStore("$meta").add(Math.ceil(h.db.version/10-1),"version");var f=bo(0,u.idbdb,h);So(u,u._dbSchema,h);for(var m=0,y=Ja(f,u._dbSchema).change;m<y.length;m++){var I=(function(A){if(A.change.length||A.recreate)return console.warn("Unable to patch indexes of table ".concat(A.name," because it has changes on the type of index or primary key.")),{value:void 0};var b=h.objectStore(A.name);A.add.forEach(function(k){tr&&console.debug("Dexie upgrade patch: Creating missing index ".concat(A.name,".").concat(k.src)),Ao(b,k)})})(y[m]);if(typeof I=="object")return I.value}}function Ja(u,h){var f,m={del:[],add:[],change:[]};for(f in u)h[f]||m.del.push(f);for(f in h){var y=u[f],I=h[f];if(y){var A={name:f,def:I,recreate:!1,del:[],add:[],change:[]};if(""+(y.primKey.keyPath||"")!=""+(I.primKey.keyPath||"")||y.primKey.auto!==I.primKey.auto)A.recreate=!0,m.change.push(A);else{var b=y.idxByName,k=I.idxByName,x=void 0;for(x in b)k[x]||A.del.push(x);for(x in k){var U=b[x],P=k[x];U?U.src!==P.src&&A.change.push(P):A.add.push(P)}(0<A.del.length||0<A.add.length||0<A.change.length)&&m.change.push(A)}}else m.add.push([f,I])}return m}function Xa(u,h,f,m){var y=u.db.createObjectStore(h,f.keyPath?{keyPath:f.keyPath,autoIncrement:f.auto}:{autoIncrement:f.auto});return m.forEach(function(I){return Ao(y,I)}),y}function Gl(u,h){tt(u).forEach(function(f){h.db.objectStoreNames.contains(f)||(tr&&console.debug("Dexie: Creating missing table",f),Xa(h,f,u[f].primKey,u[f].indexes))})}function Ao(u,h){u.createIndex(h.name,h.keyPath,{unique:h.unique,multiEntry:h.multi})}function bo(u,h,f){var m={};return Vn(h.objectStoreNames,0).forEach(function(y){for(var I=f.objectStore(y),A=To(ni(x=I.keyPath),x||"",!0,!1,!!I.autoIncrement,x&&typeof x!="string",!0),b=[],k=0;k<I.indexNames.length;++k){var U=I.index(I.indexNames[k]),x=U.keyPath,U=To(U.name,x,!!U.unique,!!U.multiEntry,!1,x&&typeof x!="string",!1);b.push(U)}m[y]=$n(y,A,b)}),m}function So(u,h,f){for(var m=f.db.objectStoreNames,y=0;y<m.length;++y){var I=m[y],A=f.objectStore(I);u._hasGetAll="getAll"in A;for(var b=0;b<A.indexNames.length;++b){var k=A.indexNames[b],x=A.index(k).keyPath,U=typeof x=="string"?x:"["+Vn(x).join("+")+"]";!h[I]||(x=h[I].idxByName[U])&&(x.name=k,delete h[I].idxByName[U],h[I].idxByName[k]=x)}}typeof navigator!="undefined"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&nt.WorkerGlobalScope&&nt instanceof nt.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(u._hasGetAll=!1)}function Hl(u){return u.split(",").map(function(h,f){var I=h.split(":"),m=(y=I[1])===null||y===void 0?void 0:y.trim(),y=(h=I[0].trim()).replace(/([&*]|\+\+)/g,""),I=/^\[/.test(y)?y.match(/^\[(.*)\]$/)[1].split("+"):y;return To(y,I||null,/\&/.test(h),/\*/.test(h),/\+\+/.test(h),je(I),f===0,m)})}var fd=(Ri.prototype._createTableSchema=$n,Ri.prototype._parseIndexSyntax=Hl,Ri.prototype._parseStoresSpec=function(u,h){var f=this;tt(u).forEach(function(m){if(u[m]!==null){var y=f._parseIndexSyntax(u[m]),I=y.shift();if(!I)throw new Se.Schema("Invalid schema for table "+m+": "+u[m]);if(I.unique=!0,I.multi)throw new Se.Schema("Primary key cannot be multiEntry*");y.forEach(function(A){if(A.auto)throw new Se.Schema("Only primary key can be marked as autoIncrement (++)");if(!A.keyPath)throw new Se.Schema("Index must have a name and cannot be an empty string")}),y=f._createTableSchema(m,I,y),h[m]=y}})},Ri.prototype.stores=function(f){var h=this.db;this._cfg.storesSource=this._cfg.storesSource?St(this._cfg.storesSource,f):f;var f=h._versions,m={},y={};return f.forEach(function(I){St(m,I._cfg.storesSource),y=I._cfg.dbschema={},I._parseStoresSpec(m,y)}),h._dbSchema=y,Ya(h,[h._allTables,h,h.Transaction.prototype]),wo(h,[h._allTables,h,h.Transaction.prototype,this._cfg.tables],tt(y),y),h._storeNames=tt(y),this},Ri.prototype.upgrade=function(u){return this._cfg.contentUpgrade=Ml(this._cfg.contentUpgrade||it,u),this},Ri);function Ri(){}function Za(u,h){var f=u._dbNamesDB;return f||(f=u._dbNamesDB=new _r(mo,{addons:[],indexedDB:u,IDBKeyRange:h})).version(1).stores({dbnames:"name"}),f.table("dbnames")}function eu(u){return u&&typeof u.databases=="function"}function tu(u){return Dr(function(){return De.letThrough=!0,u()})}function nu(u){return!("from"in u)}var tn=function(u,h){if(!this){var f=new tn;return u&&"d"in u&&St(f,u),f}St(this,arguments.length?{d:1,from:u,to:1<arguments.length?h:u}:{d:0})};function Es(u,h,f){var m=Ge(h,f);if(!isNaN(m)){if(0<m)throw RangeError();if(nu(u))return St(u,{from:h,to:f,d:1});var y=u.l,m=u.r;if(Ge(f,u.from)<0)return y?Es(y,h,f):u.l={from:h,to:f,d:1,l:null,r:null},Yl(u);if(0<Ge(h,u.to))return m?Es(m,h,f):u.r={from:h,to:f,d:1,l:null,r:null},Yl(u);Ge(h,u.from)<0&&(u.from=h,u.l=null,u.d=m?m.d+1:1),0<Ge(f,u.to)&&(u.to=f,u.r=null,u.d=u.l?u.l.d+1:1),f=!u.r,y&&!u.l&&ws(u,y),m&&f&&ws(u,m)}}function ws(u,h){nu(h)||(function f(m,k){var I=k.from,A=k.to,b=k.l,k=k.r;Es(m,I,A),b&&f(m,b),k&&f(m,k)})(u,h)}function Ql(u,h){var f=Po(h),m=f.next();if(m.done)return!1;for(var y=m.value,I=Po(u),A=I.next(y.from),b=A.value;!m.done&&!A.done;){if(Ge(b.from,y.to)<=0&&0<=Ge(b.to,y.from))return!0;Ge(y.from,b.from)<0?y=(m=f.next(b.from)).value:b=(A=I.next(y.from)).value}return!1}function Po(u){var h=nu(u)?null:{s:0,n:u};return{next:function(f){for(var m=0<arguments.length;h;)switch(h.s){case 0:if(h.s=1,m)for(;h.n.l&&Ge(f,h.n.from)<0;)h={up:h,n:h.n.l,s:1};else for(;h.n.l;)h={up:h,n:h.n.l,s:1};case 1:if(h.s=2,!m||Ge(f,h.n.to)<=0)return{value:h.n,done:!1};case 2:if(h.n.r){h.s=3,h={up:h,n:h.n.r,s:0};continue}case 3:h=h.up}return{done:!0}}}}function Yl(u){var h,f,m=(((h=u.r)===null||h===void 0?void 0:h.d)||0)-(((f=u.l)===null||f===void 0?void 0:f.d)||0),y=1<m?"r":m<-1?"l":"";y&&(h=y=="r"?"l":"r",f=Ce({},u),m=u[y],u.from=m.from,u.to=m.to,u[y]=m[y],f[y]=m[h],(u[h]=f).d=As(f)),u.d=As(u)}function As(f){var h=f.r,f=f.l;return(h?f?Math.max(h.d,f.d):h.d:f?f.d:0)+1}function Ro(u,h){return tt(h).forEach(function(f){u[f]?ws(u[f],h[f]):u[f]=(function m(y){var I,A,b={};for(I in y)ut(y,I)&&(A=y[I],b[I]=!A||typeof A!="object"||Qe.has(A.constructor)?A:m(A));return b})(h[f])}),u}function mr(u,h){return u.all||h.all||Object.keys(u).some(function(f){return h[f]&&Ql(h[f],u[f])})}Mt(tn.prototype,((Cn={add:function(u){return ws(this,u),this},addKey:function(u){return Es(this,u,u),this},addKeys:function(u){var h=this;return u.forEach(function(f){return Es(h,f,f)}),this},hasKey:function(u){var h=Po(this).next(u).value;return h&&Ge(h.from,u)<=0&&0<=Ge(h.to,u)}})[oe]=function(){return Po(this)},Cn));var Kn={},ri={},Co=!1;function ru(u){Ro(ri,u),Co||(Co=!0,setTimeout(function(){Co=!1,Vr(ri,!(ri={}))},0))}function Vr(u,h){h===void 0&&(h=!1);var f=new Set;if(u.all)for(var m=0,y=Object.values(Kn);m<y.length;m++)bs(A=y[m],u,f,h);else for(var I in u){var A,b=/^idb\:\/\/(.*)\/(.*)\//.exec(I);b&&(I=b[1],b=b[2],(A=Kn["idb://".concat(I,"/").concat(b)])&&bs(A,u,f,h))}f.forEach(function(k){return k()})}function bs(u,h,f,m){for(var y=[],I=0,A=Object.entries(u.queries.query);I<A.length;I++){for(var b=A[I],k=b[0],x=[],U=0,P=b[1];U<P.length;U++){var B=P[U];mr(h,B.obsSet)?B.subscribers.forEach(function(T){return f.add(T)}):m&&x.push(B)}m&&y.push([k,x])}if(m)for(var D=0,N=y;D<N.length;D++){var V=N[D],k=V[0],x=V[1];u.queries.query[k]=x}}function am(u){var h=u._state,f=u._deps.indexedDB;if(h.isBeingOpened||u.idbdb)return h.dbReadyPromise.then(function(){return h.dbOpenError?kt(h.dbOpenError):u});h.isBeingOpened=!0,h.dbOpenError=null,h.openComplete=!1;var m=h.openCanceller,y=Math.round(10*u.verno),I=!1;function A(){if(h.openCanceller!==m)throw new Se.DatabaseClosed("db.open() was cancelled")}function b(){return new _e(function(B,D){if(A(),!f)throw new Se.MissingAPI;var N=u.name,V=h.autoSchema||!y?f.open(N):f.open(N,y);if(!V)throw new Se.MissingAPI;V.onerror=rr(D),V.onblocked=It(u._fireOnBlocked),V.onupgradeneeded=It(function(T){var $;U=V.transaction,h.autoSchema&&!u._options.allowEmptyDB?(V.onerror=ti,U.abort(),V.result.close(),($=f.deleteDatabase(N)).onsuccess=$.onerror=It(function(){D(new Se.NoSuchDatabase("Database ".concat(N," doesnt exist")))})):(U.onerror=rr(D),T=T.oldVersion>Math.pow(2,62)?0:T.oldVersion,P=T<1,u.idbdb=V.result,I&&dd(u,U),hd(u,T/10,U,D))},D),V.onsuccess=It(function(){U=null;var T,$,W,Q,ee,ae=u.idbdb=V.result,ge=Vn(ae.objectStoreNames);if(0<ge.length)try{var ie=ae.transaction((Q=ge).length===1?Q[0]:Q,"readonly");if(h.autoSchema)$=ae,W=ie,(T=u).verno=$.version/10,W=T._dbSchema=bo(0,$,W),T._storeNames=Vn($.objectStoreNames,0),wo(T,[T._allTables],tt(W),W);else if(So(u,u._dbSchema,ie),((ee=Ja(bo(0,(ee=u).idbdb,ie),ee._dbSchema)).add.length||ee.change.some(function(ce){return ce.add.length||ce.change.length}))&&!I)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),ae.close(),y=ae.version+1,I=!0,B(b());Eo(u,ie)}catch(ce){}ei.push(u),ae.onversionchange=It(function(ce){h.vcFired=!0,u.on("versionchange").fire(ce)}),ae.onclose=It(function(){u.close({disableAutoOpen:!1})}),P&&(ee=u._deps,ie=N,ae=ee.indexedDB,ee=ee.IDBKeyRange,eu(ae)||ie===mo||Za(ae,ee).put({name:ie}).catch(it)),B()},D)}).catch(function(B){switch(B==null?void 0:B.name){case"UnknownError":if(0<h.PR1398_maxLoop)return h.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),b();break;case"VersionError":if(0<y)return y=0,b()}return _e.reject(B)})}var k,x=h.dbReadyResolve,U=null,P=!1;return _e.race([m,(typeof navigator=="undefined"?_e.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(B){function D(){return indexedDB.databases().finally(B)}k=setInterval(D,100),D()}).finally(function(){return clearInterval(k)}):Promise.resolve()).then(b)]).then(function(){return A(),h.onReadyBeingFired=[],_e.resolve(tu(function(){return u.on.ready.fire(u.vip)})).then(function B(){if(0<h.onReadyBeingFired.length){var D=h.onReadyBeingFired.reduce(Ml,it);return h.onReadyBeingFired=[],_e.resolve(tu(function(){return D(u.vip)})).then(B)}})}).finally(function(){h.openCanceller===m&&(h.onReadyBeingFired=null,h.isBeingOpened=!1)}).catch(function(B){h.dbOpenError=B;try{U&&U.abort()}catch(D){}return m===h.openCanceller&&u._close(),kt(B)}).finally(function(){h.openComplete=!0,x()}).then(function(){var B;return P&&(B={},u.tables.forEach(function(D){D.schema.indexes.forEach(function(N){N.name&&(B["idb://".concat(u.name,"/").concat(D.name,"/").concat(N.name)]=new tn(-1/0,[[[]]]))}),B["idb://".concat(u.name,"/").concat(D.name,"/")]=B["idb://".concat(u.name,"/").concat(D.name,"/:dels")]=new tn(-1/0,[[[]]])}),pr(Pi).fire(B),Vr(B,!0)),u})}function Do(u){function h(I){return u.next(I)}var f=y(h),m=y(function(I){return u.throw(I)});function y(I){return function(k){var b=I(k),k=b.value;return b.done?k:k&&typeof k.then=="function"?k.then(f,m):je(k)?Promise.all(k).then(f,m):f(k)}}return y(h)()}function ko(u,h,f){for(var m=je(u)?u.slice():[u],y=0;y<f;++y)m.push(h);return m}var zn={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(u){return Ce(Ce({},u),{table:function(h){var f=u.table(h),m=f.schema,y={},I=[];function A(P,B,D){var N=Pn(P),V=y[N]=y[N]||[],T=P==null?0:typeof P=="string"?1:P.length,$=0<B,$=Ce(Ce({},D),{name:$?"".concat(N,"(virtual-from:").concat(D.name,")"):D.name,lowLevelIndex:D,isVirtual:$,keyTail:B,keyLength:T,extractKey:Ha(P),unique:!$&&D.unique});return V.push($),$.isPrimaryKey||I.push($),1<T&&A(T===2?P[0]:P.slice(0,T-1),B+1,D),V.sort(function(W,Q){return W.keyTail-Q.keyTail}),$}h=A(m.primaryKey.keyPath,0,m.primaryKey),y[":id"]=[h];for(var b=0,k=m.indexes;b<k.length;b++){var x=k[b];A(x.keyPath,0,x)}function U(P){var B,D=P.query.index;return D.isVirtual?Ce(Ce({},P),{query:{index:D.lowLevelIndex,range:(B=P.query.range,D=D.keyTail,{type:B.type===1?2:B.type,lower:ko(B.lower,B.lowerOpen?u.MAX_KEY:u.MIN_KEY,D),lowerOpen:!0,upper:ko(B.upper,B.upperOpen?u.MIN_KEY:u.MAX_KEY,D),upperOpen:!0})}}):P}return Ce(Ce({},f),{schema:Ce(Ce({},m),{primaryKey:h,indexes:I,getIndexByKeyPath:function(P){return(P=y[Pn(P)])&&P[0]}}),count:function(P){return f.count(U(P))},query:function(P){return f.query(U(P))},openCursor:function(P){var B=P.query.index,D=B.keyTail,N=B.isVirtual,V=B.keyLength;return N?f.openCursor(U(P)).then(function($){return $&&T($)}):f.openCursor(P);function T($){return Object.create($,{continue:{value:function(W){W!=null?$.continue(ko(W,P.reverse?u.MAX_KEY:u.MIN_KEY,D)):P.unique?$.continue($.key.slice(0,V).concat(P.reverse?u.MIN_KEY:u.MAX_KEY,D)):$.continue()}},continuePrimaryKey:{value:function(W,Q){$.continuePrimaryKey(ko(W,u.MAX_KEY,D),Q)}},primaryKey:{get:function(){return $.primaryKey}},key:{get:function(){var W=$.key;return V===1?W[0]:W.slice(0,V)}},value:{get:function(){return $.value}}})}}})}})}};function Jl(u,h,f,m){return f=f||{},m=m||"",tt(u).forEach(function(y){var I,A,b;ut(h,y)?(I=u[y],A=h[y],typeof I=="object"&&typeof A=="object"&&I&&A?(b=re(I))!==re(A)?f[m+y]=h[y]:b==="Object"?Jl(I,A,f,m+y+"."):I!==A&&(f[m+y]=h[y]):I!==A&&(f[m+y]=h[y])):f[m+y]=void 0}),tt(h).forEach(function(y){ut(u,y)||(f[m+y]=h[y])}),f}function iu(u,h){return h.type==="delete"?h.keys:h.keys||h.values.map(u.extractKey)}var Rn={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(u){return Ce(Ce({},u),{table:function(h){var f=u.table(h),m=f.schema.primaryKey;return Ce(Ce({},f),{mutate:function(y){var I=De.trans,A=I.table(h).hook,b=A.deleting,k=A.creating,x=A.updating;switch(y.type){case"add":if(k.fire===it)break;return I._promise("readwrite",function(){return U(y)},!0);case"put":if(k.fire===it&&x.fire===it)break;return I._promise("readwrite",function(){return U(y)},!0);case"delete":if(b.fire===it)break;return I._promise("readwrite",function(){return U(y)},!0);case"deleteRange":if(b.fire===it)break;return I._promise("readwrite",function(){return(function P(B,D,N){return f.query({trans:B,values:!1,query:{index:m,range:D},limit:N}).then(function(V){var T=V.result;return U({type:"delete",keys:T,trans:B}).then(function($){return 0<$.numFailures?Promise.reject($.failures[0]):T.length<N?{failures:[],numFailures:0,lastResult:void 0}:P(B,Ce(Ce({},D),{lower:T[T.length-1],lowerOpen:!0}),N)})})})(y.trans,y.range,1e4)},!0)}return f.mutate(y);function U(P){var B,D,N,V=De.trans,T=P.keys||iu(m,P);if(!T)throw new Error("Keys missing");return(P=P.type==="add"||P.type==="put"?Ce(Ce({},P),{keys:T}):Ce({},P)).type!=="delete"&&(P.values=zt([],P.values,!0)),P.keys&&(P.keys=zt([],P.keys,!0)),B=f,N=T,((D=P).type==="add"?Promise.resolve([]):B.getMany({trans:D.trans,keys:N,cache:"immutable"})).then(function($){var W=T.map(function(Q,ee){var ae,ge,ie,ce=$[ee],he={onerror:null,onsuccess:null};return P.type==="delete"?b.fire.call(he,Q,ce,V):P.type==="add"||ce===void 0?(ae=k.fire.call(he,Q,P.values[ee],V),Q==null&&ae!=null&&(P.keys[ee]=Q=ae,m.outbound||vt(P.values[ee],m.keyPath,Q))):(ae=Jl(ce,P.values[ee]),(ge=x.fire.call(he,ae,Q,ce,V))&&(ie=P.values[ee],Object.keys(ge).forEach(function(se){ut(ie,se)?ie[se]=ge[se]:vt(ie,se,ge[se])}))),he});return f.mutate(P).then(function(Q){for(var ee=Q.failures,ae=Q.results,ge=Q.numFailures,Q=Q.lastResult,ie=0;ie<T.length;++ie){var ce=(ae||T)[ie],he=W[ie];ce==null?he.onerror&&he.onerror(ee[ie]):he.onsuccess&&he.onsuccess(P.type==="put"&&$[ie]?P.values[ie]:ce)}return{failures:ee,results:ae,numFailures:ge,lastResult:Q}}).catch(function(Q){return W.forEach(function(ee){return ee.onerror&&ee.onerror(Q)}),Promise.reject(Q)})})}}})}})}};function su(u,h,f){try{if(!h||h.keys.length<u.length)return null;for(var m=[],y=0,I=0;y<h.keys.length&&I<u.length;++y)Ge(h.keys[y],u[I])===0&&(m.push(f?ue(h.values[y]):h.values[y]),++I);return m.length===u.length?m:null}catch(A){return null}}var Xl={stack:"dbcore",level:-1,create:function(u){return{table:function(h){var f=u.table(h);return Ce(Ce({},f),{getMany:function(m){if(!m.cache)return f.getMany(m);var y=su(m.keys,m.trans._cache,m.cache==="clone");return y?_e.resolve(y):f.getMany(m).then(function(I){return m.trans._cache={keys:m.keys,values:m.cache==="clone"?ue(I):I},I})},mutate:function(m){return m.type!=="add"&&(m.trans._cache=null),f.mutate(m)}})}}}};function Zl(u,h){return u.trans.mode==="readonly"&&!!u.subscr&&!u.trans.explicit&&u.trans.db._options.cache!=="disabled"&&!h.schema.primaryKey.outbound}function Ss(u,h){switch(u){case"query":return h.values&&!h.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var ec={stack:"dbcore",level:0,name:"Observability",create:function(u){var h=u.schema.name,f=new tn(u.MIN_KEY,u.MAX_KEY);return Ce(Ce({},u),{transaction:function(m,y,I){if(De.subscr&&y!=="readonly")throw new Se.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(De.querier));return u.transaction(m,y,I)},table:function(m){var y=u.table(m),I=y.schema,A=I.primaryKey,P=I.indexes,b=A.extractKey,k=A.outbound,x=A.autoIncrement&&P.filter(function(D){return D.compound&&D.keyPath.includes(A.keyPath)}),U=Ce(Ce({},y),{mutate:function(D){function N(se){return se="idb://".concat(h,"/").concat(m,"/").concat(se),Q[se]||(Q[se]=new tn)}var V,T,$,W=D.trans,Q=D.mutatedParts||(D.mutatedParts={}),ee=N(""),ae=N(":dels"),ge=D.type,he=D.type==="deleteRange"?[D.range]:D.type==="delete"?[D.keys]:D.values.length<50?[iu(A,D).filter(function(se){return se}),D.values]:[],ie=he[0],ce=he[1],he=D.trans._cache;return je(ie)?(ee.addKeys(ie),(he=ge==="delete"||ie.length===ce.length?su(ie,he):null)||ae.addKeys(ie),(he||ce)&&(V=N,T=he,$=ce,I.indexes.forEach(function(se){var Te=V(se.name||"");function Me(ze){return ze!=null?se.extractKey(ze):null}function Oe(ze){return se.multiEntry&&je(ze)?ze.forEach(function(hn){return Te.addKey(hn)}):Te.addKey(ze)}(T||$).forEach(function(ze,pt){var te=T&&Me(T[pt]),pt=$&&Me($[pt]);Ge(te,pt)!==0&&(te!=null&&Oe(te),pt!=null&&Oe(pt))})}))):ie?(ce={from:(ce=ie.lower)!==null&&ce!==void 0?ce:u.MIN_KEY,to:(ce=ie.upper)!==null&&ce!==void 0?ce:u.MAX_KEY},ae.add(ce),ee.add(ce)):(ee.add(f),ae.add(f),I.indexes.forEach(function(se){return N(se.name).add(f)})),y.mutate(D).then(function(se){return!ie||D.type!=="add"&&D.type!=="put"||(ee.addKeys(se.results),x&&x.forEach(function(Te){for(var Me=D.values.map(function(te){return Te.extractKey(te)}),Oe=Te.keyPath.findIndex(function(te){return te===A.keyPath}),ze=0,hn=se.results.length;ze<hn;++ze)Me[ze][Oe]=se.results[ze];N(Te.name).addKeys(Me)})),W.mutatedParts=Ro(W.mutatedParts||{},Q),se})}}),P=function(N){var V=N.query,N=V.index,V=V.range;return[N,new tn((N=V.lower)!==null&&N!==void 0?N:u.MIN_KEY,(V=V.upper)!==null&&V!==void 0?V:u.MAX_KEY)]},B={get:function(D){return[A,new tn(D.key)]},getMany:function(D){return[A,new tn().addKeys(D.keys)]},count:P,query:P,openCursor:P};return tt(B).forEach(function(D){U[D]=function(N){var V=De.subscr,T=!!V,$=Zl(De,y)&&Ss(D,N)?N.obsSet={}:V;if(T){var W=function(ce){return ce="idb://".concat(h,"/").concat(m,"/").concat(ce),$[ce]||($[ce]=new tn)},Q=W(""),ee=W(":dels"),V=B[D](N),T=V[0],V=V[1];if((D==="query"&&T.isPrimaryKey&&!N.values?ee:W(T.name||"")).add(V),!T.isPrimaryKey){if(D!=="count"){var ae=D==="query"&&k&&N.values&&y.query(Ce(Ce({},N),{values:!1}));return y[D].apply(this,arguments).then(function(ce){if(D==="query"){if(k&&N.values)return ae.then(function(Me){return Me=Me.result,Q.addKeys(Me),ce});var he=N.values?ce.result.map(b):ce.result;(N.values?Q:ee).addKeys(he)}else if(D==="openCursor"){var se=ce,Te=N.values;return se&&Object.create(se,{key:{get:function(){return ee.addKey(se.primaryKey),se.key}},primaryKey:{get:function(){var Me=se.primaryKey;return ee.addKey(Me),Me}},value:{get:function(){return Te&&Q.addKey(se.primaryKey),se.value}}})}return ce})}ee.add(f)}}return y[D].apply(this,arguments)}}),U}})}};function pd(u,h,f){if(f.numFailures===0)return h;if(h.type==="deleteRange")return null;var m=h.keys?h.keys.length:"values"in h&&h.values?h.values.length:1;return f.numFailures===m?null:(h=Ce({},h),je(h.keys)&&(h.keys=h.keys.filter(function(y,I){return!(I in f.failures)})),"values"in h&&je(h.values)&&(h.values=h.values.filter(function(y,I){return!(I in f.failures)})),h)}function ou(u,h){return f=u,((m=h).lower===void 0||(m.lowerOpen?0<Ge(f,m.lower):0<=Ge(f,m.lower)))&&(u=u,(h=h).upper===void 0||(h.upperOpen?Ge(u,h.upper)<0:Ge(u,h.upper)<=0));var f,m}function md(u,h,B,m,y,I){if(!B||B.length===0)return u;var A=h.query.index,b=A.multiEntry,k=h.query.range,x=m.schema.primaryKey.extractKey,U=A.extractKey,P=(A.lowLevelIndex||A).extractKey,B=B.reduce(function(D,N){var V=D,T=[];if(N.type==="add"||N.type==="put")for(var $=new tn,W=N.values.length-1;0<=W;--W){var Q,ee=N.values[W],ae=x(ee);$.hasKey(ae)||(Q=U(ee),(b&&je(Q)?Q.some(function(se){return ou(se,k)}):ou(Q,k))&&($.addKey(ae),T.push(ee)))}switch(N.type){case"add":var ge=new tn().addKeys(h.values?D.map(function(Te){return x(Te)}):D),V=D.concat(h.values?T.filter(function(Te){return Te=x(Te),!ge.hasKey(Te)&&(ge.addKey(Te),!0)}):T.map(function(Te){return x(Te)}).filter(function(Te){return!ge.hasKey(Te)&&(ge.addKey(Te),!0)}));break;case"put":var ie=new tn().addKeys(N.values.map(function(Te){return x(Te)}));V=D.filter(function(Te){return!ie.hasKey(h.values?x(Te):Te)}).concat(h.values?T:T.map(function(Te){return x(Te)}));break;case"delete":var ce=new tn().addKeys(N.keys);V=D.filter(function(Te){return!ce.hasKey(h.values?x(Te):Te)});break;case"deleteRange":var he=N.range;V=D.filter(function(Te){return!ou(x(Te),he)})}return V},u);return B===u?u:(B.sort(function(D,N){return Ge(P(D),P(N))||Ge(x(D),x(N))}),h.limit&&h.limit<1/0&&(B.length>h.limit?B.length=h.limit:u.length===h.limit&&B.length<h.limit&&(y.dirty=!0)),I?Object.freeze(B):B)}function tc(u,h){return Ge(u.lower,h.lower)===0&&Ge(u.upper,h.upper)===0&&!!u.lowerOpen==!!h.lowerOpen&&!!u.upperOpen==!!h.upperOpen}function gr(u,h){return(function(f,m,y,I){if(f===void 0)return m!==void 0?-1:0;if(m===void 0)return 1;if((m=Ge(f,m))===0){if(y&&I)return 0;if(y)return 1;if(I)return-1}return m})(u.lower,h.lower,u.lowerOpen,h.lowerOpen)<=0&&0<=(function(f,m,y,I){if(f===void 0)return m!==void 0?1:0;if(m===void 0)return-1;if((m=Ge(f,m))===0){if(y&&I)return 0;if(y)return-1;if(I)return 1}return m})(u.upper,h.upper,u.upperOpen,h.upperOpen)}function um(u,h,f,m){u.subscribers.add(f),m.addEventListener("abort",function(){var y,I;u.subscribers.delete(f),u.subscribers.size===0&&(y=u,I=h,setTimeout(function(){y.subscribers.size===0&&xe(I,y)},3e3))})}var lm={stack:"dbcore",level:0,name:"Cache",create:function(u){var h=u.schema.name;return Ce(Ce({},u),{transaction:function(f,m,y){var I,A,b=u.transaction(f,m,y);return m==="readwrite"&&(A=(I=new AbortController).signal,y=function(k){return function(){if(I.abort(),m==="readwrite"){for(var x=new Set,U=0,P=f;U<P.length;U++){var B=P[U],D=Kn["idb://".concat(h,"/").concat(B)];if(D){var N=u.table(B),V=D.optimisticOps.filter(function(Te){return Te.trans===b});if(b._explicit&&k&&b.mutatedParts)for(var T=0,$=Object.values(D.queries.query);T<$.length;T++)for(var W=0,Q=(ge=$[T]).slice();W<Q.length;W++)mr((ie=Q[W]).obsSet,b.mutatedParts)&&(xe(ge,ie),ie.subscribers.forEach(function(Te){return x.add(Te)}));else if(0<V.length){D.optimisticOps=D.optimisticOps.filter(function(Te){return Te.trans!==b});for(var ee=0,ae=Object.values(D.queries.query);ee<ae.length;ee++)for(var ge,ie,ce,he=0,se=(ge=ae[ee]).slice();he<se.length;he++)(ie=se[he]).res!=null&&b.mutatedParts&&(k&&!ie.dirty?(ce=Object.isFrozen(ie.res),ce=md(ie.res,ie.req,V,N,ie,ce),ie.dirty?(xe(ge,ie),ie.subscribers.forEach(function(Te){return x.add(Te)})):ce!==ie.res&&(ie.res=ce,ie.promise=_e.resolve({result:ce}))):(ie.dirty&&xe(ge,ie),ie.subscribers.forEach(function(Te){return x.add(Te)})))}}}x.forEach(function(Te){return Te()})}}},b.addEventListener("abort",y(!1),{signal:A}),b.addEventListener("error",y(!1),{signal:A}),b.addEventListener("complete",y(!0),{signal:A})),b},table:function(f){var m=u.table(f),y=m.schema.primaryKey;return Ce(Ce({},m),{mutate:function(I){var A=De.trans;if(y.outbound||A.db._options.cache==="disabled"||A.explicit||A.idbtrans.mode!=="readwrite")return m.mutate(I);var b=Kn["idb://".concat(h,"/").concat(f)];return b?(A=m.mutate(I),I.type!=="add"&&I.type!=="put"||!(50<=I.values.length||iu(y,I).some(function(k){return k==null}))?(b.optimisticOps.push(I),I.mutatedParts&&ru(I.mutatedParts),A.then(function(k){0<k.numFailures&&(xe(b.optimisticOps,I),(k=pd(0,I,k))&&b.optimisticOps.push(k),I.mutatedParts&&ru(I.mutatedParts))}),A.catch(function(){xe(b.optimisticOps,I),I.mutatedParts&&ru(I.mutatedParts)})):A.then(function(k){var x=pd(0,Ce(Ce({},I),{values:I.values.map(function(U,P){var B;return k.failures[P]?U:(U=(B=y.keyPath)!==null&&B!==void 0&&B.includes(".")?ue(U):Ce({},U),vt(U,y.keyPath,k.results[P]),U)})}),k);b.optimisticOps.push(x),queueMicrotask(function(){return I.mutatedParts&&ru(I.mutatedParts)})}),A):m.mutate(I)},query:function(I){if(!Zl(De,m)||!Ss("query",I))return m.query(I);var A=((x=De.trans)===null||x===void 0?void 0:x.db._options.cache)==="immutable",P=De,b=P.requery,k=P.signal,x=(function(N,V,T,$){var W=Kn["idb://".concat(N,"/").concat(V)];if(!W)return[];if(!(V=W.queries[T]))return[null,!1,W,null];var Q=V[($.query?$.query.index.name:null)||""];if(!Q)return[null,!1,W,null];switch(T){case"query":var ee=Q.find(function(ae){return ae.req.limit===$.limit&&ae.req.values===$.values&&tc(ae.req.query.range,$.query.range)});return ee?[ee,!0,W,Q]:[Q.find(function(ae){return("limit"in ae.req?ae.req.limit:1/0)>=$.limit&&(!$.values||ae.req.values)&&gr(ae.req.query.range,$.query.range)}),!1,W,Q];case"count":return ee=Q.find(function(ae){return tc(ae.req.query.range,$.query.range)}),[ee,!!ee,W,Q]}})(h,f,"query",I),U=x[0],P=x[1],B=x[2],D=x[3];return U&&P?U.obsSet=I.obsSet:(P=m.query(I).then(function(N){var V=N.result;if(U&&(U.res=V),A){for(var T=0,$=V.length;T<$;++T)Object.freeze(V[T]);Object.freeze(V)}else N.result=ue(V);return N}).catch(function(N){return D&&U&&xe(D,U),Promise.reject(N)}),U={obsSet:I.obsSet,promise:P,subscribers:new Set,type:"query",req:I,dirty:!1},D?D.push(U):(D=[U],(B=B||(Kn["idb://".concat(h,"/").concat(f)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[I.query.index.name||""]=D)),um(U,D,b,k),U.promise.then(function(N){return{result:md(N.result,I,B==null?void 0:B.optimisticOps,m,U,A)}})}})}})}};function xo(u,h){return new Proxy(u,{get:function(f,m,y){return m==="db"?h:Reflect.get(f,m,y)}})}var _r=(ft.prototype.version=function(u){if(isNaN(u)||u<.1)throw new Se.Type("Given version is not a positive number");if(u=Math.round(10*u)/10,this.idbdb||this._state.isBeingOpened)throw new Se.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,u);var h=this._versions,f=h.filter(function(m){return m._cfg.version===u})[0];return f||(f=new this.Version(u),h.push(f),h.sort(cd),f.stores({}),this._state.autoSchema=!1,f)},ft.prototype._whenReady=function(u){var h=this;return this.idbdb&&(this._state.openComplete||De.letThrough||this._vip)?u():new _e(function(f,m){if(h._state.openComplete)return m(new Se.DatabaseClosed(h._state.dbOpenError));if(!h._state.isBeingOpened){if(!h._state.autoOpen)return void m(new Se.DatabaseClosed);h.open().catch(it)}h._state.dbReadyPromise.then(f,m)}).then(u)},ft.prototype.use=function(u){var h=u.stack,f=u.create,m=u.level,y=u.name;return y&&this.unuse({stack:h,name:y}),u=this._middlewares[h]||(this._middlewares[h]=[]),u.push({stack:h,create:f,level:m==null?10:m,name:y}),u.sort(function(I,A){return I.level-A.level}),this},ft.prototype.unuse=function(u){var h=u.stack,f=u.name,m=u.create;return h&&this._middlewares[h]&&(this._middlewares[h]=this._middlewares[h].filter(function(y){return m?y.create!==m:!!f&&y.name!==f})),this},ft.prototype.open=function(){var u=this;return Sn(Yr,function(){return am(u)})},ft.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var u=this._state,h=ei.indexOf(this);if(0<=h&&ei.splice(h,1),this.idbdb){try{this.idbdb.close()}catch(f){}this.idbdb=null}u.isBeingOpened||(u.dbReadyPromise=new _e(function(f){u.dbReadyResolve=f}),u.openCanceller=new _e(function(f,m){u.cancelOpen=m}))},ft.prototype.close=function(f){var h=(f===void 0?{disableAutoOpen:!0}:f).disableAutoOpen,f=this._state;h?(f.isBeingOpened&&f.cancelOpen(new Se.DatabaseClosed),this._close(),f.autoOpen=!1,f.dbOpenError=new Se.DatabaseClosed):(this._close(),f.autoOpen=this._options.autoOpen||f.isBeingOpened,f.openComplete=!1,f.dbOpenError=null)},ft.prototype.delete=function(u){var h=this;u===void 0&&(u={disableAutoOpen:!0});var f=0<arguments.length&&typeof arguments[0]!="object",m=this._state;return new _e(function(y,I){function A(){h.close(u);var b=h._deps.indexedDB.deleteDatabase(h.name);b.onsuccess=It(function(){var k,x,U;k=h._deps,x=h.name,U=k.indexedDB,k=k.IDBKeyRange,eu(U)||x===mo||Za(U,k).delete(x).catch(it),y()}),b.onerror=rr(I),b.onblocked=h._fireOnBlocked}if(f)throw new Se.InvalidArgument("Invalid closeOptions argument to db.delete()");m.isBeingOpened?m.dbReadyPromise.then(A):A()})},ft.prototype.backendDB=function(){return this.idbdb},ft.prototype.isOpen=function(){return this.idbdb!==null},ft.prototype.hasBeenClosed=function(){var u=this._state.dbOpenError;return u&&u.name==="DatabaseClosed"},ft.prototype.hasFailed=function(){return this._state.dbOpenError!==null},ft.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(ft.prototype,"tables",{get:function(){var u=this;return tt(this._allTables).map(function(h){return u._allTables[h]})},enumerable:!1,configurable:!0}),ft.prototype.transaction=function(){var u=function(h,f,m){var y=arguments.length;if(y<2)throw new Se.InvalidArgument("Too few arguments");for(var I=new Array(y-1);--y;)I[y-1]=arguments[y];return m=I.pop(),[h,Le(I),m]}.apply(this,arguments);return this._transaction.apply(this,u)},ft.prototype._transaction=function(u,h,f){var m=this,y=De.trans;y&&y.db===this&&u.indexOf("!")===-1||(y=null);var I,A,b=u.indexOf("?")!==-1;u=u.replace("!","").replace("?","");try{if(A=h.map(function(x){if(x=x instanceof m.Table?x.name:x,typeof x!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return x}),u=="r"||u===Ua)I=Ua;else{if(u!="rw"&&u!=Ba)throw new Se.InvalidArgument("Invalid transaction mode: "+u);I=Ba}if(y){if(y.mode===Ua&&I===Ba){if(!b)throw new Se.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");y=null}y&&A.forEach(function(x){if(y&&y.storeNames.indexOf(x)===-1){if(!b)throw new Se.SubTransaction("Table "+x+" not included in parent transaction.");y=null}}),b&&y&&!y.active&&(y=null)}}catch(x){return y?y._promise(null,function(U,P){P(x)}):kt(x)}var k=function x(U,P,B,D,N){return _e.resolve().then(function(){var V=De.transless||De,T=U._createTransaction(P,B,U._dbSchema,D);if(T.explicit=!0,V={trans:T,transless:V},D)T.idbtrans=D.idbtrans;else try{T.create(),T.idbtrans._explicit=!0,U._state.PR1398_maxLoop=3}catch(Q){return Q.name===er.InvalidState&&U.isOpen()&&0<--U._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),U.close({disableAutoOpen:!1}),U.open().then(function(){return x(U,P,B,null,N)})):kt(Q)}var $,W=lt(N);return W&&_s(),V=_e.follow(function(){var Q;($=N.call(T,T))&&(W?(Q=Xr.bind(null,null),$.then(Q,Q)):typeof $.next=="function"&&typeof $.throw=="function"&&($=Do($)))},V),($&&typeof $.then=="function"?_e.resolve($).then(function(Q){return T.active?Q:kt(new Se.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):V.then(function(){return $})).then(function(Q){return D&&T._resolve(),T._completion.then(function(){return Q})}).catch(function(Q){return T._reject(Q),kt(Q)})})}.bind(null,this,I,A,y,f);return y?y._promise(I,k,"lock"):De.trans?Sn(De.transless,function(){return m._whenReady(k)}):this._whenReady(k)},ft.prototype.table=function(u){if(!ut(this._allTables,u))throw new Se.InvalidTable("Table ".concat(u," does not exist"));return this._allTables[u]},ft);function ft(u,h){var f=this;this._middlewares={},this.verno=0;var m=ft.dependencies;this._options=h=Ce({addons:ft.addons,autoOpen:!0,indexedDB:m.indexedDB,IDBKeyRange:m.IDBKeyRange,cache:"cloned"},h),this._deps={indexedDB:h.indexedDB,IDBKeyRange:h.IDBKeyRange},m=h.addons,this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this;var y,I,A,b,k,x={dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:it,dbReadyPromise:null,cancelOpen:it,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:h.autoOpen};x.dbReadyPromise=new _e(function(P){x.dbReadyResolve=P}),x.openCanceller=new _e(function(P,B){x.cancelOpen=B}),this._state=x,this.name=u,this.on=ys(this,"populate","blocked","versionchange","close",{ready:[Ml,it]}),this.once=function(P,B){var D=function(){for(var N=[],V=0;V<arguments.length;V++)N[V]=arguments[V];f.on(P).unsubscribe(D),B.apply(f,N)};return f.on(P,D)},this.on.ready.subscribe=Zn(this.on.ready.subscribe,function(P){return function(B,D){ft.vip(function(){var N,V=f._state;V.openComplete?(V.dbOpenError||_e.resolve().then(B),D&&P(B)):V.onReadyBeingFired?(V.onReadyBeingFired.push(B),D&&P(B)):(P(B),N=f,D||P(function T(){N.on.ready.unsubscribe(B),N.on.ready.unsubscribe(T)}))})}}),this.Collection=(y=this,vs(rd.prototype,function($,T){this.db=y;var D=nd,N=null;if(T)try{D=T()}catch(W){N=W}var V=$._ctx,T=V.table,$=T.hook.reading.fire;this._ctx={table:T,index:V.index,isPrimKey:!V.index||T.schema.primKey.keyPath&&V.index===T.schema.primKey.name,range:D,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:N,or:V.or,valueMapper:$!==lo?$:null}})),this.Table=(I=this,vs(yo.prototype,function(P,B,D){this.db=I,this._tx=D,this.name=P,this.schema=B,this.hook=I._allTables[P]?I._allTables[P].hook:ys(null,{creating:[Ol,it],reading:[im,lo],updating:[Vl,it],deleting:[Nl,it]})})),this.Transaction=(A=this,vs(ad.prototype,function(P,B,D,N,V){var T=this;P!=="readonly"&&B.forEach(function($){$=($=D[$])===null||$===void 0?void 0:$.yProps,$&&(B=B.concat($.map(function(W){return W.updatesTable})))}),this.db=A,this.mode=P,this.storeNames=B,this.schema=D,this.chromeTransactionDurability=N,this.idbtrans=null,this.on=ys(this,"complete","error","abort"),this.parent=V||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new _e(function($,W){T._resolve=$,T._reject=W}),this._completion.then(function(){T.active=!1,T.on.complete.fire()},function($){var W=T.active;return T.active=!1,T.on.error.fire($),T.parent?T.parent._reject($):W&&T.idbtrans&&T.idbtrans.abort(),kt($)})})),this.Version=(b=this,vs(fd.prototype,function(P){this.db=b,this._cfg={version:P,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(k=this,vs(od.prototype,function(P,B,D){if(this.db=k,this._ctx={table:P,index:B===":id"?null:B,or:D},this._cmp=this._ascending=Ge,this._descending=function(N,V){return Ge(V,N)},this._max=function(N,V){return 0<Ge(N,V)?N:V},this._min=function(N,V){return Ge(N,V)<0?N:V},this._IDBKeyRange=k._deps.IDBKeyRange,!this._IDBKeyRange)throw new Se.MissingAPI})),this.on("versionchange",function(P){0<P.newVersion?console.warn("Another connection wants to upgrade database '".concat(f.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(f.name,"'. Closing db now to resume the delete request.")),f.close({disableAutoOpen:!1})}),this.on("blocked",function(P){!P.newVersion||P.newVersion<P.oldVersion?console.warn("Dexie.delete('".concat(f.name,"') was blocked")):console.warn("Upgrade '".concat(f.name,"' blocked by other connection holding version ").concat(P.oldVersion/10))}),this._maxKey=Is(h.IDBKeyRange),this._createTransaction=function(P,B,D,N){return new f.Transaction(P,B,D,f._options.chromeTransactionDurability,N)},this._fireOnBlocked=function(P){f.on("blocked").fire(P),ei.filter(function(B){return B.name===f.name&&B!==f&&!B._state.vcFired}).map(function(B){return B.on("versionchange").fire(P)})},this.use(Xl),this.use(lm),this.use(ec),this.use(zn),this.use(Rn);var U=new Proxy(this,{get:function(P,B,D){if(B==="_vip")return!0;if(B==="table")return function(V){return xo(f.table(V),U)};var N=Reflect.get(P,B,D);return N instanceof yo?xo(N,U):B==="tables"?N.map(function(V){return xo(V,U)}):B==="_createTransaction"?function(){return xo(N.apply(this,arguments),U)}:N}});this.vip=U,m.forEach(function(P){return P(f)})}var Ci,Cn=typeof Symbol!="undefined"&&"observable"in Symbol?Symbol.observable:"@@observable",gd=(Oo.prototype.subscribe=function(u,h,f){return this._subscribe(u&&typeof u!="function"?u:{next:u,error:h,complete:f})},Oo.prototype[Cn]=function(){return this},Oo);function Oo(u){this._subscribe=u}try{Ci={indexedDB:nt.indexedDB||nt.mozIndexedDB||nt.webkitIndexedDB||nt.msIndexedDB,IDBKeyRange:nt.IDBKeyRange||nt.webkitIDBKeyRange}}catch(u){Ci={indexedDB:null,IDBKeyRange:null}}function au(u){var h,f=!1,m=new gd(function(y){var I=lt(u),A,b=!1,k={},x={},U={get closed(){return b},unsubscribe:function(){b||(b=!0,A&&A.abort(),P&&pr.storagemutated.unsubscribe(D))}};y.start&&y.start(U);var P=!1,B=function(){return Fa(N)},D=function(V){Ro(k,V),mr(x,k)&&B()},N=function(){var V,T,$;!b&&Ci.indexedDB&&(k={},V={},A&&A.abort(),A=new AbortController,$=(function(W){var Q=Cr();try{I&&_s();var ee=Dr(u,W);return ee=I?ee.finally(Xr):ee}finally{Q&&ms()}})(T={subscr:V,signal:A.signal,requery:B,querier:u,trans:null}),Promise.resolve($).then(function(W){f=!0,h=W,b||T.signal.aborted||(k={},(function(Q){for(var ee in Q)if(ut(Q,ee))return;return 1})(x=V)||P||(pr(Pi,D),P=!0),Fa(function(){return!b&&y.next&&y.next(W)}))},function(W){f=!1,["DatabaseClosedError","AbortError"].includes(W==null?void 0:W.name)||b||Fa(function(){b||y.error&&y.error(W)})}))};return setTimeout(B,0),U});return m.hasValue=function(){return f},m.getValue=function(){return h},m}var ii=_r;function uu(u){var h=yr;try{yr=!0,pr.storagemutated.fire(u),Vr(u,!0)}finally{yr=h}}Mt(ii,Ce(Ce({},cr),{delete:function(u){return new ii(u,{addons:[]}).delete()},exists:function(u){return new ii(u,{addons:[]}).open().then(function(h){return h.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(u){try{return h=ii.dependencies,f=h.indexedDB,h=h.IDBKeyRange,(eu(f)?Promise.resolve(f.databases()).then(function(m){return m.map(function(y){return y.name}).filter(function(y){return y!==mo})}):Za(f,h).toCollection().primaryKeys()).then(u)}catch(m){return kt(new Se.MissingAPI)}var h,f},defineClass:function(){return function(u){St(this,u)}},ignoreTransaction:function(u){return De.trans?Sn(De.transless,u):u()},vip:tu,async:function(u){return function(){try{var h=Do(u.apply(this,arguments));return h&&typeof h.then=="function"?h:_e.resolve(h)}catch(f){return kt(f)}}},spawn:function(u,h,f){try{var m=Do(u.apply(f,h||[]));return m&&typeof m.then=="function"?m:_e.resolve(m)}catch(y){return kt(y)}},currentTransaction:{get:function(){return De.trans||null}},waitFor:function(u,h){return h=_e.resolve(typeof u=="function"?ii.ignoreTransaction(u):u).timeout(h||6e4),De.trans?De.trans.waitFor(h):h},Promise:_e,debug:{get:function(){return tr},set:function(u){nr(u)}},derive:wn,extend:St,props:Mt,override:Zn,Events:ys,on:pr,liveQuery:au,extendObservabilitySet:Ro,getByKeyPath:Zt,setByKeyPath:vt,delByKeyPath:function(u,h){typeof h=="string"?vt(u,h,void 0):"length"in h&&[].map.call(h,function(f){vt(u,f,void 0)})},shallowClone:ye,deepClone:ue,getObjectDiff:Jl,cmp:Ge,asap:br,minKey:-1/0,addons:[],connections:ei,errnames:er,dependencies:Ci,cache:Kn,semVer:"4.2.1",version:"4.2.1".split(".").map(function(u){return parseInt(u)}).reduce(function(u,h,f){return u+h/Math.pow(10,2*f)})})),ii.maxKey=Is(ii.dependencies.IDBKeyRange),typeof dispatchEvent!="undefined"&&typeof addEventListener!="undefined"&&(pr(Pi,function(u){yr||(u=new CustomEvent(Ga,{detail:u}),yr=!0,dispatchEvent(u),yr=!1)}),addEventListener(Ga,function(u){u=u.detail,yr||uu(u)}));var Di,yr=!1,nc=function(){};return typeof BroadcastChannel!="undefined"&&((nc=function(){(Di=new BroadcastChannel(Ga)).onmessage=function(u){return u.data&&uu(u.data)}})(),typeof Di.unref=="function"&&Di.unref(),pr(Pi,function(u){yr||Di.postMessage(u)})),typeof addEventListener!="undefined"&&(addEventListener("pagehide",function(u){if(!_r.disableBfCache&&u.persisted){tr&&console.debug("Dexie: handling persisted pagehide"),Di!=null&&Di.close();for(var h=0,f=ei;h<f.length;h++)f[h].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(u){!_r.disableBfCache&&u.persisted&&(tr&&console.debug("Dexie: handling persisted pageshow"),nc(),uu({all:new tn(-1/0,[[]])}))})),_e.rejectionMapper=function(u,h){return!u||u instanceof Ft||u instanceof TypeError||u instanceof SyntaxError||!u.name||!Sr[u.name]?u:(h=new Sr[u.name](h||u.message,u),"stack"in u&&mn(h,"stack",{get:function(){return this.inner.stack}}),h)},nr(tr),Ce(_r,Object.freeze({__proto__:null,Dexie:_r,liveQuery:au,Entity:$l,cmp:Ge,PropModification:Ai,replacePrefix:function(u,h){return new Ai({replacePrefix:[u,h]})},add:function(u){return new Ai({add:u})},remove:function(u){return new Ai({remove:u})},default:_r,RangeSet:tn,mergeRanges:ws,rangesOverlap:Ql}),{default:_r}),_r})}),9166:(function(ht){(function(Ae,Xe){ht.exports=Xe()})(this,(function(){"use strict";return{name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(Ae){var Xe=["th","st","nd","rd"],cn=Ae%100;return"["+Ae+(Xe[(cn-20)%10]||Xe[cn]||Xe[0])+"]"}}}))}),9242:(function(ht){(function(Ae,Xe){ht.exports=Xe()})(this,(function(){"use strict";return function(Ae,Xe,cn){Xe.prototype.dayOfYear=function(Ce){var zt=Math.round((cn(this).startOf("day")-cn(this).startOf("year"))/864e5)+1;return Ce==null?zt:this.add(Ce-zt,"day")}}}))})},rm={};function bt(ht){var Ae=rm[ht];if(Ae!==void 0)return Ae.exports;var Xe=rm[ht]={exports:{}};return TE[ht].call(Xe.exports,Xe,Xe.exports,bt),Xe.exports}bt.n=ht=>{var Ae=ht&&ht.__esModule?()=>ht.default:()=>ht;return bt.d(Ae,{a:Ae}),Ae},bt.d=(ht,Ae)=>{for(var Xe in Ae)bt.o(Ae,Xe)&&!bt.o(ht,Xe)&&Object.defineProperty(ht,Xe,{enumerable:!0,get:Ae[Xe]})},bt.g=(function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(ht){if(typeof window=="object")return window}})(),bt.o=(ht,Ae)=>Object.prototype.hasOwnProperty.call(ht,Ae);var XC={};(()=>{"use strict";var ht=bt(2683),Ae=bt.n(ht);const Xe=()=>{};var cn=Object.defineProperty,Ce=Object.getOwnPropertySymbols,zt=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable,tt=(n,e,t)=>e in n?cn(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,je=(n,e)=>{for(var t in e||(e={}))zt.call(e,t)&&tt(n,t,e[t]);if(Ce)for(var t of Ce(e))nt.call(e,t)&&tt(n,t,e[t]);return n},St=(n,e,t)=>new Promise((r,i)=>{var s=c=>{try{l(t.next(c))}catch(d){i(d)}},o=c=>{try{l(t.throw(c))}catch(d){i(d)}},l=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,o);l((t=t.apply(n,e)).next())});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=function(n,e){if(!n)throw ut(e)},ut=function(n){return new Error("Firebase Database ("+yt.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Qr=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],l=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},mn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,l=o?n[i+1]:0,c=i+2<n.length,d=c?n[i+2]:0,g=s>>2,v=(s&3)<<4|l>>4;let w=(l&15)<<2|d>>6,M=d&63;c||(M=64,o||(w=64)),r.push(t[g],t[v],t[w],t[M])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Mt(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Qr(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const v=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||d==null||v==null)throw new wn;const w=s<<2|l>>4;if(r.push(w),d!==64){const M=l<<4&240|d>>2;if(r.push(M),v!==64){const Y=d<<6&192|v;r.push(Y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ar=function(n){const e=Mt(n);return mn.encodeByteArray(e,!0)},Nn=function(n){return Ar(n).replace(/\./g,"")},Vn=function(n){try{return mn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(n){return Xt(void 0,n)}function Xt(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!br(t)||(n[t]=Xt(n[t],e[t]));return n}function br(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof bt.g!="undefined")return bt.g;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=()=>Zt().__FIREBASE_DEFAULTS__,ye=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const n=process.env.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},pe=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=n&&Vn(n[1]);return e&&JSON.parse(e)},Le=()=>{try{return Xe()||vt()||ye()||pe()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Qe=n=>{var e,t;return(t=(e=Le())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Ee=n=>{const e=Qe(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ue=()=>{var n;return(n=Le())==null?void 0:n.config},le=n=>{var e;return(e=Le())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch(e){return!1}}function be(n){return St(this,null,function*(){return(yield fetch(n,{credentials:"include"})).ok})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=je({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Nn(JSON.stringify(t)),Nn(JSON.stringify(o)),""].join(".")}const Fe={};function Ue(){const n={prod:[],emulator:[]};for(const e of Object.keys(Fe))Fe[e]?n.emulator.push(e):n.prod.push(e);return n}function lt(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Lt=!1;function Ft(n,e){if(typeof window=="undefined"||typeof document=="undefined"||!oe(window.location.host)||Fe[n]===e||Fe[n]||Lt)return;Fe[n]=e;function t(w){return`__firebase__banner__${w}`}const r="__firebase__banner",s=Ue().prod.length>0;function o(){const w=document.getElementById(r);w&&w.remove()}function l(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function c(w,M){w.setAttribute("width","24"),w.setAttribute("id",M),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function d(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Lt=!0,o()},w}function g(w,M){w.setAttribute("id",M),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function v(){const w=lt(r),M=t("text"),Y=document.getElementById(M)||document.createElement("span"),J=t("learnmore"),X=document.getElementById(J)||document.createElement("a"),ve=t("preprendIcon"),Re=document.getElementById(ve)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const we=w.element;l(we),g(X,J);const qe=d();c(Re,ve),we.append(Re,Y,X,qe),document.body.appendChild(we)}s?(Y.innerText="Preview backend disconnected.",Re.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Re.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Y.innerText="Preview backend running in this workspace."),Y.setAttribute("id",M)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mn(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function An(){var n;const e=(n=Le())==null?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(bt.g.process)==="[object process]"}catch(t){return!1}}function er(){return typeof window!="undefined"||en()}function en(){return typeof WorkerGlobalScope!="undefined"&&typeof self!="undefined"&&self instanceof WorkerGlobalScope}function Se(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function Sr(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function cr(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function it(){return dt().indexOf("Electron/")>=0}function lo(){const n=dt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function im(){return dt().indexOf("MSAppHost/")>=0}function vi(){return yt.NODE_CLIENT===!0||yt.NODE_ADMIN===!0}function Ol(){return!An()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Nl(){return!An()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function Vl(){try{return typeof indexedDB=="object"}catch(n){return!1}}function Zh(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(t){e(t)}})}function Ml(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="FirebaseError";class nr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=tr,Object.setPrototypeOf(this,nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hr.prototype.create)}}class hr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ll(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new nr(i,l,r)}}function Ll(n,e){return n.replace(ps,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ps=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(n){return JSON.parse(n)}function Ii(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=function(n){let e={},t={},r={},i="";try{const s=n.split(".");e=Pr(Vn(s[0])||""),t=Pr(Vn(s[1])||""),i=s[2],r=t.d||{},delete t.d}catch(s){}return{header:e,claims:t,data:r,signature:i}},co=function(n){const e=Ti(n).claims,t=Math.floor(new Date().getTime()/1e3);let r=0,i=0;return typeof e=="object"&&(e.hasOwnProperty("nbf")?r=e.nbf:e.hasOwnProperty("iat")&&(r=e.iat),e.hasOwnProperty("exp")?i=e.exp:i=r+86400),!!t&&!!r&&!!i&&t>=r&&t<=i},Fl=function(n){const e=Ti(n).claims;return typeof e=="object"&&e.hasOwnProperty("iat")?e.iat:null},xa=function(n){const e=Ti(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Ei=function(n){const e=Ti(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ul(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Yr(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function De(n,e,t){const r={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=e.call(t,n[i],i,n));return r}function bn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Rr(s)&&Rr(o)){if(!bn(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Rr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(n,e=2e3){const t=new re;return setTimeout(()=>t.reject("timeout!"),e),n.then(t.resolve,t.reject),t.promise}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Jr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function wi(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let v=0;v<16;v++)r[v]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let v=0;v<16;v++)r[v]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let v=16;v<80;v++){const w=r[v-3]^r[v-8]^r[v-14]^r[v-16];r[v]=(w<<1|w>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],d,g;for(let v=0;v<80;v++){v<40?v<20?(d=l^s&(o^l),g=1518500249):(d=s^o^l,g=1859775393):v<60?(d=s&o|l&(s|o),g=2400959708):(d=s^o^l,g=3395469782);const w=(i<<5|i>>>27)+d+c+g+r[v]&4294967295;c=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=w}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<t;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function ql(n,e){const t=new Va(n,e);return t.subscribe.bind(t)}class Va{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");ed(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Cr),i.error===void 0&&(i.error=Cr),i.complete===void 0&&(i.complete=Cr);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(o){}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sm(n,e){return(...t)=>{Promise.resolve(!0).then(()=>{n(...t)}).catch(r=>{e&&e(r)})}}function ed(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Cr(){}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=function(n,e,t,r){let i;if(r<e?i="at least "+e:r>t&&(i=t===0?"none":"no more than "+t),i){const s=n+" failed: Was called with "+r+(r===1?" argument.":" arguments.")+" Expects "+i+".";throw new Error(s)}};function gs(n,e){return`${n} failed: ${e} argument `}function Ma(n,e,t){if(!(t&&!e)&&typeof e!="string")throw new Error(gs(n,"namespace")+"must be a valid firebase namespace.")}function It(n,e,t,r){if(!(r&&!t)&&typeof t!="function")throw new Error(gs(n,e)+"must be a valid function.")}function Qt(n,e,t,r){if(!(r&&!t)&&(typeof t!="object"||t===null))throw new Error(gs(n,e)+"must be a valid context object.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,yi(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},La=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=1e3,fo=2,td=null,Dr=.5;function _s(n,e=ho,t=fo){const r=e*Math.pow(t,n),i=Math.round(Dr*r*(Math.random()-.5)*2);return Math.min(td,r+i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(n){return Number.isFinite(n)?n+po(n):`${n}`}function po(n){n=Math.abs(n);const e=n%100;if(e>=10&&e<=20)return"th";const t=n%10;return t===1?"st":t===2?"nd":t===3?"rd":"th"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(n){return n&&n._delegate?n._delegate:n}var kr=(n,e,t)=>new Promise((r,i)=>{var s=c=>{try{l(t.next(c))}catch(d){i(d)}},o=c=>{try{l(t.throw(c))}catch(d){i(d)}},l=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,o);l((t=t.apply(n,e)).next())});class xr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new re;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch(i){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!=null?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kt(e))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch(t){}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch(s){}}}}clearInstance(e=Sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}delete(){return kr(this,null,function*(){const e=Array.from(this.instances.values());yield Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])})}isComponentSet(){return this.component!=null}isInitialized(e=Sn){return this.instances.has(e)}getOptions(e=Sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!=null?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch(s){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fa(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(i){}return r||null}normalizeInstanceIdentifier(e=Sn){return this.component?this.component.multipleInstances?e:Sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fa(n){return n===Sn?void 0:n}function kt(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new jl(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=[];var $e;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($e||($e={}));const ei={debug:$e.DEBUG,verbose:$e.VERBOSE,info:$e.INFO,warn:$e.WARN,error:$e.ERROR,silent:$e.SILENT},mo=$e.INFO,Ua={[$e.DEBUG]:"log",[$e.VERBOSE]:"log",[$e.INFO]:"info",[$e.WARN]:"warn",[$e.ERROR]:"error"},Ba=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Ua[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dr{constructor(e){this.name=e,this._logLevel=mo,this._logHandler=Ba,this._userLogHandler=null,jn.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ei[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$e.DEBUG,...e),this._logHandler(this,$e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$e.VERBOSE,...e),this._logHandler(this,$e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$e.INFO,...e),this._logHandler(this,$e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$e.WARN,...e),this._logHandler(this,$e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$e.ERROR,...e),this._logHandler(this,$e.ERROR,...e)}}function nd(n){jn.forEach(e=>{e.setLogLevel(n)})}function qa(n,e){for(const t of jn){let r=null;e&&e.level&&(r=ei[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const l=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch(d){return null}}).filter(c=>c).join(" ");s>=(r!=null?r:i.logLevel)&&n({level:$e[s].toLowerCase(),message:l,args:o,type:i.name})}}}const $l=(n,e)=>e.some(t=>n instanceof t);let Ge,ja;function Kl(){return Ge||(Ge=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function go(){return ja||(ja=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ai=new WeakMap,_o=new WeakMap,$a=new WeakMap,yo=new WeakMap,rt=new WeakMap;function ys(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(fr(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ai.set(t,n)}).catch(()=>{}),rt.set(e,n),e}function vs(n){if(_o.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});_o.set(n,e)}let Or={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return _o.get(n);if(e==="objectStoreNames")return n.objectStoreNames||$a.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return fr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ka(n){Or=n(Or)}function za(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(bi(this),e,...t);return $a.set(r,e.sort?e.sort():[e]),fr(r)}:go().includes(n)?function(...e){return n.apply(bi(this),e),fr(Ai.get(this))}:function(...e){return fr(n.apply(bi(this),e))}}function vo(n){return typeof n=="function"?za(n):(n instanceof IDBTransaction&&vs(n),$l(n,Kl())?new Proxy(n,Or):n)}function fr(n){if(n instanceof IDBRequest)return ys(n);if(yo.has(n))return yo.get(n);const e=vo(n);return e!==n&&(yo.set(n,e),rt.set(e,n)),e}const bi=n=>rt.get(n);var zl=Object.defineProperty,rd=Object.defineProperties,Ze=Object.getOwnPropertyDescriptors,Wa=Object.getOwnPropertySymbols,id=Object.prototype.hasOwnProperty,sd=Object.prototype.propertyIsEnumerable,gn=(n,e,t)=>e in n?zl(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Si=(n,e)=>{for(var t in e||(e={}))id.call(e,t)&&gn(n,t,e[t]);if(Wa)for(var t of Wa(e))sd.call(e,t)&&gn(n,t,e[t]);return n},Io=(n,e)=>rd(n,Ze(e)),Nr=(n,e,t)=>new Promise((r,i)=>{var s=c=>{try{l(t.next(c))}catch(d){i(d)}},o=c=>{try{l(t.throw(c))}catch(d){i(d)}},l=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,o);l((t=t.apply(n,e)).next())});function Wl(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),l=fr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(fr(o.result),c.oldVersion,c.newVersion,fr(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}function od(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",r=>e(r.oldVersion,r)),wrap(t).then(()=>{})}const Wt=["get","getKey","getAll","getAllKeys","count"],rr=["put","add","delete","clear"],ti=new Map;function Pi(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ti.get(e))return ti.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=rr.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Wt.includes(t)))return;const s=function(o,...l){return Nr(this,null,function*(){const c=this.transaction(o,i?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(l.shift())),(yield Promise.all([d[t](...l),i&&c.done]))[0]})};return ti.set(e,s),s}Ka(n=>Io(Si({},n),{get:(e,t,r)=>Pi(e,t)||n.get(e,t,r),has:(e,t)=>!!Pi(e,t)||n.has(e,t)}));var Ga=Object.defineProperty,pr=Object.getOwnPropertySymbols,ad=Object.prototype.hasOwnProperty,ir=Object.prototype.propertyIsEnumerable,To=(n,e,t)=>e in n?Ga(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,ni=(n,e)=>{for(var t in e||(e={}))ad.call(e,t)&&To(n,t,e[t]);if(pr)for(var t of pr(e))ir.call(e,t)&&To(n,t,e[t]);return n},$n=(n,e,t)=>new Promise((r,i)=>{var s=c=>{try{l(t.next(c))}catch(d){i(d)}},o=c=>{try{l(t.throw(c))}catch(d){i(d)}},l=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,o);l((t=t.apply(n,e)).next())});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ha(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Ha(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ts="@firebase/app",Qa="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new dr("@firebase/app"),ud="@firebase/app-compat",ld="@firebase/analytics-compat",Eo="@firebase/analytics",wo="@firebase/app-check-compat",Ya="@firebase/app-check",cd="@firebase/auth",hd="@firebase/auth-compat",dd="@firebase/database",Ja="@firebase/data-connect",Xa="@firebase/database-compat",Gl="@firebase/functions",Ao="@firebase/functions-compat",bo="@firebase/installations",So="@firebase/installations-compat",Hl="@firebase/messaging",fd="@firebase/messaging-compat",Ri="@firebase/performance",Za="@firebase/performance-compat",eu="@firebase/remote-config",tu="@firebase/remote-config-compat",nu="@firebase/storage",tn="@firebase/storage-compat",Es="@firebase/firestore",ws="@firebase/ai",Ql="@firebase/firestore-compat",Po="firebase",Yl="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As="[DEFAULT]",Ro={[Ts]:"fire-core",[ud]:"fire-core-compat",[Eo]:"fire-analytics",[ld]:"fire-analytics-compat",[Ya]:"fire-app-check",[wo]:"fire-app-check-compat",[cd]:"fire-auth",[hd]:"fire-auth-compat",[dd]:"fire-rtdb",[Ja]:"fire-data-connect",[Xa]:"fire-rtdb-compat",[Gl]:"fire-fn",[Ao]:"fire-fn-compat",[bo]:"fire-iid",[So]:"fire-iid-compat",[Hl]:"fire-fcm",[fd]:"fire-fcm-compat",[Ri]:"fire-perf",[Za]:"fire-perf-compat",[eu]:"fire-rc",[tu]:"fire-rc-compat",[nu]:"fire-gcs",[tn]:"fire-gcs-compat",[Es]:"fire-fst",[Ql]:"fire-fst-compat",[ws]:"fire-vertex","fire-js":"fire-js",[Po]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=new Map,Kn=new Map,ri=new Map;function Co(n,e){try{n.container.addComponent(e)}catch(t){Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ru(n,e){n.container.addOrOverwriteComponent(e)}function Vr(n){const e=n.name;if(ri.has(e))return Pn.debug(`There were multiple attempts to register component ${e}.`),!1;ri.set(e,n);for(const t of mr.values())Co(t,n);for(const t of Kn.values())Co(t,n);return!0}function bs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function am(n,e,t=As){bs(n,e).clearInstance(t)}function Do(n){return n.options!==void 0}function ko(n){return Do(n)?!1:"authIdToken"in n||"appCheckToken"in n||"releaseOnDeref"in n||"automaticDataCollectionEnabled"in n}function zn(n){return n==null?!1:n.settings!==void 0}function Jl(){ri.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Rn=new hr("app","Firebase",iu);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,t,r){this._isDeleted=!1,this._options=ni({},e),this._config=ni({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(n,e){const t=Vn(n.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const i=JSON.parse(t).exp*1e3,s=new Date().getTime();i-s<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class Zl extends su{constructor(e,t,r,i){const s=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!0,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const l=e;super(l.options,o,i)}this._serverConfig=ni({automaticDataCollectionEnabled:s},t),this._serverConfig.authIdToken&&Xl(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&Xl(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry!="undefined"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,gr(Ts,Qa,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){tc(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Rn.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=Yl;function ec(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=ni({name:As,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Rn.create("bad-app-name",{appName:String(i)});if(t||(t=ue()),!t)throw Rn.create("no-options");const s=mr.get(i);if(s){if(bn(t,s.options)&&bn(r,s.config))return s;throw Rn.create("duplicate-app",{appName:i})}const o=new Zr(i);for(const c of ri.values())o.addComponent(c);const l=new su(t,r,o);return mr.set(i,l),l}function pd(n,e={}){if(isBrowser()&&!isWebWorker())throw Rn.create("invalid-server-app-environment");let t,r=e||{};if(n&&(Do(n)?t=n.options:ko(n)?r=n:t=n),r.automaticDataCollectionEnabled===void 0&&(r.automaticDataCollectionEnabled=!0),t||(t=getDefaultAppConfig()),!t)throw Rn.create("no-options");const i=ni(ni({},r),t);i.releaseOnDeref!==void 0&&delete i.releaseOnDeref;const s=g=>[...g].reduce((v,w)=>Math.imul(31,v)+w.charCodeAt(0)|0,0);if(r.releaseOnDeref!==void 0&&typeof FinalizationRegistry=="undefined")throw Rn.create("finalization-registry-not-supported",{});const o=""+s(JSON.stringify(i)),l=Kn.get(o);if(l)return l.incRefCount(r.releaseOnDeref),l;const c=new ComponentContainer(o);for(const g of ri.values())c.addComponent(g);const d=new Zl(t,r,o,c);return Kn.set(o,d),d}function ou(n=As){const e=mr.get(n);if(!e&&n===As&&ue())return ec();if(!e)throw Rn.create("no-app",{appName:n});return e}function md(){return Array.from(mr.values())}function tc(n){return $n(this,null,function*(){let e=!1;const t=n.name;mr.has(t)?(e=!0,mr.delete(t)):Kn.has(t)&&n.decRefCount()<=0&&(Kn.delete(t),e=!0),e&&(yield Promise.all(n.container.getProviders().map(r=>r.delete())),n.isDeleted=!0)})}function gr(n,e,t){var r;let i=(r=Ro[n])!=null?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pn.warn(l.join(" "));return}Vr(new xr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function um(n,e){if(n!==null&&typeof n!="function")throw Rn.create("invalid-log-argument");setUserLogHandler(n,e)}function lm(n){setLogLevel$1(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo="firebase-heartbeat-database",_r=1,ft="firebase-heartbeat-store";let Ci=null;function Cn(){return Ci||(Ci=Wl(xo,_r,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ft)}catch(t){console.warn(t)}}}}).catch(n=>{throw Rn.create("idb-open",{originalErrorMessage:n.message})})),Ci}function gd(n){return $n(this,null,function*(){try{const t=(yield Cn()).transaction(ft),r=yield t.objectStore(ft).get(au(n));return yield t.done,r}catch(e){if(e instanceof nr)Pn.warn(e.message);else{const t=Rn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pn.warn(t.message)}}})}function Oo(n,e){return $n(this,null,function*(){try{const r=(yield Cn()).transaction(ft,"readwrite");yield r.objectStore(ft).put(e,au(n)),yield r.done}catch(t){if(t instanceof nr)Pn.warn(t.message);else{const r=Rn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pn.warn(r.message)}}})}function au(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=1024,uu=30;class Di{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new u(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}triggerHeartbeat(){return $n(this,null,function*(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=yr();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=yield this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>uu){const o=f(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Pn.warn(r)}})}getHeartbeatsHeader(){return $n(this,null,function*(){var e;try{if(this._heartbeatsCache===null&&(yield this._heartbeatsCachePromise),((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=yr(),{heartbeatsToSend:r,unsentEntries:i}=nc(this._heartbeatsCache.heartbeats),s=Nn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Pn.warn(t),""}})}}function yr(){return new Date().toISOString().substring(0,10)}function nc(n,e=ii){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),h(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),h(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class u{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return $n(this,null,function*(){return Vl()?Zh().then(()=>!0).catch(()=>!1):!1})}read(){return $n(this,null,function*(){if(yield this._canUseIndexedDBPromise){const t=yield gd(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}})}overwrite(e){return $n(this,null,function*(){var t;if(yield this._canUseIndexedDBPromise){const i=yield this.read();return Oo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!=null?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return})}add(e){return $n(this,null,function*(){var t;if(yield this._canUseIndexedDBPromise){const i=yield this.read();return Oo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!=null?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return})}}function h(n){return Nn(JSON.stringify({version:2,heartbeats:n})).length}function f(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(n){Vr(new xr("platform-logger",e=>new Is(e),"PRIVATE")),Vr(new xr("heartbeat",e=>new Di(e),"PRIVATE")),gr(Ts,Qa,n),gr(Ts,Qa,"esm2020"),gr("fire-js","")}m("");var y="firebase",I="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gr(y,I,"app");var A=Object.defineProperty,b=Object.defineProperties,k=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,B=(n,e,t)=>e in n?A(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,D=(n,e)=>{for(var t in e||(e={}))U.call(e,t)&&B(n,t,e[t]);if(x)for(var t of x(e))P.call(e,t)&&B(n,t,e[t]);return n},N=(n,e)=>b(n,k(e)),V=(n,e)=>{var t={};for(var r in n)U.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&x)for(var r of x(n))e.indexOf(r)<0&&P.call(n,r)&&(t[r]=n[r]);return t},T=(n,e,t)=>new Promise((r,i)=>{var s=c=>{try{l(t.next(c))}catch(d){i(d)}},o=c=>{try{l(t.throw(c))}catch(d){i(d)}},l=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,o);l((t=t.apply(n,e)).next())});/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function W(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Q=null,ee=W,ae=new hr("auth","Firebase",W()),ge={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_PASSWORD:"auth/missing-password",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type",INVALID_HOSTING_LINK_DOMAIN:"auth/invalid-hosting-link-domain"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=new dr("@firebase/auth");function ce(n,...e){ie.logLevel<=$e.WARN&&ie.warn(`Auth (${Ss}): ${n}`,...e)}function he(n,...e){ie.logLevel<=$e.ERROR&&ie.error(`Auth (${Ss}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(n,...e){throw hn(n,...e)}function Te(n,...e){return hn(n,...e)}function Me(n,e,t){const r=N(D({},ee()),{[e]:t});return new hr("auth","Firebase",r).create(e,{appName:n.name})}function Oe(n){return Me(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ze(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&se(n,"argument-error"),Me(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function hn(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ae.create(n,...e)}function te(n,e,...t){if(!n)throw hn(e,...t)}function pt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw he(e),new Error(e)}function Bt(n,e){n||pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(){var n;return typeof self!="undefined"&&((n=self.location)==null?void 0:n.href)||""}function nn(){return Mr()==="http:"||Mr()==="https:"}function Mr(){var n;return typeof self!="undefined"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nn()||Sr()||"connection"in navigator)?navigator.onLine:!0}function EE(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(e,t){this.shortDelay=e,this.longDelay=t,Bt(t>e,"Short delay should be less than long delay!"),this.isMobile=Mn()||cr()}get(){return lu()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(n,e){Bt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],PE=new wE(3e4,6e4);function Tt(n,e){return n.tenantId&&!e.tenantId?N(D({},e),{tenantId:n.tenantId}):e}function Pt(n,e,t,r){return T(this,arguments,function*(i,s,o,l,c={}){return hm(i,c,()=>T(null,null,function*(){let d={},g={};l&&(s==="GET"?g=l:d={body:JSON.stringify(l)});const v=_e(D({key:i.config.apiKey},g)).slice(1),w=yield i._getAdditionalHeaders();w["Content-Type"]="application/json",i.languageCode&&(w["X-Firebase-Locale"]=i.languageCode);const M=D({method:s,headers:w},d);return Se()||(M.referrerPolicy="no-referrer"),i.emulatorConfig&&oe(i.emulatorConfig.host)&&(M.credentials="include"),cm.fetch()(yield dm(i,i.config.apiHost,o,v),M)}))})}function hm(n,e,t){return T(this,null,function*(){n._canInitEmulator=!1;const r=D(D({},bE),e);try{const i=new CE(n),s=yield Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=yield s.json();if("needConfirmation"in o)throw cu(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[c,d]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw cu(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw cu(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw cu(n,"user-disabled",o);const g=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Me(n,g,d);se(n,g)}}catch(i){if(i instanceof nr)throw i;se(n,"network-request-failed",{message:String(i)})}})}function si(n,e,t,r){return T(this,arguments,function*(i,s,o,l,c={}){const d=yield Pt(i,s,o,l,c);return"mfaPendingCredential"in d&&se(i,"multi-factor-auth-required",{_serverResponse:d}),d})}function dm(n,e,t,r){return T(this,null,function*(){const i=`${e}${t}?${r}`,s=n,o=s.config.emulator?AE(n.config,i):`${n.config.apiScheme}://${i}`;return SE.includes(t)&&(yield s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o})}function RE(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class CE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Te(this.auth,"network-request-failed")),PE.get())})}}function cu(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Te(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(n){return n!==void 0&&n.getResponse!==void 0}function fm(n){return n!==void 0&&n.enterprise!==void 0}class pm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return RE(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eD(n){return T(this,null,function*(){return(yield Pt(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""})}function mm(n,e){return T(this,null,function*(){return Pt(n,"GET","/v2/recaptchaConfig",Tt(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(n,e){return T(this,null,function*(){return Pt(n,"POST","/v1/accounts:delete",e)})}function kE(n,e){return T(this,null,function*(){return Pt(n,"POST","/v1/accounts:update",e)})}function rc(n,e){return T(this,null,function*(){return Pt(n,"POST","/v1/accounts:lookup",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tD(n,e=!1){return getModularInstance(n).getIdToken(e)}function xE(n,e=!1){return T(this,null,function*(){const t=Ut(n),r=yield t.getIdToken(e),i=ic(r);te(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:hu(_d(i.auth_time)),issuedAtTime:hu(_d(i.iat)),expirationTime:hu(_d(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}})}function _d(n){return Number(n)*1e3}function ic(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return he("JWT malformed, contained fewer than 3 sections"),null;try{const i=Vn(t);return i?JSON.parse(i):(he("Failed to decode base64 JWT payload"),null)}catch(i){return he("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function gm(n){const e=ic(n);return te(e,"internal-error"),te(typeof e.exp!="undefined","internal-error"),te(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(n,e,t=!1){return T(this,null,function*(){if(t)return e;try{return yield e}catch(r){throw r instanceof nr&&OE(r)&&n.auth.currentUser===n&&(yield n.auth.signOut()),r}})}function OE({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!=null?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(()=>T(this,null,function*(){yield this.iteration()}),t)}iteration(){return T(this,null,function*(){try{yield this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=hu(this.lastLoginAt),this.creationTime=hu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(n){return T(this,null,function*(){var e;const t=n.auth,r=yield n.getIdToken(),i=yield oi(n,rc(t,{idToken:r}));te(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=(e=s.providerUserInfo)!=null&&e.length?_m(s.providerUserInfo):[],l=ME(n.providerData,o),c=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),g=c?d:!1,v={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new yd(s.createdAt,s.lastLoginAt),isAnonymous:g};Object.assign(n,v)})}function VE(n){return T(this,null,function*(){const e=Ut(n);yield du(e),yield e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)})}function ME(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function _m(n){return n.map(e=>{var t=e,{providerId:r}=t,i=V(t,["providerId"]);return{providerId:r,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(n,e){return T(this,null,function*(){const t=yield hm(n,{},()=>T(null,null,function*(){const r=_e({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=yield dm(n,i,"/v1/token",`key=${s}`),l=yield n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return n.emulatorConfig&&oe(n.emulatorConfig.host)&&(c.credentials="include"),cm.fetch()(o,c)}));return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}})}function FE(n,e){return T(this,null,function*(){return Pt(n,"POST","/v2/accounts:revokeToken",Tt(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken!="undefined","internal-error"),te(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):gm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){te(e.length!==0,"internal-error");const t=gm(e);this.updateTokensAndExpiration(e,null,t)}getToken(e,t=!1){return T(this,null,function*(){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(yield this.refresh(e,this.refreshToken),this.accessToken):null)})}clearRefreshToken(){this.refreshToken=null}refresh(e,t){return T(this,null,function*(){const{accessToken:r,refreshToken:i,expiresIn:s}=yield LE(e,t);this.updateTokensAndExpiration(r,i,Number(s))})}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new No;return r&&(te(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(te(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(te(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new No,this.toJSON())}_performRefresh(){return pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(n,e){te(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class vr{constructor(e){var t=e,{uid:r,auth:i,stsTokenManager:s}=t,o=V(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new NE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new yd(o.createdAt||void 0,o.lastLoginAt||void 0)}getIdToken(e){return T(this,null,function*(){const t=yield oi(this,this.stsTokenManager.getToken(this.auth,e));return te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,yield this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t})}getIdTokenResult(e){return xE(this,e)}reload(){return VE(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>D({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vr(N(D({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}_updateTokensIfNecessary(e,t=!1){return T(this,null,function*(){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&(yield du(this)),yield this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)})}delete(){return T(this,null,function*(){if(zn(this.auth.app))return Promise.reject(Oe(this.auth));const e=yield this.getIdToken();return yield oi(this,DE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()})}toJSON(){return N(D({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>D({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,l,c,d,g;const v=(r=t.displayName)!=null?r:void 0,w=(i=t.email)!=null?i:void 0,M=(s=t.phoneNumber)!=null?s:void 0,Y=(o=t.photoURL)!=null?o:void 0,J=(l=t.tenantId)!=null?l:void 0,X=(c=t._redirectEventId)!=null?c:void 0,ve=(d=t.createdAt)!=null?d:void 0,Re=(g=t.lastLoginAt)!=null?g:void 0,{uid:we,emailVerified:qe,isAnonymous:We,providerData:Ne,stsTokenManager:O}=t;te(we&&O,e,"internal-error");const S=No.fromJSON(this.name,O);te(typeof we=="string",e,"internal-error"),ki(v,e.name),ki(w,e.name),te(typeof qe=="boolean",e,"internal-error"),te(typeof We=="boolean",e,"internal-error"),ki(M,e.name),ki(Y,e.name),ki(J,e.name),ki(X,e.name),ki(ve,e.name),ki(Re,e.name);const C=new vr({uid:we,auth:e,email:w,emailVerified:qe,displayName:v,isAnonymous:We,photoURL:Y,phoneNumber:M,tenantId:J,stsTokenManager:S,createdAt:ve,lastLoginAt:Re});return Ne&&Array.isArray(Ne)&&(C.providerData=Ne.map(F=>D({},F))),X&&(C._redirectEventId=X),C}static _fromIdTokenResponse(e,t,r=!1){return T(this,null,function*(){const i=new No;i.updateFromServerResponse(t);const s=new vr({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return yield du(s),s})}static _fromGetAccountInfoResponse(e,t,r){return T(this,null,function*(){const i=t.users[0];te(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?_m(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new No;l.updateFromIdToken(r);const c=new vr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new yd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,d),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym=new Map;function Rs(n){Bt(n instanceof Function,"Expected a class definition");let e=ym.get(n);return e?(Bt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ym.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(){this.type="NONE",this.storage={}}_isAvailable(){return T(this,null,function*(){return!0})}_set(e,t){return T(this,null,function*(){this.storage[e]=t})}_get(e){return T(this,null,function*(){const t=this.storage[e];return t===void 0?null:t})}_remove(e){return T(this,null,function*(){delete this.storage[e]})}_addListener(e,t){}_removeListener(e,t){}}vm.type="NONE";const Im=vm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(n,e,t){return`firebase:${n}:${e}:${t}`}class Vo{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=vd(this.userKey,i.apiKey,s),this.fullPersistenceKey=vd("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}getCurrentUser(){return T(this,null,function*(){const e=yield this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=yield rc(this.auth,{idToken:e}).catch(()=>{});return t?vr._fromGetAccountInfoResponse(this.auth,t,e):null}return vr._fromJSON(this.auth,e)})}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}setPersistence(e){return T(this,null,function*(){if(this.persistence===e)return;const t=yield this.getCurrentUser();if(yield this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)})}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static create(e,t,r="authUser"){return T(this,null,function*(){if(!t.length)return new Vo(Rs(Im),e,r);const i=(yield Promise.all(t.map(d=>T(null,null,function*(){if(yield d._isAvailable())return d})))).filter(d=>d);let s=i[0]||Rs(Im);const o=vd(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const g=yield d._get(o);if(g){let v;if(typeof g=="string"){const w=yield rc(e,{idToken:g}).catch(()=>{});if(!w)break;v=yield vr._fromGetAccountInfoResponse(e,w,g)}else v=vr._fromJSON(e,g);d!==s&&(l=v),s=d;break}}catch(g){}const c=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Vo(s,e,r):(s=c[0],l&&(yield s._set(o,l.toJSON())),yield Promise.all(t.map(d=>T(null,null,function*(){if(d!==s)try{yield d._remove(o)}catch(g){}}))),new Vo(s,e,r))})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Em(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(UE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Am(e))return"Blackberry";if(bm(e))return"Webos";if(BE(e))return"Safari";if((e.includes("chrome/")||qE(e))&&!e.includes("edge/"))return"Chrome";if(wm(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function UE(n=dt()){return/firefox\//i.test(n)}function BE(n=dt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qE(n=dt()){return/crios\//i.test(n)}function Em(n=dt()){return/iemobile/i.test(n)}function wm(n=dt()){return/android/i.test(n)}function Am(n=dt()){return/blackberry/i.test(n)}function bm(n=dt()){return/webos/i.test(n)}function Sm(n=getUA()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function nD(n=getUA()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function rD(n=getUA()){var e;return Sm(n)&&!!((e=window.navigator)!=null&&e.standalone)}function iD(){return isIE()&&document.documentMode===10}function sD(n=getUA()){return Sm(n)||wm(n)||bm(n)||Am(n)||/windows phone/i.test(n)||Em(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(n,e=[]){let t;switch(n){case"Browser":t=Tm(dt());break;case"Worker":t=`${Tm(dt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ss}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,l)=>{try{const c=e(s);o(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}runMiddleware(e){return T(this,null,function*(){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)yield r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch(s){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}})}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(n){return T(this,arguments,function*(e,t={}){return Pt(e,"GET","/v2/passwordPolicy",Tt(e,t))})}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE=6;class zE{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!=null?t:KE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))!=null?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!=null?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!=null?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!=null?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!=null?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!=null?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!=null?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!=null?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rm(this),this.idTokenSubscription=new Rm(this),this.beforeStateQueue=new jE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ae,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Rs(t)),this._initializationPromise=this.queue(()=>T(this,null,function*(){var r,i,s;if(!this._deleted&&(this.persistenceManager=yield Vo.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{yield this._popupRedirectResolver._initialize(this)}catch(o){}yield this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}})),this._initializationPromise}_onStorageEvent(){return T(this,null,function*(){if(this._deleted)return;const e=yield this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),yield this.currentUser.getIdToken();return}yield this._updateCurrentUser(e,!0)}})}initializeCurrentUserFromIdToken(e){return T(this,null,function*(){try{const t=yield rc(this,{idToken:e}),r=yield vr._fromGetAccountInfoResponse(this,t,e);yield this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),yield this.directlySetCurrentUser(null)}})}initializeCurrentUser(e){return T(this,null,function*(){var t;if(zn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=yield this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){yield this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)==null?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,c=yield this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{yield this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),yield this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)})}tryRedirectSignIn(e){return T(this,null,function*(){let t=null;try{t=yield this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){yield this._setRedirectUser(null)}return t})}reloadAndSetCurrentUserOrClear(e){return T(this,null,function*(){try{yield du(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)})}useDeviceLanguage(){this.languageCode=EE()}_delete(){return T(this,null,function*(){this._deleted=!0})}updateCurrentUser(e){return T(this,null,function*(){if(zn(this.app))return Promise.reject(Oe(this));const t=e?Ut(e):null;return t&&te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))})}_updateCurrentUser(e,t=!1){return T(this,null,function*(){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||(yield this.beforeStateQueue.runMiddleware(e)),this.queue(()=>T(this,null,function*(){yield this.directlySetCurrentUser(e),this.notifyAuthListeners()}))})}signOut(){return T(this,null,function*(){return zn(this.app)?Promise.reject(Oe(this)):(yield this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&(yield this._setRedirectUser(null)),this._updateCurrentUser(null,!0))})}setPersistence(e){return zn(this.app)?Promise.reject(Oe(this)):this.queue(()=>T(this,null,function*(){yield this.assertedPersistence.setPersistence(Rs(e))}))}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}validatePassword(e){return T(this,null,function*(){this._getPasswordPolicyInternal()||(yield this._updatePasswordPolicy());const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)})}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}_updatePasswordPolicy(){return T(this,null,function*(){const e=yield $E(this),t=new zE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t})}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new hr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}revokeAccessToken(e){return T(this,null,function*(){if(this.currentUser){const t=yield this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),yield FE(this,r)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}_setRedirectUser(e,t){return T(this,null,function*(){const r=yield this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)})}getOrInitRedirectPersistenceManager(e){return T(this,null,function*(){if(!this.redirectPersistenceManager){const t=e&&Rs(e)||this._popupRedirectResolver;te(t,this,"argument-error"),this.redirectPersistenceManager=yield Vo.create(this,[Rs(t._redirectPersistence)],"redirectUser"),this.redirectUser=yield this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager})}_redirectUserForId(e){return T(this,null,function*(){var t,r;return this._isInitialized&&(yield this.queue(()=>T(this,null,function*(){}))),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null})}_persistUserIfCurrent(e){return T(this,null,function*(){if(e===this.currentUser)return this.queue(()=>T(this,null,function*(){return this.directlySetCurrentUser(e)}))})}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)==null?void 0:e.uid)!=null?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}directlySetCurrentUser(e){return T(this,null,function*(){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?yield this.assertedPersistence.setCurrentUser(e):yield this.assertedPersistence.removeCurrentUser()})}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getAdditionalHeaders(){return T(this,null,function*(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=yield(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getHeartbeatsHeader();r&&(t["X-Firebase-Client"]=r);const i=yield this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t})}_getAppCheckToken(){return T(this,null,function*(){var e;if(zn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=yield(e=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:e.getToken();return t!=null&&t.error&&ce(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token})}}function Dn(n){return Ut(n)}class Rm{constructor(e){this.auth=e,this.observer=null,this.addObserver=ql(t=>this.observer=t)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fu={loadJS(){return T(this,null,function*(){throw new Error("Unable to load external scripts")})},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oD(n){fu=n}function GE(n){return fu.loadJS(n)}function aD(){return fu.recaptchaV2Script}function HE(){return fu.recaptchaEnterpriseScript}function uD(){return fu.gapiScript}function lD(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QE=500,YE=6e4,sc=1e12;class cD{constructor(e){this.auth=e,this.counter=sc,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new ZE(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||sc;(t=this._widgets.get(r))==null||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||sc;return((t=this._widgets.get(r))==null?void 0:t.getResponse())||""}execute(e){return T(this,null,function*(){var t;const r=e||sc;return(t=this._widgets.get(r))==null||t.execute(),""})}}class JE{constructor(){this.enterprise=new XE}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class XE{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ZE{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;te(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=ew(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(r){}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(r){}this.isVisible&&this.execute()},YE)},QE))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function ew(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const tw="recaptcha-enterprise",Cm="NO_RECAPTCHA";class Dm{constructor(e){this.type=tw,this.auth=Dn(e)}verify(e="verify",t=!1){return T(this,null,function*(){function r(s){return T(this,null,function*(){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise((o,l)=>T(null,null,function*(){mm(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new pm(c);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(c=>{l(c)})}))})}function i(s,o,l){const c=window.grecaptcha;fm(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(Cm)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new JE().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!t&&fm(window.grecaptcha))i(l,s,o);else{if(typeof window=="undefined"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=HE();c.length!==0&&(c+=l),GE(c).then(()=>{i(l,s,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})})}}function pu(n,e,t,r=!1,i=!1){return T(this,null,function*(){const s=new Dm(n);let o;if(i)o=Cm;else try{o=yield s.verify(t)}catch(c){o=yield s.verify(t,!0)}const l=D({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const c=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const c=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l})}function mu(n,e,t,r,i){return T(this,null,function*(){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if((s=n._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=yield pu(n,e,t,t==="getOobCode");return r(n,l)}else return r(n,e).catch(l=>T(null,null,function*(){if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=yield pu(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(l)}));else if(i==="PHONE_PROVIDER")if((o=n._getRecaptchaConfig())!=null&&o.isProviderEnabled("PHONE_PROVIDER")){const l=yield pu(n,e,t);return r(n,l).catch(c=>T(null,null,function*(){var d;if(((d=n._getRecaptchaConfig())==null?void 0:d.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(c.code==="auth/missing-recaptcha-token"||c.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const g=yield pu(n,e,t,!1,!0);return r(n,g)}return Promise.reject(c)}))}else{const l=yield pu(n,e,t,!1,!0);return r(n,l)}else return Promise.reject(i+" provider is not supported.")})}function nw(n){return T(this,null,function*(){const e=Dn(n),t=yield mm(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new pm(t);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new Dm(e).verify()})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rw(n,e){const t=bs(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(bn(s,e!=null?e:{}))return i;se(i,"already-initialized")}return t.initialize({options:e})}function iw(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Rs);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sw(n,e,t){const r=Dn(n);te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=km(e),{host:o,port:l}=ow(e),c=l===null?"":`:${l}`,d={url:`${s}//${o}${c}/`},g=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),te(bn(d,r.config.emulator)&&bn(g,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=g,r.settings.appVerificationDisabledForTesting=!0,oe(o)?(be(`${s}//${o}${c}`),Ft("Auth",!0)):i||aw()}function km(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ow(n){const e=km(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:xm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:xm(o)}}}function xm(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function aw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return pt("not implemented")}_getIdTokenResponse(e){return pt("not implemented")}_linkToIdToken(e,t){return pt("not implemented")}_getReauthenticationResolver(e){return pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(n,e){return T(this,null,function*(){return Pt(n,"POST","/v1/accounts:resetPassword",Tt(n,e))})}function uw(n,e){return T(this,null,function*(){return Pt(n,"POST","/v1/accounts:update",e)})}function lw(n,e){return T(this,null,function*(){return Pt(n,"POST","/v1/accounts:signUp",e)})}function cw(n,e){return T(this,null,function*(){return Pt(n,"POST","/v1/accounts:update",Tt(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(n,e){return T(this,null,function*(){return si(n,"POST","/v1/accounts:signInWithPassword",Tt(n,e))})}function ac(n,e){return T(this,null,function*(){return Pt(n,"POST","/v1/accounts:sendOobCode",Tt(n,e))})}function dw(n,e){return T(this,null,function*(){return ac(n,e)})}function fw(n,e){return T(this,null,function*(){return ac(n,e)})}function pw(n,e){return T(this,null,function*(){return ac(n,e)})}function mw(n,e){return T(this,null,function*(){return ac(n,e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(n,e){return T(this,null,function*(){return si(n,"POST","/v1/accounts:signInWithEmailLink",Tt(n,e))})}function _w(n,e){return T(this,null,function*(){return si(n,"POST","/v1/accounts:signInWithEmailLink",Tt(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu extends oc{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new gu(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new gu(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}_getIdTokenResponse(e){return T(this,null,function*(){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mu(e,t,"signInWithPassword",hw,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return gw(e,{email:this._email,oobCode:this._password});default:se(e,"internal-error")}})}_linkToIdToken(e,t){return T(this,null,function*(){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mu(e,r,"signUpPassword",lw,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return _w(e,{idToken:t,email:this._email,oobCode:this._password});default:se(e,"internal-error")}})}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(n,e){return T(this,null,function*(){return si(n,"POST","/v1/accounts:signInWithIdp",Tt(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="http://localhost";class ai extends oc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ai(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):se("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=r,o=V(r,["providerId","signInMethod"]);if(!i||!s)return null;const l=new ai(i,s);return l.idToken=o.idToken||void 0,l.accessToken=o.accessToken||void 0,l.secret=o.secret,l.nonce=o.nonce,l.pendingToken=o.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return Mo(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Mo(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Mo(e,t)}buildRequest(){const e={requestUri:yw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_e(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hD(n,e){return T(this,null,function*(){return Pt(n,"POST","/v1/accounts:sendVerificationCode",Tt(n,e))})}function vw(n,e){return T(this,null,function*(){return si(n,"POST","/v1/accounts:signInWithPhoneNumber",Tt(n,e))})}function Iw(n,e){return T(this,null,function*(){const t=yield si(n,"POST","/v1/accounts:signInWithPhoneNumber",Tt(n,e));if(t.temporaryProof)throw cu(n,"account-exists-with-different-credential",t);return t})}const Tw={USER_NOT_FOUND:"user-not-found"};function Ew(n,e){return T(this,null,function*(){const t=N(D({},e),{operation:"REAUTH"});return si(n,"POST","/v1/accounts:signInWithPhoneNumber",Tt(n,t),Tw)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc extends oc{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new uc({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new uc({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return vw(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Iw(e,D({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ew(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!t&&!i&&!s?null:new uc({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Aw(n){const e=Jr(wi(n)).link,t=e?Jr(wi(e)).deep_link_id:null,r=Jr(wi(n)).deep_link_id;return(r?Jr(wi(r)).link:null)||r||t||e||n}class _u{constructor(e){var t,r,i,s,o,l;const c=Jr(wi(e)),d=(t=c.apiKey)!=null?t:null,g=(r=c.oobCode)!=null?r:null,v=ww((i=c.mode)!=null?i:null);te(d&&g&&v,"argument-error"),this.apiKey=d,this.operation=v,this.code=g,this.continueUrl=(s=c.continueUrl)!=null?s:null,this.languageCode=(o=c.lang)!=null?o:null,this.tenantId=(l=c.tenantId)!=null?l:null}static parseLink(e){const t=Aw(e);try{return new _u(t)}catch(r){return null}}}function dD(n){return _u.parseLink(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(){this.providerId=xi.PROVIDER_ID}static credential(e,t){return gu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=_u.parseLink(t);return te(r,"argument-error"),gu._fromEmailAndCode(e,r.code,r.tenantId)}}xi.PROVIDER_ID="password",xi.EMAIL_PASSWORD_SIGN_IN_METHOD="password",xi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc extends Nm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class cc extends null{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return te("providerId"in t&&"signInMethod"in t,"argument-error"),ai._fromParams(t)}credential(e){return this._credential(N(D({},e),{nonce:e.rawNonce}))}_credential(e){return te(e.idToken||e.accessToken,"argument-error"),ai._fromParams(N(D({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return cc.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return cc.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:l}=e;if(!r&&!i&&!t&&!s||!l)return null;try{return new cc(l)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:s})}catch(c){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends lc{constructor(){super("facebook.com")}static credential(e){return ai._fromParams({providerId:Oi.PROVIDER_ID,signInMethod:Oi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Oi.credentialFromTaggedObject(e)}static credentialFromError(e){return Oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Oi.credential(e.oauthAccessToken)}catch(t){return null}}}Oi.FACEBOOK_SIGN_IN_METHOD="facebook.com",Oi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr extends lc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ai._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Lr.credential(t,r)}catch(i){return null}}}Lr.GOOGLE_SIGN_IN_METHOD="google.com",Lr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends lc{constructor(){super("github.com")}static credential(e){return ai._fromParams({providerId:Ni.PROVIDER_ID,signInMethod:Ni.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ni.credentialFromTaggedObject(e)}static credentialFromError(e){return Ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ni.credential(e.oauthAccessToken)}catch(t){return null}}}Ni.GITHUB_SIGN_IN_METHOD="github.com",Ni.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bw="http://localhost";class yu extends oc{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Mo(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Mo(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Mo(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=t;return!r||!i||!s||r!==i?null:new yu(r,s)}static _create(e,t){return new yu(e,t)}buildRequest(){return{requestUri:bw,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw="saml.";class Id extends Nm{constructor(e){te(e.startsWith(Sw),"argument-error"),super(e)}static credentialFromResult(e){return Id.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Id.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=yu.fromJSON(e);return te(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return yu._create(r,t)}catch(i){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi extends lc{constructor(){super("twitter.com")}static credential(e,t){return ai._fromParams({providerId:Vi.PROVIDER_ID,signInMethod:Vi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vi.credentialFromTaggedObject(e)}static credentialFromError(e){return Vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Vi.credential(t,r)}catch(i){return null}}}Vi.TWITTER_SIGN_IN_METHOD="twitter.com",Vi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(n,e){return T(this,null,function*(){return si(n,"POST","/v1/accounts:signUp",Tt(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static _fromIdTokenResponse(e,t,r,i=!1){return T(this,null,function*(){const s=yield vr._fromIdTokenResponse(e,r,i),o=Mm(r);return new sr({user:s,providerId:o,_tokenResponse:r,operationType:t})})}static _forOperation(e,t,r){return T(this,null,function*(){yield e._updateTokensIfNecessary(r,!0);const i=Mm(r);return new sr({user:e,providerId:i,_tokenResponse:r,operationType:t})})}}function Mm(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(n){return T(this,null,function*(){var e;if(zn(n.app))return Promise.reject(Oe(n));const t=Dn(n);if(yield t._initializationPromise,(e=t.currentUser)!=null&&e.isAnonymous)return new sr({user:t.currentUser,providerId:null,operationType:"signIn"});const r=yield Vm(t,{returnSecureToken:!0}),i=yield sr._fromIdTokenResponse(t,"signIn",r,!0);return yield t._updateCurrentUser(i.user),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends nr{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!=null?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new hc(e,t,r,i)}}function Lm(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?hc._fromErrorAndOperation(n,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fD(n,e){return T(this,null,function*(){const t=getModularInstance(n);yield Um(!0,t,e);const{providerUserInfo:r}=yield kE(t.auth,{idToken:yield t.getIdToken(),deleteProvider:[e]}),i=Fm(r||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),yield t.auth._persistUserIfCurrent(t),t})}function Pw(n,e,t=!1){return T(this,null,function*(){const r=yield oi(n,e._linkToIdToken(n.auth,yield n.getIdToken()),t);return sr._forOperation(n,"link",r)})}function Um(n,e,t){return T(this,null,function*(){yield du(e);const r=Fm(e.providerData),i=n===!1?"provider-already-linked":"no-such-provider";te(r.has(t)===n,e.auth,i)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(n,e,t=!1){return T(this,null,function*(){const{auth:r}=n;if(_isFirebaseServerApp(r.app))return Promise.reject(Oe(r));const i="reauthenticate";try{const s=yield oi(n,Lm(r,i,e,n),t);te(s.idToken,r,"internal-error");const o=ic(s.idToken);te(o,r,"internal-error");const{sub:l}=o;return te(n.uid===l,r,"user-mismatch"),sr._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&se(r,"user-mismatch"),s}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(n,e,t=!1){return T(this,null,function*(){if(zn(n.app))return Promise.reject(Oe(n));const r="signIn",i=yield Lm(n,r,e),s=yield sr._fromIdTokenResponse(n,r,i);return t||(yield n._updateCurrentUser(s.user)),s})}function Ed(n,e){return T(this,null,function*(){return Cw(Dn(n),e)})}function Bm(n,e){return T(this,null,function*(){const t=Ut(n);return yield Um(!1,t,e.providerId),Pw(t,e)})}function pD(n,e){return T(this,null,function*(){return Rw(getModularInstance(n),e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dw(n,e){return T(this,null,function*(){return si(n,"POST","/v1/accounts:signInWithCustomToken",Tt(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mD(n,e){return T(this,null,function*(){if(_isFirebaseServerApp(n.app))return Promise.reject(Oe(n));const t=Dn(n),r=yield Dw(t,{token:e,returnSecureToken:!0}),i=yield sr._fromIdTokenResponse(t,"signIn",r);return yield t._updateCurrentUser(i.user),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?wd._fromServerResponse(e,t):"totpInfo"in t?Ad._fromServerResponse(e,t):se(e,"internal-error")}}class wd extends vu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new wd(t)}}class Ad extends vu{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Ad(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(n,e,t){var r;te(((r=t.url)==null?void 0:r.length)>0,n,"invalid-continue-uri"),te(typeof t.dynamicLinkDomain=="undefined"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),te(typeof t.linkDomain=="undefined"||t.linkDomain.length>0,n,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(te(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(te(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(n){return T(this,null,function*(){const e=Dn(n);e._getPasswordPolicyInternal()&&(yield e._updatePasswordPolicy())})}function kw(n,e,t){return T(this,null,function*(){const r=Dn(n),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&dc(r,i,t),yield mu(r,i,"getOobCode",fw,"EMAIL_PASSWORD_PROVIDER")})}function gD(n,e,t){return T(this,null,function*(){yield Om(getModularInstance(n),{oobCode:e,newPassword:t}).catch(r=>T(null,null,function*(){throw r.code==="auth/password-does-not-meet-requirements"&&bd(n),r}))})}function _D(n,e){return T(this,null,function*(){yield cw(getModularInstance(n),{oobCode:e})})}function xw(n,e){return T(this,null,function*(){const t=getModularInstance(n),r=yield Om(t,{oobCode:e}),i=r.requestType;switch(te(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":te(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":te(r.mfaInfo,t,"internal-error");default:te(r.email,t,"internal-error")}let s=null;return r.mfaInfo&&(s=vu._fromServerResponse(Dn(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}})}function yD(n,e){return T(this,null,function*(){const{data:t}=yield xw(getModularInstance(n),e);return t.email})}function Ow(n,e,t){return T(this,null,function*(){if(zn(n.app))return Promise.reject(Oe(n));const r=Dn(n),o=yield mu(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Vm,"EMAIL_PASSWORD_PROVIDER").catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&bd(n),c}),l=yield sr._fromIdTokenResponse(r,"signIn",o);return yield r._updateCurrentUser(l.user),l})}function Nw(n,e,t){return zn(n.app)?Promise.reject(Oe(n)):Ed(Ut(n),xi.credential(e,t)).catch(r=>T(null,null,function*(){throw r.code==="auth/password-does-not-meet-requirements"&&bd(n),r}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vD(n,e,t){return T(this,null,function*(){const r=Dn(n),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,l){te(l.handleCodeInApp,r,"argument-error"),l&&dc(r,o,l)}s(i,t),yield mu(r,i,"getOobCode",pw,"EMAIL_PASSWORD_PROVIDER")})}function ID(n,e){const t=_u.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}function TD(n,e,t){return T(this,null,function*(){if(_isFirebaseServerApp(n.app))return Promise.reject(Oe(n));const r=getModularInstance(n),i=xi.credentialWithLink(e,t||Ps());return te(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Ed(r,i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(n,e){return T(this,null,function*(){return Pt(n,"POST","/v1/accounts:createAuthUri",Tt(n,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ED(n,e){return T(this,null,function*(){const t=nn()?Ps():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:i}=yield Vw(getModularInstance(n),r);return i||[]})}function wD(n,e){return T(this,null,function*(){const t=getModularInstance(n),i={requestType:"VERIFY_EMAIL",idToken:yield n.getIdToken()};e&&dc(t.auth,i,e);const{email:s}=yield dw(t.auth,i);s!==n.email&&(yield n.reload())})}function AD(n,e,t){return T(this,null,function*(){const r=getModularInstance(n),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:yield n.getIdToken(),newEmail:e};t&&dc(r.auth,s,t);const{email:o}=yield mw(r.auth,s);o!==n.email&&(yield n.reload())})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(n,e){return T(this,null,function*(){return Pt(n,"POST","/v1/accounts:update",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bD(n,e){return T(this,arguments,function*(t,{displayName:r,photoURL:i}){if(r===void 0&&i===void 0)return;const s=getModularInstance(t),l={idToken:yield s.getIdToken(),displayName:r,photoUrl:i,returnSecureToken:!0},c=yield oi(s,Mw(s.auth,l));s.displayName=c.displayName||null,s.photoURL=c.photoUrl||null;const d=s.providerData.find(({providerId:g})=>g==="password");d&&(d.displayName=s.displayName,d.photoURL=s.photoURL),yield s._updateTokensIfNecessary(c)})}function SD(n,e){const t=getModularInstance(n);return _isFirebaseServerApp(t.auth.app)?Promise.reject(Oe(t.auth)):qm(t,e,null)}function PD(n,e){return qm(getModularInstance(n),null,e)}function qm(n,e,t){return T(this,null,function*(){const{auth:r}=n,s={idToken:yield n.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=yield oi(n,uw(r,s));yield n._updateTokensIfNecessary(o,!0)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(n){var e,t;if(!n)return null;const{providerId:r}=n,i=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},s=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=ic(n.idToken))==null?void 0:e.firebase)==null?void 0:t.sign_in_provider;if(o){const l=o!=="anonymous"&&o!=="custom"?o:null;return new Lo(s,l)}}if(!r)return null;switch(r){case"facebook.com":return new Fw(s,i);case"github.com":return new Uw(s,i);case"google.com":return new Bw(s,i);case"twitter.com":return new qw(s,i,n.screenName||null);case"custom":case"anonymous":return new Lo(s,null);default:return new Lo(s,r,i)}}class Lo{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class jm extends Lo{constructor(e,t,r,i){super(e,t,r),this.username=i}}class Fw extends Lo{constructor(e,t){super(e,"facebook.com",t)}}class Uw extends jm{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class Bw extends Lo{constructor(e,t){super(e,"google.com",t)}}class qw extends jm{constructor(e,t,r){super(e,"twitter.com",t,r)}}function RD(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:Lw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CD(n,e){return getModularInstance(n).setPersistence(e)}function DD(n){return nw(n)}function kD(n,e){return T(this,null,function*(){return Dn(n).validatePassword(e)})}function xD(n,e,t,r){return getModularInstance(n).onIdTokenChanged(e,t,r)}function OD(n,e,t){return getModularInstance(n).beforeAuthStateChanged(e,t)}function jw(n,e,t,r){return Ut(n).onAuthStateChanged(e,t,r)}function ND(n){getModularInstance(n).useDeviceLanguage()}function VD(n,e){return getModularInstance(n).updateCurrentUser(e)}function $w(n){return Ut(n).signOut()}function MD(n,e){return Dn(n).revokeAccessToken(e)}function LD(n){return T(this,null,function*(){return getModularInstance(n).delete()})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,t,r){this.type=e,this.credential=t,this.user=r}static _fromIdtoken(e,t){return new Cs("enroll",e,t)}static _fromMfaPendingCredential(e){return new Cs("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if((t=e.multiFactorSession)!=null&&t.pendingCredential)return Cs._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((r=e.multiFactorSession)!=null&&r.idToken)return Cs._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=Dn(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(l=>vu._fromServerResponse(r,l));te(i.mfaPendingCredential,r,"internal-error");const o=Cs._fromMfaPendingCredential(i.mfaPendingCredential);return new Sd(o,s,l=>T(null,null,function*(){const c=yield l._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const d=N(D({},i),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const g=yield sr._fromIdTokenResponse(r,t.operationType,d);return yield r._updateCurrentUser(g.user),g;case"reauthenticate":return te(t.user,r,"internal-error"),sr._forOperation(t.user,t.operationType,d);default:se(r,"internal-error")}}))}resolveSignIn(e){return T(this,null,function*(){const t=e;return this.signInResolver(t)})}}function FD(n,e){var t;const r=getModularInstance(n),i=e;return te(e.customData.operationType,r,"argument-error"),te((t=i.customData._serverResponse)==null?void 0:t.mfaPendingCredential,r,"argument-error"),Sd._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UD(n,e){return Pt(n,"POST","/v2/accounts/mfaEnrollment:start",Tt(n,e))}function BD(n,e){return Pt(n,"POST","/v2/accounts/mfaEnrollment:finalize",Tt(n,e))}function Kw(n,e){return Pt(n,"POST","/v2/accounts/mfaEnrollment:start",Tt(n,e))}function zw(n,e){return Pt(n,"POST","/v2/accounts/mfaEnrollment:finalize",Tt(n,e))}function Ww(n,e){return Pt(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Tt(n,e))}class Pd{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>vu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Pd(e)}getSession(){return T(this,null,function*(){return Cs._fromIdtoken(yield this.user.getIdToken(),this.user)})}enroll(e,t){return T(this,null,function*(){const r=e,i=yield this.getSession(),s=yield oi(this.user,r._process(this.user.auth,i,t));return yield this.user._updateTokensIfNecessary(s),this.user.reload()})}unenroll(e){return T(this,null,function*(){const t=typeof e=="string"?e:e.uid,r=yield this.user.getIdToken();try{const i=yield oi(this.user,Ww(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),yield this.user._updateTokensIfNecessary(i),yield this.user.reload()}catch(i){throw i}})}}const Rd=new WeakMap;function qD(n){const e=getModularInstance(n);return Rd.has(e)||Rd.set(e,Pd._fromUser(e)),Rd.get(e)}const $m="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(n){return Promise.all(n.map(e=>T(null,null,function*(){try{return{fulfilled:!0,value:yield e}}catch(t){return{fulfilled:!1,reason:t}}})))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new fc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}handleEvent(e){return T(this,null,function*(){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(d=>T(this,null,function*(){return d(t.origin,s)})),c=yield Gw(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}_send(e,t,r=50){return T(this,null,function*(){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,c)=>{const d=Hw("",20);i.port1.start();const g=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(v){const w=v;if(w.data.eventId===d)switch(w.data.status){case"ack":clearTimeout(g),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(w.data.response);break;default:clearTimeout(g),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(){return window}function jD(n){Cd().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(){return typeof Cd().WorkerGlobalScope!="undefined"&&typeof Cd().importScripts=="function"}function Yw(){return T(this,null,function*(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(yield navigator.serviceWorker.ready).active}catch(n){return null}})}function Jw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Xw(){return Km()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm="firebaseLocalStorageDb",Zw=1,pc="firebaseLocalStorage",Wm="fbase_key";class Iu{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function mc(n,e){return n.transaction([pc],e?"readwrite":"readonly").objectStore(pc)}function eA(){const n=indexedDB.deleteDatabase(zm);return new Iu(n).toPromise()}function Dd(){const n=indexedDB.open(zm,Zw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(pc,{keyPath:Wm})}catch(i){t(i)}}),n.addEventListener("success",()=>T(null,null,function*(){const r=n.result;r.objectStoreNames.contains(pc)?e(r):(r.close(),yield eA(),e(yield Dd()))}))})}function Gm(n,e,t){return T(this,null,function*(){const r=mc(n,!0).put({[Wm]:e,value:t});return new Iu(r).toPromise()})}function tA(n,e){return T(this,null,function*(){const t=mc(n,!1).get(e),r=yield new Iu(t).toPromise();return r===void 0?null:r.value})}function Hm(n,e){const t=mc(n,!0).delete(e);return new Iu(t).toPromise()}const nA=800,rA=3;class Qm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}_openDb(){return T(this,null,function*(){return this.db?this.db:(this.db=yield Dd(),this.db)})}_withRetries(e){return T(this,null,function*(){let t=0;for(;;)try{const r=yield this._openDb();return yield e(r)}catch(r){if(t++>rA)throw r;this.db&&(this.db.close(),this.db=void 0)}})}initializeServiceWorkerMessaging(){return T(this,null,function*(){return Km()?this.initializeReceiver():this.initializeSender()})}initializeReceiver(){return T(this,null,function*(){this.receiver=fc._getInstance(Xw()),this.receiver._subscribe("keyChanged",(e,t)=>T(this,null,function*(){return{keyProcessed:(yield this._poll()).includes(t.key)}})),this.receiver._subscribe("ping",(e,t)=>T(this,null,function*(){return["keyChanged"]}))})}initializeSender(){return T(this,null,function*(){var e,t;if(this.activeServiceWorker=yield Yw(),!this.activeServiceWorker)return;this.sender=new Qw(this.activeServiceWorker);const r=yield this.sender._send("ping",{},800);r&&(e=r[0])!=null&&e.fulfilled&&(t=r[0])!=null&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)})}notifyServiceWorker(e){return T(this,null,function*(){if(!(!this.sender||!this.activeServiceWorker||Jw()!==this.activeServiceWorker))try{yield this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}})}_isAvailable(){return T(this,null,function*(){try{if(!indexedDB)return!1;const e=yield Dd();return yield Gm(e,$m,"1"),yield Hm(e,$m),!0}catch(e){}return!1})}_withPendingWrite(e){return T(this,null,function*(){this.pendingWrites++;try{yield e()}finally{this.pendingWrites--}})}_set(e,t){return T(this,null,function*(){return this._withPendingWrite(()=>T(this,null,function*(){return yield this._withRetries(r=>Gm(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)}))})}_get(e){return T(this,null,function*(){const t=yield this._withRetries(r=>tA(r,e));return this.localCache[e]=t,t})}_remove(e){return T(this,null,function*(){return this._withPendingWrite(()=>T(this,null,function*(){return yield this._withRetries(t=>Hm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)}))})}_poll(){return T(this,null,function*(){const e=yield this._withRetries(i=>{const s=mc(i,!1).getAll();return new Iu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t})}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>T(this,null,function*(){return this._poll()}),nA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qm.type="LOCAL";const iA=Qm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $D(n,e){return Pt(n,"POST","/v2/accounts/mfaSignIn:start",Tt(n,e))}function KD(n,e){return Pt(n,"POST","/v2/accounts/mfaSignIn:finalize",Tt(n,e))}function sA(n,e){return Pt(n,"POST","/v2/accounts/mfaSignIn:finalize",Tt(n,e))}class oA{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return pt("unexpected MultiFactorSessionType")}}}class aA{static assertionForEnrollment(e,t){return Tu._fromSecret(e,t)}static assertionForSignIn(e,t){return Tu._fromEnrollmentId(e,t)}static generateSecret(e){return T(this,null,function*(){var t;const r=e;te(typeof((t=r.user)==null?void 0:t.auth)!="undefined","internal-error");const i=yield Kw(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return kd._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)})}}aA.FACTOR_ID="totp";class Tu extends oA{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new Tu(t,void 0,e)}static _fromEnrollmentId(e,t){return new Tu(t,e)}_finalizeEnroll(e,t,r){return T(this,null,function*(){return te(typeof this.secret!="undefined",e,"argument-error"),zw(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})})}_finalizeSignIn(e,t){return T(this,null,function*(){te(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const r={verificationCode:this.otp};return sA(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})})}}class kd{constructor(e,t,r,i,s,o,l){this.sessionInfo=o,this.auth=l,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,t){return new kd(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var r;let i=!1;return(gc(e)||gc(t))&&(i=!0),i&&(gc(e)&&(e=((r=this.auth.currentUser)==null?void 0:r.email)||"unknownuser"),gc(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function gc(n){return typeof n=="undefined"||(n==null?void 0:n.length)===0}var Ym="@firebase/auth",Jm="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}getToken(e){return T(this,null,function*(){return this.assertAuthConfigured(),yield this.auth._initializationPromise,this.auth.currentUser?{accessToken:yield this.auth.currentUser.getIdToken(e)}:null})}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cA(n){Vr(new xr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;te(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pm(n)},d=new WE(r,i,s,c);return iw(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Vr(new xr("auth-internal",e=>{const t=Dn(e.getProvider("auth").getImmediate());return(r=>new uA(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gr(Ym,Jm,lA(n)),gr(Ym,Jm,"esm2020")}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(n=ou()){const e=bs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=rw(n,{persistence:[iA]}),r=Qe("auth");return r&&sw(t,`http://${r}`),t}cA("WebExtension");var Xm=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof bt.g!="undefined"?bt.g:typeof self!="undefined"?self:{},Zm={};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mi,eg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(O,S){function C(){}C.prototype=S.prototype,O.F=S.prototype,O.prototype=new C,O.prototype.constructor=O,O.D=function(F,L,z){for(var R=Array(arguments.length-2),qn=2;qn<arguments.length;qn++)R[qn-2]=arguments[qn];return S.prototype[L].apply(F,R)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(O,S,C){C||(C=0);const F=Array(16);if(typeof S=="string")for(var L=0;L<16;++L)F[L]=S.charCodeAt(C++)|S.charCodeAt(C++)<<8|S.charCodeAt(C++)<<16|S.charCodeAt(C++)<<24;else for(L=0;L<16;++L)F[L]=S[C++]|S[C++]<<8|S[C++]<<16|S[C++]<<24;S=O.g[0],C=O.g[1],L=O.g[2];let z=O.g[3],R;R=S+(z^C&(L^z))+F[0]+3614090360&4294967295,S=C+(R<<7&4294967295|R>>>25),R=z+(L^S&(C^L))+F[1]+3905402710&4294967295,z=S+(R<<12&4294967295|R>>>20),R=L+(C^z&(S^C))+F[2]+606105819&4294967295,L=z+(R<<17&4294967295|R>>>15),R=C+(S^L&(z^S))+F[3]+3250441966&4294967295,C=L+(R<<22&4294967295|R>>>10),R=S+(z^C&(L^z))+F[4]+4118548399&4294967295,S=C+(R<<7&4294967295|R>>>25),R=z+(L^S&(C^L))+F[5]+1200080426&4294967295,z=S+(R<<12&4294967295|R>>>20),R=L+(C^z&(S^C))+F[6]+2821735955&4294967295,L=z+(R<<17&4294967295|R>>>15),R=C+(S^L&(z^S))+F[7]+4249261313&4294967295,C=L+(R<<22&4294967295|R>>>10),R=S+(z^C&(L^z))+F[8]+1770035416&4294967295,S=C+(R<<7&4294967295|R>>>25),R=z+(L^S&(C^L))+F[9]+2336552879&4294967295,z=S+(R<<12&4294967295|R>>>20),R=L+(C^z&(S^C))+F[10]+4294925233&4294967295,L=z+(R<<17&4294967295|R>>>15),R=C+(S^L&(z^S))+F[11]+2304563134&4294967295,C=L+(R<<22&4294967295|R>>>10),R=S+(z^C&(L^z))+F[12]+1804603682&4294967295,S=C+(R<<7&4294967295|R>>>25),R=z+(L^S&(C^L))+F[13]+4254626195&4294967295,z=S+(R<<12&4294967295|R>>>20),R=L+(C^z&(S^C))+F[14]+2792965006&4294967295,L=z+(R<<17&4294967295|R>>>15),R=C+(S^L&(z^S))+F[15]+1236535329&4294967295,C=L+(R<<22&4294967295|R>>>10),R=S+(L^z&(C^L))+F[1]+4129170786&4294967295,S=C+(R<<5&4294967295|R>>>27),R=z+(C^L&(S^C))+F[6]+3225465664&4294967295,z=S+(R<<9&4294967295|R>>>23),R=L+(S^C&(z^S))+F[11]+643717713&4294967295,L=z+(R<<14&4294967295|R>>>18),R=C+(z^S&(L^z))+F[0]+3921069994&4294967295,C=L+(R<<20&4294967295|R>>>12),R=S+(L^z&(C^L))+F[5]+3593408605&4294967295,S=C+(R<<5&4294967295|R>>>27),R=z+(C^L&(S^C))+F[10]+38016083&4294967295,z=S+(R<<9&4294967295|R>>>23),R=L+(S^C&(z^S))+F[15]+3634488961&4294967295,L=z+(R<<14&4294967295|R>>>18),R=C+(z^S&(L^z))+F[4]+3889429448&4294967295,C=L+(R<<20&4294967295|R>>>12),R=S+(L^z&(C^L))+F[9]+568446438&4294967295,S=C+(R<<5&4294967295|R>>>27),R=z+(C^L&(S^C))+F[14]+3275163606&4294967295,z=S+(R<<9&4294967295|R>>>23),R=L+(S^C&(z^S))+F[3]+4107603335&4294967295,L=z+(R<<14&4294967295|R>>>18),R=C+(z^S&(L^z))+F[8]+1163531501&4294967295,C=L+(R<<20&4294967295|R>>>12),R=S+(L^z&(C^L))+F[13]+2850285829&4294967295,S=C+(R<<5&4294967295|R>>>27),R=z+(C^L&(S^C))+F[2]+4243563512&4294967295,z=S+(R<<9&4294967295|R>>>23),R=L+(S^C&(z^S))+F[7]+1735328473&4294967295,L=z+(R<<14&4294967295|R>>>18),R=C+(z^S&(L^z))+F[12]+2368359562&4294967295,C=L+(R<<20&4294967295|R>>>12),R=S+(C^L^z)+F[5]+4294588738&4294967295,S=C+(R<<4&4294967295|R>>>28),R=z+(S^C^L)+F[8]+2272392833&4294967295,z=S+(R<<11&4294967295|R>>>21),R=L+(z^S^C)+F[11]+1839030562&4294967295,L=z+(R<<16&4294967295|R>>>16),R=C+(L^z^S)+F[14]+4259657740&4294967295,C=L+(R<<23&4294967295|R>>>9),R=S+(C^L^z)+F[1]+2763975236&4294967295,S=C+(R<<4&4294967295|R>>>28),R=z+(S^C^L)+F[4]+1272893353&4294967295,z=S+(R<<11&4294967295|R>>>21),R=L+(z^S^C)+F[7]+4139469664&4294967295,L=z+(R<<16&4294967295|R>>>16),R=C+(L^z^S)+F[10]+3200236656&4294967295,C=L+(R<<23&4294967295|R>>>9),R=S+(C^L^z)+F[13]+681279174&4294967295,S=C+(R<<4&4294967295|R>>>28),R=z+(S^C^L)+F[0]+3936430074&4294967295,z=S+(R<<11&4294967295|R>>>21),R=L+(z^S^C)+F[3]+3572445317&4294967295,L=z+(R<<16&4294967295|R>>>16),R=C+(L^z^S)+F[6]+76029189&4294967295,C=L+(R<<23&4294967295|R>>>9),R=S+(C^L^z)+F[9]+3654602809&4294967295,S=C+(R<<4&4294967295|R>>>28),R=z+(S^C^L)+F[12]+3873151461&4294967295,z=S+(R<<11&4294967295|R>>>21),R=L+(z^S^C)+F[15]+530742520&4294967295,L=z+(R<<16&4294967295|R>>>16),R=C+(L^z^S)+F[2]+3299628645&4294967295,C=L+(R<<23&4294967295|R>>>9),R=S+(L^(C|~z))+F[0]+4096336452&4294967295,S=C+(R<<6&4294967295|R>>>26),R=z+(C^(S|~L))+F[7]+1126891415&4294967295,z=S+(R<<10&4294967295|R>>>22),R=L+(S^(z|~C))+F[14]+2878612391&4294967295,L=z+(R<<15&4294967295|R>>>17),R=C+(z^(L|~S))+F[5]+4237533241&4294967295,C=L+(R<<21&4294967295|R>>>11),R=S+(L^(C|~z))+F[12]+1700485571&4294967295,S=C+(R<<6&4294967295|R>>>26),R=z+(C^(S|~L))+F[3]+2399980690&4294967295,z=S+(R<<10&4294967295|R>>>22),R=L+(S^(z|~C))+F[10]+4293915773&4294967295,L=z+(R<<15&4294967295|R>>>17),R=C+(z^(L|~S))+F[1]+2240044497&4294967295,C=L+(R<<21&4294967295|R>>>11),R=S+(L^(C|~z))+F[8]+1873313359&4294967295,S=C+(R<<6&4294967295|R>>>26),R=z+(C^(S|~L))+F[15]+4264355552&4294967295,z=S+(R<<10&4294967295|R>>>22),R=L+(S^(z|~C))+F[6]+2734768916&4294967295,L=z+(R<<15&4294967295|R>>>17),R=C+(z^(L|~S))+F[13]+1309151649&4294967295,C=L+(R<<21&4294967295|R>>>11),R=S+(L^(C|~z))+F[4]+4149444226&4294967295,S=C+(R<<6&4294967295|R>>>26),R=z+(C^(S|~L))+F[11]+3174756917&4294967295,z=S+(R<<10&4294967295|R>>>22),R=L+(S^(z|~C))+F[2]+718787259&4294967295,L=z+(R<<15&4294967295|R>>>17),R=C+(z^(L|~S))+F[9]+3951481745&4294967295,O.g[0]=O.g[0]+S&4294967295,O.g[1]=O.g[1]+(L+(R<<21&4294967295|R>>>11))&4294967295,O.g[2]=O.g[2]+L&4294967295,O.g[3]=O.g[3]+z&4294967295}r.prototype.v=function(O,S){S===void 0&&(S=O.length);const C=S-this.blockSize,F=this.C;let L=this.h,z=0;for(;z<S;){if(L==0)for(;z<=C;)i(this,O,z),z+=this.blockSize;if(typeof O=="string"){for(;z<S;)if(F[L++]=O.charCodeAt(z++),L==this.blockSize){i(this,F),L=0;break}}else for(;z<S;)if(F[L++]=O[z++],L==this.blockSize){i(this,F),L=0;break}}this.h=L,this.o+=S},r.prototype.A=function(){var O=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);O[0]=128;for(var S=1;S<O.length-8;++S)O[S]=0;S=this.o*8;for(var C=O.length-8;C<O.length;++C)O[C]=S&255,S/=256;for(this.v(O),O=Array(16),S=0,C=0;C<4;++C)for(let F=0;F<32;F+=8)O[S++]=this.g[C]>>>F&255;return O};function s(O,S){var C=l;return Object.prototype.hasOwnProperty.call(C,O)?C[O]:C[O]=S(O)}function o(O,S){this.h=S;const C=[];let F=!0;for(let L=O.length-1;L>=0;L--){const z=O[L]|0;F&&z==S||(C[L]=z,F=!1)}this.g=C}var l={};function c(O){return-128<=O&&O<128?s(O,function(S){return new o([S|0],S<0?-1:0)}):new o([O|0],O<0?-1:0)}function d(O){if(isNaN(O)||!isFinite(O))return v;if(O<0)return X(d(-O));const S=[];let C=1;for(let F=0;O>=C;F++)S[F]=O/C|0,C*=4294967296;return new o(S,0)}function g(O,S){if(O.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(O.charAt(0)=="-")return X(g(O.substring(1),S));if(O.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=d(Math.pow(S,8));let F=v;for(let z=0;z<O.length;z+=8){var L=Math.min(8,O.length-z);const R=parseInt(O.substring(z,z+L),S);L<8?(L=d(Math.pow(S,L)),F=F.j(L).add(d(R))):(F=F.j(C),F=F.add(d(R)))}return F}var v=c(0),w=c(1),M=c(16777216);n=o.prototype,n.m=function(){if(J(this))return-X(this).m();let O=0,S=1;for(let C=0;C<this.g.length;C++){const F=this.i(C);O+=(F>=0?F:4294967296+F)*S,S*=4294967296}return O},n.toString=function(O){if(O=O||10,O<2||36<O)throw Error("radix out of range: "+O);if(Y(this))return"0";if(J(this))return"-"+X(this).toString(O);const S=d(Math.pow(O,6));var C=this;let F="";for(;;){const L=qe(C,S).g;C=ve(C,L.j(S));let z=((C.g.length>0?C.g[0]:C.h)>>>0).toString(O);if(C=L,Y(C))return z+F;for(;z.length<6;)z="0"+z;F=z+F}},n.i=function(O){return O<0?0:O<this.g.length?this.g[O]:this.h};function Y(O){if(O.h!=0)return!1;for(let S=0;S<O.g.length;S++)if(O.g[S]!=0)return!1;return!0}function J(O){return O.h==-1}n.l=function(O){return O=ve(this,O),J(O)?-1:Y(O)?0:1};function X(O){const S=O.g.length,C=[];for(let F=0;F<S;F++)C[F]=~O.g[F];return new o(C,~O.h).add(w)}n.abs=function(){return J(this)?X(this):this},n.add=function(O){const S=Math.max(this.g.length,O.g.length),C=[];let F=0;for(let L=0;L<=S;L++){let z=F+(this.i(L)&65535)+(O.i(L)&65535),R=(z>>>16)+(this.i(L)>>>16)+(O.i(L)>>>16);F=R>>>16,z&=65535,R&=65535,C[L]=R<<16|z}return new o(C,C[C.length-1]&-2147483648?-1:0)};function ve(O,S){return O.add(X(S))}n.j=function(O){if(Y(this)||Y(O))return v;if(J(this))return J(O)?X(this).j(X(O)):X(X(this).j(O));if(J(O))return X(this.j(X(O)));if(this.l(M)<0&&O.l(M)<0)return d(this.m()*O.m());const S=this.g.length+O.g.length,C=[];for(var F=0;F<2*S;F++)C[F]=0;for(F=0;F<this.g.length;F++)for(let L=0;L<O.g.length;L++){const z=this.i(F)>>>16,R=this.i(F)&65535,qn=O.i(L)>>>16,as=O.i(L)&65535;C[2*F+2*L]+=R*as,Re(C,2*F+2*L),C[2*F+2*L+1]+=z*as,Re(C,2*F+2*L+1),C[2*F+2*L+1]+=R*qn,Re(C,2*F+2*L+1),C[2*F+2*L+2]+=z*qn,Re(C,2*F+2*L+2)}for(O=0;O<S;O++)C[O]=C[2*O+1]<<16|C[2*O];for(O=S;O<2*S;O++)C[O]=0;return new o(C,0)};function Re(O,S){for(;(O[S]&65535)!=O[S];)O[S+1]+=O[S]>>>16,O[S]&=65535,S++}function we(O,S){this.g=O,this.h=S}function qe(O,S){if(Y(S))throw Error("division by zero");if(Y(O))return new we(v,v);if(J(O))return S=qe(X(O),S),new we(X(S.g),X(S.h));if(J(S))return S=qe(O,X(S)),new we(X(S.g),S.h);if(O.g.length>30){if(J(O)||J(S))throw Error("slowDivide_ only works with positive integers.");for(var C=w,F=S;F.l(O)<=0;)C=We(C),F=We(F);var L=Ne(C,1),z=Ne(F,1);for(F=Ne(F,2),C=Ne(C,2);!Y(F);){var R=z.add(F);R.l(O)<=0&&(L=L.add(C),z=R),F=Ne(F,1),C=Ne(C,1)}return S=ve(O,L.j(S)),new we(L,S)}for(L=v;O.l(S)>=0;){for(C=Math.max(1,Math.floor(O.m()/S.m())),F=Math.ceil(Math.log(C)/Math.LN2),F=F<=48?1:Math.pow(2,F-48),z=d(C),R=z.j(S);J(R)||R.l(O)>0;)C-=F,z=d(C),R=z.j(S);Y(z)&&(z=w),L=L.add(z),O=ve(O,R)}return new we(L,O)}n.B=function(O){return qe(this,O).h},n.and=function(O){const S=Math.max(this.g.length,O.g.length),C=[];for(let F=0;F<S;F++)C[F]=this.i(F)&O.i(F);return new o(C,this.h&O.h)},n.or=function(O){const S=Math.max(this.g.length,O.g.length),C=[];for(let F=0;F<S;F++)C[F]=this.i(F)|O.i(F);return new o(C,this.h|O.h)},n.xor=function(O){const S=Math.max(this.g.length,O.g.length),C=[];for(let F=0;F<S;F++)C[F]=this.i(F)^O.i(F);return new o(C,this.h^O.h)};function We(O){const S=O.g.length+1,C=[];for(let F=0;F<S;F++)C[F]=O.i(F)<<1|O.i(F-1)>>>31;return new o(C,O.h)}function Ne(O,S){const C=S>>5;S%=32;const F=O.g.length-C,L=[];for(let z=0;z<F;z++)L[z]=S>0?O.i(z+C)>>>S|O.i(z+C+1)<<32-S:O.i(z+C);return new o(L,O.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,eg=Zm.Md5=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=g,Mi=Zm.Integer=o}).apply(typeof Xm!="undefined"?Xm:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var _c=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof bt.g!="undefined"?bt.g:typeof self!="undefined"?self:{},ui={};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tg,dA,Eu,ng,yc,xd,rg,ig,sg;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof _c=="object"&&_c];for(var p=0;p<a.length;++p){var _=a[p];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var r=t(this);function i(a,p){if(p)e:{var _=r;a=a.split(".");for(var E=0;E<a.length-1;E++){var j=a[E];if(!(j in _))break e;_=_[j]}a=a[a.length-1],E=_[a],p=p(E),p!=E&&p!=null&&e(_,a,{configurable:!0,writable:!0,value:p})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(p){var _=[],E;for(E in p)Object.prototype.hasOwnProperty.call(p,E)&&_.push([E,p[E]]);return _}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var p=typeof a;return p=="object"&&a!=null||p=="function"}function c(a,p,_){return a.call.apply(a.bind,arguments)}function d(a,p,_){return d=c,d.apply(null,arguments)}function g(a,p){var _=Array.prototype.slice.call(arguments,1);return function(){var E=_.slice();return E.push.apply(E,arguments),a.apply(this,E)}}function v(a,p){function _(){}_.prototype=p.prototype,a.Z=p.prototype,a.prototype=new _,a.prototype.constructor=a,a.Ob=function(E,j,G){for(var me=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)me[Ke-2]=arguments[Ke];return p.prototype[j].apply(E,me)}}var w=typeof AsyncContext!="undefined"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function M(a){const p=a.length;if(p>0){const _=Array(p);for(let E=0;E<p;E++)_[E]=a[E];return _}return[]}function Y(a,p){for(let E=1;E<arguments.length;E++){const j=arguments[E];var _=typeof j;if(_=_!="object"?_:j?Array.isArray(j)?"array":_:"null",_=="array"||_=="object"&&typeof j.length=="number"){_=a.length||0;const G=j.length||0;a.length=_+G;for(let me=0;me<G;me++)a[_+me]=j[me]}else a.push(j)}}class J{constructor(p,_){this.i=p,this.j=_,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function X(a){o.setTimeout(()=>{throw a},0)}function ve(){var a=O;let p=null;return a.g&&(p=a.g,a.g=a.g.next,a.g||(a.h=null),p.next=null),p}class Re{constructor(){this.h=this.g=null}add(p,_){const E=we.get();E.set(p,_),this.h?this.h.next=E:this.g=E,this.h=E}}var we=new J(()=>new qe,a=>a.reset());class qe{constructor(){this.next=this.g=this.h=null}set(p,_){this.h=p,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let We,Ne=!1,O=new Re,S=()=>{const a=Promise.resolve(void 0);We=()=>{a.then(C)}};function C(){for(var a;a=ve();){try{a.h.call(a.g)}catch(_){X(_)}var p=we;p.j(a),p.h<100&&(p.h++,a.next=p.g,p.g=a)}Ne=!1}function F(){this.u=this.u,this.C=this.C}F.prototype.u=!1,F.prototype.dispose=function(){this.u||(this.u=!0,this.N())},F.prototype[Symbol.dispose]=function(){this.dispose()},F.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function L(a,p){this.type=a,this.g=this.target=p,this.defaultPrevented=!1}L.prototype.h=function(){this.defaultPrevented=!0};var z=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,p=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const _=()=>{};o.addEventListener("test",_,p),o.removeEventListener("test",_,p)}catch(_){}return a})();function R(a){return/^[\s\xa0]*$/.test(a)}function qn(a,p){L.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,p)}v(qn,L),qn.prototype.init=function(a,p){const _=this.type=a.type,E=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=p,p=a.relatedTarget,p||(_=="mouseover"?p=a.fromElement:_=="mouseout"&&(p=a.toElement)),this.relatedTarget=p,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&qn.Z.h.call(this)},qn.prototype.h=function(){qn.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var as="closure_listenable_"+(Math.random()*1e6|0),TC=0;function EC(a,p,_,E,j){this.listener=a,this.proxy=null,this.src=p,this.type=_,this.capture=!!E,this.ha=j,this.key=++TC,this.da=this.fa=!1}function Lh(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Fh(a,p,_){for(const E in a)p.call(_,a[E],E,a)}function wC(a,p){for(const _ in a)p.call(void 0,a[_],_,a)}function vT(a){const p={};for(const _ in a)p[_]=a[_];return p}const IT="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function TT(a,p){let _,E;for(let j=1;j<arguments.length;j++){E=arguments[j];for(_ in E)a[_]=E[_];for(let G=0;G<IT.length;G++)_=IT[G],Object.prototype.hasOwnProperty.call(E,_)&&(a[_]=E[_])}}function Uh(a){this.src=a,this.g={},this.h=0}Uh.prototype.add=function(a,p,_,E,j){const G=a.toString();a=this.g[G],a||(a=this.g[G]=[],this.h++);const me=Np(a,p,E,j);return me>-1?(p=a[me],_||(p.fa=!1)):(p=new EC(p,this.src,G,!!E,j),p.fa=_,a.push(p)),p};function Op(a,p){const _=p.type;if(_ in a.g){var E=a.g[_],j=Array.prototype.indexOf.call(E,p,void 0),G;(G=j>=0)&&Array.prototype.splice.call(E,j,1),G&&(Lh(p),a.g[_].length==0&&(delete a.g[_],a.h--))}}function Np(a,p,_,E){for(let j=0;j<a.length;++j){const G=a[j];if(!G.da&&G.listener==p&&G.capture==!!_&&G.ha==E)return j}return-1}var Vp="closure_lm_"+(Math.random()*1e6|0),Mp={};function ET(a,p,_,E,j){if(E&&E.once)return AT(a,p,_,E,j);if(Array.isArray(p)){for(let G=0;G<p.length;G++)ET(a,p[G],_,E,j);return null}return _=Bp(_),a&&a[as]?a.J(p,_,l(E)?!!E.capture:!!E,j):wT(a,p,_,!1,E,j)}function wT(a,p,_,E,j,G){if(!p)throw Error("Invalid event type");const me=l(j)?!!j.capture:!!j;let Ke=Fp(a);if(Ke||(a[Vp]=Ke=new Uh(a)),_=Ke.add(p,_,E,me,G),_.proxy)return _;if(E=AC(),_.proxy=E,E.src=a,E.listener=_,a.addEventListener)z||(j=me),j===void 0&&(j=!1),a.addEventListener(p.toString(),E,j);else if(a.attachEvent)a.attachEvent(ST(p.toString()),E);else if(a.addListener&&a.removeListener)a.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return _}function AC(){function a(_){return p.call(a.src,a.listener,_)}const p=bC;return a}function AT(a,p,_,E,j){if(Array.isArray(p)){for(let G=0;G<p.length;G++)AT(a,p[G],_,E,j);return null}return _=Bp(_),a&&a[as]?a.K(p,_,l(E)?!!E.capture:!!E,j):wT(a,p,_,!0,E,j)}function bT(a,p,_,E,j){if(Array.isArray(p))for(var G=0;G<p.length;G++)bT(a,p[G],_,E,j);else E=l(E)?!!E.capture:!!E,_=Bp(_),a&&a[as]?(a=a.i,G=String(p).toString(),G in a.g&&(p=a.g[G],_=Np(p,_,E,j),_>-1&&(Lh(p[_]),Array.prototype.splice.call(p,_,1),p.length==0&&(delete a.g[G],a.h--)))):a&&(a=Fp(a))&&(p=a.g[p.toString()],a=-1,p&&(a=Np(p,_,E,j)),(_=a>-1?p[a]:null)&&Lp(_))}function Lp(a){if(typeof a!="number"&&a&&!a.da){var p=a.src;if(p&&p[as])Op(p.i,a);else{var _=a.type,E=a.proxy;p.removeEventListener?p.removeEventListener(_,E,a.capture):p.detachEvent?p.detachEvent(ST(_),E):p.addListener&&p.removeListener&&p.removeListener(E),(_=Fp(p))?(Op(_,a),_.h==0&&(_.src=null,p[Vp]=null)):Lh(a)}}}function ST(a){return a in Mp?Mp[a]:Mp[a]="on"+a}function bC(a,p){if(a.da)a=!0;else{p=new qn(p,this);const _=a.listener,E=a.ha||a.src;a.fa&&Lp(a),a=_.call(E,p)}return a}function Fp(a){return a=a[Vp],a instanceof Uh?a:null}var Up="__closure_events_fn_"+(Math.random()*1e9>>>0);function Bp(a){return typeof a=="function"?a:(a[Up]||(a[Up]=function(p){return a.handleEvent(p)}),a[Up])}function En(){F.call(this),this.i=new Uh(this),this.M=this,this.G=null}v(En,F),En.prototype[as]=!0,En.prototype.removeEventListener=function(a,p,_,E){bT(this,a,p,_,E)};function xn(a,p){var _,E=a.G;if(E)for(_=[];E;E=E.G)_.push(E);if(a=a.M,E=p.type||p,typeof p=="string")p=new L(p,a);else if(p instanceof L)p.target=p.target||a;else{var j=p;p=new L(E,a),TT(p,j)}j=!0;let G,me;if(_)for(me=_.length-1;me>=0;me--)G=p.g=_[me],j=Bh(G,E,!0,p)&&j;if(G=p.g=a,j=Bh(G,E,!0,p)&&j,j=Bh(G,E,!1,p)&&j,_)for(me=0;me<_.length;me++)G=p.g=_[me],j=Bh(G,E,!1,p)&&j}En.prototype.N=function(){if(En.Z.N.call(this),this.i){var a=this.i;for(const p in a.g){const _=a.g[p];for(let E=0;E<_.length;E++)Lh(_[E]);delete a.g[p],a.h--}}this.G=null},En.prototype.J=function(a,p,_,E){return this.i.add(String(a),p,!1,_,E)},En.prototype.K=function(a,p,_,E){return this.i.add(String(a),p,!0,_,E)};function Bh(a,p,_,E){if(p=a.i.g[String(p)],!p)return!0;p=p.concat();let j=!0;for(let G=0;G<p.length;++G){const me=p[G];if(me&&!me.da&&me.capture==_){const Ke=me.listener,Jt=me.ha||me.src;me.fa&&Op(a.i,me),j=Ke.call(Jt,E)!==!1&&j}}return j&&!E.defaultPrevented}function SC(a,p){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=d(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:o.setTimeout(a,p||0)}function PT(a){a.g=SC(()=>{a.g=null,a.i&&(a.i=!1,PT(a))},a.l);const p=a.h;a.h=null,a.m.apply(null,p)}class PC extends F{constructor(p,_){super(),this.m=p,this.l=_,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:PT(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _l(a){F.call(this),this.h=a,this.g={}}v(_l,F);var RT=[];function CT(a){Fh(a.g,function(p,_){this.g.hasOwnProperty(_)&&Lp(p)},a),a.g={}}_l.prototype.N=function(){_l.Z.N.call(this),CT(this)},_l.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qp=o.JSON.stringify,RC=o.JSON.parse,CC=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function DT(){}function kT(){}var yl={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function jp(){L.call(this,"d")}v(jp,L);function $p(){L.call(this,"c")}v($p,L);var io={},xT=null;function qh(){return xT=xT||new En}io.Ia="serverreachability";function OT(a){L.call(this,io.Ia,a)}v(OT,L);function vl(a){const p=qh();xn(p,new OT(p))}io.STAT_EVENT="statevent";function NT(a,p){L.call(this,io.STAT_EVENT,a),this.stat=p}v(NT,L);function On(a){const p=qh();xn(p,new NT(p,a))}io.Ja="timingevent";function VT(a,p){L.call(this,io.Ja,a),this.size=p}v(VT,L);function Il(a,p){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},p)}function Tl(){this.g=!0}Tl.prototype.ua=function(){this.g=!1};function DC(a,p,_,E,j,G){a.info(function(){if(a.g)if(G){var me="",Ke=G.split("&");for(let gt=0;gt<Ke.length;gt++){var Jt=Ke[gt].split("=");if(Jt.length>1){const ln=Jt[0];Jt=Jt[1];const Hr=ln.split("_");me=Hr.length>=2&&Hr[1]=="type"?me+(ln+"="+Jt+"&"):me+(ln+"=redacted&")}}}else me=null;else me=G;return"XMLHTTP REQ ("+E+") [attempt "+j+"]: "+p+`
`+_+`
`+me})}function kC(a,p,_,E,j,G,me){a.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+j+"]: "+p+`
`+_+`
`+G+" "+me})}function Ca(a,p,_,E){a.info(function(){return"XMLHTTP TEXT ("+p+"): "+OC(a,_)+(E?" "+E:"")})}function xC(a,p){a.info(function(){return"TIMEOUT: "+p})}Tl.prototype.info=function(){};function OC(a,p){if(!a.g)return p;if(!p)return null;try{const G=JSON.parse(p);if(G){for(a=0;a<G.length;a++)if(Array.isArray(G[a])){var _=G[a];if(!(_.length<2)){var E=_[1];if(Array.isArray(E)&&!(E.length<1)){var j=E[0];if(j!="noop"&&j!="stop"&&j!="close")for(let me=1;me<E.length;me++)E[me]=""}}}}return qp(G)}catch(G){return p}}var jh={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},MT={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},LT;function Kp(){}v(Kp,DT),Kp.prototype.g=function(){return new XMLHttpRequest},LT=new Kp;function El(a){return encodeURIComponent(String(a))}function NC(a){var p=1;a=a.split(":");const _=[];for(;p>0&&a.length;)_.push(a.shift()),p--;return a.length&&_.push(a.join(":")),_}function us(a,p,_,E){this.j=a,this.i=p,this.l=_,this.S=E||1,this.V=new _l(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new FT}function FT(){this.i=null,this.g="",this.h=!1}var UT={},zp={};function Wp(a,p,_){a.M=1,a.A=Kh(Gr(p)),a.u=_,a.R=!0,BT(a,null)}function BT(a,p){a.F=Date.now(),$h(a),a.B=Gr(a.A);var _=a.B,E=a.S;Array.isArray(E)||(E=[String(E)]),ZT(_.i,"t",E),a.C=0,_=a.j.L,a.h=new FT,a.g=_E(a.j,_?p:null,!a.u),a.P>0&&(a.O=new PC(d(a.Y,a,a.g),a.P)),p=a.V,_=a.g,E=a.ba;var j="readystatechange";Array.isArray(j)||(j&&(RT[0]=j.toString()),j=RT);for(let G=0;G<j.length;G++){const me=ET(_,j[G],E||p.handleEvent,!1,p.h||p);if(!me)break;p.g[me.key]=me}p=a.J?vT(a.J):{},a.u?(a.v||(a.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,p)):(a.v="GET",a.g.ea(a.B,a.v,null,p)),vl(),DC(a.i,a.v,a.B,a.l,a.S,a.u)}us.prototype.ba=function(a){a=a.target;const p=this.O;p&&hs(a)==3?p.j():this.Y(a)},us.prototype.Y=function(a){try{if(a==this.g)e:{const Ke=hs(this.g),Jt=this.g.ya(),gt=this.g.ca();if(!(Ke<3)&&(Ke!=3||this.g&&(this.h.h||this.g.la()||oE(this.g)))){this.K||Ke!=4||Jt==7||(Jt==8||gt<=0?vl(3):vl(2)),Gp(this);var p=this.g.ca();this.X=p;var _=VC(this);if(this.o=p==200,kC(this.i,this.v,this.B,this.l,this.S,Ke,p),this.o){if(this.U&&!this.L){t:{if(this.g){var E,j=this.g;if((E=j.g?j.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(E)){var G=E;break t}}G=null}if(a=G)Ca(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Hp(this,a);else{this.o=!1,this.m=3,On(12),so(this),wl(this);break e}}if(this.R){a=!0;let ln;for(;!this.K&&this.C<_.length;)if(ln=MC(this,_),ln==zp){Ke==4&&(this.m=4,On(14),a=!1),Ca(this.i,this.l,null,"[Incomplete Response]");break}else if(ln==UT){this.m=4,On(15),Ca(this.i,this.l,_,"[Invalid Chunk]"),a=!1;break}else Ca(this.i,this.l,ln,null),Hp(this,ln);if(qT(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ke!=4||_.length!=0||this.h.h||(this.m=1,On(16),a=!1),this.o=this.o&&a,!a)Ca(this.i,this.l,_,"[Invalid Chunked Response]"),so(this),wl(this);else if(_.length>0&&!this.W){this.W=!0;var me=this.j;me.g==this&&me.aa&&!me.P&&(me.j.info("Great, no buffering proxy detected. Bytes received: "+_.length),tm(me),me.P=!0,On(11))}}else Ca(this.i,this.l,_,null),Hp(this,_);Ke==4&&so(this),this.o&&!this.K&&(Ke==4?fE(this.j,this):(this.o=!1,$h(this)))}else YC(this.g),p==400&&_.indexOf("Unknown SID")>0?(this.m=3,On(12)):(this.m=0,On(13)),so(this),wl(this)}}}catch(Ke){}finally{}};function VC(a){if(!qT(a))return a.g.la();const p=oE(a.g);if(p==="")return"";let _="";const E=p.length,j=hs(a.g)==4;if(!a.h.i){if(typeof TextDecoder=="undefined")return so(a),wl(a),"";a.h.i=new o.TextDecoder}for(let G=0;G<E;G++)a.h.h=!0,_+=a.h.i.decode(p[G],{stream:!(j&&G==E-1)});return p.length=0,a.h.g+=_,a.C=0,a.h.g}function qT(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function MC(a,p){var _=a.C,E=p.indexOf(`
`,_);return E==-1?zp:(_=Number(p.substring(_,E)),isNaN(_)?UT:(E+=1,E+_>p.length?zp:(p=p.slice(E,E+_),a.C=E+_,p)))}us.prototype.cancel=function(){this.K=!0,so(this)};function $h(a){a.T=Date.now()+a.H,jT(a,a.H)}function jT(a,p){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Il(d(a.aa,a),p)}function Gp(a){a.D&&(o.clearTimeout(a.D),a.D=null)}us.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(xC(this.i,this.B),this.M!=2&&(vl(),On(17)),so(this),this.m=2,wl(this)):jT(this,this.T-a)};function wl(a){a.j.I==0||a.K||fE(a.j,a)}function so(a){Gp(a);var p=a.O;p&&typeof p.dispose=="function"&&p.dispose(),a.O=null,CT(a.V),a.g&&(p=a.g,a.g=null,p.abort(),p.dispose())}function Hp(a,p){try{var _=a.j;if(_.I!=0&&(_.g==a||Qp(_.h,a))){if(!a.L&&Qp(_.h,a)&&_.I==3){try{var E=_.Ba.g.parse(p)}catch(gt){E=null}if(Array.isArray(E)&&E.length==3){var j=E;if(j[0]==0){e:if(!_.v){if(_.g)if(_.g.F+3e3<a.F)Yh(_),Hh(_);else break e;em(_),On(18)}}else _.xa=j[1],0<_.xa-_.K&&j[2]<37500&&_.F&&_.A==0&&!_.C&&(_.C=Il(d(_.Va,_),6e3));zT(_.h)<=1&&_.ta&&(_.ta=void 0)}else ao(_,11)}else if((a.L||_.g==a)&&Yh(_),!R(p))for(j=_.Ba.g.parse(p),p=0;p<j.length;p++){let gt=j[p];const ln=gt[0];if(!(ln<=_.K))if(_.K=ln,gt=gt[1],_.I==2)if(gt[0]=="c"){_.M=gt[1],_.ba=gt[2];const Hr=gt[3];Hr!=null&&(_.ka=Hr,_.j.info("VER="+_.ka));const uo=gt[4];uo!=null&&(_.za=uo,_.j.info("SVER="+_.za));const ds=gt[5];ds!=null&&typeof ds=="number"&&ds>0&&(E=1.5*ds,_.O=E,_.j.info("backChannelRequestTimeoutMs_="+E)),E=_;const fs=a.g;if(fs){const Xh=fs.g?fs.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xh){var G=E.h;G.g||Xh.indexOf("spdy")==-1&&Xh.indexOf("quic")==-1&&Xh.indexOf("h2")==-1||(G.j=G.l,G.g=new Set,G.h&&(Yp(G,G.h),G.h=null))}if(E.G){const nm=fs.g?fs.g.getResponseHeader("X-HTTP-Session-Id"):null;nm&&(E.wa=nm,At(E.J,E.G,nm))}}_.I=3,_.l&&_.l.ra(),_.aa&&(_.T=Date.now()-a.F,_.j.info("Handshake RTT: "+_.T+"ms")),E=_;var me=a;if(E.na=gE(E,E.L?E.ba:null,E.W),me.L){WT(E.h,me);var Ke=me,Jt=E.O;Jt&&(Ke.H=Jt),Ke.D&&(Gp(Ke),$h(Ke)),E.g=me}else hE(E);_.i.length>0&&Qh(_)}else gt[0]!="stop"&&gt[0]!="close"||ao(_,7);else _.I==3&&(gt[0]=="stop"||gt[0]=="close"?gt[0]=="stop"?ao(_,7):Zp(_):gt[0]!="noop"&&_.l&&_.l.qa(gt),_.A=0)}}vl(4)}catch(gt){}}var LC=class{constructor(a,p){this.g=a,this.map=p}};function $T(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function KT(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function zT(a){return a.h?1:a.g?a.g.size:0}function Qp(a,p){return a.h?a.h==p:a.g?a.g.has(p):!1}function Yp(a,p){a.g?a.g.add(p):a.h=p}function WT(a,p){a.h&&a.h==p?a.h=null:a.g&&a.g.has(p)&&a.g.delete(p)}$T.prototype.cancel=function(){if(this.i=GT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function GT(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let p=a.i;for(const _ of a.g.values())p=p.concat(_.G);return p}return M(a.i)}var HT=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function FC(a,p){if(a){a=a.split("&");for(let _=0;_<a.length;_++){const E=a[_].indexOf("=");let j,G=null;E>=0?(j=a[_].substring(0,E),G=a[_].substring(E+1)):j=a[_],p(j,G?decodeURIComponent(G.replace(/\+/g," ")):"")}}}function ls(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;a instanceof ls?(this.l=a.l,Al(this,a.j),this.o=a.o,this.g=a.g,bl(this,a.u),this.h=a.h,Jp(this,eE(a.i)),this.m=a.m):a&&(p=String(a).match(HT))?(this.l=!1,Al(this,p[1]||"",!0),this.o=Sl(p[2]||""),this.g=Sl(p[3]||"",!0),bl(this,p[4]),this.h=Sl(p[5]||"",!0),Jp(this,p[6]||"",!0),this.m=Sl(p[7]||"")):(this.l=!1,this.i=new Rl(null,this.l))}ls.prototype.toString=function(){const a=[];var p=this.j;p&&a.push(Pl(p,QT,!0),":");var _=this.g;return(_||p=="file")&&(a.push("//"),(p=this.o)&&a.push(Pl(p,QT,!0),"@"),a.push(El(_).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.u,_!=null&&a.push(":",String(_))),(_=this.h)&&(this.g&&_.charAt(0)!="/"&&a.push("/"),a.push(Pl(_,_.charAt(0)=="/"?qC:BC,!0))),(_=this.i.toString())&&a.push("?",_),(_=this.m)&&a.push("#",Pl(_,$C)),a.join("")},ls.prototype.resolve=function(a){const p=Gr(this);let _=!!a.j;_?Al(p,a.j):_=!!a.o,_?p.o=a.o:_=!!a.g,_?p.g=a.g:_=a.u!=null;var E=a.h;if(_)bl(p,a.u);else if(_=!!a.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var j=p.h.lastIndexOf("/");j!=-1&&(E=p.h.slice(0,j+1)+E)}if(j=E,j==".."||j==".")E="";else if(j.indexOf("./")!=-1||j.indexOf("/.")!=-1){E=j.lastIndexOf("/",0)==0,j=j.split("/");const G=[];for(let me=0;me<j.length;){const Ke=j[me++];Ke=="."?E&&me==j.length&&G.push(""):Ke==".."?((G.length>1||G.length==1&&G[0]!="")&&G.pop(),E&&me==j.length&&G.push("")):(G.push(Ke),E=!0)}E=G.join("/")}else E=j}return _?p.h=E:_=a.i.toString()!=="",_?Jp(p,eE(a.i)):_=!!a.m,_&&(p.m=a.m),p};function Gr(a){return new ls(a)}function Al(a,p,_){a.j=_?Sl(p,!0):p,a.j&&(a.j=a.j.replace(/:$/,""))}function bl(a,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);a.u=p}else a.u=null}function Jp(a,p,_){p instanceof Rl?(a.i=p,KC(a.i,a.l)):(_||(p=Pl(p,jC)),a.i=new Rl(p,a.l))}function At(a,p,_){a.i.set(p,_)}function Kh(a){return At(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Sl(a,p){return a?p?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Pl(a,p,_){return typeof a=="string"?(a=encodeURI(a).replace(p,UC),_&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function UC(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var QT=/[#\/\?@]/g,BC=/[#\?:]/g,qC=/[#\?]/g,jC=/[#\?@]/g,$C=/#/g;function Rl(a,p){this.h=this.g=null,this.i=a||null,this.j=!!p}function oo(a){a.g||(a.g=new Map,a.h=0,a.i&&FC(a.i,function(p,_){a.add(decodeURIComponent(p.replace(/\+/g," ")),_)}))}n=Rl.prototype,n.add=function(a,p){oo(this),this.i=null,a=Da(this,a);let _=this.g.get(a);return _||this.g.set(a,_=[]),_.push(p),this.h+=1,this};function YT(a,p){oo(a),p=Da(a,p),a.g.has(p)&&(a.i=null,a.h-=a.g.get(p).length,a.g.delete(p))}function JT(a,p){return oo(a),p=Da(a,p),a.g.has(p)}n.forEach=function(a,p){oo(this),this.g.forEach(function(_,E){_.forEach(function(j){a.call(p,j,E,this)},this)},this)};function XT(a,p){oo(a);let _=[];if(typeof p=="string")JT(a,p)&&(_=_.concat(a.g.get(Da(a,p))));else for(a=Array.from(a.g.values()),p=0;p<a.length;p++)_=_.concat(a[p]);return _}n.set=function(a,p){return oo(this),this.i=null,a=Da(this,a),JT(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[p]),this.h+=1,this},n.get=function(a,p){return a?(a=XT(this,a),a.length>0?String(a[0]):p):p};function ZT(a,p,_){YT(a,p),_.length>0&&(a.i=null,a.g.set(Da(a,p),M(_)),a.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],p=Array.from(this.g.keys());for(let E=0;E<p.length;E++){var _=p[E];const j=El(_);_=XT(this,_);for(let G=0;G<_.length;G++){let me=j;_[G]!==""&&(me+="="+El(_[G])),a.push(me)}}return this.i=a.join("&")};function eE(a){const p=new Rl;return p.i=a.i,a.g&&(p.g=new Map(a.g),p.h=a.h),p}function Da(a,p){return p=String(p),a.j&&(p=p.toLowerCase()),p}function KC(a,p){p&&!a.j&&(oo(a),a.i=null,a.g.forEach(function(_,E){const j=E.toLowerCase();E!=j&&(YT(this,E),ZT(this,j,_))},a)),a.j=p}function zC(a,p){const _=new Tl;if(o.Image){const E=new Image;E.onload=g(cs,_,"TestLoadImage: loaded",!0,p,E),E.onerror=g(cs,_,"TestLoadImage: error",!1,p,E),E.onabort=g(cs,_,"TestLoadImage: abort",!1,p,E),E.ontimeout=g(cs,_,"TestLoadImage: timeout",!1,p,E),o.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=a}else p(!1)}function WC(a,p){const _=new Tl,E=new AbortController,j=setTimeout(()=>{E.abort(),cs(_,"TestPingServer: timeout",!1,p)},1e4);fetch(a,{signal:E.signal}).then(G=>{clearTimeout(j),G.ok?cs(_,"TestPingServer: ok",!0,p):cs(_,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(j),cs(_,"TestPingServer: error",!1,p)})}function cs(a,p,_,E,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),E(_)}catch(G){}}function GC(){this.g=new CC}function zh(a){this.i=a.Sb||null,this.h=a.ab||!1}v(zh,DT),zh.prototype.g=function(){return new Wh(this.i,this.h)};function Wh(a,p){En.call(this),this.H=a,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}v(Wh,En),n=Wh.prototype,n.open=function(a,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=p,this.readyState=1,Dl(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(p.body=a),(this.H||o).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Cl(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Dl(this)),this.g&&(this.readyState=3,Dl(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream!="undefined"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;tE(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function tE(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var p=a.value?a.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!a.done}))&&(this.response=this.responseText+=p)}a.done?Cl(this):Dl(this),this.readyState==3&&tE(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Cl(this))},n.Na=function(a){this.g&&(this.response=a,Cl(this))},n.ga=function(){this.g&&Cl(this)};function Cl(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Dl(a)}n.setRequestHeader=function(a,p){this.A.append(a,p)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],p=this.h.entries();for(var _=p.next();!_.done;)_=_.value,a.push(_[0]+": "+_[1]),_=p.next();return a.join(`\r
`)};function Dl(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Wh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function nE(a){let p="";return Fh(a,function(_,E){p+=E,p+=":",p+=_,p+=`\r
`}),p}function Xp(a,p,_){e:{for(E in _){var E=!1;break e}E=!0}E||(_=nE(_),typeof a=="string"?_!=null&&El(_):At(a,p,_))}function Vt(a){En.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}v(Vt,En);var HC=/^https?$/i,QC=["POST","PUT"];n=Vt.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,p,_,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);p=p?p.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():LT.g(),this.g.onreadystatechange=w(d(this.Ca,this));try{this.B=!0,this.g.open(p,String(a),!0),this.B=!1}catch(G){rE(this,G);return}if(a=_||"",_=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var j in E)_.set(j,E[j]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const G of E.keys())_.set(G,E.get(G));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(_.keys()).find(G=>G.toLowerCase()=="content-type"),j=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(QC,p,void 0)>=0)||E||j||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[G,me]of _)this.g.setRequestHeader(G,me);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(G){rE(this,G)}};function rE(a,p){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=p,a.o=5,iE(a),Gh(a)}function iE(a){a.A||(a.A=!0,xn(a,"complete"),xn(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,xn(this,"complete"),xn(this,"abort"),Gh(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Gh(this,!0)),Vt.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?sE(this):this.Xa())},n.Xa=function(){sE(this)};function sE(a){if(a.h&&typeof s!="undefined"){if(a.v&&hs(a)==4)setTimeout(a.Ca.bind(a),0);else if(xn(a,"readystatechange"),hs(a)==4){a.h=!1;try{const G=a.ca();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var _;if(!(_=p)){var E;if(E=G===0){let me=String(a.D).match(HT)[1]||null;!me&&o.self&&o.self.location&&(me=o.self.location.protocol.slice(0,-1)),E=!HC.test(me?me.toLowerCase():"")}_=E}if(_)xn(a,"complete"),xn(a,"success");else{a.o=6;try{var j=hs(a)>2?a.g.statusText:""}catch(me){j=""}a.l=j+" ["+a.ca()+"]",iE(a)}}finally{Gh(a)}}}}function Gh(a,p){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const _=a.g;a.g=null,p||xn(a,"ready");try{_.onreadystatechange=null}catch(E){}}}n.isActive=function(){return!!this.g};function hs(a){return a.g?a.g.readyState:0}n.ca=function(){try{return hs(this)>2?this.g.status:-1}catch(a){return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch(a){return""}},n.La=function(a){if(this.g){var p=this.g.responseText;return a&&p.indexOf(a)==0&&(p=p.substring(a.length)),RC(p)}};function oE(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch(p){return null}}function YC(a){const p={};a=(a.g&&hs(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<a.length;E++){if(R(a[E]))continue;var _=NC(a[E]);const j=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const G=p[j]||[];p[j]=G,G.push(_)}wC(p,function(E){return E.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function kl(a,p,_){return _&&_.internalChannelParams&&_.internalChannelParams[a]||p}function aE(a){this.za=0,this.i=[],this.j=new Tl,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=kl("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=kl("baseRetryDelayMs",5e3,a),this.Za=kl("retryDelaySeedMs",1e4,a),this.Ta=kl("forwardChannelMaxRetries",2,a),this.va=kl("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new $T(a&&a.concurrentRequestLimit),this.Ba=new GC,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=aE.prototype,n.ka=8,n.I=1,n.connect=function(a,p,_,E){On(0),this.W=a,this.H=p||{},_&&E!==void 0&&(this.H.OSID=_,this.H.OAID=E),this.F=this.X,this.J=gE(this,null,this.W),Qh(this)};function Zp(a){if(uE(a),a.I==3){var p=a.V++,_=Gr(a.J);if(At(_,"SID",a.M),At(_,"RID",p),At(_,"TYPE","terminate"),xl(a,_),p=new us(a,a.j,p),p.M=2,p.A=Kh(Gr(_)),_=!1,o.navigator&&o.navigator.sendBeacon)try{_=o.navigator.sendBeacon(p.A.toString(),"")}catch(E){}!_&&o.Image&&(new Image().src=p.A,_=!0),_||(p.g=_E(p.j,null),p.g.ea(p.A)),p.F=Date.now(),$h(p)}mE(a)}function Hh(a){a.g&&(tm(a),a.g.cancel(),a.g=null)}function uE(a){Hh(a),a.v&&(o.clearTimeout(a.v),a.v=null),Yh(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Qh(a){if(!KT(a.h)&&!a.m){a.m=!0;var p=a.Ea;We||S(),Ne||(We(),Ne=!0),O.add(p,a),a.D=0}}function JC(a,p){return zT(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=p.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Il(d(a.Ea,a,p),pE(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const j=new us(this,this.j,a);let G=this.o;if(this.U&&(G?(G=vT(G),TT(G,this.U)):G=this.U),this.u!==null||this.R||(j.J=G,G=null),this.S)e:{for(var p=0,_=0;_<this.i.length;_++){t:{var E=this.i[_];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(p+=E,p>4096){p=_;break e}if(p===4096||_===this.i.length-1){p=_+1;break e}}p=1e3}else p=1e3;p=cE(this,j,p),_=Gr(this.J),At(_,"RID",a),At(_,"CVER",22),this.G&&At(_,"X-HTTP-Session-Id",this.G),xl(this,_),G&&(this.R?p="headers="+El(nE(G))+"&"+p:this.u&&Xp(_,this.u,G)),Yp(this.h,j),this.Ra&&At(_,"TYPE","init"),this.S?(At(_,"$req",p),At(_,"SID","null"),j.U=!0,Wp(j,_,null)):Wp(j,_,p),this.I=2}}else this.I==3&&(a?lE(this,a):this.i.length==0||KT(this.h)||lE(this))};function lE(a,p){var _;p?_=p.l:_=a.V++;const E=Gr(a.J);At(E,"SID",a.M),At(E,"RID",_),At(E,"AID",a.K),xl(a,E),a.u&&a.o&&Xp(E,a.u,a.o),_=new us(a,a.j,_,a.D+1),a.u===null&&(_.J=a.o),p&&(a.i=p.G.concat(a.i)),p=cE(a,_,1e3),_.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Yp(a.h,_),Wp(_,E,p)}function xl(a,p){a.H&&Fh(a.H,function(_,E){At(p,E,_)}),a.l&&Fh({},function(_,E){At(p,E,_)})}function cE(a,p,_){_=Math.min(a.i.length,_);const E=a.l?d(a.l.Ka,a.l,a):null;e:{var j=a.i;let Ke=-1;for(;;){const Jt=["count="+_];Ke==-1?_>0?(Ke=j[0].g,Jt.push("ofs="+Ke)):Ke=0:Jt.push("ofs="+Ke);let gt=!0;for(let ln=0;ln<_;ln++){var G=j[ln].g;const Hr=j[ln].map;if(G-=Ke,G<0)Ke=Math.max(0,j[ln].g-100),gt=!1;else try{G="req"+G+"_"||0;try{var me=Hr instanceof Map?Hr:Object.entries(Hr);for(const[uo,ds]of me){let fs=ds;l(ds)&&(fs=qp(ds)),Jt.push(G+uo+"="+encodeURIComponent(fs))}}catch(uo){throw Jt.push(G+"type="+encodeURIComponent("_badmap")),uo}}catch(uo){E&&E(Hr)}}if(gt){me=Jt.join("&");break e}}me=void 0}return a=a.i.splice(0,_),p.G=a,me}function hE(a){if(!a.g&&!a.v){a.Y=1;var p=a.Da;We||S(),Ne||(We(),Ne=!0),O.add(p,a),a.A=0}}function em(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Il(d(a.Da,a),pE(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,dE(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Il(d(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,On(10),Hh(this),dE(this))};function tm(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function dE(a){a.g=new us(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var p=Gr(a.na);At(p,"RID","rpc"),At(p,"SID",a.M),At(p,"AID",a.K),At(p,"CI",a.F?"0":"1"),!a.F&&a.ia&&At(p,"TO",a.ia),At(p,"TYPE","xmlhttp"),xl(a,p),a.u&&a.o&&Xp(p,a.u,a.o),a.O&&(a.g.H=a.O);var _=a.g;a=a.ba,_.M=1,_.A=Kh(Gr(p)),_.u=null,_.R=!0,BT(_,a)}n.Va=function(){this.C!=null&&(this.C=null,Hh(this),em(this),On(19))};function Yh(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function fE(a,p){var _=null;if(a.g==p){Yh(a),tm(a),a.g=null;var E=2}else if(Qp(a.h,p))_=p.G,WT(a.h,p),E=1;else return;if(a.I!=0){if(p.o)if(E==1){_=p.u?p.u.length:0,p=Date.now()-p.F;var j=a.D;E=qh(),xn(E,new VT(E,_)),Qh(a)}else hE(a);else if(j=p.m,j==3||j==0&&p.X>0||!(E==1&&JC(a,p)||E==2&&em(a)))switch(_&&_.length>0&&(p=a.h,p.i=p.i.concat(_)),j){case 1:ao(a,5);break;case 4:ao(a,10);break;case 3:ao(a,6);break;default:ao(a,2)}}}function pE(a,p){let _=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(_*=2),_*p}function ao(a,p){if(a.j.info("Error code "+p),p==2){var _=d(a.bb,a),E=a.Ua;const j=!E;E=new ls(E||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Al(E,"https"),Kh(E),j?zC(E.toString(),_):WC(E.toString(),_)}else On(2);a.I=0,a.l&&a.l.pa(p),mE(a),uE(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),On(2)):(this.j.info("Failed to ping google.com"),On(1))};function mE(a){if(a.I=0,a.ja=[],a.l){const p=GT(a.h);(p.length!=0||a.i.length!=0)&&(Y(a.ja,p),Y(a.ja,a.i),a.h.i.length=0,M(a.i),a.i.length=0),a.l.oa()}}function gE(a,p,_){var E=_ instanceof ls?Gr(_):new ls(_);if(E.g!="")p&&(E.g=p+"."+E.g),bl(E,E.u);else{var j=o.location;E=j.protocol,p=p?p+"."+j.hostname:j.hostname,j=+j.port;const G=new ls(null);E&&Al(G,E),p&&(G.g=p),j&&bl(G,j),_&&(G.h=_),E=G}return _=a.G,p=a.wa,_&&p&&At(E,_,p),At(E,"VER",a.ka),xl(a,E),E}function _E(a,p,_){if(p&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=a.Aa&&!a.ma?new Vt(new zh({ab:_})):new Vt(a.ma),p.Fa(a.L),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function yE(){}n=yE.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Jh(){}Jh.prototype.g=function(a,p){return new Xn(a,p)};function Xn(a,p){En.call(this),this.g=new aE(p),this.l=a,this.h=p&&p.messageUrlParams||null,a=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(a?a["X-WebChannel-Content-Type"]=p.messageContentType:a={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(a?a["X-WebChannel-Client-Profile"]=p.sa:a={"X-WebChannel-Client-Profile":p.sa}),this.g.U=a,(a=p&&p.Qb)&&!R(a)&&(this.g.u=a),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!R(p)&&(this.g.G=p,a=this.h,a!==null&&p in a&&(a=this.h,p in a&&delete a[p])),this.j=new ka(this)}v(Xn,En),Xn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Xn.prototype.close=function(){Zp(this.g)},Xn.prototype.o=function(a){var p=this.g;if(typeof a=="string"){var _={};_.__data__=a,a=_}else this.v&&(_={},_.__data__=qp(a),a=_);p.i.push(new LC(p.Ya++,a)),p.I==3&&Qh(p)},Xn.prototype.N=function(){this.g.l=null,delete this.j,Zp(this.g),delete this.g,Xn.Z.N.call(this)};function vE(a){jp.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var p=a.__sm__;if(p){e:{for(const _ in p){a=_;break e}a=void 0}(this.i=a)&&(a=this.i,p=p!==null&&a in p?p[a]:void 0),this.data=p}else this.data=a}v(vE,jp);function IE(){$p.call(this),this.status=1}v(IE,$p);function ka(a){this.g=a}v(ka,yE),ka.prototype.ra=function(){xn(this.g,"a")},ka.prototype.qa=function(a){xn(this.g,new vE(a))},ka.prototype.pa=function(a){xn(this.g,new IE)},ka.prototype.oa=function(){xn(this.g,"b")},Jh.prototype.createWebChannel=Jh.prototype.g,Xn.prototype.send=Xn.prototype.o,Xn.prototype.open=Xn.prototype.m,Xn.prototype.close=Xn.prototype.close,sg=ui.createWebChannelTransport=function(){return new Jh},ig=ui.getStatEventTarget=function(){return qh()},rg=ui.Event=io,xd=ui.Stat={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},jh.NO_ERROR=0,jh.TIMEOUT=8,jh.HTTP_ERROR=6,yc=ui.ErrorCode=jh,MT.COMPLETE="complete",ng=ui.EventType=MT,kT.EventType=yl,yl.OPEN="a",yl.CLOSE="b",yl.ERROR="c",yl.MESSAGE="d",En.prototype.listen=En.prototype.J,Eu=ui.WebChannel=kT,dA=ui.FetchXmlHttpFactory=zh,Vt.prototype.listenOnce=Vt.prototype.K,Vt.prototype.getLastError=Vt.prototype.Ha,Vt.prototype.getLastErrorCode=Vt.prototype.ya,Vt.prototype.getStatus=Vt.prototype.ca,Vt.prototype.getResponseJson=Vt.prototype.La,Vt.prototype.getResponseText=Vt.prototype.la,Vt.prototype.send=Vt.prototype.ea,Vt.prototype.setWithCredentials=Vt.prototype.Fa,tg=ui.XhrIo=Vt}).apply(typeof _c!="undefined"?_c:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var fA=Object.defineProperty,pA=Object.defineProperties,mA=Object.getOwnPropertyDescriptors,og=Object.getOwnPropertySymbols,gA=Object.getPrototypeOf,_A=Object.prototype.hasOwnProperty,yA=Object.prototype.propertyIsEnumerable,vA=Reflect.get,ag=(n,e,t)=>e in n?fA(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ir=(n,e)=>{for(var t in e||(e={}))_A.call(e,t)&&ag(n,t,e[t]);if(og)for(var t of og(e))yA.call(e,t)&&ag(n,t,e[t]);return n},ug=(n,e)=>pA(n,mA(e)),lg=(n,e,t)=>vA(gA(n),t,e),H=(n,e,t)=>new Promise((r,i)=>{var s=c=>{try{l(t.next(c))}catch(d){i(d)}},o=c=>{try{l(t.throw(c))}catch(d){i(d)}},l=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,o);l((t=t.apply(n,e)).next())});const cg="@firebase/firestore",hg="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rn.UNAUTHENTICATED=new rn(null),rn.GOOGLE_CREDENTIALS=new rn("google-credentials-uid"),rn.FIRST_PARTY=new rn("first-party-uid"),rn.MOCK_USER=new rn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fo="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=new dr("@firebase/firestore");function Uo(){return Li.logLevel}function zD(n){Li.setLogLevel(n)}function ne(n,...e){if(Li.logLevel<=$e.DEBUG){const t=e.map(Od);Li.debug(`Firestore (${Fo}): ${n}`,...t)}}function qt(n,...e){if(Li.logLevel<=$e.ERROR){const t=e.map(Od);Li.error(`Firestore (${Fo}): ${n}`,...t)}}function or(n,...e){if(Li.logLevel<=$e.WARN){const t=e.map(Od);Li.warn(`Firestore (${Fo}): ${n}`,...t)}}function Od(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch(e){return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,dg(n,r,t)}function dg(n,e,t){let r=`FIRESTORE (${Fo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch(i){r+=" CONTEXT: "+t}throw qt(r),new Error(r)}function Pe(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||dg(e,i,r)}function WD(n,e){n||Ie(57014,e)}function fe(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends nr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(rn.UNAUTHENTICATED)))}shutdown(){}}class TA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class EA{constructor(e){this.t=e,this.currentUser=rn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Pe(this.o===void 0,42304);let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new sn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new sn,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const c=s;e.enqueueRetryable((()=>H(this,null,function*(){yield c.promise,yield i(this.currentUser)})))},l=c=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new sn)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Pe(typeof r.accessToken=="string",31837,{l:r}),new fg(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Pe(e===null||typeof e=="string",2055,{h:e}),new rn(e)}}class wA{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=rn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class AA{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new wA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(rn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Nd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class bA{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,zn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Pe(this.o===void 0,3512);const r=s=>{s.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>r(s)))};const i=s=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>i(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Nd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Pe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Nd(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class GD{getToken(){return Promise.resolve(new Nd(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SA(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=SA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function Ve(n,e){return n<e?-1:n>e?1:0}function Md(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),s=e.charAt(r);if(i!==s)return Ld(i)===Ld(s)?Ve(i,s):Ld(i)?1:-1}return Ve(n.length,e.length)}const PA=55296,RA=57343;function Ld(n){const e=n.charCodeAt(0);return e>=PA&&e<=RA}function Bo(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}function pg(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="__name__";class Fr{constructor(e,t,r){t===void 0?t=0:t>e.length&&Ie(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Ie(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Fr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Fr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=Fr.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return Ve(e.length,t.length)}static compareSegments(e,t){const r=Fr.isNumericId(e),i=Fr.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Fr.extractNumericId(e).compare(Fr.extractNumericId(t)):Md(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Mi.fromString(e.substring(4,e.length-2))}}class He extends Fr{construct(e,t,r){return new He(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(K.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new He(t)}static emptyPath(){return new He([])}}const CA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Rt extends Fr{construct(e,t,r){return new Rt(e,t,r)}static isValidIdentifier(e){return CA.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Rt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Fd}static keyField(){return new Rt([Fd])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Z(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new Z(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Z(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new Z(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Rt(t)}static emptyPath(){return new Rt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(He.fromString(e))}static fromName(e){return new de(He.fromString(e).popFirst(5))}static empty(){return new de(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return He.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new He(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ud(n,e,t){if(!t)throw new Z(K.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function DA(n,e,t,r){if(e===!0&&r===!0)throw new Z(K.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function mg(n){if(!de.isDocumentKey(n))throw new Z(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function gg(n){if(de.isDocumentKey(n))throw new Z(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function _g(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function vc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ie(12329,{type:typeof n})}function Ye(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Z(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=vc(n);throw new Z(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function yg(n,e){if(e<=0)throw new Z(K.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ds(n,e){if(!_g(n))throw new Z(K.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(i&&typeof o!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new Z(K.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=-62135596800,Ig=1e6;class st{static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Ig);return new st(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Z(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Z(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<vg)throw new Z(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ig}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:st._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ds(e,st._jsonSchema))return new st(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-vg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}st._jsonSchemaVersion="firestore/timestamp/1.0",st._jsonSchema={type:Gt("string",st._jsonSchemaVersion),seconds:Gt("number"),nanoseconds:Gt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{static fromTimestamp(e){return new ke(e)}static min(){return new ke(new st(0,0))}static max(){return new ke(new st(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=-1;class jo{constructor(e,t,r,i){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=i}}function Bd(n){return n.fields.find((e=>e.kind===2))}function ks(n){return n.fields.filter((e=>e.kind!==2))}function kA(n,e){let t=Ve(n.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let r=0;r<Math.min(n.fields.length,e.fields.length);++r)if(t=xA(n.fields[r],e.fields[r]),t!==0)return t;return Ve(n.fields.length,e.fields.length)}jo.UNKNOWN_ID=-1;class xs{constructor(e,t){this.fieldPath=e,this.kind=t}}function xA(n,e){const t=Rt.comparator(n.fieldPath,e.fieldPath);return t!==0?t:Ve(n.kind,e.kind)}class $o{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new $o(0,Wn.min())}}function Tg(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=ke.fromTimestamp(r===1e9?new st(t+1,0):new st(t,r));return new Wn(i,de.empty(),e)}function Eg(n){return new Wn(n.readTime,n.key,qo)}class Wn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Wn(ke.min(),de.empty(),qo)}static max(){return new Wn(ke.max(),de.empty(),qo)}}function qd(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=de.comparator(n.documentKey,e.documentKey),t!==0?t:Ve(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ag{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(n){return H(this,null,function*(){if(n.code!==K.FAILED_PRECONDITION||n.message!==wg)throw n;ne("LocalStore","Unexpectedly lost primary lease")})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new q(((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof q?t:q.resolve(t)}catch(t){return q.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):q.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):q.reject(t)}static resolve(e){return new q(((t,r)=>{t(e)}))}static reject(e){return new q(((t,r)=>{r(e)}))}static waitFor(e){return new q(((t,r)=>{let i=0,s=0,o=!1;e.forEach((l=>{++i,l.next((()=>{++s,o&&s===i&&t()}),(c=>r(c)))})),o=!0,s===i&&t()}))}static or(e){let t=q.resolve(!1);for(const r of e)t=t.next((i=>i?q.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,s)=>{r.push(t.call(this,i,s))})),this.waitFor(r)}static mapArray(e,t){return new q(((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let c=0;c<s;c++){const d=c;t(e[d]).next((g=>{o[d]=g,++l,l===s&&r(o)}),(g=>i(g)))}}))}static doWhile(e,t){return new q(((r,i)=>{const s=()=>{e()===!0?t().next((()=>{s()}),i):r()};s()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="SimpleDb";class Ic{static open(e,t,r,i){try{return new Ic(t,e.transaction(i,r))}catch(s){throw new wu(t,s)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new sn,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new wu(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const i=jd(r.target.error);this.S.reject(new wu(e,i))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(ne(Gn,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}C(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new NA(t)}}class Ur{static delete(e){return ne(Gn,"Removing database:",e),Os(Zt().indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Vl())return!1;if(Ur.F())return!0;const e=dt(),t=Ur.M(e),r=0<t&&t<10,i=bg(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static F(){var e;return typeof process!="undefined"&&((e=process.__PRIVATE_env)==null?void 0:e.__PRIVATE_USE_MOCK_PERSISTENCE)==="YES"}static O(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.N=r,this.B=null,Ur.M(dt())===12.2&&qt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}L(e){return H(this,null,function*(){return this.db||(ne(Gn,"Opening database:",this.name),this.db=yield new Promise(((t,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{r(new wu(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new Z(K.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new Z(K.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new wu(e,o))},i.onupgradeneeded=s=>{ne(Gn,'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.N.k(o,i.transaction,s.oldVersion,this.version).next((()=>{ne(Gn,"Database upgrade to version "+this.version+" complete")}))}}))),this.q&&(this.db.onversionchange=t=>this.q(t)),this.db})}$(e){this.q=e,this.db&&(this.db.onversionchange=t=>e(t))}runTransaction(e,t,r,i){return H(this,null,function*(){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=yield this.L(e);const l=Ic.open(this.db,e,s?"readonly":"readwrite",r),c=i(l).next((d=>(l.C(),d))).catch((d=>(l.abort(d),q.reject(d)))).toPromise();return c.catch((()=>{})),yield l.D,c}catch(l){const c=l,d=c.name!=="FirebaseError"&&o<3;if(ne(Gn,"Transaction failed with error:",c.message,"Retrying:",d),this.close(),!d)return Promise.reject(c)}}})}close(){this.db&&this.db.close(),this.db=void 0}}function bg(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class OA{constructor(e){this.U=e,this.K=!1,this.W=null}get isDone(){return this.K}get G(){return this.W}set cursor(e){this.U=e}done(){this.K=!0}j(e){this.W=e}delete(){return Os(this.U.delete())}}class wu extends Z{constructor(e,t){super(K.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ui(n){return n.name==="IndexedDbTransactionError"}class NA{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(ne(Gn,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(ne(Gn,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Os(r)}add(e){return ne(Gn,"ADD",this.store.name,e,e),Os(this.store.add(e))}get(e){return Os(this.store.get(e)).next((t=>(t===void 0&&(t=null),ne(Gn,"GET",this.store.name,e,t),t)))}delete(e){return ne(Gn,"DELETE",this.store.name,e),Os(this.store.delete(e))}count(){return ne(Gn,"COUNT",this.store.name),Os(this.store.count())}J(e,t){const r=this.options(e,t),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new q(((o,l)=>{s.onerror=c=>{l(c.target.error)},s.onsuccess=c=>{o(c.target.result)}}))}{const s=this.cursor(r),o=[];return this.H(s,((l,c)=>{o.push(c)})).next((()=>o))}}Y(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new q(((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}}))}Z(e,t){ne(Gn,"DELETE ALL",this.store.name);const r=this.options(e,t);r.X=!1;const i=this.cursor(r);return this.H(i,((s,o,l)=>l.delete()))}ee(e,t){let r;t?r=e:(r={},t=e);const i=this.cursor(r);return this.H(i,t)}te(e){const t=this.cursor({});return new q(((r,i)=>{t.onerror=s=>{const o=jd(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next((l=>{l?o.continue():r()})):r()}}))}H(e,t){const r=[];return new q(((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const l=o.target.result;if(!l)return void i();const c=new OA(l),d=t(l.primaryKey,l.value,c);if(d instanceof q){const g=d.catch((v=>(c.done(),q.reject(v))));r.push(g)}c.isDone?i():c.G===null?l.continue():l.continue(c.G)}})).next((()=>q.waitFor(r)))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.X?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Os(n){return new q(((e,t)=>{n.onsuccess=r=>{const i=r.target.result;e(i)},n.onerror=r=>{const i=jd(r.target.error);t(i)}}))}let Sg=!1;function jd(n){const e=Ur.M(dt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new Z("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Sg||(Sg=!0,setTimeout((()=>{throw r}),0)),r}}return n}const Au="IndexBackfiller";class VA{constructor(e,t){this.asyncQueue=e,this.ne=t,this.task=null}start(){this.re(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}re(e){ne(Au,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(()=>H(this,null,function*(){this.task=null;try{const t=yield this.ne.ie();ne(Au,`Documents written: ${t}`)}catch(t){Ui(t)?ne(Au,"Ignoring IndexedDB error during index backfill: ",t):yield Fi(t)}yield this.re(6e4)})))}}class MA{constructor(e,t){this.localStore=e,this.persistence=t}ie(e=50){return H(this,null,function*(){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.se(t,e)))})}se(e,t){const r=new Set;let i=t,s=!0;return q.doWhile((()=>s===!0&&i>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((o=>{if(o!==null&&!r.has(o))return ne(Au,`Processing collection: ${o}`),this.oe(e,o,i).next((l=>{i-=l,r.add(o)}));s=!1})))).next((()=>t-i))}oe(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((i=>this.localStore.localDocuments.getNextDocuments(e,t,i,r).next((s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next((()=>this._e(i,s))).next((l=>(ne(Au,`Updating offset: ${l}`),this.localStore.indexManager.updateCollectionGroup(e,t,l)))).next((()=>o.size))}))))}_e(e,t){let r=e;return t.changes.forEach(((i,s)=>{const o=Eg(s);qd(o,r)>0&&(r=o)})),new Wn(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ln.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=-1;function bu(n){return n==null}function Su(n){return n===0&&1/n==-1/0}function Pg(n){return typeof n=="number"&&Number.isInteger(n)&&!Su(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="";function _n(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Rg(e)),e=LA(n.get(t),e);return Rg(e)}function LA(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case Tc:t+="";break;default:t+=s}}return t}function Rg(n){return n+Tc+""}function Br(n){const e=n.length;if(Pe(e>=2,64408,{path:n}),e===2)return Pe(n.charAt(0)===Tc&&n.charAt(1)==="",56145,{path:n}),He.emptyPath();const t=e-2,r=[];let i="";for(let s=0;s<e;){const o=n.indexOf(Tc,s);switch((o<0||o>t)&&Ie(50515,{path:n}),n.charAt(o+1)){case"":const l=n.substring(s,o);let c;i.length===0?c=l:(i+=l,c=i,i=""),r.push(c);break;case"":i+=n.substring(s,o),i+="\0";break;case"":i+=n.substring(s,o+1);break;default:Ie(61167,{path:n})}s=o+2}return new He(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="remoteDocuments",Pu="owner",Ko="owner",Ru="mutationQueues",FA="userId",Tr="mutations",Cg="batchId",Vs="userMutationsIndex",Dg=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(n,e){return[n,_n(e)]}function kg(n,e,t){return[n,_n(e),t]}const UA={},zo="documentMutations",wc="remoteDocumentsV14",BA=["prefixPath","collectionGroup","readTime","documentId"],Ac="documentKeyIndex",qA=["prefixPath","collectionGroup","documentId"],xg="collectionGroupIndex",jA=["collectionGroup","readTime","prefixPath","documentId"],Cu="remoteDocumentGlobal",$d="remoteDocumentGlobalKey",Wo="targets",Og="queryTargetsIndex",$A=["canonicalId","targetId"],Go="targetDocuments",KA=["targetId","path"],Kd="documentTargetsIndex",zA=["path","targetId"],bc="targetGlobalKey",Ms="targetGlobal",Du="collectionParents",WA=["collectionId","parent"],Ho="clientMetadata",GA="clientId",Sc="bundles",HA="bundleId",Pc="namedQueries",QA="name",zd="indexConfiguration",YA="indexId",Wd="collectionGroupIndex",JA="collectionGroup",ku="indexState",XA=["indexId","uid"],Ng="sequenceNumberIndex",ZA=["uid","sequenceNumber"],xu="indexEntries",eb=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Vg="documentKeyIndex",tb=["indexId","uid","orderedDocumentKey"],Rc="documentOverlays",nb=["userId","collectionPath","documentId"],Gd="collectionPathOverlayIndex",rb=["userId","collectionPath","largestBatchId"],Mg="collectionGroupOverlayIndex",ib=["userId","collectionGroup","largestBatchId"],Hd="globals",sb="name",Lg=[Ru,Tr,zo,Ns,Wo,Pu,Ms,Go,Ho,Cu,Du,Sc,Pc],ob=[...Lg,Rc],Fg=[Ru,Tr,zo,wc,Wo,Pu,Ms,Go,Ho,Cu,Du,Sc,Pc,Rc],Ug=Fg,Qd=[...Ug,zd,ku,xu],ab=Qd,Bg=[...Qd,Hd],ub=Bg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd extends Ag{constructor(e,t){super(),this.le=e,this.currentSequenceNumber=t}}function Yt(n,e){const t=fe(n);return Ur.O(t.le,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function qi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function jg(n,e){const t=[];for(const r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.push(e(n[r],r,n));return t}function $g(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){this.comparator=e,this.root=t||dn.EMPTY}insert(e,t){return new _t(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,dn.BLACK,null,null))}remove(e){return new _t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Cc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Cc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Cc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Cc(this.root,e,this.comparator,!0)}}class Cc{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dn{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r!=null?r:dn.RED,this.left=i!=null?i:dn.EMPTY,this.right=s!=null?s:dn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new dn(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return dn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return dn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ie(27949);return e+(this.isRed()?0:1)}}dn.EMPTY=null,dn.RED=!0,dn.BLACK=!1,dn.EMPTY=new class{constructor(){this.size=0}get key(){throw Ie(57766)}get value(){throw Ie(16141)}get color(){throw Ie(16727)}get left(){throw Ie(29726)}get right(){throw Ie(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new dn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.comparator=e,this.data=new _t(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Kg(this.data.getIterator())}getIteratorFrom(e){return new Kg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ot(this.comparator);return t.data=e,t}}class Kg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Qo(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.fields=e,e.sort(Rt.comparator)}static empty(){return new Fn([])}unionWith(e){let t=new ot(Rt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Bo(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HD(){return typeof atob!="undefined"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new zg("Invalid base64 string: "+s):s}})(e);return new Ot(t)}static fromUint8Array(e){const t=(function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s})(e);return new Ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ot.EMPTY_BYTE_STRING=new Ot("");const lb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function li(n){if(Pe(!!n,39018),typeof n=="string"){let e=0;const t=lb.exec(n);if(Pe(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ct(n.seconds),nanos:Ct(n.nanos)}}function Ct(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ci(n){return typeof n=="string"?Ot.fromBase64String(n):Ot.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="server_timestamp",Gg="__type__",Hg="__previous_value__",Qg="__local_write_time__";function Dc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Gg])==null?void 0:t.stringValue)===Wg}function kc(n){const e=n.mapValue.fields[Hg];return Dc(e)?kc(e):e}function Ou(n){const e=li(n.mapValue.fields[Qg].timestampValue);return new st(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e,t,r,i,s,o,l,c,d,g){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=d,this.isUsingEmulator=g}}const Nu="(default)";class Ls{constructor(e,t){this.projectId=e,this.database=t||Nu}static empty(){return new Ls("","")}get isDefaultDatabase(){return this.database===Nu}isEqual(e){return e instanceof Ls&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="__type__",Yg="__max__",ji={mapValue:{fields:{__type__:{stringValue:Yg}}}},Xd="__vector__",Yo="value",xc={nullValue:"NULL_VALUE"};function $i(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Dc(n)?4:t_(n)?9007199254740991:Vc(n)?10:11:Ie(28295,{value:n})}function qr(n,e){if(n===e)return!0;const t=$i(n);if(t!==$i(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ou(n).isEqual(Ou(e));case 3:return(function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=li(i.timestampValue),l=li(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,s){return ci(i.bytesValue).isEqual(ci(s.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,s){return Ct(i.geoPointValue.latitude)===Ct(s.geoPointValue.latitude)&&Ct(i.geoPointValue.longitude)===Ct(s.geoPointValue.longitude)})(n,e);case 2:return(function(i,s){if("integerValue"in i&&"integerValue"in s)return Ct(i.integerValue)===Ct(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ct(i.doubleValue),l=Ct(s.doubleValue);return o===l?Su(o)===Su(l):isNaN(o)&&isNaN(l)}return!1})(n,e);case 9:return Bo(n.arrayValue.values||[],e.arrayValue.values||[],qr);case 10:case 11:return(function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(qg(o)!==qg(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!qr(o[c],l[c])))return!1;return!0})(n,e);default:return Ie(52216,{left:n})}}function Vu(n,e){return(n.values||[]).find((t=>qr(t,e)))!==void 0}function Ki(n,e){if(n===e)return 0;const t=$i(n),r=$i(e);if(t!==r)return Ve(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ve(n.booleanValue,e.booleanValue);case 2:return(function(s,o){const l=Ct(s.integerValue||s.doubleValue),c=Ct(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(n,e);case 3:return Jg(n.timestampValue,e.timestampValue);case 4:return Jg(Ou(n),Ou(e));case 5:return Md(n.stringValue,e.stringValue);case 6:return(function(s,o){const l=ci(s),c=ci(o);return l.compareTo(c)})(n.bytesValue,e.bytesValue);case 7:return(function(s,o){const l=s.split("/"),c=o.split("/");for(let d=0;d<l.length&&d<c.length;d++){const g=Ve(l[d],c[d]);if(g!==0)return g}return Ve(l.length,c.length)})(n.referenceValue,e.referenceValue);case 8:return(function(s,o){const l=Ve(Ct(s.latitude),Ct(o.latitude));return l!==0?l:Ve(Ct(s.longitude),Ct(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Xg(n.arrayValue,e.arrayValue);case 10:return(function(s,o){var l,c,d,g;const v=s.fields||{},w=o.fields||{},M=(l=v[Yo])==null?void 0:l.arrayValue,Y=(c=w[Yo])==null?void 0:c.arrayValue,J=Ve(((d=M==null?void 0:M.values)==null?void 0:d.length)||0,((g=Y==null?void 0:Y.values)==null?void 0:g.length)||0);return J!==0?J:Xg(M,Y)})(n.mapValue,e.mapValue);case 11:return(function(s,o){if(s===ji.mapValue&&o===ji.mapValue)return 0;if(s===ji.mapValue)return 1;if(o===ji.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),d=o.fields||{},g=Object.keys(d);c.sort(),g.sort();for(let v=0;v<c.length&&v<g.length;++v){const w=Md(c[v],g[v]);if(w!==0)return w;const M=Ki(l[c[v]],d[g[v]]);if(M!==0)return M}return Ve(c.length,g.length)})(n.mapValue,e.mapValue);default:throw Ie(23264,{he:t})}}function Jg(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ve(n,e);const t=li(n),r=li(e),i=Ve(t.seconds,r.seconds);return i!==0?i:Ve(t.nanos,r.nanos)}function Xg(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Ki(t[i],r[i]);if(s)return s}return Ve(t.length,r.length)}function Jo(n){return Zd(n)}function Zd(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=li(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return ci(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return de.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Zd(s);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Zd(t.fields[o])}`;return i+"}"})(n.mapValue):Ie(61005,{value:n})}function Oc(n){switch($i(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=kc(n);return e?16+Oc(e):16;case 5:return 2*n.stringValue.length;case 6:return ci(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,s)=>i+Oc(s)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return qi(r.fields,((s,o)=>{i+=s.length+Oc(o)})),i})(n.mapValue);default:throw Ie(13486,{value:n})}}function Fs(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function ef(n){return!!n&&"integerValue"in n}function Mu(n){return!!n&&"arrayValue"in n}function Zg(n){return!!n&&"nullValue"in n}function e_(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Nc(n){return!!n&&"mapValue"in n}function Vc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Jd])==null?void 0:t.stringValue)===Xd}function Lu(n){if(n.geoPointValue)return{geoPointValue:Ir({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Ir({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return qi(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Lu(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Lu(n.arrayValue.values[t]);return e}return Ir({},n)}function t_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Yg}const n_={mapValue:{fields:{[Jd]:{stringValue:Xd},[Yo]:{arrayValue:{}}}}};function hb(n){return"nullValue"in n?xc:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Fs(Ls.empty(),de.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Vc(n)?n_:{mapValue:{}}:Ie(35942,{value:n})}function fb(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Fs(Ls.empty(),de.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?n_:"mapValue"in n?Vc(n)?{mapValue:{}}:ji:Ie(61959,{value:n})}function r_(n,e){const t=Ki(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function i_(n,e){const t=Ki(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.value=e}static empty(){return new fn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Nc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Lu(t)}setAll(e){let t=Rt.emptyPath(),r={},i=[];e.forEach(((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=l.popLast()}o?r[l.lastSegment()]=Lu(o):i.push(l.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Nc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Nc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){qi(t,((i,s)=>e[i]=s));for(const i of r)delete e[i]}clone(){return new fn(Lu(this.value))}}function s_(n){const e=[];return qi(n.fields,((t,r)=>{const i=new Rt([t]);if(Nc(r)){const s=s_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)})),new Fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,t,r,i,s,o,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Et(e,0,ke.min(),ke.min(),ke.min(),fn.empty(),0)}static newFoundDocument(e,t,r,i){return new Et(e,1,t,ke.min(),r,i,0)}static newNoDocument(e,t){return new Et(e,2,t,ke.min(),ke.min(),fn.empty(),0)}static newUnknownDocument(e,t){return new Et(e,3,t,ke.min(),ke.min(),fn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ke.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ke.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,t){this.position=e,this.inclusive=t}}function o_(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=de.comparator(de.fromName(o.referenceValue),t.key):r=Ki(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function a_(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!qr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,t="asc"){this.field=e,this.dir=t}}function pb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{}class Je extends u_{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new mb(e,t,r):t==="array-contains"?new yb(e,r):t==="in"?new p_(e,r):t==="not-in"?new vb(e,r):t==="array-contains-any"?new Ib(e,r):new Je(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new gb(e,r):new _b(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ki(t,this.value)):t!==null&&$i(this.value)===$i(t)&&this.matchesComparison(Ki(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class at extends u_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new at(e,t)}matches(e){return Xo(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Xo(n){return n.op==="and"}function tf(n){return n.op==="or"}function nf(n){return l_(n)&&Xo(n)}function l_(n){for(const e of n.filters)if(e instanceof at)return!1;return!0}function rf(n){if(n instanceof Je)return n.field.canonicalString()+n.op.toString()+Jo(n.value);if(nf(n))return n.filters.map((e=>rf(e))).join(",");{const e=n.filters.map((t=>rf(t))).join(",");return`${n.op}(${e})`}}function c_(n,e){return n instanceof Je?(function(r,i){return i instanceof Je&&r.op===i.op&&r.field.isEqual(i.field)&&qr(r.value,i.value)})(n,e):n instanceof at?(function(r,i){return i instanceof at&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((s,o,l)=>s&&c_(o,i.filters[l])),!0):!1})(n,e):void Ie(19439)}function h_(n,e){const t=n.filters.concat(e);return at.create(t,n.op)}function d_(n){return n instanceof Je?(function(t){return`${t.field.canonicalString()} ${t.op} ${Jo(t.value)}`})(n):n instanceof at?(function(t){return t.op.toString()+" {"+t.getFilters().map(d_).join(" ,")+"}"})(n):"Filter"}class mb extends Je{constructor(e,t,r){super(e,t,r),this.key=de.fromName(r.referenceValue)}matches(e){const t=de.comparator(e.key,this.key);return this.matchesComparison(t)}}class gb extends Je{constructor(e,t){super(e,"in",t),this.keys=f_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class _b extends Je{constructor(e,t){super(e,"not-in",t),this.keys=f_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function f_(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((r=>de.fromName(r.referenceValue)))}class yb extends Je{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Mu(t)&&Vu(t.arrayValue,this.value)}}class p_ extends Je{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Vu(this.value.arrayValue,t)}}class vb extends Je{constructor(e,t){super(e,"not-in",t)}matches(e){if(Vu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Vu(this.value.arrayValue,t)}}class Ib extends Je{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Mu(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Vu(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,t=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function sf(n,e=null,t=[],r=[],i=null,s=null,o=null){return new Tb(n,e,t,r,i,s,o)}function Us(n){const e=fe(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>rf(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(s){return s.field.canonicalString()+s.dir})(r))).join(","),bu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Jo(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Jo(r))).join(",")),e.Te=t}return e.Te}function Uu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!pb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!c_(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!a_(n.startAt,e.startAt)&&a_(n.endAt,e.endAt)}function Mc(n){return de.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Lc(n,e){return n.filters.filter((t=>t instanceof Je&&t.field.isEqual(e)))}function m_(n,e,t){let r=xc,i=!0;for(const s of Lc(n,e)){let o=xc,l=!0;switch(s.op){case"<":case"<=":o=hb(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,l=!1;break;case"!=":case"not-in":o=xc}r_({value:r,inclusive:i},{value:o,inclusive:l})<0&&(r=o,i=l)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];r_({value:r,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}function g_(n,e,t){let r=ji,i=!0;for(const s of Lc(n,e)){let o=ji,l=!0;switch(s.op){case">=":case">":o=fb(s.value),l=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,l=!1;break;case"!=":case"not-in":o=ji}i_({value:r,inclusive:i},{value:o,inclusive:l})>0&&(r=o,i=l)}if(t!==null){for(let s=0;s<n.orderBy.length;++s)if(n.orderBy[s].field.isEqual(e)){const o=t.position[s];i_({value:r,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(r=o,i=t.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t=null,r=[],i=[],s=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function __(n,e,t,r,i,s,o,l){return new hi(n,e,t,r,i,s,o,l)}function Zo(n){return new hi(n)}function y_(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function of(n){return n.collectionGroup!==null}function ea(n){const e=fe(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ot(Rt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((d=>{d.isInequality()&&(l=l.add(d.field))}))})),l})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Fu(s,r))})),t.has(Rt.keyField().canonicalString())||e.Ie.push(new Fu(Rt.keyField(),r))}return e.Ie}function yn(n){const e=fe(n);return e.Ee||(e.Ee=I_(e,ea(n))),e.Ee}function v_(n){const e=fe(n);return e.de||(e.de=I_(e,n.explicitOrderBy)),e.de}function I_(n,e){if(n.limitType==="F")return sf(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const s=i.dir==="desc"?"asc":"desc";return new Fu(i.field,s)}));const t=n.endAt?new zi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new zi(n.startAt.position,n.startAt.inclusive):null;return sf(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function af(n,e){const t=n.filters.concat([e]);return new hi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Fc(n,e,t){return new hi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Bu(n,e){return Uu(yn(n),yn(e))&&n.limitType===e.limitType}function T_(n){return`${Us(yn(n))}|lt:${n.limitType}`}function ta(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>d_(i))).join(", ")}]`),bu(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>Jo(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>Jo(i))).join(",")),`Target(${r})`})(yn(n))}; limitType=${n.limitType})`}function qu(n,e){return e.isFoundDocument()&&(function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):de.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)})(n,e)&&(function(r,i){for(const s of ea(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(o,l,c){const d=o_(o,l,c);return o.inclusive?d<=0:d<0})(r.startAt,ea(r),i)||r.endAt&&!(function(o,l,c){const d=o_(o,l,c);return o.inclusive?d>=0:d>0})(r.endAt,ea(r),i))})(n,e)}function E_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function w_(n){return(e,t)=>{let r=!1;for(const i of ea(n)){const s=Eb(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Eb(n,e,t){const r=n.field.isKeyField()?de.comparator(e.key,t.key):(function(s,o,l){const c=o.data.field(s),d=l.data.field(s);return c!==null&&d!==null?Ki(c,d):Ie(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Ie(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){qi(this.inner,((t,r)=>{for(const[i,s]of r)e(i,s)}))}isEmpty(){return $g(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb=new _t(de.comparator);function Un(){return wb}const A_=new _t(de.comparator);function ju(...n){let e=A_;for(const t of n)e=e.insert(t.key,t);return e}function b_(n){let e=A_;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function jr(){return $u()}function S_(){return $u()}function $u(){return new di((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Ab=new _t(de.comparator),bb=new ot(de.comparator);function Be(...n){let e=bb;for(const t of n)e=e.add(t);return e}const Sb=new ot(Ve);function uf(){return Sb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Su(e)?"-0":e}}function P_(n){return{integerValue:""+n}}function R_(n,e){return Pg(e)?P_(e):lf(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(){this._=void 0}}function Pb(n,e,t){return n instanceof na?(function(i,s){const o={fields:{[Gg]:{stringValue:Wg},[Qg]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Dc(s)&&(s=kc(s)),s&&(o.fields[Hg]=s),{mapValue:o}})(t,e):n instanceof Bs?D_(n,e):n instanceof qs?k_(n,e):(function(i,s){const o=C_(i,s),l=x_(o)+x_(i.Ae);return ef(o)&&ef(i.Ae)?P_(l):lf(i.serializer,l)})(n,e)}function Rb(n,e,t){return n instanceof Bs?D_(n,e):n instanceof qs?k_(n,e):t}function C_(n,e){return n instanceof ra?(function(r){return ef(r)||(function(s){return!!s&&"doubleValue"in s})(r)})(e)?e:{integerValue:0}:null}class na extends Uc{}class Bs extends Uc{constructor(e){super(),this.elements=e}}function D_(n,e){const t=O_(e);for(const r of n.elements)t.some((i=>qr(i,r)))||t.push(r);return{arrayValue:{values:t}}}class qs extends Uc{constructor(e){super(),this.elements=e}}function k_(n,e){let t=O_(e);for(const r of n.elements)t=t.filter((i=>!qr(i,r)));return{arrayValue:{values:t}}}class ra extends Uc{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function x_(n){return Ct(n.integerValue||n.doubleValue)}function O_(n){return Mu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,t){this.field=e,this.transform=t}}function Cb(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof Bs&&i instanceof Bs||r instanceof qs&&i instanceof qs?Bo(r.elements,i.elements,qr):r instanceof ra&&i instanceof ra?qr(r.Ae,i.Ae):r instanceof na&&i instanceof na})(n.transform,e.transform)}class Db{constructor(e,t){this.version=e,this.transformResults=t}}class Dt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Dt}static exists(e){return new Dt(void 0,e)}static updateTime(e){return new Dt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class qc{}function N_(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new sa(n.key,Dt.none()):new ia(n.key,n.data,Dt.none());{const t=n.data,r=fn.empty();let i=new ot(Rt.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new fi(n.key,r,new Fn(i.toArray()),Dt.none())}}function kb(n,e,t){n instanceof ia?(function(i,s,o){const l=i.value.clone(),c=L_(i.fieldTransforms,s,o.transformResults);l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):n instanceof fi?(function(i,s,o){if(!Bc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=L_(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(M_(i)),c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):(function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function zu(n,e,t,r){return n instanceof ia?(function(s,o,l,c){if(!Bc(s.precondition,o))return l;const d=s.value.clone(),g=F_(s.fieldTransforms,c,o);return d.setAll(g),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null})(n,e,t,r):n instanceof fi?(function(s,o,l,c){if(!Bc(s.precondition,o))return l;const d=F_(s.fieldTransforms,c,o),g=o.data;return g.setAll(M_(s)),g.setAll(d),o.convertToFoundDocument(o.version,g).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((v=>v.field)))})(n,e,t,r):(function(s,o,l){return Bc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l})(n,e,t)}function xb(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=C_(r.transform,i||null);s!=null&&(t===null&&(t=fn.empty()),t.set(r.field,s))}return t||null}function V_(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Bo(r,i,((s,o)=>Cb(s,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ia extends qc{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fi extends qc{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function M_(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function L_(n,e,t){const r=new Map;Pe(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Rb(o,l,t[i]))}return r}function F_(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,Pb(s,o,e))}return r}class sa extends qc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cf extends qc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&kb(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=zu(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=zu(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=S_();return this.mutations.forEach((i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=t.has(i.key)?null:l;const c=N_(o,l);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(ke.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Be())}isEqual(e){return this.batchId===e.batchId&&Bo(this.mutations,e.mutations,((t,r)=>V_(t,r)))&&Bo(this.baseMutations,e.baseMutations,((t,r)=>V_(t,r)))}}class df{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Pe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=(function(){return Ab})();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new df(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,t,r){this.alias=e,this.aggregateType=t,this.fieldPath=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ht,et;function B_(n){switch(n){case K.OK:return Ie(64938);case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0;default:return Ie(15467,{code:n})}}function q_(n){if(n===void 0)return qt("GRPC error has no .code"),K.UNKNOWN;switch(n){case Ht.OK:return K.OK;case Ht.CANCELLED:return K.CANCELLED;case Ht.UNKNOWN:return K.UNKNOWN;case Ht.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case Ht.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case Ht.INTERNAL:return K.INTERNAL;case Ht.UNAVAILABLE:return K.UNAVAILABLE;case Ht.UNAUTHENTICATED:return K.UNAUTHENTICATED;case Ht.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case Ht.NOT_FOUND:return K.NOT_FOUND;case Ht.ALREADY_EXISTS:return K.ALREADY_EXISTS;case Ht.PERMISSION_DENIED:return K.PERMISSION_DENIED;case Ht.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case Ht.ABORTED:return K.ABORTED;case Ht.OUT_OF_RANGE:return K.OUT_OF_RANGE;case Ht.UNIMPLEMENTED:return K.UNIMPLEMENTED;case Ht.DATA_LOSS:return K.DATA_LOSS;default:return Ie(39323,{code:n})}}(et=Ht||(Ht={}))[et.OK=0]="OK",et[et.CANCELLED=1]="CANCELLED",et[et.UNKNOWN=2]="UNKNOWN",et[et.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",et[et.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",et[et.NOT_FOUND=5]="NOT_FOUND",et[et.ALREADY_EXISTS=6]="ALREADY_EXISTS",et[et.PERMISSION_DENIED=7]="PERMISSION_DENIED",et[et.UNAUTHENTICATED=16]="UNAUTHENTICATED",et[et.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",et[et.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",et[et.ABORTED=10]="ABORTED",et[et.OUT_OF_RANGE=11]="OUT_OF_RANGE",et[et.UNIMPLEMENTED=12]="UNIMPLEMENTED",et[et.INTERNAL=13]="INTERNAL",et[et.UNAVAILABLE=14]="UNAVAILABLE",et[et.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jc=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=new Mi([4294967295,4294967295],0);function $_(n){const e=j_().encode(n),t=new eg;return t.update(e),new Uint8Array(t.digest())}function K_(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Mi([t,r],0),new Mi([i,s],0)]}class pf{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Wu(`Invalid padding: ${t}`);if(r<0)throw new Wu(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Wu(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Wu(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Mi.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(Mi.fromNumber(r)));return i.compare(Nb)===1&&(i=new Mi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=$_(e),[r,i]=K_(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new pf(s,i,t);return r.forEach((l=>o.insert(l))),o}insert(e){if(this.ge===0)return;const t=$_(e),[r,i]=K_(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Wu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Hu.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Gu(ke.min(),i,new _t(Ve),Un(),Be())}}class Hu{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Hu(r,t,Be(),Be(),Be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,t,r,i){this.be=e,this.removedTargetIds=t,this.key=r,this.De=i}}class z_{constructor(e,t){this.targetId=e,this.Ce=t}}class W_{constructor(e,t,r=Ot.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class G_{constructor(){this.ve=0,this.Fe=H_(),this.Me=Ot.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Be(),t=Be(),r=Be();return this.Fe.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Ie(38017,{changeType:s})}})),new Hu(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=H_()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Pe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Vb{constructor(e){this.Ge=e,this.ze=new Map,this.je=Un(),this.Je=Kc(),this.He=Kc(),this.Ye=new _t(Ve)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:Ie(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const s=i.target;if(Mc(s))if(r===0){const o=new de(s.path);this.et(t,o,Et.newNoDocument(o,ke.min()))}else Pe(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const l=this.ut(e),c=l?this.ct(l,e,o):1;if(c!==0){this.it(t);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}jc==null||jc.lt((function(g,v,w,M,Y){var J,X,ve,Re,we,qe;const We={localCacheCount:g,existenceFilterCount:v.count,databaseId:w.database,projectId:w.projectId},Ne=v.unchangedNames;return Ne&&(We.bloomFilter={applied:Y===0,hashCount:(J=Ne==null?void 0:Ne.hashCount)!=null?J:0,bitmapLength:(Re=(ve=(X=Ne==null?void 0:Ne.bits)==null?void 0:X.bitmap)==null?void 0:ve.length)!=null?Re:0,padding:(qe=(we=Ne==null?void 0:Ne.bits)==null?void 0:we.padding)!=null?qe:0,mightContain:O=>{var S;return(S=M==null?void 0:M.mightContain(O))!=null?S:!1}}),We})(o,e.Ce,this.Ge.ht(),l,c))}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,l;try{o=ci(r).toUint8Array()}catch(c){if(c instanceof zg)return or("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new pf(o,i,s)}catch(c){return or(c instanceof Wu?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach((s=>{const o=this.Ge.ht(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.et(t,s,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((s,o)=>{const l=this.ot(o);if(l){if(s.current&&Mc(l.target)){const c=new de(l.target.path);this.It(c).has(o)||this.Et(o,c)||this.et(o,c,Et.newNoDocument(c,e))}s.Be&&(t.set(o,s.ke()),s.qe())}}));let r=Be();this.He.forEach(((s,o)=>{let l=!0;o.forEachWhile((c=>{const d=this.ot(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(s))})),this.je.forEach(((s,o)=>o.setReadTime(e)));const i=new Gu(e,t,this.Ye,this.je,r);return this.je=Un(),this.Je=Kc(),this.He=Kc(),this.Ye=new _t(Ve),i}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new G_,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new ot(Ve),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new ot(Ve),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||ne("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new G_),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Kc(){return new _t(de.comparator)}function H_(){return new _t(de.comparator)}const Mb={asc:"ASCENDING",desc:"DESCENDING"},Lb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Fb={and:"AND",or:"OR"};class Ub{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function mf(n,e){return n.useProto3Json||bu(e)?e:{value:e}}function oa(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Q_(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Bb(n,e){return oa(n,e.toTimestamp())}function jt(n){return Pe(!!n,49232),ke.fromTimestamp((function(t){const r=li(t);return new st(r.seconds,r.nanos)})(n))}function gf(n,e){return _f(n,e).canonicalString()}function _f(n,e){const t=(function(i){return new He(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Y_(n){const e=He.fromString(n);return Pe(oy(e),10190,{key:e.toString()}),e}function Qu(n,e){return gf(n.databaseId,e.path)}function $r(n,e){const t=Y_(e);if(t.get(1)!==n.databaseId.projectId)throw new Z(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Z(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new de(Z_(t))}function J_(n,e){return gf(n.databaseId,e)}function X_(n){const e=Y_(n);return e.length===4?He.emptyPath():Z_(e)}function yf(n){return new He(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Z_(n){return Pe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ey(n,e,t){return{name:Qu(n,e),fields:t.value.mapValue.fields}}function zc(n,e,t){const r=$r(n,e.name),i=jt(e.updateTime),s=e.createTime?jt(e.createTime):ke.min(),o=new fn({mapValue:{fields:e.fields}}),l=Et.newFoundDocument(r,i,s,o);return t&&l.setHasCommittedMutations(),t?l.setHasCommittedMutations():l}function qb(n,e){return"found"in e?(function(r,i){Pe(!!i.found,43571),i.found.name,i.found.updateTime;const s=$r(r,i.found.name),o=jt(i.found.updateTime),l=i.found.createTime?jt(i.found.createTime):ke.min(),c=new fn({mapValue:{fields:i.found.fields}});return Et.newFoundDocument(s,o,l,c)})(n,e):"missing"in e?(function(r,i){Pe(!!i.missing,3894),Pe(!!i.readTime,22933);const s=$r(r,i.missing),o=jt(i.readTime);return Et.newNoDocument(s,o)})(n,e):Ie(7234,{result:e})}function jb(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Ie(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=(function(d,g){return d.useProto3Json?(Pe(g===void 0||typeof g=="string",58123),Ot.fromBase64String(g||"")):(Pe(g===void 0||g instanceof Buffer||g instanceof Uint8Array,16193),Ot.fromUint8Array(g||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&(function(d){const g=d.code===void 0?K.UNKNOWN:q_(d.code);return new Z(g,d.message||"")})(o);t=new W_(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=$r(n,r.document.name),s=jt(r.document.updateTime),o=r.document.createTime?jt(r.document.createTime):ke.min(),l=new fn({mapValue:{fields:r.document.fields}}),c=Et.newFoundDocument(i,s,o,l),d=r.targetIds||[],g=r.removedTargetIds||[];t=new $c(d,g,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=$r(n,r.document),s=r.readTime?jt(r.readTime):ke.min(),o=Et.newNoDocument(i,s),l=r.removedTargetIds||[];t=new $c([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=$r(n,r.document),s=r.removedTargetIds||[];t=new $c([],s,i,null)}else{if(!("filter"in e))return Ie(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Ob(i,s),l=r.targetId;t=new z_(l,o)}}return t}function Yu(n,e){let t;if(e instanceof ia)t={update:ey(n,e.key,e.value)};else if(e instanceof sa)t={delete:Qu(n,e.key)};else if(e instanceof fi)t={update:ey(n,e.key,e.data),updateMask:Hb(e.fieldMask)};else{if(!(e instanceof cf))return Ie(16599,{Vt:e.type});t={verify:Qu(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(s,o){const l=o.transform;if(l instanceof na)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Bs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof qs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ra)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw Ie(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,s){return s.updateTime!==void 0?{updateTime:Bb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Ie(27497)})(n,e.precondition)),t}function vf(n,e){const t=e.currentDocument?(function(s){return s.updateTime!==void 0?Dt.updateTime(jt(s.updateTime)):s.exists!==void 0?Dt.exists(s.exists):Dt.none()})(e.currentDocument):Dt.none(),r=e.updateTransforms?e.updateTransforms.map((i=>(function(o,l){let c=null;if("setToServerValue"in l)Pe(l.setToServerValue==="REQUEST_TIME",16630,{proto:l}),c=new na;else if("appendMissingElements"in l){const g=l.appendMissingElements.values||[];c=new Bs(g)}else if("removeAllFromArray"in l){const g=l.removeAllFromArray.values||[];c=new qs(g)}else"increment"in l?c=new ra(o,l.increment):Ie(16584,{proto:l});const d=Rt.fromServerFormat(l.fieldPath);return new Ku(d,c)})(n,i))):[];if(e.update){e.update.name;const i=$r(n,e.update.name),s=new fn({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=(function(c){const d=c.fieldPaths||[];return new Fn(d.map((g=>Rt.fromServerFormat(g))))})(e.updateMask);return new fi(i,s,o,t,r)}return new ia(i,s,t,r)}if(e.delete){const i=$r(n,e.delete);return new sa(i,t)}if(e.verify){const i=$r(n,e.verify);return new cf(i,t)}return Ie(1463,{proto:e})}function $b(n,e){return n&&n.length>0?(Pe(e!==void 0,14353),n.map((t=>(function(i,s){let o=i.updateTime?jt(i.updateTime):jt(s);return o.isEqual(ke.min())&&(o=jt(s)),new Db(o,i.transformResults||[])})(t,e)))):[]}function ty(n,e){return{documents:[J_(n,e.path)]}}function Wc(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=J_(n,i);const s=(function(d){if(d.length!==0)return sy(at.create(d,"and"))})(e.filters);s&&(t.structuredQuery.where=s);const o=(function(d){if(d.length!==0)return d.map((g=>(function(w){return{field:Wi(w.field),direction:zb(w.dir)}})(g)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=mf(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:i}}function ny(n,e,t,r){const{ft:i,parent:s}=Wc(n,e),o={},l=[];let c=0;return t.forEach((d=>{const g=r?d.alias:"aggregate_"+c++;o[g]=d.alias,d.aggregateType==="count"?l.push({alias:g,count:{}}):d.aggregateType==="avg"?l.push({alias:g,avg:{field:Wi(d.fieldPath)}}):d.aggregateType==="sum"&&l.push({alias:g,sum:{field:Wi(d.fieldPath)}})})),{request:{structuredAggregationQuery:{aggregations:l,structuredQuery:i.structuredQuery},parent:i.parent},gt:o,parent:s}}function ry(n){let e=X_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Pe(r===1,65062);const g=t.from[0];g.allDescendants?i=g.collectionId:e=e.child(g.collectionId)}let s=[];t.where&&(s=(function(v){const w=iy(v);return w instanceof at&&nf(w)?w.getFilters():[w]})(t.where));let o=[];t.orderBy&&(o=(function(v){return v.map((w=>(function(Y){return new Fu(aa(Y.field),(function(X){switch(X){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Y.direction))})(w)))})(t.orderBy));let l=null;t.limit&&(l=(function(v){let w;return w=typeof v=="object"?v.value:v,bu(w)?null:w})(t.limit));let c=null;t.startAt&&(c=(function(v){const w=!!v.before,M=v.values||[];return new zi(M,w)})(t.startAt));let d=null;return t.endAt&&(d=(function(v){const w=!v.before,M=v.values||[];return new zi(M,w)})(t.endAt)),__(e,i,o,s,l,"F",c,d)}function Kb(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ie(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function iy(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=aa(t.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=aa(t.unaryFilter.field);return Je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=aa(t.unaryFilter.field);return Je.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=aa(t.unaryFilter.field);return Je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ie(61313);default:return Ie(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Je.create(aa(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ie(58110);default:return Ie(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return at.create(t.compositeFilter.filters.map((r=>iy(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Ie(1026)}})(t.compositeFilter.op))})(n):Ie(30097,{filter:n})}function zb(n){return Mb[n]}function Wb(n){return Lb[n]}function Gb(n){return Fb[n]}function Wi(n){return{fieldPath:n.canonicalString()}}function aa(n){return Rt.fromServerFormat(n.fieldPath)}function sy(n){return n instanceof Je?(function(t){if(t.op==="=="){if(e_(t.value))return{unaryFilter:{field:Wi(t.field),op:"IS_NAN"}};if(Zg(t.value))return{unaryFilter:{field:Wi(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(e_(t.value))return{unaryFilter:{field:Wi(t.field),op:"IS_NOT_NAN"}};if(Zg(t.value))return{unaryFilter:{field:Wi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wi(t.field),op:Wb(t.op),value:t.value}}})(n):n instanceof at?(function(t){const r=t.getFilters().map((i=>sy(i)));return r.length===1?r[0]:{compositeFilter:{op:Gb(t.op),filters:r}}})(n):Ie(54877,{filter:n})}function Hb(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function oy(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t,r,i,s=ke.min(),o=ke.min(),l=Ot.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new pi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e){this.yt=e}}function Qb(n,e){let t;if(e.document)t=zc(n.yt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=de.fromSegments(e.noDocument.path),i=$s(e.noDocument.readTime);t=Et.newNoDocument(r,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return Ie(56709);{const r=de.fromSegments(e.unknownDocument.path),i=$s(e.unknownDocument.version);t=Et.newUnknownDocument(r,i)}}return e.readTime&&t.setReadTime((function(i){const s=new st(i[0],i[1]);return ke.fromTimestamp(s)})(e.readTime)),t}function uy(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Gc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=(function(s,o){return{name:Qu(s,o.key),fields:o.data.value.mapValue.fields,updateTime:oa(s,o.version.toTimestamp()),createTime:oa(s,o.createTime.toTimestamp())}})(n.yt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:js(e.version)};else{if(!e.isUnknownDocument())return Ie(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:js(e.version)}}return r}function Gc(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function js(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function $s(n){const e=new st(n.seconds,n.nanoseconds);return ke.fromTimestamp(e)}function Ks(n,e){const t=(e.baseMutations||[]).map((s=>vf(n.yt,s)));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const l=e.mutations[s+1];o.updateTransforms=l.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map((s=>vf(n.yt,s))),i=st.fromMillis(e.localWriteTimeMs);return new hf(e.batchId,i,t,r)}function Ju(n){const e=$s(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?$s(n.lastLimboFreeSnapshotVersion):ke.min();let r;return r=(function(s){return s.documents!==void 0})(n.query)?(function(s){const o=s.documents.length;return Pe(o===1,1966,{count:o}),yn(Zo(X_(s.documents[0])))})(n.query):(function(s){return yn(ry(s))})(n.query),new pi(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,Ot.fromBase64String(n.resumeToken))}function ly(n,e){const t=js(e.snapshotVersion),r=js(e.lastLimboFreeSnapshotVersion);let i;i=Mc(e.target)?ty(n.yt,e.target):Wc(n.yt,e.target).ft;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Us(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function Hc(n){const e=ry({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Fc(e,e.limit,"L"):e}function If(n,e){return new ff(e.largestBatchId,vf(n.yt,e.overlayMutation))}function cy(n,e){const t=e.path.lastSegment();return[n,_n(e.path.popLast()),t]}function hy(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:js(r.readTime),documentKey:_n(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{getBundleMetadata(e,t){return dy(e).get(t).next((r=>{if(r)return(function(s){return{id:s.bundleId,createTime:$s(s.createTime),version:s.version}})(r)}))}saveBundleMetadata(e,t){return dy(e).put((function(i){return{bundleId:i.id,createTime:js(jt(i.createTime)),version:i.version}})(t))}getNamedQuery(e,t){return fy(e).get(t).next((r=>{if(r)return(function(s){return{name:s.name,query:Hc(s.bundledQuery),readTime:$s(s.readTime)}})(r)}))}saveNamedQuery(e,t){return fy(e).put((function(i){return{name:i.name,readTime:js(jt(i.readTime)),bundledQuery:i.bundledQuery}})(t))}}function dy(n){return Yt(n,Sc)}function fy(n){return Yt(n,Pc)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,t){this.serializer=e,this.userId=t}static wt(e,t){const r=t.uid||"";return new Qc(e,r)}getOverlay(e,t){return Xu(e).get(cy(this.userId,t)).next((r=>r?If(this.serializer,r):null))}getOverlays(e,t){const r=jr();return q.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&r.set(i,s)})))).next((()=>r))}saveOverlays(e,t,r){const i=[];return r.forEach(((s,o)=>{const l=new ff(t,o);i.push(this.St(e,l))})),q.waitFor(i)}removeOverlaysForBatchId(e,t,r){const i=new Set;t.forEach((o=>i.add(_n(o.getCollectionPath()))));const s=[];return i.forEach((o=>{const l=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Xu(e).Z(Gd,l))})),q.waitFor(s)}getOverlaysForCollection(e,t,r){const i=jr(),s=_n(t),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Xu(e).J(Gd,o).next((l=>{for(const c of l){const d=If(this.serializer,c);i.set(d.getKey(),d)}return i}))}getOverlaysForCollectionGroup(e,t,r,i){const s=jr();let o;const l=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Xu(e).ee({index:Mg,range:l},((c,d,g)=>{const v=If(this.serializer,d);s.size()<i||v.largestBatchId===o?(s.set(v.getKey(),v),o=v.largestBatchId):g.done()})).next((()=>s))}St(e,t){return Xu(e).put((function(i,s,o){const[l,c,d]=cy(s,o.mutation.key);return{userId:s,collectionPath:c,documentId:d,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Yu(i.yt,o.mutation)}})(this.serializer,this.userId,t))}}function Xu(n){return Yt(n,Rc)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{bt(e){return Yt(e,Hd)}getSessionToken(e){return this.bt(e).get("sessionToken").next((t=>{const r=t==null?void 0:t.value;return r?Ot.fromUint8Array(r):Ot.EMPTY_BYTE_STRING}))}setSessionToken(e,t){return this.bt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(Ct(e.integerValue));else if("doubleValue"in e){const r=Ct(e.doubleValue);isNaN(r)?this.Ft(t,13):(this.Ft(t,15),Su(r)?t.Mt(0):t.Mt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ft(t,20),typeof r=="string"&&(r=li(r)),t.xt(`${r.seconds||""}`),t.Mt(r.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(ci(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ft(t,45),t.Mt(r.latitude||0),t.Mt(r.longitude||0)}else"mapValue"in e?t_(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):Vc(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Qt(e.arrayValue,t),this.Nt(t)):Ie(19022,{$t:e})}Ot(e,t){this.Ft(t,25),this.Ut(e,t)}Ut(e,t){t.xt(e)}qt(e,t){const r=e.fields||{};this.Ft(t,55);for(const i of Object.keys(r))this.Ot(i,t),this.Ct(r[i],t)}kt(e,t){var r,i;const s=e.fields||{};this.Ft(t,53);const o=Yo,l=((i=(r=s[o].arrayValue)==null?void 0:r.values)==null?void 0:i.length)||0;this.Ft(t,15),t.Mt(Ct(l)),this.Ot(o,t),this.Ct(s[o],t)}Qt(e,t){const r=e.values||[];this.Ft(t,50);for(const i of r)this.Ct(i,t)}Lt(e,t){this.Ft(t,37),de.fromName(e).path.forEach((r=>{this.Ft(t,60),this.Ut(r,t)}))}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}zs.Kt=new zs;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=255;function Xb(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function py(n){const e=64-(function(r){let i=0;for(let s=0;s<8;++s){const o=Xb(255&r[s]);if(i+=o,o!==8)break}return i})(n);return Math.ceil(e/8)}class Zb{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Wt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Gt(r.value),r=t.next();this.zt()}jt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Jt(r.value),r=t.next();this.Ht()}Yt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Gt(r);else if(r<2048)this.Gt(960|r>>>6),this.Gt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Gt(480|r>>>12),this.Gt(128|63&r>>>6),this.Gt(128|63&r);else{const i=t.codePointAt(0);this.Gt(240|i>>>18),this.Gt(128|63&i>>>12),this.Gt(128|63&i>>>6),this.Gt(128|63&i)}}this.zt()}Zt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Jt(r);else if(r<2048)this.Jt(960|r>>>6),this.Jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|r>>>12),this.Jt(128|63&r>>>6),this.Jt(128|63&r);else{const i=t.codePointAt(0);this.Jt(240|i>>>18),this.Jt(128|63&i>>>12),this.Jt(128|63&i>>>6),this.Jt(128|63&i)}}this.Ht()}Xt(e){const t=this.en(e),r=py(t);this.tn(1+r),this.buffer[this.position++]=255&r;for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=255&t[i]}nn(e){const t=this.en(e),r=py(t);this.tn(1+r),this.buffer[this.position++]=~(255&r);for(let i=t.length-r;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}rn(){this.sn(ua),this.sn(255)}_n(){this.an(ua),this.an(255)}reset(){this.position=0}seed(e){this.tn(e.length),this.buffer.set(e,this.position),this.position+=e.length}un(){return this.buffer.slice(0,this.position)}en(e){const t=(function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)})(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let i=1;i<t.length;++i)t[i]^=r?255:0;return t}Gt(e){const t=255&e;t===0?(this.sn(0),this.sn(255)):t===ua?(this.sn(ua),this.sn(0)):this.sn(t)}Jt(e){const t=255&e;t===0?(this.an(0),this.an(255)):t===ua?(this.an(ua),this.an(0)):this.an(e)}zt(){this.sn(0),this.sn(1)}Ht(){this.an(0),this.an(1)}sn(e){this.tn(1),this.buffer[this.position++]=e}an(e){this.tn(1),this.buffer[this.position++]=~e}tn(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class eS{constructor(e){this.cn=e}Bt(e){this.cn.Wt(e)}xt(e){this.cn.Yt(e)}Mt(e){this.cn.Xt(e)}vt(){this.cn.rn()}}class tS{constructor(e){this.cn=e}Bt(e){this.cn.jt(e)}xt(e){this.cn.Zt(e)}Mt(e){this.cn.nn(e)}vt(){this.cn._n()}}class Zu{constructor(){this.cn=new Zb,this.ln=new eS(this.cn),this.hn=new tS(this.cn)}seed(e){this.cn.seed(e)}Pn(e){return e===0?this.ln:this.hn}un(){return this.cn.un()}reset(){this.cn.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,t,r,i){this.Tn=e,this.In=t,this.En=r,this.dn=i}An(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.dn,0),t!==e?r.set([0],this.dn.length):++r[r.length-1],new Ws(this.Tn,this.In,this.En,r)}Rn(e,t,r){return{indexId:this.Tn,uid:e,arrayValue:Yc(this.En),directionalValue:Yc(this.dn),orderedDocumentKey:Yc(t),documentKey:r.path.toArray()}}Vn(e,t,r){const i=this.Rn(e,t,r);return[i.indexId,i.uid,i.arrayValue,i.directionalValue,i.orderedDocumentKey,i.documentKey]}}function Gi(n,e){let t=n.Tn-e.Tn;return t!==0?t:(t=my(n.En,e.En),t!==0?t:(t=my(n.dn,e.dn),t!==0?t:de.comparator(n.In,e.In)))}function my(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function Yc(n){return Nl()?(function(t){let r="";for(let i=0;i<t.length;i++)r+=String.fromCharCode(t[i]);return r})(n):n}function gy(n){return typeof n!="string"?n:(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(n)}class _y{constructor(e){this.mn=new ot(((t,r)=>Rt.comparator(t.field,r.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.fn=e.orderBy,this.gn=[];for(const t of e.filters){const r=t;r.isInequality()?this.mn=this.mn.add(r):this.gn.push(r)}}get pn(){return this.mn.size>1}yn(e){if(Pe(e.collectionGroup===this.collectionId,49279),this.pn)return!1;const t=Bd(e);if(t!==void 0&&!this.wn(t))return!1;const r=ks(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.wn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.mn.size>0){const l=this.mn.getIterator().getNext();if(!i.has(l.field.canonicalString())){const c=r[s];if(!this.Sn(l,c)||!this.bn(this.fn[o++],c))return!1}++s}for(;s<r.length;++s){const l=r[s];if(o>=this.fn.length||!this.bn(this.fn[o++],l))return!1}return!0}Dn(){if(this.pn)return null;let e=new ot(Rt.comparator);const t=[];for(const r of this.gn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new xs(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new xs(r.field,0))}for(const r of this.fn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new xs(r.field,r.dir==="asc"?0:1)));return new jo(jo.UNKNOWN_ID,this.collectionId,t,$o.empty())}wn(e){for(const t of this.gn)if(this.Sn(t,e))return!0;return!1}Sn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}bn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(n){var e,t;if(Pe(n instanceof Je||n instanceof at,20012),n instanceof Je){if(n instanceof p_){const i=((t=(e=n.value.arrayValue)==null?void 0:e.values)==null?void 0:t.map((s=>Je.create(n.field,"==",s))))||[];return at.create(i,"or")}return n}const r=n.filters.map((i=>yy(i)));return at.create(r,n.op)}function nS(n){if(n.getFilters().length===0)return[];const e=wf(yy(n));return Pe(vy(e),7391),Tf(e)||Ef(e)?[e]:e.getFilters()}function Tf(n){return n instanceof Je}function Ef(n){return n instanceof at&&nf(n)}function vy(n){return Tf(n)||Ef(n)||(function(t){if(t instanceof at&&tf(t)){for(const r of t.getFilters())if(!Tf(r)&&!Ef(r))return!1;return!0}return!1})(n)}function wf(n){if(Pe(n instanceof Je||n instanceof at,34018),n instanceof Je)return n;if(n.filters.length===1)return wf(n.filters[0]);const e=n.filters.map((r=>wf(r)));let t=at.create(e,n.op);return t=Jc(t),vy(t)?t:(Pe(t instanceof at,64498),Pe(Xo(t),40251),Pe(t.filters.length>1,57927),t.filters.reduce(((r,i)=>Af(r,i))))}function Af(n,e){let t;return Pe(n instanceof Je||n instanceof at,38388),Pe(e instanceof Je||e instanceof at,25473),t=n instanceof Je?e instanceof Je?(function(i,s){return at.create([i,s],"and")})(n,e):Iy(n,e):e instanceof Je?Iy(e,n):(function(i,s){if(Pe(i.filters.length>0&&s.filters.length>0,48005),Xo(i)&&Xo(s))return h_(i,s.getFilters());const o=tf(i)?i:s,l=tf(i)?s:i,c=o.filters.map((d=>Af(d,l)));return at.create(c,"or")})(n,e),Jc(t)}function Iy(n,e){if(Xo(e))return h_(e,n.getFilters());{const t=e.filters.map((r=>Af(n,r)));return at.create(t,"or")}}function Jc(n){if(Pe(n instanceof Je||n instanceof at,11850),n instanceof Je)return n;const e=n.getFilters();if(e.length===1)return Jc(e[0]);if(l_(n))return n;const t=e.map((i=>Jc(i))),r=[];return t.forEach((i=>{i instanceof Je?r.push(i):i instanceof at&&(i.op===n.op?r.push(...i.filters):r.push(i))})),r.length===1?r[0]:at.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(){this.Cn=new bf}addToCollectionParentIndex(e,t){return this.Cn.add(t),q.resolve()}getCollectionParents(e,t){return q.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return q.resolve()}deleteFieldIndex(e,t){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,t){return q.resolve()}getDocumentsMatchingTarget(e,t){return q.resolve(null)}getIndexType(e,t){return q.resolve(0)}getFieldIndexes(e,t){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,t){return q.resolve(Wn.min())}getMinOffsetFromCollectionGroup(e,t){return q.resolve(Wn.min())}updateCollectionGroup(e,t,r){return q.resolve()}updateIndexEntries(e,t){return q.resolve()}}class bf{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ot(He.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ot(He.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="IndexedDbIndexManager",Xc=new Uint8Array(0);class iS{constructor(e,t){this.databaseId=t,this.vn=new bf,this.Fn=new di((r=>Us(r)),((r,i)=>Uu(r,i))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const r=t.lastSegment(),i=t.popLast();e.addOnCommittedListener((()=>{this.vn.add(t)}));const s={collectionId:r,parent:_n(i)};return Ey(e).put(s)}return q.resolve()}getCollectionParents(e,t){const r=[],i=IDBKeyRange.bound([t,""],[pg(t),""],!1,!0);return Ey(e).J(i).next((s=>{for(const o of s){if(o.collectionId!==t)break;r.push(Br(o.parent))}return r}))}addFieldIndex(e,t){const r=el(e),i=(function(l){return{indexId:l.indexId,collectionGroup:l.collectionGroup,fields:l.fields.map((c=>[c.fieldPath.canonicalString(),c.kind]))}})(t);delete i.indexId;const s=r.add(i);if(t.indexState){const o=ca(e);return s.next((l=>{o.put(hy(l,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return s.next()}deleteFieldIndex(e,t){const r=el(e),i=ca(e),s=la(e);return r.delete(t.indexId).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=el(e),r=la(e),i=ca(e);return t.Z().next((()=>r.Z())).next((()=>i.Z()))}createTargetIndexes(e,t){return q.forEach(this.Mn(t),(r=>this.getIndexType(e,r).next((i=>{if(i===0||i===1){const s=new _y(r).Dn();if(s!=null)return this.addFieldIndex(e,s)}}))))}getDocumentsMatchingTarget(e,t){const r=la(e);let i=!0;const s=new Map;return q.forEach(this.Mn(t),(o=>this.xn(e,o).next((l=>{i&&(i=!!l),s.set(o,l)})))).next((()=>{if(i){let o=Be();const l=[];return q.forEach(s,((c,d)=>{ne(Ty,`Using index ${(function(we){return`id=${we.indexId}|cg=${we.collectionGroup}|f=${we.fields.map((qe=>`${qe.fieldPath}:${qe.kind}`)).join(",")}`})(c)} to execute ${Us(t)}`);const g=(function(we,qe){const We=Bd(qe);if(We===void 0)return null;for(const Ne of Lc(we,We.fieldPath))switch(Ne.op){case"array-contains-any":return Ne.value.arrayValue.values||[];case"array-contains":return[Ne.value]}return null})(d,c),v=(function(we,qe){const We=new Map;for(const Ne of ks(qe))for(const O of Lc(we,Ne.fieldPath))switch(O.op){case"==":case"in":We.set(Ne.fieldPath.canonicalString(),O.value);break;case"not-in":case"!=":return We.set(Ne.fieldPath.canonicalString(),O.value),Array.from(We.values())}return null})(d,c),w=(function(we,qe){const We=[];let Ne=!0;for(const O of ks(qe)){const S=O.kind===0?m_(we,O.fieldPath,we.startAt):g_(we,O.fieldPath,we.startAt);We.push(S.value),Ne&&(Ne=S.inclusive)}return new zi(We,Ne)})(d,c),M=(function(we,qe){const We=[];let Ne=!0;for(const O of ks(qe)){const S=O.kind===0?g_(we,O.fieldPath,we.endAt):m_(we,O.fieldPath,we.endAt);We.push(S.value),Ne&&(Ne=S.inclusive)}return new zi(We,Ne)})(d,c),Y=this.On(c,d,w),J=this.On(c,d,M),X=this.Nn(c,d,v),ve=this.Bn(c.indexId,g,Y,w.inclusive,J,M.inclusive,X);return q.forEach(ve,(Re=>r.Y(Re,t.limit).next((we=>{we.forEach((qe=>{const We=de.fromSegments(qe.documentKey);o.has(We)||(o=o.add(We),l.push(We))}))}))))})).next((()=>l))}return q.resolve(null)}))}Mn(e){let t=this.Fn.get(e);return t||(e.filters.length===0?t=[e]:t=nS(at.create(e.filters,"and")).map((r=>sf(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt))),this.Fn.set(e,t),t)}Bn(e,t,r,i,s,o,l){const c=(t!=null?t.length:1)*Math.max(r.length,s.length),d=c/(t!=null?t.length:1),g=[];for(let v=0;v<c;++v){const w=t?this.Ln(t[v/d]):Xc,M=this.kn(e,w,r[v%d],i),Y=this.qn(e,w,s[v%d],o),J=l.map((X=>this.kn(e,w,X,!0)));g.push(...this.createRange(M,Y,J))}return g}kn(e,t,r,i){const s=new Ws(e,de.empty(),t,r);return i?s:s.An()}qn(e,t,r,i){const s=new Ws(e,de.empty(),t,r);return i?s.An():s}xn(e,t){const r=new _y(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next((s=>{let o=null;for(const l of s)r.yn(l)&&(!o||l.fields.length>o.fields.length)&&(o=l);return o}))}getIndexType(e,t){let r=2;const i=this.Mn(t);return q.forEach(i,(s=>this.xn(e,s).next((o=>{o?r!==0&&o.fields.length<(function(c){let d=new ot(Rt.comparator),g=!1;for(const v of c.filters)for(const w of v.getFlattenedFilters())w.field.isKeyField()||(w.op==="array-contains"||w.op==="array-contains-any"?g=!0:d=d.add(w.field));for(const v of c.orderBy)v.field.isKeyField()||(d=d.add(v.field));return d.size+(g?1:0)})(s)&&(r=1):r=0})))).next((()=>(function(o){return o.limit!==null})(t)&&i.length>1&&r===2?1:r))}Qn(e,t){const r=new Zu;for(const i of ks(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=r.Pn(i.kind);zs.Kt.Dt(s,o)}return r.un()}Ln(e){const t=new Zu;return zs.Kt.Dt(e,t.Pn(0)),t.un()}$n(e,t){const r=new Zu;return zs.Kt.Dt(Fs(this.databaseId,t),r.Pn((function(s){const o=ks(s);return o.length===0?0:o[o.length-1].kind})(e))),r.un()}Nn(e,t,r){if(r===null)return[];let i=[];i.push(new Zu);let s=0;for(const o of ks(e)){const l=r[s++];for(const c of i)if(this.Un(t,o.fieldPath)&&Mu(l))i=this.Kn(i,o,l);else{const d=c.Pn(o.kind);zs.Kt.Dt(l,d)}}return this.Wn(i)}On(e,t,r){return this.Nn(e,t,r.position)}Wn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].un();return t}Kn(e,t,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const l of i){const c=new Zu;c.seed(l.un()),zs.Kt.Dt(o,c.Pn(t.kind)),s.push(c)}return s}Un(e,t){return!!e.filters.find((r=>r instanceof Je&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in")))}getFieldIndexes(e,t){const r=el(e),i=ca(e);return(t?r.J(Wd,IDBKeyRange.bound(t,t)):r.J()).next((s=>{const o=[];return q.forEach(s,(l=>i.get([l.indexId,this.uid]).next((c=>{o.push((function(g,v){const w=v?new $o(v.sequenceNumber,new Wn($s(v.readTime),new de(Br(v.documentKey)),v.largestBatchId)):$o.empty(),M=g.fields.map((([Y,J])=>new xs(Rt.fromServerFormat(Y),J)));return new jo(g.indexId,g.collectionGroup,M,w)})(l,c))})))).next((()=>o))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:Ve(r.collectionGroup,i.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,r){const i=el(e),s=ca(e);return this.Gn(e).next((o=>i.J(Wd,IDBKeyRange.bound(t,t)).next((l=>q.forEach(l,(c=>s.put(hy(c.indexId,this.uid,o,r))))))))}updateIndexEntries(e,t){const r=new Map;return q.forEach(t,((i,s)=>{const o=r.get(i.collectionGroup);return(o?q.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next((l=>(r.set(i.collectionGroup,l),q.forEach(l,(c=>this.zn(e,i,c).next((d=>{const g=this.jn(s,c);return d.isEqual(g)?q.resolve():this.Jn(e,s,c,d,g)})))))))}))}Hn(e,t,r,i){return la(e).put(i.Rn(this.uid,this.$n(r,t.key),t.key))}Yn(e,t,r,i){return la(e).delete(i.Vn(this.uid,this.$n(r,t.key),t.key))}zn(e,t,r){const i=la(e);let s=new ot(Gi);return i.ee({index:Vg,range:IDBKeyRange.only([r.indexId,this.uid,Yc(this.$n(r,t))])},((o,l)=>{s=s.add(new Ws(r.indexId,t,gy(l.arrayValue),gy(l.directionalValue)))})).next((()=>s))}jn(e,t){let r=new ot(Gi);const i=this.Qn(t,e);if(i==null)return r;const s=Bd(t);if(s!=null){const o=e.data.field(s.fieldPath);if(Mu(o))for(const l of o.arrayValue.values||[])r=r.add(new Ws(t.indexId,e.key,this.Ln(l),i))}else r=r.add(new Ws(t.indexId,e.key,Xc,i));return r}Jn(e,t,r,i,s){ne(Ty,"Updating index entries for document '%s'",t.key);const o=[];return(function(c,d,g,v,w){const M=c.getIterator(),Y=d.getIterator();let J=Qo(M),X=Qo(Y);for(;J||X;){let ve=!1,Re=!1;if(J&&X){const we=g(J,X);we<0?Re=!0:we>0&&(ve=!0)}else J!=null?Re=!0:ve=!0;ve?(v(X),X=Qo(Y)):Re?(w(J),J=Qo(M)):(J=Qo(M),X=Qo(Y))}})(i,s,Gi,(l=>{o.push(this.Hn(e,t,r,l))}),(l=>{o.push(this.Yn(e,t,r,l))})),q.waitFor(o)}Gn(e){let t=1;return ca(e).ee({index:Ng,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((r,i,s)=>{s.done(),t=i.sequenceNumber+1})).next((()=>t))}createRange(e,t,r){r=r.sort(((o,l)=>Gi(o,l))).filter(((o,l,c)=>!l||Gi(o,c[l-1])!==0));const i=[];i.push(e);for(const o of r){const l=Gi(o,e),c=Gi(o,t);if(l===0)i[0]=e.An();else if(l>0&&c<0)i.push(o),i.push(o.An());else if(c>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Zn(i[o],i[o+1]))return[];const l=i[o].Vn(this.uid,Xc,de.empty()),c=i[o+1].Vn(this.uid,Xc,de.empty());s.push(IDBKeyRange.bound(l,c))}return s}Zn(e,t){return Gi(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(wy)}getMinOffset(e,t){return q.mapArray(this.Mn(t),(r=>this.xn(e,r).next((i=>i||Ie(44426))))).next(wy)}}function Ey(n){return Yt(n,Du)}function la(n){return Yt(n,xu)}function el(n){return Yt(n,zd)}function ca(n){return Yt(n,ku)}function wy(n){Pe(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const i=n[r].indexState.offset;qd(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new Wn(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},by=41943040;class vn{static withCacheSize(e){return new vn(e,vn.DEFAULT_COLLECTION_PERCENTILE,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(n,e,t){const r=n.store(Tr),i=n.store(zo),s=[],o=IDBKeyRange.only(t.batchId);let l=0;const c=r.ee({range:o},((g,v,w)=>(l++,w.delete())));s.push(c.next((()=>{Pe(l===1,47070,{batchId:t.batchId})})));const d=[];for(const g of t.mutations){const v=kg(e,g.key.path,t.batchId);s.push(i.delete(v)),d.push(g.key)}return q.waitFor(s).next((()=>d))}function Zc(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw Ie(14731);e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn.DEFAULT_COLLECTION_PERCENTILE=10,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vn.DEFAULT=new vn(by,vn.DEFAULT_COLLECTION_PERCENTILE,vn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vn.DISABLED=new vn(-1,0,0);class eh{constructor(e,t,r,i){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=i,this.Xn={}}static wt(e,t,r,i){Pe(e.uid!=="",64387);const s=e.isAuthenticated()?e.uid:"";return new eh(s,t,r,i)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Hi(e).ee({index:Vs,range:r},((i,s,o)=>{t=!1,o.done()})).next((()=>t))}addMutationBatch(e,t,r,i){const s=ha(e),o=Hi(e);return o.add({}).next((l=>{Pe(typeof l=="number",49019);const c=new hf(l,t,r,i),d=(function(M,Y,J){const X=J.baseMutations.map((Re=>Yu(M.yt,Re))),ve=J.mutations.map((Re=>Yu(M.yt,Re)));return{userId:Y,batchId:J.batchId,localWriteTimeMs:J.localWriteTime.toMillis(),baseMutations:X,mutations:ve}})(this.serializer,this.userId,c),g=[];let v=new ot(((w,M)=>Ve(w.canonicalString(),M.canonicalString())));for(const w of i){const M=kg(this.userId,w.key.path,l);v=v.add(w.key.path.popLast()),g.push(o.put(d)),g.push(s.put(M,UA))}return v.forEach((w=>{g.push(this.indexManager.addToCollectionParentIndex(e,w))})),e.addOnCommittedListener((()=>{this.Xn[l]=c.keys()})),q.waitFor(g).next((()=>c))}))}lookupMutationBatch(e,t){return Hi(e).get(t).next((r=>r?(Pe(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),Ks(this.serializer,r)):null))}er(e,t){return this.Xn[t]?q.resolve(this.Xn[t]):this.lookupMutationBatch(e,t).next((r=>{if(r){const i=r.keys();return this.Xn[t]=i,i}return null}))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Hi(e).ee({index:Vs,range:i},((o,l,c)=>{l.userId===this.userId&&(Pe(l.batchId>=r,47524,{tr:r}),s=Ks(this.serializer,l)),c.done()})).next((()=>s))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=Bi;return Hi(e).ee({index:Vs,range:t,reverse:!0},((i,s,o)=>{r=s.batchId,o.done()})).next((()=>r))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Bi],[this.userId,Number.POSITIVE_INFINITY]);return Hi(e).J(Vs,t).next((r=>r.map((i=>Ks(this.serializer,i)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=Ec(this.userId,t.path),i=IDBKeyRange.lowerBound(r),s=[];return ha(e).ee({range:i},((o,l,c)=>{const[d,g,v]=o,w=Br(g);if(d===this.userId&&t.path.isEqual(w))return Hi(e).get(v).next((M=>{if(!M)throw Ie(61480,{nr:o,batchId:v});Pe(M.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:M.userId,batchId:v}),s.push(Ks(this.serializer,M))}));c.done()})).next((()=>s))}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ot(Ve);const i=[];return t.forEach((s=>{const o=Ec(this.userId,s.path),l=IDBKeyRange.lowerBound(o),c=ha(e).ee({range:l},((d,g,v)=>{const[w,M,Y]=d,J=Br(M);w===this.userId&&s.path.isEqual(J)?r=r.add(Y):v.done()}));i.push(c)})),q.waitFor(i).next((()=>this.rr(e,r)))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1,s=Ec(this.userId,r),o=IDBKeyRange.lowerBound(s);let l=new ot(Ve);return ha(e).ee({range:o},((c,d,g)=>{const[v,w,M]=c,Y=Br(w);v===this.userId&&r.isPrefixOf(Y)?Y.length===i&&(l=l.add(M)):g.done()})).next((()=>this.rr(e,l)))}rr(e,t){const r=[],i=[];return t.forEach((s=>{i.push(Hi(e).get(s).next((o=>{if(o===null)throw Ie(35274,{batchId:s});Pe(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:s}),r.push(Ks(this.serializer,o))})))})),q.waitFor(i).next((()=>r))}removeMutationBatch(e,t){return Sy(e.le,this.userId,t).next((r=>(e.addOnCommittedListener((()=>{this.ir(t.batchId)})),q.forEach(r,(i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))))}ir(e){delete this.Xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return q.resolve();const r=IDBKeyRange.lowerBound((function(o){return[o]})(this.userId)),i=[];return ha(e).ee({range:r},((s,o,l)=>{if(s[0]===this.userId){const c=Br(s[1]);i.push(c)}else l.done()})).next((()=>{Pe(i.length===0,56720,{sr:i.map((s=>s.canonicalString()))})}))}))}containsKey(e,t){return Py(e,this.userId,t)}_r(e){return Ry(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:Bi,lastStreamToken:""}))}}function Py(n,e,t){const r=Ec(e,t.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return ha(n).ee({range:s,X:!0},((l,c,d)=>{const[g,v,w]=l;g===e&&v===i&&(o=!0),d.done()})).next((()=>o))}function Hi(n){return Yt(n,Tr)}function ha(n){return Yt(n,zo)}function Ry(n){return Yt(n,Ru)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Gs(0)}static cr(){return new Gs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.lr(e).next((t=>{const r=new Gs(t.highestTargetId);return t.highestTargetId=r.next(),this.hr(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.lr(e).next((t=>ke.fromTimestamp(new st(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.lr(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,r){return this.lr(e).next((i=>(i.highestListenSequenceNumber=t,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.hr(e,i))))}addTargetData(e,t){return this.Pr(e,t).next((()=>this.lr(e).next((r=>(r.targetCount+=1,this.Tr(t,r),this.hr(e,r))))))}updateTargetData(e,t){return this.Pr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>da(e).delete(t.targetId))).next((()=>this.lr(e))).next((r=>(Pe(r.targetCount>0,8065),r.targetCount-=1,this.hr(e,r))))}removeTargets(e,t,r){let i=0;const s=[];return da(e).ee(((o,l)=>{const c=Ju(l);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(i++,s.push(this.removeTargetData(e,c)))})).next((()=>q.waitFor(s))).next((()=>i))}forEachTarget(e,t){return da(e).ee(((r,i)=>{const s=Ju(i);t(s)}))}lr(e){return Cy(e).get(bc).next((t=>(Pe(t!==null,2888),t)))}hr(e,t){return Cy(e).put(bc,t)}Pr(e,t){return da(e).put(ly(this.serializer,t))}Tr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.lr(e).next((t=>t.targetCount))}getTargetData(e,t){const r=Us(t),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return da(e).ee({range:i,index:Og},((o,l,c)=>{const d=Ju(l);Uu(t,d.target)&&(s=d,c.done())})).next((()=>s))}addMatchingKeys(e,t,r){const i=[],s=Qi(e);return t.forEach((o=>{const l=_n(o.path);i.push(s.put({targetId:r,path:l})),i.push(this.referenceDelegate.addReference(e,r,o))})),q.waitFor(i)}removeMatchingKeys(e,t,r){const i=Qi(e);return q.forEach(t,(s=>{const o=_n(s.path);return q.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])}))}removeMatchingKeysForTargetId(e,t){const r=Qi(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),i=Qi(e);let s=Be();return i.ee({range:r,X:!0},((o,l,c)=>{const d=Br(o[1]),g=new de(d);s=s.add(g)})).next((()=>s))}containsKey(e,t){const r=_n(t.path),i=IDBKeyRange.bound([r],[pg(r)],!1,!0);let s=0;return Qi(e).ee({index:Kd,X:!0,range:i},(([o,l],c,d)=>{o!==0&&(s++,d.done())})).next((()=>s>0))}At(e,t){return da(e).get(t).next((r=>r?Ju(r):null))}}function da(n){return Yt(n,Wo)}function Cy(n){return Yt(n,Ms)}function Qi(n){return Yt(n,Go)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy="LruGarbageCollector",ky=1048576;function xy([n,e],[t,r]){const i=Ve(n,t);return i===0?Ve(e,r):i}class oS{constructor(e){this.Ir=e,this.buffer=new ot(xy),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();xy(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Oy{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){ne(Dy,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(()=>H(this,null,function*(){this.Rr=null;try{yield this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ui(t)?ne(Dy,"Ignoring IndexedDB error during garbage collection: ",t):yield Fi(t)}yield this.Vr(3e5)})))}}class aS{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return q.resolve(Ln.ce);const r=new oS(t);return this.mr.forEachTarget(e,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),q.resolve(Ay)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ay):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,i,s,o,l,c,d;const g=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((v=>(v>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),i=this.params.maximumSequenceNumbersToCollect):i=v,o=Date.now(),this.nthSequenceNumber(e,i)))).next((v=>(r=v,l=Date.now(),this.removeTargets(e,r,t)))).next((v=>(s=v,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((v=>(d=Date.now(),Uo()<=$e.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-g}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(c-l)+`ms
	Removed ${v} documents in `+(d-c)+`ms
Total Duration: ${d-g}ms`),q.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:v}))))}}function Ny(n,e){return new aS(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,t){this.db=e,this.garbageCollector=Ny(this,t)}gr(e){const t=this.wr(e);return this.db.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}pr(e,t){return this.Sr(e,((r,i)=>t(i)))}addReference(e,t,r){return th(e,r)}removeReference(e,t,r){return th(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return th(e,t)}br(e,t){return(function(i,s){let o=!1;return Ry(i).te((l=>Py(i,l,s).next((c=>(c&&(o=!0),q.resolve(!c)))))).next((()=>o))})(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Sr(e,((o,l)=>{if(l<=t){const c=this.br(e,o).next((d=>{if(!d)return s++,r.getEntry(e,o).next((()=>(r.removeEntry(o,ke.min()),Qi(e).delete((function(v){return[0,_n(v.path)]})(o)))))}));i.push(c)}})).next((()=>q.waitFor(i))).next((()=>r.apply(e))).next((()=>s))}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return th(e,t)}Sr(e,t){const r=Qi(e);let i,s=Ln.ce;return r.ee({index:Kd},(([o,l],{path:c,sequenceNumber:d})=>{o===0?(s!==Ln.ce&&t(new de(Br(i)),s),s=d,i=c):s=Ln.ce})).next((()=>{s!==Ln.ce&&t(new de(Br(i)),s)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function th(n,e){return Qi(n).put((function(r,i){return{targetId:0,path:_n(r.path),sequenceNumber:i}})(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(){this.changes=new di((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?q.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Hs(e).put(r)}removeEntry(e,t,r){return Hs(e).delete((function(s,o){const l=s.path.toArray();return[l.slice(0,l.length-2),l[l.length-2],Gc(o),l[l.length-1]]})(t,r))}updateMetadata(e,t){return this.getMetadata(e).next((r=>(r.byteSize+=t,this.Dr(e,r))))}getEntry(e,t){let r=Et.newInvalidDocument(t);return Hs(e).ee({index:Ac,range:IDBKeyRange.only(tl(t))},((i,s)=>{r=this.Cr(t,s)})).next((()=>r))}vr(e,t){let r={size:0,document:Et.newInvalidDocument(t)};return Hs(e).ee({index:Ac,range:IDBKeyRange.only(tl(t))},((i,s)=>{r={document:this.Cr(t,s),size:Zc(s)}})).next((()=>r))}getEntries(e,t){let r=Un();return this.Fr(e,t,((i,s)=>{const o=this.Cr(i,s);r=r.insert(i,o)})).next((()=>r))}Mr(e,t){let r=Un(),i=new _t(de.comparator);return this.Fr(e,t,((s,o)=>{const l=this.Cr(s,o);r=r.insert(s,l),i=i.insert(s,Zc(o))})).next((()=>({documents:r,Or:i})))}Fr(e,t,r){if(t.isEmpty())return q.resolve();let i=new ot(Uy);t.forEach((c=>i=i.add(c)));const s=IDBKeyRange.bound(tl(i.first()),tl(i.last())),o=i.getIterator();let l=o.getNext();return Hs(e).ee({index:Ac,range:s},((c,d,g)=>{const v=de.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;l&&Uy(l,v)<0;)r(l,null),l=o.getNext();l&&l.isEqual(v)&&(r(l,d),l=o.hasNext()?o.getNext():null),l?g.j(tl(l)):g.done()})).next((()=>{for(;l;)r(l,null),l=o.hasNext()?o.getNext():null}))}getDocumentsMatchingQuery(e,t,r,i,s){const o=t.path,l=[o.popLast().toArray(),o.lastSegment(),Gc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],c=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Hs(e).J(IDBKeyRange.bound(l,c,!0)).next((d=>{s==null||s.incrementDocumentReadCount(d.length);let g=Un();for(const v of d){const w=this.Cr(de.fromSegments(v.prefixPath.concat(v.collectionGroup,v.documentId)),v);w.isFoundDocument()&&(qu(t,w)||i.has(w.key))&&(g=g.insert(w.key,w))}return g}))}getAllFromCollectionGroup(e,t,r,i){let s=Un();const o=Fy(t,r),l=Fy(t,Wn.max());return Hs(e).ee({index:xg,range:IDBKeyRange.bound(o,l,!0)},((c,d,g)=>{const v=this.Cr(de.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);s=s.insert(v.key,v),s.size===i&&g.done()})).next((()=>s))}newChangeBuffer(e){return new cS(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return Ly(e).get($d).next((t=>(Pe(!!t,20021),t)))}Dr(e,t){return Ly(e).put($d,t)}Cr(e,t){if(t){const r=Qb(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(ke.min())))return r}return Et.newInvalidDocument(e)}}function My(n){return new lS(n)}class cS extends Vy{constructor(e,t){super(),this.Nr=e,this.trackRemovals=t,this.Br=new di((r=>r.toString()),((r,i)=>r.isEqual(i)))}applyChanges(e){const t=[];let r=0,i=new ot(((s,o)=>Ve(s.canonicalString(),o.canonicalString())));return this.changes.forEach(((s,o)=>{const l=this.Br.get(s);if(t.push(this.Nr.removeEntry(e,s,l.readTime)),o.isValidDocument()){const c=uy(this.Nr.serializer,o);i=i.add(s.path.popLast());const d=Zc(c);r+=d-l.size,t.push(this.Nr.addEntry(e,s,c))}else if(r-=l.size,this.trackRemovals){const c=uy(this.Nr.serializer,o.convertToNoDocument(ke.min()));t.push(this.Nr.addEntry(e,s,c))}})),i.forEach((s=>{t.push(this.Nr.indexManager.addToCollectionParentIndex(e,s))})),t.push(this.Nr.updateMetadata(e,r)),q.waitFor(t)}getFromCache(e,t){return this.Nr.vr(e,t).next((r=>(this.Br.set(t,{size:r.size,readTime:r.document.readTime}),r.document)))}getAllFromCache(e,t){return this.Nr.Mr(e,t).next((({documents:r,Or:i})=>(i.forEach(((s,o)=>{this.Br.set(s,{size:o,readTime:r.get(s).readTime})})),r)))}}function Ly(n){return Yt(n,Cu)}function Hs(n){return Yt(n,wc)}function tl(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Fy(n,e){const t=e.documentKey.path.toArray();return[n,Gc(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Uy(n,e){const t=n.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<r.length-2;++s)if(i=Ve(t[s],r[s]),i)return i;return i=Ve(t.length,r.length),i||(i=Ve(t[t.length-2],r[r.length-2]),i||Ve(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&zu(r.mutation,i,Fn.empty(),st.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Be()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Be()){const i=jr();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((s=>{let o=ju();return s.forEach(((l,c)=>{o=o.insert(l,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const r=jr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Be())))}populateOverlays(e,t,r){const i=[];return r.forEach((s=>{t.has(s)||i.push(s)})),this.documentOverlayCache.getOverlays(e,i).next((s=>{s.forEach(((o,l)=>{t.set(o,l)}))}))}computeViews(e,t,r,i){let s=Un();const o=$u(),l=(function(){return $u()})();return t.forEach(((c,d)=>{const g=r.get(d.key);i.has(d.key)&&(g===void 0||g.mutation instanceof fi)?s=s.insert(d.key,d):g!==void 0?(o.set(d.key,g.mutation.getFieldMask()),zu(g.mutation,d,g.mutation.getFieldMask(),st.now())):o.set(d.key,Fn.empty())})),this.recalculateAndSaveOverlays(e,s).next((c=>(c.forEach(((d,g)=>o.set(d,g))),t.forEach(((d,g)=>{var v;return l.set(d,new hS(g,(v=o.get(d))!=null?v:null))})),l)))}recalculateAndSaveOverlays(e,t){const r=$u();let i=new _t(((o,l)=>o-l)),s=Be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const l of o)l.keys().forEach((c=>{const d=t.get(c);if(d===null)return;let g=r.get(c)||Fn.empty();g=l.applyToLocalView(d,g),r.set(c,g);const v=(i.get(l.batchId)||Be()).add(c);i=i.insert(l.batchId,v)}))})).next((()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),d=c.key,g=c.value,v=S_();g.forEach((w=>{if(!s.has(w)){const M=N_(t.get(w),r.get(w));M!==null&&v.set(w,M),s=s.add(w)}})),o.push(this.documentOverlayCache.saveOverlays(e,d,v))}return q.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(o){return de.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):of(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):q.resolve(jr());let l=qo,c=s;return o.next((d=>q.forEach(d,((g,v)=>(l<v.largestBatchId&&(l=v.largestBatchId),s.get(g)?q.resolve():this.remoteDocumentCache.getEntry(e,g).next((w=>{c=c.insert(g,w)}))))).next((()=>this.populateOverlays(e,d,s))).next((()=>this.computeViews(e,c,d,Be()))).next((g=>({batchId:l,changes:b_(g)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new de(t)).next((r=>{let i=ju();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=ju();return this.indexManager.getCollectionParents(e,s).next((l=>q.forEach(l,(c=>{const d=(function(v,w){return new hi(w,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)})(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next((g=>{g.forEach(((v,w)=>{o=o.insert(v,w)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i)))).next((o=>{s.forEach(((c,d)=>{const g=d.getKey();o.get(g)===null&&(o=o.insert(g,Et.newInvalidDocument(g)))}));let l=ju();return o.forEach(((c,d)=>{const g=s.get(c);g!==void 0&&zu(g.mutation,d,Fn.empty(),st.now()),qu(t,d)&&(l=l.insert(c,d))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return q.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:jt(i.createTime)}})(t)),q.resolve()}getNamedQuery(e,t){return q.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(i){return{name:i.name,query:Hc(i.bundledQuery),readTime:jt(i.readTime)}})(t)),q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(){this.overlays=new _t(de.comparator),this.qr=new Map}getOverlay(e,t){return q.resolve(this.overlays.get(t))}getOverlays(e,t){const r=jr();return q.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&r.set(i,s)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,s)=>{this.St(e,t,s)})),q.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((s=>this.overlays=this.overlays.remove(s))),this.qr.delete(r)),q.resolve()}getOverlaysForCollection(e,t,r){const i=jr(),s=t.length+1,o=new de(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,d=c.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return q.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new _t(((d,g)=>d-g));const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let g=s.get(d.largestBatchId);g===null&&(g=jr(),s=s.insert(d.largestBatchId,g)),g.set(d.getKey(),d)}}const l=jr(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((d,g)=>l.set(d,g))),!(l.size()>=i)););return q.resolve(l)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new ff(t,r));let s=this.qr.get(t);s===void 0&&(s=Be(),this.qr.set(t,s)),this.qr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(){this.sessionToken=Ot.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(){this.Qr=new ot(on.$r),this.Ur=new ot(on.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new on(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new on(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new de(new He([])),r=new on(t,e),i=new on(t,e+1),s=[];return this.Ur.forEachInRange([r,i],(o=>{this.Gr(o),s.push(o.key)})),s}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new de(new He([])),r=new on(t,e),i=new on(t,e+1);let s=Be();return this.Ur.forEachInRange([r,i],(o=>{s=s.add(o.key)})),s}containsKey(e){const t=new on(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class on{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return de.comparator(e.key,t.key)||Ve(e.Yr,t.Yr)}static Kr(e,t){return Ve(e.Yr,t.Yr)||de.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new ot(on.$r)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hf(s,t,r,i);this.mutationQueue.push(o);for(const l of i)this.Zr=this.Zr.add(new on(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return q.resolve(o)}lookupMutationBatch(e,t){return q.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ei(r),s=i<0?0:i;return q.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?Bi:this.tr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new on(t,0),i=new on(t,Number.POSITIVE_INFINITY),s=[];return this.Zr.forEachInRange([r,i],(o=>{const l=this.Xr(o.Yr);s.push(l)})),q.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ot(Ve);return t.forEach((i=>{const s=new on(i,0),o=new on(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([s,o],(l=>{r=r.add(l.Yr)}))})),q.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;de.isDocumentKey(s)||(s=s.child(""));const o=new on(new de(s),0);let l=new ot(Ve);return this.Zr.forEachWhile((c=>{const d=c.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(c.Yr)),!0)}),o),q.resolve(this.ti(l))}ti(e){const t=[];return e.forEach((r=>{const i=this.Xr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){Pe(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return q.forEach(t.mutations,(i=>{const s=new on(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new on(t,0),i=this.Zr.firstAfterOrEqual(r);return q.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){this.ri=e,this.docs=(function(){return new _t(de.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return q.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(t))}getEntries(e,t){let r=Un();return t.forEach((i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Et.newInvalidDocument(i))})),q.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Un();const o=t.path,l=new de(o.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:d,value:{document:g}}=c.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||qd(Eg(g),r)<=0||(i.has(g.key)||qu(t,g))&&(s=s.insert(g.key,g.mutableCopy()))}return q.resolve(s)}getAllFromCollectionGroup(e,t,r,i){Ie(9500)}ii(e,t){return q.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new _S(this)}getSize(e){return q.resolve(this.size)}}class _S extends Vy{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)})),q.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e){this.persistence=e,this.si=new di((t=>Us(t)),Uu),this.lastRemoteSnapshotVersion=ke.min(),this.highestTargetId=0,this.oi=0,this._i=new Sf,this.targetCount=0,this.ai=Gs.ur()}forEachTarget(e,t){return this.si.forEach(((r,i)=>t(i))),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),q.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Gs(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,q.resolve()}updateTargetData(e,t){return this.Pr(t),q.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.si.forEach(((o,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.si.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)})),q.waitFor(s).next((()=>i))}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return q.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),q.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((o=>{s.push(i.markPotentiallyOrphaned(e,o))})),q.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),q.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return q.resolve(r)}containsKey(e,t){return q.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,t){this.ui={},this.overlays={},this.ci=new Ln(0),this.li=!1,this.li=!0,this.hi=new pS,this.referenceDelegate=e(this),this.Pi=new yS(this),this.indexManager=new rS,this.remoteDocumentCache=(function(i){return new gS(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new ay(t),this.Ii=new dS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fS,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new mS(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){ne("MemoryPersistence","Starting transaction:",e);const i=new vS(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((s=>this.referenceDelegate.di(i).next((()=>s)))).toPromise().then((s=>(i.raiseOnCommittedEvent(),s)))}Ai(e,t){return q.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class vS extends Ag{constructor(e){super(),this.currentSequenceNumber=e}}class nh{constructor(e){this.persistence=e,this.Ri=new Sf,this.Vi=null}static mi(e){return new nh(e)}get fi(){if(this.Vi)return this.Vi;throw Ie(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),q.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),q.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),q.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((s=>this.fi.add(s.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.fi,(r=>{const i=de.fromPath(r);return this.gi(e,i).next((s=>{s||t.removeEntry(i,ke.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return q.or([()=>q.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class rh{constructor(e,t){this.persistence=e,this.pi=new di((r=>_n(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=Ny(this,t)}static mi(e,t){return new rh(e,t)}Ei(){}di(e){return q.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return q.forEach(this.pi,((r,i)=>this.br(e,r,i).next((s=>s?q.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ii(e,(o=>this.br(e,o,t).next((l=>{l||(r++,s.removeEntry(o,ke.min()))})))).next((()=>s.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),q.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),q.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),q.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),q.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Oc(e.data.value)),t}br(e,t,r){return q.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return q.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e){this.serializer=e}k(e,t,r,i){const s=new Ic("createOrUpgrade",t);r<1&&i>=1&&((function(c){c.createObjectStore(Pu)})(e),(function(c){c.createObjectStore(Ru,{keyPath:FA}),c.createObjectStore(Tr,{keyPath:Cg,autoIncrement:!0}).createIndex(Vs,Dg,{unique:!0}),c.createObjectStore(zo)})(e),qy(e),(function(c){c.createObjectStore(Ns)})(e));let o=q.resolve();return r<3&&i>=3&&(r!==0&&((function(c){c.deleteObjectStore(Go),c.deleteObjectStore(Wo),c.deleteObjectStore(Ms)})(e),qy(e)),o=o.next((()=>(function(c){const d=c.store(Ms),g={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ke.min().toTimestamp(),targetCount:0};return d.put(bc,g)})(s)))),r<4&&i>=4&&(r!==0&&(o=o.next((()=>(function(c,d){return d.store(Tr).J().next((v=>{c.deleteObjectStore(Tr),c.createObjectStore(Tr,{keyPath:Cg,autoIncrement:!0}).createIndex(Vs,Dg,{unique:!0});const w=d.store(Tr),M=v.map((Y=>w.put(Y)));return q.waitFor(M)}))})(e,s)))),o=o.next((()=>{(function(c){c.createObjectStore(Ho,{keyPath:GA})})(e)}))),r<5&&i>=5&&(o=o.next((()=>this.yi(s)))),r<6&&i>=6&&(o=o.next((()=>((function(c){c.createObjectStore(Cu)})(e),this.wi(s))))),r<7&&i>=7&&(o=o.next((()=>this.Si(s)))),r<8&&i>=8&&(o=o.next((()=>this.bi(e,s)))),r<9&&i>=9&&(o=o.next((()=>{(function(c){c.objectStoreNames.contains("remoteDocumentChanges")&&c.deleteObjectStore("remoteDocumentChanges")})(e)}))),r<10&&i>=10&&(o=o.next((()=>this.Di(s)))),r<11&&i>=11&&(o=o.next((()=>{(function(c){c.createObjectStore(Sc,{keyPath:HA})})(e),(function(c){c.createObjectStore(Pc,{keyPath:QA})})(e)}))),r<12&&i>=12&&(o=o.next((()=>{(function(c){const d=c.createObjectStore(Rc,{keyPath:nb});d.createIndex(Gd,rb,{unique:!1}),d.createIndex(Mg,ib,{unique:!1})})(e)}))),r<13&&i>=13&&(o=o.next((()=>(function(c){const d=c.createObjectStore(wc,{keyPath:BA});d.createIndex(Ac,qA),d.createIndex(xg,jA)})(e))).next((()=>this.Ci(e,s))).next((()=>e.deleteObjectStore(Ns)))),r<14&&i>=14&&(o=o.next((()=>this.Fi(e,s)))),r<15&&i>=15&&(o=o.next((()=>(function(c){c.createObjectStore(zd,{keyPath:YA,autoIncrement:!0}).createIndex(Wd,JA,{unique:!1}),c.createObjectStore(ku,{keyPath:XA}).createIndex(Ng,ZA,{unique:!1}),c.createObjectStore(xu,{keyPath:eb}).createIndex(Vg,tb,{unique:!1})})(e)))),r<16&&i>=16&&(o=o.next((()=>{t.objectStore(ku).clear()})).next((()=>{t.objectStore(xu).clear()}))),r<17&&i>=17&&(o=o.next((()=>{(function(c){c.createObjectStore(Hd,{keyPath:sb})})(e)}))),r<18&&i>=18&&Nl()&&(o=o.next((()=>{t.objectStore(ku).clear()})).next((()=>{t.objectStore(xu).clear()}))),o}wi(e){let t=0;return e.store(Ns).ee(((r,i)=>{t+=Zc(i)})).next((()=>{const r={byteSize:t};return e.store(Cu).put($d,r)}))}yi(e){const t=e.store(Ru),r=e.store(Tr);return t.J().next((i=>q.forEach(i,(s=>{const o=IDBKeyRange.bound([s.userId,Bi],[s.userId,s.lastAcknowledgedBatchId]);return r.J(Vs,o).next((l=>q.forEach(l,(c=>{Pe(c.userId===s.userId,18650,"Cannot process batch from unexpected user",{batchId:c.batchId});const d=Ks(this.serializer,c);return Sy(e,s.userId,d).next((()=>{}))}))))}))))}Si(e){const t=e.store(Go),r=e.store(Ns);return e.store(Ms).get(bc).next((i=>{const s=[];return r.ee(((o,l)=>{const c=new He(o),d=(function(v){return[0,_n(v)]})(c);s.push(t.get(d).next((g=>g?q.resolve():(v=>t.put({targetId:0,path:_n(v),sequenceNumber:i.highestListenSequenceNumber}))(c))))})).next((()=>q.waitFor(s)))}))}bi(e,t){e.createObjectStore(Du,{keyPath:WA});const r=t.store(Du),i=new bf,s=o=>{if(i.add(o)){const l=o.lastSegment(),c=o.popLast();return r.put({collectionId:l,parent:_n(c)})}};return t.store(Ns).ee({X:!0},((o,l)=>{const c=new He(o);return s(c.popLast())})).next((()=>t.store(zo).ee({X:!0},(([o,l,c],d)=>{const g=Br(l);return s(g.popLast())}))))}Di(e){const t=e.store(Wo);return t.ee(((r,i)=>{const s=Ju(i),o=ly(this.serializer,s);return t.put(o)}))}Ci(e,t){const r=t.store(Ns),i=[];return r.ee(((s,o)=>{const l=t.store(wc),c=(function(v){return v.document?new de(He.fromString(v.document.name).popFirst(5)):v.noDocument?de.fromSegments(v.noDocument.path):v.unknownDocument?de.fromSegments(v.unknownDocument.path):Ie(36783)})(o).path.toArray(),d={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(l.put(d))})).next((()=>q.waitFor(i)))}Fi(e,t){const r=t.store(Tr),i=My(this.serializer),s=new Pf(nh.mi,this.serializer.yt);return r.J().next((o=>{const l=new Map;return o.forEach((c=>{var d;let g=(d=l.get(c.userId))!=null?d:Be();Ks(this.serializer,c).keys().forEach((v=>g=g.add(v))),l.set(c.userId,g)})),q.forEach(l,((c,d)=>{const g=new rn(d),v=Qc.wt(this.serializer,g),w=s.getIndexManager(g),M=eh.wt(g,this.serializer,w,s.referenceDelegate);return new By(i,M,v,w).recalculateAndSaveOverlaysForDocumentKeys(new Yd(t,Ln.ce),c).next()}))}))}}function qy(n){n.createObjectStore(Go,{keyPath:KA}).createIndex(Kd,zA,{unique:!0}),n.createObjectStore(Wo,{keyPath:"targetId"}).createIndex(Og,$A,{unique:!0}),n.createObjectStore(Ms)}const Yi="IndexedDbPersistence",Rf=18e5,Cf=5e3,Df="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",jy="main";class kf{constructor(e,t,r,i,s,o,l,c,d,g,v=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Mi=s,this.window=o,this.document=l,this.xi=d,this.Oi=g,this.Ni=v,this.ci=null,this.li=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Bi=null,this.inForeground=!1,this.Li=null,this.ki=null,this.qi=Number.NEGATIVE_INFINITY,this.Qi=w=>Promise.resolve(),!kf.v())throw new Z(K.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new uS(this,i),this.$i=t+jy,this.serializer=new ay(c),this.Ui=new Ur(this.$i,this.Ni,new IS(this.serializer)),this.hi=new Jb,this.Pi=new sS(this.referenceDelegate,this.serializer),this.remoteDocumentCache=My(this.serializer),this.Ii=new Yb,this.window&&this.window.localStorage?this.Ki=this.window.localStorage:(this.Ki=null,g===!1&&qt(Yi,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Wi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Z(K.FAILED_PRECONDITION,Df);return this.Gi(),this.zi(),this.ji(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Pi.getHighestSequenceNumber(e)))})).then((e=>{this.ci=new Ln(e,this.xi)})).then((()=>{this.li=!0})).catch((e=>(this.Ui&&this.Ui.close(),Promise.reject(e))))}Ji(e){return this.Qi=t=>H(this,null,function*(){if(this.started)return e(t)}),e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ui.$((t=>H(this,null,function*(){t.newVersion===null&&(yield e())})))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Mi.enqueueAndForget((()=>H(this,null,function*(){this.started&&(yield this.Wi())}))))}Wi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>ih(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.Hi(e).next((t=>{t||(this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))))}))})).next((()=>this.Yi(e))).next((t=>this.isPrimary&&!t?this.Zi(e).next((()=>!1)):!!t&&this.Xi(e).next((()=>!0)))))).catch((e=>{if(Ui(e))return ne(Yi,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return ne(Yi,"Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Mi.enqueueRetryable((()=>this.Qi(e))),this.isPrimary=e}))}Hi(e){return nl(e).get(Ko).next((t=>q.resolve(this.es(t))))}ts(e){return ih(e).delete(this.clientId)}ns(){return H(this,null,function*(){if(this.isPrimary&&!this.rs(this.qi,Rf)){this.qi=Date.now();const e=yield this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const r=Yt(t,Ho);return r.J().next((i=>{const s=this.ss(i,Rf),o=i.filter((l=>s.indexOf(l)===-1));return q.forEach(o,(l=>r.delete(l.clientId))).next((()=>o))}))})).catch((()=>[]));if(this.Ki)for(const t of e)this.Ki.removeItem(this._s(t.clientId))}})}ji(){this.ki=this.Mi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Wi().then((()=>this.ns())).then((()=>this.ji()))))}es(e){return!!e&&e.ownerId===this.clientId}Yi(e){return this.Oi?q.resolve(!0):nl(e).get(Ko).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,Cf)&&!this.us(t.ownerId)){if(this.es(t)&&this.networkEnabled)return!0;if(!this.es(t)){if(!t.allowTabSynchronization)throw new Z(K.FAILED_PRECONDITION,Df);return!1}}return!(!this.networkEnabled||!this.inForeground)||ih(e).J().next((r=>this.ss(r,Cf).find((i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,l=this.networkEnabled===i.networkEnabled;if(s||o&&l)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&ne(Yi,`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}shutdown(){return H(this,null,function*(){this.li=!1,this.cs(),this.ki&&(this.ki.cancel(),this.ki=null),this.ls(),this.hs(),yield this.Ui.runTransaction("shutdown","readwrite",[Pu,Ho],(e=>{const t=new Yd(e,Ln.ce);return this.Zi(t).next((()=>this.ts(t)))})),this.Ui.close(),this.Ps()})}ss(e,t){return e.filter((r=>this.rs(r.updateTimeMs,t)&&!this.us(r.clientId)))}Ts(){return this.runTransaction("getActiveClients","readonly",(e=>ih(e).J().next((t=>this.ss(t,Rf).map((r=>r.clientId))))))}get started(){return this.li}getGlobalsCache(){return this.hi}getMutationQueue(e,t){return eh.wt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new iS(e,this.serializer.yt.databaseId)}getDocumentOverlayCache(e){return Qc.wt(this.serializer,e)}getBundleCache(){return this.Ii}runTransaction(e,t,r){ne(Yi,"Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=(function(c){return c===18?ub:c===17?Bg:c===16?ab:c===15?Qd:c===14?Ug:c===13?Fg:c===12?ob:c===11?Lg:void Ie(60245)})(this.Ni);let o;return this.Ui.runTransaction(e,i,s,(l=>(o=new Yd(l,this.ci?this.ci.next():Ln.ce),t==="readwrite-primary"?this.Hi(o).next((c=>!!c||this.Yi(o))).next((c=>{if(!c)throw qt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Mi.enqueueRetryable((()=>this.Qi(!1))),new Z(K.FAILED_PRECONDITION,wg);return r(o)})).next((c=>this.Xi(o).next((()=>c)))):this.Is(o).next((()=>r(o)))))).then((l=>(o.raiseOnCommittedEvent(),l)))}Is(e){return nl(e).get(Ko).next((t=>{if(t!==null&&this.rs(t.leaseTimestampMs,Cf)&&!this.us(t.ownerId)&&!this.es(t)&&!(this.Oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new Z(K.FAILED_PRECONDITION,Df)}))}Xi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return nl(e).put(Ko,t)}static v(){return Ur.v()}Zi(e){const t=nl(e);return t.get(Ko).next((r=>this.es(r)?(ne(Yi,"Releasing primary lease."),t.delete(Ko)):q.resolve()))}rs(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(qt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Li=()=>{this.Mi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Wi())))},this.document.addEventListener("visibilitychange",this.Li),this.inForeground=this.document.visibilityState==="visible")}ls(){this.Li&&(this.document.removeEventListener("visibilitychange",this.Li),this.Li=null)}zi(){var e;typeof((e=this.window)==null?void 0:e.addEventListener)=="function"&&(this.Bi=()=>{this.cs();const t=/(?:Version|Mobile)\/1[456]/;Ol()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Mi.enterRestrictedMode(!0),this.Mi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Bi))}hs(){this.Bi&&(this.window.removeEventListener("pagehide",this.Bi),this.Bi=null)}us(e){var t;try{const r=((t=this.Ki)==null?void 0:t.getItem(this._s(e)))!==null;return ne(Yi,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return qt(Yi,"Failed to get zombied client id.",r),!1}}cs(){if(this.Ki)try{this.Ki.setItem(this._s(this.clientId),String(Date.now()))}catch(e){qt("Failed to set zombie client id.",e)}}Ps(){if(this.Ki)try{this.Ki.removeItem(this._s(this.clientId))}catch(e){}}_s(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function nl(n){return Yt(n,Pu)}function ih(n){return Yt(n,Ho)}function xf(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=i}static As(e,t){let r=Be(),i=Be();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Of(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Ol()?8:bg(dt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.ys(e,t).next((o=>{s.result=o})).next((()=>{if(!s.result)return this.ws(e,t,i,r).next((o=>{s.result=o}))})).next((()=>{if(s.result)return;const o=new TS;return this.Ss(e,t,o).next((l=>{if(s.result=l,this.Vs)return this.bs(e,t,o,l.size)}))})).next((()=>s.result))}bs(e,t,r,i){return r.documentReadCount<this.fs?(Uo()<=$e.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",ta(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),q.resolve()):(Uo()<=$e.DEBUG&&ne("QueryEngine","Query:",ta(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Uo()<=$e.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",ta(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yn(t))):q.resolve())}ys(e,t){if(y_(t))return q.resolve(null);let r=yn(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=Fc(t,null,"F"),r=yn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((s=>{const o=Be(...s);return this.ps.getDocuments(e,o).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const d=this.Ds(t,l);return this.Cs(t,d,o,c.readTime)?this.ys(e,Fc(t,null,"F")):this.vs(e,d,t,c)}))))})))))}ws(e,t,r,i){return y_(t)||i.isEqual(ke.min())?q.resolve(null):this.ps.getDocuments(e,r).next((s=>{const o=this.Ds(t,s);return this.Cs(t,o,r,i)?q.resolve(null):(Uo()<=$e.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ta(t)),this.vs(e,o,t,Tg(i,qo)).next((l=>l)))}))}Ds(e,t){let r=new ot(w_(e));return t.forEach(((i,s)=>{qu(e,s)&&(r=r.add(s))})),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,t,r){return Uo()<=$e.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",ta(t)),this.ps.getDocumentsMatchingQuery(e,t,Wn.min(),r)}vs(e,t,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next((s=>(t.forEach((o=>{s=s.insert(o.key,o)})),s)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf="LocalStore",ES=3e8;class wS{constructor(e,t,r,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new _t(Ve),this.xs=new di((s=>Us(s)),Uu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new By(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function Ky(n,e,t,r){return new wS(n,e,t,r)}function zy(n,e){return H(this,null,function*(){const t=fe(n);return yield t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((s=>(i=s,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((s=>{const o=[],l=[];let c=Be();for(const d of i){o.push(d.batchId);for(const g of d.mutations)c=c.add(g.key)}for(const d of s){l.push(d.batchId);for(const g of d.mutations)c=c.add(g.key)}return t.localDocuments.getDocuments(r,c).next((d=>({Ls:d,removedBatchIds:o,addedBatchIds:l})))}))}))})}function AS(n,e){const t=fe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=e.batch.keys(),s=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(l,c,d,g){const v=d.batch,w=v.keys();let M=q.resolve();return w.forEach((Y=>{M=M.next((()=>g.getEntry(c,Y))).next((J=>{const X=d.docVersions.get(Y);Pe(X!==null,48541),J.version.compareTo(X)<0&&(v.applyToRemoteDocument(J,d),J.isValidDocument()&&(J.setReadTime(d.commitVersion),g.addEntry(J)))}))})),M.next((()=>l.mutationQueue.removeMutationBatch(c,v)))})(t,r,e,s).next((()=>s.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=Be();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(c=c.add(l.batch.mutations[d].key));return c})(e)))).next((()=>t.localDocuments.getDocuments(r,i)))}))}function Wy(n){const e=fe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function bS(n,e){const t=fe(n),r=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(s=>{const o=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const l=[];e.targetChanges.forEach(((g,v)=>{const w=i.get(v);if(!w)return;l.push(t.Pi.removeMatchingKeys(s,g.removedDocuments,v).next((()=>t.Pi.addMatchingKeys(s,g.addedDocuments,v))));let M=w.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(v)!==null?M=M.withResumeToken(Ot.EMPTY_BYTE_STRING,ke.min()).withLastLimboFreeSnapshotVersion(ke.min()):g.resumeToken.approximateByteSize()>0&&(M=M.withResumeToken(g.resumeToken,r)),i=i.insert(v,M),(function(J,X,ve){return J.resumeToken.approximateByteSize()===0||X.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=ES?!0:ve.addedDocuments.size+ve.modifiedDocuments.size+ve.removedDocuments.size>0})(w,M,g)&&l.push(t.Pi.updateTargetData(s,M))}));let c=Un(),d=Be();if(e.documentUpdates.forEach((g=>{e.resolvedLimboDocuments.has(g)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,g))})),l.push(Gy(s,o,e.documentUpdates).next((g=>{c=g.ks,d=g.qs}))),!r.isEqual(ke.min())){const g=t.Pi.getLastRemoteSnapshotVersion(s).next((v=>t.Pi.setTargetsMetadata(s,s.currentSequenceNumber,r)));l.push(g)}return q.waitFor(l).next((()=>o.apply(s))).next((()=>t.localDocuments.getLocalViewOfDocuments(s,c,d))).next((()=>c))})).then((s=>(t.Ms=i,s)))}function Gy(n,e,t){let r=Be(),i=Be();return t.forEach((s=>r=r.add(s))),e.getEntries(n,r).next((s=>{let o=Un();return t.forEach(((l,c)=>{const d=s.get(l);c.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(ke.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):ne(Nf,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",c.version)})),{ks:o,qs:i}}))}function SS(n,e){const t=fe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Bi),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function fa(n,e){const t=fe(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.Pi.getTargetData(r,e).next((s=>s?(i=s,q.resolve(i)):t.Pi.allocateTargetId(r).next((o=>(i=new pi(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}function pa(n,e,t){return H(this,null,function*(){const r=fe(n),i=r.Ms.get(e),s=t?"readwrite":"readwrite-primary";try{t||(yield r.persistence.runTransaction("Release target",s,(o=>r.persistence.referenceDelegate.removeTarget(o,i))))}catch(o){if(!Ui(o))throw o;ne(Nf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)})}function sh(n,e,t){const r=fe(n);let i=ke.min(),s=Be();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,d,g){const v=fe(c),w=v.xs.get(g);return w!==void 0?q.resolve(v.Ms.get(w)):v.Pi.getTargetData(d,g)})(r,o,yn(e)).next((l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,l.targetId).next((c=>{s=c}))})).next((()=>r.Fs.getDocumentsMatchingQuery(o,e,t?i:ke.min(),t?s:Be()))).next((l=>(Yy(r,E_(e),l),{documents:l,Qs:s})))))}function Hy(n,e){const t=fe(n),r=fe(t.Pi),i=t.Ms.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",(s=>r.At(s,e).next((o=>o?o.target:null))))}function Qy(n,e){const t=fe(n),r=t.Os.get(e)||ke.min();return t.persistence.runTransaction("Get new document changes","readonly",(i=>t.Ns.getAllFromCollectionGroup(i,e,Tg(r,qo),Number.MAX_SAFE_INTEGER))).then((i=>(Yy(t,e,i),i)))}function Yy(n,e,t){let r=n.Os.get(e)||ke.min();t.forEach(((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)})),n.Os.set(e,r)}function PS(n,e,t,r){return H(this,null,function*(){const i=fe(n);let s=Be(),o=Un();for(const d of t){const g=e.$s(d.metadata.name);d.document&&(s=s.add(g));const v=e.Us(d);v.setReadTime(e.Ks(d.metadata.readTime)),o=o.insert(g,v)}const l=i.Ns.newChangeBuffer({trackRemovals:!0}),c=yield fa(i,(function(g){return yn(Zo(He.fromString(`__bundle__/docs/${g}`)))})(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",(d=>Gy(d,l,o).next((g=>(l.apply(d),g))).next((g=>i.Pi.removeMatchingKeysForTargetId(d,c.targetId).next((()=>i.Pi.addMatchingKeys(d,s,c.targetId))).next((()=>i.localDocuments.getLocalViewOfDocuments(d,g.ks,g.qs))).next((()=>g.ks))))))})}function RS(n,e){return H(this,arguments,function*(t,r,i=Be()){const s=yield fa(t,yn(Hc(r.bundledQuery))),o=fe(t);return o.persistence.runTransaction("Save named query","readwrite",(l=>{const c=jt(r.readTime);if(s.snapshotVersion.compareTo(c)>=0)return o.Ii.saveNamedQuery(l,r);const d=s.withResumeToken(Ot.EMPTY_BYTE_STRING,c);return o.Ms=o.Ms.insert(d.targetId,d),o.Pi.updateTargetData(l,d).next((()=>o.Pi.removeMatchingKeysForTargetId(l,s.targetId))).next((()=>o.Pi.addMatchingKeys(l,i,s.targetId))).next((()=>o.Ii.saveNamedQuery(l,r)))}))})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="firestore_clients";function Xy(n,e){return`${Jy}_${n}_${e}`}const Zy="firestore_mutations";function ev(n,e,t){let r=`${Zy}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const tv="firestore_targets";function Vf(n,e){return`${tv}_${n}_${e}`}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="SharedClientState";class oh{constructor(e,t,r,i){this.user=e,this.batchId=t,this.state=r,this.error=i}static Ws(e,t,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new Z(i.error.code,i.error.message))),o?new oh(e,t,i.state,s):(qt(Kr,`Failed to parse mutation state for ID '${t}': ${r}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class rl{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ws(e,t){const r=JSON.parse(t);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new Z(r.error.code,r.error.message))),s?new rl(e,r.state,i):(qt(Kr,`Failed to parse target state for ID '${e}': ${t}`),null)}Gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ah{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ws(e,t){const r=JSON.parse(t);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=uf();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=Pg(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new ah(e,s):(qt(Kr,`Failed to parse client data for instance '${e}': ${t}`),null)}}class Mf{constructor(e,t){this.clientId=e,this.onlineState=t}static Ws(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Mf(t.clientId,t.onlineState):(qt(Kr,`Failed to parse online state: ${e}`),null)}}class Lf{constructor(){this.activeTargetIds=uf()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Ff{constructor(e,t,r,i,s){this.window=e,this.Mi=t,this.persistenceKey=r,this.Js=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Hs=this.Ys.bind(this),this.Zs=new _t(Ve),this.started=!1,this.Xs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.eo=Xy(this.persistenceKey,this.Js),this.no=(function(c){return`firestore_sequence_number_${c}`})(this.persistenceKey),this.Zs=this.Zs.insert(this.Js,new Lf),this.ro=new RegExp(`^${Jy}_${o}_([^_]*)$`),this.io=new RegExp(`^${Zy}_${o}_(\\d+)(?:_(.*))?$`),this.so=new RegExp(`^${tv}_${o}_(\\d+)$`),this.oo=(function(c){return`firestore_online_state_${c}`})(this.persistenceKey),this._o=(function(c){return`firestore_bundle_loaded_v2_${c}`})(this.persistenceKey),this.window.addEventListener("storage",this.Hs)}static v(e){return!(!e||!e.localStorage)}start(){return H(this,null,function*(){const e=yield this.syncEngine.Ts();for(const r of e){if(r===this.Js)continue;const i=this.getItem(Xy(this.persistenceKey,r));if(i){const s=ah.Ws(r,i);s&&(this.Zs=this.Zs.insert(s.clientId,s))}}this.ao();const t=this.storage.getItem(this.oo);if(t){const r=this.uo(t);r&&this.co(r)}for(const r of this.Xs)this.Ys(r);this.Xs=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0})}writeSequenceNumber(e){this.setItem(this.no,JSON.stringify(e))}getAllActiveQueryTargets(){return this.lo(this.Zs)}isActiveQueryTarget(e){let t=!1;return this.Zs.forEach(((r,i)=>{i.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.ho(e,"pending")}updateMutationState(e,t,r){this.ho(e,t,r),this.Po(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Vf(this.persistenceKey,e));if(i){const s=rl.Ws(e,i);s&&(r=s.state)}}return t&&this.To.zs(e),this.ao(),r}removeLocalQueryTarget(e){this.To.js(e),this.ao()}isLocalQueryTarget(e){return this.To.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Vf(this.persistenceKey,e))}updateQueryState(e,t,r){this.Io(e,t,r)}handleUserChange(e,t,r){t.forEach((i=>{this.Po(i)})),this.currentUser=e,r.forEach((i=>{this.addPendingMutation(i)}))}setOnlineState(e){this.Eo(e)}notifyBundleLoaded(e){this.Ao(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Hs),this.removeItem(this.eo),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return ne(Kr,"READ",e,t),t}setItem(e,t){ne(Kr,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){ne(Kr,"REMOVE",e),this.storage.removeItem(e)}Ys(e){const t=e;if(t.storageArea===this.storage){if(ne(Kr,"EVENT",t.key,t.newValue),t.key===this.eo)return void qt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Mi.enqueueRetryable((()=>H(this,null,function*(){if(this.started){if(t.key!==null){if(this.ro.test(t.key)){if(t.newValue==null){const r=this.Ro(t.key);return this.Vo(r,null)}{const r=this.mo(t.key,t.newValue);if(r)return this.Vo(r.clientId,r)}}else if(this.io.test(t.key)){if(t.newValue!==null){const r=this.fo(t.key,t.newValue);if(r)return this.po(r)}}else if(this.so.test(t.key)){if(t.newValue!==null){const r=this.yo(t.key,t.newValue);if(r)return this.wo(r)}}else if(t.key===this.oo){if(t.newValue!==null){const r=this.uo(t.newValue);if(r)return this.co(r)}}else if(t.key===this.no){const r=(function(s){let o=Ln.ce;if(s!=null)try{const l=JSON.parse(s);Pe(typeof l=="number",30636,{So:s}),o=l}catch(l){qt(Kr,"Failed to read sequence number from WebStorage",l)}return o})(t.newValue);r!==Ln.ce&&this.sequenceNumberHandler(r)}else if(t.key===this._o){const r=this.bo(t.newValue);yield Promise.all(r.map((i=>this.syncEngine.Do(i))))}}}else this.Xs.push(t)})))}}get To(){return this.Zs.get(this.Js)}ao(){this.setItem(this.eo,this.To.Gs())}ho(e,t,r){const i=new oh(this.currentUser,e,t,r),s=ev(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Gs())}Po(e){const t=ev(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Eo(e){const t={clientId:this.Js,onlineState:e};this.storage.setItem(this.oo,JSON.stringify(t))}Io(e,t,r){const i=Vf(this.persistenceKey,e),s=new rl(e,t,r);this.setItem(i,s.Gs())}Ao(e){const t=JSON.stringify(Array.from(e));this.setItem(this._o,t)}Ro(e){const t=this.ro.exec(e);return t?t[1]:null}mo(e,t){const r=this.Ro(e);return ah.Ws(r,t)}fo(e,t){const r=this.io.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return oh.Ws(new rn(s),i,t)}yo(e,t){const r=this.so.exec(e),i=Number(r[1]);return rl.Ws(i,t)}uo(e){return Mf.Ws(e)}bo(e){return JSON.parse(e)}po(e){return H(this,null,function*(){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Co(e.batchId,e.state,e.error);ne(Kr,`Ignoring mutation for non-active user ${e.user.uid}`)})}wo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Vo(e,t){const r=t?this.Zs.insert(e,t):this.Zs.remove(e),i=this.lo(this.Zs),s=this.lo(r),o=[],l=[];return s.forEach((c=>{i.has(c)||o.push(c)})),i.forEach((c=>{s.has(c)||l.push(c)})),this.syncEngine.Fo(o,l).then((()=>{this.Zs=r}))}co(e){this.Zs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}lo(e){let t=uf();return e.forEach(((r,i)=>{t=t.unionWith(i.activeTargetIds)})),t}}class nv{constructor(){this.Mo=new Lf,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Lf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv="ConnectivityMonitor";class iv{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){ne(rv,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){ne(rv,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uh=null;function Uf(){return uh===null?uh=(function(){return 268435456+Math.round(2147483648*Math.random())})():uh++,"0x"+uh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf="RestConnection",DS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class kS{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Nu?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,t,r,i,s){const o=Uf(),l=this.zo(e,t.toUriEncodedString());ne(Bf,`Sending RPC '${e}' ${o}:`,l,r);const c={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(c,i,s);const{host:d}=new URL(l),g=oe(d);return this.Jo(e,l,c,r,g).then((v=>(ne(Bf,`Received RPC '${e}' ${o}: `,v),v)),(v=>{throw or(Bf,`RPC '${e}' ${o} failed with error: `,v,"url: ",l,"request:",r),v}))}Ho(e,t,r,i,s,o){return this.Go(e,t,r,i,s)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Fo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,s)=>e[s]=i)),r&&r.headers.forEach(((i,s)=>e[s]=i))}zo(e,t){const r=DS[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In="WebChannelConnection";class OS extends kS{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,s){const o=Uf();return new Promise(((l,c)=>{const d=new tg;d.setWithCredentials(!0),d.listenOnce(ng.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case yc.NO_ERROR:const v=d.getResponseJson();ne(In,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(v)),l(v);break;case yc.TIMEOUT:ne(In,`RPC '${e}' ${o} timed out`),c(new Z(K.DEADLINE_EXCEEDED,"Request time out"));break;case yc.HTTP_ERROR:const w=d.getStatus();if(ne(In,`RPC '${e}' ${o} failed with status:`,w,"response text:",d.getResponseText()),w>0){let M=d.getResponseJson();Array.isArray(M)&&(M=M[0]);const Y=M==null?void 0:M.error;if(Y&&Y.status&&Y.message){const J=(function(ve){const Re=ve.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(Re)>=0?Re:K.UNKNOWN})(Y.status);c(new Z(J,Y.message))}else c(new Z(K.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new Z(K.UNAVAILABLE,"Connection failed."));break;default:Ie(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{ne(In,`RPC '${e}' ${o} completed.`)}}));const g=JSON.stringify(i);ne(In,`RPC '${e}' ${o} sending request:`,i),d.send(t,"POST",g,r,15)}))}T_(e,t,r){const i=Uf(),s=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=sg(),l=ig(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.useFetchStreams=!0),this.jo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const g=s.join("");ne(In,`Creating RPC '${e}' stream ${i}: ${g}`,c);const v=o.createWebChannel(g,c);this.I_(v);let w=!1,M=!1;const Y=new xS({Yo:X=>{M?ne(In,`Not sending because RPC '${e}' stream ${i} is closed:`,X):(w||(ne(In,`Opening RPC '${e}' stream ${i} transport.`),v.open(),w=!0),ne(In,`RPC '${e}' stream ${i} sending:`,X),v.send(X))},Zo:()=>v.close()}),J=(X,ve,Re)=>{X.listen(ve,(we=>{try{Re(we)}catch(qe){setTimeout((()=>{throw qe}),0)}}))};return J(v,Eu.EventType.OPEN,(()=>{M||(ne(In,`RPC '${e}' stream ${i} transport opened.`),Y.o_())})),J(v,Eu.EventType.CLOSE,(()=>{M||(M=!0,ne(In,`RPC '${e}' stream ${i} transport closed`),Y.a_(),this.E_(v))})),J(v,Eu.EventType.ERROR,(X=>{M||(M=!0,or(In,`RPC '${e}' stream ${i} transport errored. Name:`,X.name,"Message:",X.message),Y.a_(new Z(K.UNAVAILABLE,"The operation could not be completed")))})),J(v,Eu.EventType.MESSAGE,(X=>{var ve;if(!M){const Re=X.data[0];Pe(!!Re,16349);const we=Re,qe=(we==null?void 0:we.error)||((ve=we[0])==null?void 0:ve.error);if(qe){ne(In,`RPC '${e}' stream ${i} received error:`,qe);const We=qe.status;let Ne=(function(C){const F=Ht[C];if(F!==void 0)return q_(F)})(We),O=qe.message;Ne===void 0&&(Ne=K.INTERNAL,O="Unknown error status: "+We+" with message "+qe.message),M=!0,Y.a_(new Z(Ne,O)),v.close()}else ne(In,`RPC '${e}' stream ${i} received:`,Re),Y.u_(Re)}})),J(l,rg.STAT_EVENT,(X=>{X.stat===xd.PROXY?ne(In,`RPC '${e}' stream ${i} detected buffering proxy`):X.stat===xd.NOPROXY&&ne(In,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{Y.__()}),0),Y}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(){return typeof window!="undefined"?window:null}function lh(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n){return new Ub(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=i,this.R_=s,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&ne("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov="PersistentStream";class av{constructor(e,t,r,i,s,o,l,c){this.Mi=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new qf(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}stop(){return H(this,null,function*(){this.x_()&&(yield this.close(0))})}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}k_(){return H(this,null,function*(){if(this.O_())return this.close(0)})}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}close(e,t){return H(this,null,function*(){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(qt(t.toString()),qt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,yield this.listener.r_(t)})}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===t&&this.G_(r,i)}),(r=>{e((()=>{const i=new Z(K.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((()=>H(this,null,function*(){this.state=0,this.start()})))}z_(e){return ne(ov,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(ne(ov,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class NS extends av{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=jb(this.serializer,e),r=(function(s){if(!("targetChange"in s))return ke.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ke.min():o.readTime?jt(o.readTime):ke.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=yf(this.serializer),t.addTarget=(function(s,o){let l;const c=o.target;if(l=Mc(c)?{documents:ty(s,c)}:{query:Wc(s,c).ft},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=Q_(s,o.resumeToken);const d=mf(s,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(ke.min())>0){l.readTime=oa(s,o.snapshotVersion.toTimestamp());const d=mf(s,o.expectedCount);d!==null&&(l.expectedCount=d)}return l})(this.serializer,e);const r=Kb(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=yf(this.serializer),t.removeTarget=e,this.q_(t)}}class VS extends av{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=$b(e.writeResults,e.commitTime),r=jt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=yf(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Yu(this.serializer,r)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{}class LS extends MS{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new Z(K.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Go(e,_f(t,r),i,s,o))).catch((s=>{throw s.name==="FirebaseError"?(s.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Z(K.UNKNOWN,s.toString())}))}Ho(e,t,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,l])=>this.connection.Ho(e,_f(t,r),i,o,l,s))).catch((o=>{throw o.name==="FirebaseError"?(o.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(K.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class FS{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(qt(t),this.aa=!1):ne("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys="RemoteStore";class US{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=s,this.Aa.Oo((o=>{r.enqueueAndForget((()=>H(this,null,function*(){Ji(this)&&(ne(Ys,"Restarting streams for network reachability change."),yield(function(c){return H(this,null,function*(){const d=fe(c);d.Ea.add(4),yield ma(d),d.Ra.set("Unknown"),d.Ea.delete(4),yield il(d)})})(this))})))})),this.Ra=new FS(r,i)}}function il(n){return H(this,null,function*(){if(Ji(n))for(const e of n.da)yield e(!0)})}function ma(n){return H(this,null,function*(){for(const e of n.da)yield e(!1)})}function ch(n,e){const t=fe(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Kf(t)?$f(t):ya(t).O_()&&jf(t,e))}function ga(n,e){const t=fe(n),r=ya(t);t.Ia.delete(e),r.O_()&&uv(t,e),t.Ia.size===0&&(r.O_()?r.L_():Ji(t)&&t.Ra.set("Unknown"))}function jf(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ke.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ya(n).Y_(e)}function uv(n,e){n.Va.Ue(e),ya(n).Z_(e)}function $f(n){n.Va=new Vb({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ya(n).start(),n.Ra.ua()}function Kf(n){return Ji(n)&&!ya(n).x_()&&n.Ia.size>0}function Ji(n){return fe(n).Ea.size===0}function lv(n){n.Va=void 0}function BS(n){return H(this,null,function*(){n.Ra.set("Online")})}function qS(n){return H(this,null,function*(){n.Ia.forEach(((e,t)=>{jf(n,e)}))})}function jS(n,e){return H(this,null,function*(){lv(n),Kf(n)?(n.Ra.ha(e),$f(n)):n.Ra.set("Unknown")})}function $S(n,e,t){return H(this,null,function*(){if(n.Ra.set("Online"),e instanceof W_&&e.state===2&&e.cause)try{yield(function(i,s){return H(this,null,function*(){const o=s.cause;for(const l of s.targetIds)i.Ia.has(l)&&(yield i.remoteSyncer.rejectListen(l,o),i.Ia.delete(l),i.Va.removeTarget(l))})})(n,e)}catch(r){ne(Ys,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),yield hh(n,r)}else if(e instanceof $c?n.Va.Ze(e):e instanceof z_?n.Va.st(e):n.Va.tt(e),!t.isEqual(ke.min()))try{const r=yield Wy(n.localStore);t.compareTo(r)>=0&&(yield(function(s,o){const l=s.Va.Tt(o);return l.targetChanges.forEach(((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const g=s.Ia.get(d);g&&s.Ia.set(d,g.withResumeToken(c.resumeToken,o))}})),l.targetMismatches.forEach(((c,d)=>{const g=s.Ia.get(c);if(!g)return;s.Ia.set(c,g.withResumeToken(Ot.EMPTY_BYTE_STRING,g.snapshotVersion)),uv(s,c);const v=new pi(g.target,c,d,g.sequenceNumber);jf(s,v)})),s.remoteSyncer.applyRemoteEvent(l)})(n,t))}catch(r){ne(Ys,"Failed to raise snapshot:",r),yield hh(n,r)}})}function hh(n,e,t){return H(this,null,function*(){if(!Ui(e))throw e;n.Ea.add(1),yield ma(n),n.Ra.set("Offline"),t||(t=()=>Wy(n.localStore)),n.asyncQueue.enqueueRetryable((()=>H(null,null,function*(){ne(Ys,"Retrying IndexedDB access"),yield t(),n.Ea.delete(1),yield il(n)})))})}function cv(n,e){return e().catch((t=>hh(n,t,e)))}function _a(n){return H(this,null,function*(){const e=fe(n),t=Xi(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Bi;for(;KS(e);)try{const i=yield SS(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,zS(e,i)}catch(i){yield hh(e,i)}hv(e)&&dv(e)})}function KS(n){return Ji(n)&&n.Ta.length<10}function zS(n,e){n.Ta.push(e);const t=Xi(n);t.O_()&&t.X_&&t.ea(e.mutations)}function hv(n){return Ji(n)&&!Xi(n).x_()&&n.Ta.length>0}function dv(n){Xi(n).start()}function WS(n){return H(this,null,function*(){Xi(n).ra()})}function GS(n){return H(this,null,function*(){const e=Xi(n);for(const t of n.Ta)e.ea(t.mutations)})}function HS(n,e,t){return H(this,null,function*(){const r=n.Ta.shift(),i=df.from(r,e,t);yield cv(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),yield _a(n)})}function QS(n,e){return H(this,null,function*(){e&&Xi(n).X_&&(yield(function(r,i){return H(this,null,function*(){if((function(o){return B_(o)&&o!==K.ABORTED})(i.code)){const s=r.Ta.shift();Xi(r).B_(),yield cv(r,(()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i))),yield _a(r)}})})(n,e)),hv(n)&&dv(n)})}function fv(n,e){return H(this,null,function*(){const t=fe(n);t.asyncQueue.verifyOperationInProgress(),ne(Ys,"RemoteStore received new credentials");const r=Ji(t);t.Ea.add(3),yield ma(t),r&&t.Ra.set("Unknown"),yield t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),yield il(t)})}function zf(n,e){return H(this,null,function*(){const t=fe(n);e?(t.Ea.delete(2),yield il(t)):e||(t.Ea.add(2),yield ma(t),t.Ra.set("Unknown"))})}function ya(n){return n.ma||(n.ma=(function(t,r,i){const s=fe(t);return s.sa(),new NS(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(n.datastore,n.asyncQueue,{Xo:BS.bind(null,n),t_:qS.bind(null,n),r_:jS.bind(null,n),H_:$S.bind(null,n)}),n.da.push((e=>H(null,null,function*(){e?(n.ma.B_(),Kf(n)?$f(n):n.Ra.set("Unknown")):(yield n.ma.stop(),lv(n))})))),n.ma}function Xi(n){return n.fa||(n.fa=(function(t,r,i){const s=fe(t);return s.sa(),new VS(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:WS.bind(null,n),r_:QS.bind(null,n),ta:GS.bind(null,n),na:HS.bind(null,n)}),n.da.push((e=>H(null,null,function*(){e?(n.fa.B_(),yield _a(n)):(yield n.fa.stop(),n.Ta.length>0&&(ne(Ys,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,l=new Wf(e,t,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function va(n,e){if(qt("AsyncQueue",`${e}: ${n}`),Ui(n))return new Z(K.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{static emptySet(e){return new Js(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||de.comparator(t.key,r.key):(t,r)=>de.comparator(t.key,r.key),this.keyedMap=ju(),this.sortedSet=new _t(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Js)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Js;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(){this.ga=new _t(de.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Ie(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Xs{constructor(e,t,r,i,s,o,l,c,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach((l=>{o.push({type:0,doc:l})})),new Xs(e,t,Js.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class JS{constructor(){this.queries=mv(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=fe(t),s=i.queries;i.queries=mv(),s.forEach(((o,l)=>{for(const c of l.Sa)c.onError(r)}))})(this,new Z(K.ABORTED,"Firestore shutting down"))}}function mv(){return new di((n=>T_(n)),Bu)}function Gf(n,e){return H(this,null,function*(){const t=fe(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.ba()&&e.Da()&&(r=2):(s=new YS,r=e.Da()?0:1);try{switch(r){case 0:s.wa=yield t.onListen(i,!0);break;case 1:s.wa=yield t.onListen(i,!1);break;case 2:yield t.onFirstRemoteStoreListen(i)}}catch(o){const l=va(o,`Initialization of query '${ta(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.Sa.push(e),e.va(t.onlineState),s.wa&&e.Fa(s.wa)&&Qf(t)})}function Hf(n,e){return H(this,null,function*(){const t=fe(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.Da()?0:1:!s.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}})}function XS(n,e){const t=fe(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const l of o.Sa)l.Fa(i)&&(r=!0);o.wa=i}}r&&Qf(t)}function ZS(n,e,t){const r=fe(n),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(t);r.queries.delete(e)}function Qf(n){n.Ca.forEach((e=>{e.next()}))}var Yf,gv;(gv=Yf||(Yf={})).Ma="default",gv.Cache="cache";class Jf{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Xs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Yf.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,t){this.Qa=e,this.byteLength=t}$a(){return"metadata"in this.Qa}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e){this.serializer=e}$s(e){return $r(this.serializer,e)}Us(e){return e.metadata.exists?zc(this.serializer,e.document,!1):Et.newNoDocument(this.$s(e.metadata.name),this.Ks(e.metadata.readTime))}Ks(e){return jt(e)}}class Xf{constructor(e,t){this.Ua=e,this.serializer=t,this.Ka=[],this.Wa=[],this.collectionGroups=new Set,this.progress=vv(e)}get queries(){return this.Ka}get documents(){return this.Wa}Ga(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Qa.namedQuery)this.Ka.push(e.Qa.namedQuery);else if(e.Qa.documentMetadata){this.Wa.push({metadata:e.Qa.documentMetadata}),e.Qa.documentMetadata.exists||++t;const r=He.fromString(e.Qa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Qa.document&&(this.Wa[this.Wa.length-1].document=e.Qa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Ir({},this.progress)):null}za(e){const t=new Map,r=new yv(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.$s(i.metadata.name);for(const o of i.metadata.queries){const l=(t.get(o)||Be()).add(s);t.set(o,l)}}return t}ja(e){return H(this,null,function*(){const t=yield PS(e,new yv(this.serializer),this.Wa,this.Ua.id),r=this.za(this.documents);for(const i of this.Ka)yield RS(e,i,r.get(i.name));return this.progress.taskState="Success",{progress:this.progress,Ja:this.collectionGroups,Ha:t}})}}function vv(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e){this.key=e}}class Tv{constructor(e){this.key=e}}class Ev{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Be(),this.mutatedKeys=Be(),this.eu=w_(e),this.tu=new Js(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new pv,i=t?t.tu:this.tu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((g,v)=>{const w=i.get(g),M=qu(this.query,v)?v:null,Y=!!w&&this.mutatedKeys.has(w.key),J=!!M&&(M.hasLocalMutations||this.mutatedKeys.has(M.key)&&M.hasCommittedMutations);let X=!1;w&&M?w.data.isEqual(M.data)?Y!==J&&(r.track({type:3,doc:M}),X=!0):this.su(w,M)||(r.track({type:2,doc:M}),X=!0,(c&&this.eu(M,c)>0||d&&this.eu(M,d)<0)&&(l=!0)):!w&&M?(r.track({type:0,doc:M}),X=!0):w&&!M&&(r.track({type:1,doc:w}),X=!0,(c||d)&&(l=!0)),X&&(M?(o=o.add(M),s=J?s.add(g):s.delete(g)):(o=o.delete(g),s=s.delete(g)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const g=this.query.limitType==="F"?o.last():o.first();o=o.delete(g.key),s=s.delete(g.key),r.track({type:1,doc:g})}return{tu:o,iu:r,Cs:l,mutatedKeys:s}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((g,v)=>(function(M,Y){const J=X=>{switch(X){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ie(20277,{Rt:X})}};return J(M)-J(Y)})(g.type,v.type)||this.eu(g.doc,v.doc))),this.ou(r),i=i!=null?i:!1;const l=t&&!i?this._u():[],c=this.Xa.size===0&&this.current&&!i?1:0,d=c!==this.Za;return this.Za=c,o.length!==0||d?{snapshot:new Xs(this.query,e.tu,s,o,e.mutatedKeys,c===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new pv,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Be(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new Tv(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new Iv(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=Be();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Xs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Zi="SyncEngine";class e0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class t0{constructor(e){this.key=e,this.hu=!1}}class n0{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new di((l=>T_(l)),Bu),this.Iu=new Map,this.Eu=new Set,this.du=new _t(de.comparator),this.Au=new Map,this.Ru=new Sf,this.Vu={},this.mu=new Map,this.fu=Gs.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}function r0(n,e,t=!0){return H(this,null,function*(){const r=dh(n);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=yield wv(r,e,t,!0),i})}function i0(n,e){return H(this,null,function*(){const t=dh(n);yield wv(t,e,!0,!1)})}function wv(n,e,t,r){return H(this,null,function*(){const i=yield fa(n.localStore,yn(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let l;return r&&(l=yield Zf(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&ch(n.remoteStore,i),l})}function Zf(n,e,t,r,i){return H(this,null,function*(){n.pu=(v,w,M)=>(function(J,X,ve,Re){return H(this,null,function*(){let we=X.view.ru(ve);we.Cs&&(we=yield sh(J.localStore,X.query,!1).then((({documents:O})=>X.view.ru(O,we))));const qe=Re&&Re.targetChanges.get(X.targetId),We=Re&&Re.targetMismatches.get(X.targetId)!=null,Ne=X.view.applyChanges(we,J.isPrimaryClient,qe,We);return np(J,X.targetId,Ne.au),Ne.snapshot})})(n,v,w,M);const s=yield sh(n.localStore,e,!0),o=new Ev(e,s.Qs),l=o.ru(s.documents),c=Hu.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=o.applyChanges(l,n.isPrimaryClient,c);np(n,t,d.au);const g=new e0(e,t,o);return n.Tu.set(e,g),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot})}function s0(n,e,t){return H(this,null,function*(){const r=fe(n),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter((o=>!Bu(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||(yield pa(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&ga(r.remoteStore,i.targetId),Ia(r,i.targetId)})).catch(Fi))):(Ia(r,i.targetId),yield pa(r.localStore,i.targetId,!0))})}function o0(n,e){return H(this,null,function*(){const t=fe(n),r=t.Tu.get(e),i=t.Iu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ga(t.remoteStore,r.targetId))})}function a0(n,e,t){return H(this,null,function*(){const r=ip(n);try{const i=yield(function(o,l){const c=fe(o),d=st.now(),g=l.reduce(((M,Y)=>M.add(Y.key)),Be());let v,w;return c.persistence.runTransaction("Locally write mutations","readwrite",(M=>{let Y=Un(),J=Be();return c.Ns.getEntries(M,g).next((X=>{Y=X,Y.forEach(((ve,Re)=>{Re.isValidDocument()||(J=J.add(ve))}))})).next((()=>c.localDocuments.getOverlayedDocuments(M,Y))).next((X=>{v=X;const ve=[];for(const Re of l){const we=xb(Re,v.get(Re.key).overlayedDocument);we!=null&&ve.push(new fi(Re.key,we,s_(we.value.mapValue),Dt.exists(!0)))}return c.mutationQueue.addMutationBatch(M,d,ve,l)})).next((X=>{w=X;const ve=X.applyToLocalDocumentSet(v,J);return c.documentOverlayCache.saveOverlays(M,X.batchId,ve)}))})).then((()=>({batchId:w.batchId,changes:b_(v)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),(function(o,l,c){let d=o.Vu[o.currentUser.toKey()];d||(d=new _t(Ve)),d=d.insert(l,c),o.Vu[o.currentUser.toKey()]=d})(r,i.batchId,t),yield mi(r,i.changes),yield _a(r.remoteStore)}catch(i){const s=va(i,"Failed to persist write");t.reject(s)}})}function Av(n,e){return H(this,null,function*(){const t=fe(n);try{const r=yield bS(t.localStore,e);e.targetChanges.forEach(((i,s)=>{const o=t.Au.get(s);o&&(Pe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?Pe(o.hu,14607):i.removedDocuments.size>0&&(Pe(o.hu,42227),o.hu=!1))})),yield mi(t,r,e)}catch(r){yield Fi(r)}})}function bv(n,e,t){const r=fe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach(((s,o)=>{const l=o.view.va(e);l.snapshot&&i.push(l.snapshot)})),(function(o,l){const c=fe(o);c.onlineState=l;let d=!1;c.queries.forEach(((g,v)=>{for(const w of v.Sa)w.va(l)&&(d=!0)})),d&&Qf(c)})(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}function u0(n,e,t){return H(this,null,function*(){const r=fe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new _t(de.comparator);o=o.insert(s,Et.newNoDocument(s,ke.min()));const l=Be().add(s),c=new Gu(ke.min(),new Map,new _t(Ve),o,l);yield Av(r,c),r.du=r.du.remove(s),r.Au.delete(e),rp(r)}else yield pa(r.localStore,e,!1).then((()=>Ia(r,e,t))).catch(Fi)})}function l0(n,e){return H(this,null,function*(){const t=fe(n),r=e.batch.batchId;try{const i=yield AS(t.localStore,e);tp(t,r,null),ep(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),yield mi(t,i)}catch(i){yield Fi(i)}})}function c0(n,e,t){return H(this,null,function*(){const r=fe(n);try{const i=yield(function(o,l){const c=fe(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let g;return c.mutationQueue.lookupMutationBatch(d,l).next((v=>(Pe(v!==null,37113),g=v.keys(),c.mutationQueue.removeMutationBatch(d,v)))).next((()=>c.mutationQueue.performConsistencyCheck(d))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(d,g,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,g))).next((()=>c.localDocuments.getDocuments(d,g)))}))})(r.localStore,e);tp(r,e,t),ep(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),yield mi(r,i)}catch(i){yield Fi(i)}})}function h0(n,e){return H(this,null,function*(){const t=fe(n);Ji(t.remoteStore)||ne(Zi,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=yield(function(o){const l=fe(o);return l.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(c=>l.mutationQueue.getHighestUnacknowledgedBatchId(c)))})(t.localStore);if(r===Bi)return void e.resolve();const i=t.mu.get(r)||[];i.push(e),t.mu.set(r,i)}catch(r){const i=va(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}})}function ep(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function tp(n,e,t){const r=fe(n);let i=r.Vu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Ia(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||Sv(n,r)}))}function Sv(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(ga(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),rp(n))}function np(n,e,t){for(const r of t)r instanceof Iv?(n.Ru.addReference(r.key,e),d0(n,r)):r instanceof Tv?(ne(Zi,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Sv(n,r.key)):Ie(19791,{wu:r})}function d0(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(ne(Zi,"New document in limbo: "+t),n.Eu.add(r),rp(n))}function rp(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new de(He.fromString(e)),r=n.fu.next();n.Au.set(r,new t0(t)),n.du=n.du.insert(t,r),ch(n.remoteStore,new pi(yn(Zo(t.path)),r,"TargetPurposeLimboResolution",Ln.ce))}}function mi(n,e,t){return H(this,null,function*(){const r=fe(n),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((l,c)=>{o.push(r.pu(c,e,t).then((d=>{var g;if((d||t)&&r.isPrimaryClient){const v=d?!d.fromCache:(g=t==null?void 0:t.targetChanges.get(c.targetId))==null?void 0:g.current;r.sharedClientState.updateQueryState(c.targetId,v?"current":"not-current")}if(d){i.push(d);const v=Of.As(c.targetId,d);s.push(v)}})))})),yield Promise.all(o),r.Pu.H_(i),yield(function(c,d){return H(this,null,function*(){const g=fe(c);try{yield g.persistence.runTransaction("notifyLocalViewChanges","readwrite",(v=>q.forEach(d,(w=>q.forEach(w.Es,(M=>g.persistence.referenceDelegate.addReference(v,w.targetId,M))).next((()=>q.forEach(w.ds,(M=>g.persistence.referenceDelegate.removeReference(v,w.targetId,M)))))))))}catch(v){if(!Ui(v))throw v;ne(Nf,"Failed to update sequence numbers: "+v)}for(const v of d){const w=v.targetId;if(!v.fromCache){const M=g.Ms.get(w),Y=M.snapshotVersion,J=M.withLastLimboFreeSnapshotVersion(Y);g.Ms=g.Ms.insert(w,J)}}})})(r.localStore,s))})}function f0(n,e){return H(this,null,function*(){const t=fe(n);if(!t.currentUser.isEqual(e)){ne(Zi,"User change. New user:",e.toKey());const r=yield zy(t.localStore,e);t.currentUser=e,(function(s,o){s.mu.forEach((l=>{l.forEach((c=>{c.reject(new Z(K.CANCELLED,o))}))})),s.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),yield mi(t,r.Ls)}})}function p0(n,e){const t=fe(n),r=t.Au.get(e);if(r&&r.hu)return Be().add(r.key);{let i=Be();const s=t.Iu.get(e);if(!s)return i;for(const o of s){const l=t.Tu.get(o);i=i.unionWith(l.view.nu)}return i}}function m0(n,e){return H(this,null,function*(){const t=fe(n),r=yield sh(t.localStore,e.query,!0),i=e.view.cu(r);return t.isPrimaryClient&&np(t,e.targetId,i.au),i})}function g0(n,e){return H(this,null,function*(){const t=fe(n);return Qy(t.localStore,e).then((r=>mi(t,r)))})}function _0(n,e,t,r){return H(this,null,function*(){const i=fe(n),s=yield(function(l,c){const d=fe(l),g=fe(d.mutationQueue);return d.persistence.runTransaction("Lookup mutation documents","readonly",(v=>g.er(v,c).next((w=>w?d.localDocuments.getDocuments(v,w):q.resolve(null)))))})(i.localStore,e);s!==null?(t==="pending"?yield _a(i.remoteStore):t==="acknowledged"||t==="rejected"?(tp(i,e,r||null),ep(i,e),(function(l,c){fe(fe(l).mutationQueue).ir(c)})(i.localStore,e)):Ie(6720,"Unknown batchState",{Su:t}),yield mi(i,s)):ne(Zi,"Cannot apply mutation batch with id: "+e)})}function y0(n,e){return H(this,null,function*(){const t=fe(n);if(dh(t),ip(t),e===!0&&t.gu!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),i=yield Pv(t,r.toArray());t.gu=!0,yield zf(t.remoteStore,!0);for(const s of i)ch(t.remoteStore,s)}else if(e===!1&&t.gu!==!1){const r=[];let i=Promise.resolve();t.Iu.forEach(((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then((()=>(Ia(t,o),pa(t.localStore,o,!0)))),ga(t.remoteStore,o)})),yield i,yield Pv(t,r),(function(o){const l=fe(o);l.Au.forEach(((c,d)=>{ga(l.remoteStore,d)})),l.Ru.Jr(),l.Au=new Map,l.du=new _t(de.comparator)})(t),t.gu=!1,yield zf(t.remoteStore,!1)}})}function Pv(n,e,t){return H(this,null,function*(){const r=fe(n),i=[],s=[];for(const o of e){let l;const c=r.Iu.get(o);if(c&&c.length!==0){l=yield fa(r.localStore,yn(c[0]));for(const d of c){const g=r.Tu.get(d),v=yield m0(r,g);v.snapshot&&s.push(v.snapshot)}}else{const d=yield Hy(r.localStore,o);l=yield fa(r.localStore,d),yield Zf(r,Rv(d),o,!1,l.resumeToken)}i.push(l)}return r.Pu.H_(s),i})}function Rv(n){return __(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function v0(n){return(function(t){return fe(fe(t).persistence).Ts()})(fe(n).localStore)}function I0(n,e,t,r){return H(this,null,function*(){const i=fe(n);if(i.gu)return void ne(Zi,"Ignoring unexpected query state notification.");const s=i.Iu.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=yield Qy(i.localStore,E_(s[0])),l=Gu.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Ot.EMPTY_BYTE_STRING);yield mi(i,o,l);break}case"rejected":yield pa(i.localStore,e,!0),Ia(i,e,r);break;default:Ie(64155,t)}})}function T0(n,e,t){return H(this,null,function*(){const r=dh(n);if(r.gu){for(const i of e){if(r.Iu.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){ne(Zi,"Adding an already active target "+i);continue}const s=yield Hy(r.localStore,i),o=yield fa(r.localStore,s);yield Zf(r,Rv(s),o.targetId,!1,o.resumeToken),ch(r.remoteStore,o)}for(const i of t)r.Iu.has(i)&&(yield pa(r.localStore,i,!1).then((()=>{ga(r.remoteStore,i),Ia(r,i)})).catch(Fi))}})}function dh(n){const e=fe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Av.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=p0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=u0.bind(null,e),e.Pu.H_=XS.bind(null,e.eventManager),e.Pu.yu=ZS.bind(null,e.eventManager),e}function ip(n){const e=fe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=l0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=c0.bind(null,e),e}function E0(n,e,t){const r=fe(n);(function(s,o,l){return H(this,null,function*(){try{const c=yield o.getMetadata();if(yield(function(M,Y){const J=fe(M),X=jt(Y.createTime);return J.persistence.runTransaction("hasNewerBundle","readonly",(ve=>J.Ii.getBundleMetadata(ve,Y.id))).then((ve=>!!ve&&ve.createTime.compareTo(X)>=0))})(s.localStore,c))return yield o.close(),l._completeWith((function(M){return{taskState:"Success",documentsLoaded:M.totalDocuments,bytesLoaded:M.totalBytes,totalDocuments:M.totalDocuments,totalBytes:M.totalBytes}})(c)),Promise.resolve(new Set);l._updateProgress(vv(c));const d=new Xf(c,o.serializer);let g=yield o.bu();for(;g;){const w=yield d.Ga(g);w&&l._updateProgress(w),g=yield o.bu()}const v=yield d.ja(s.localStore);return yield mi(s,v.Ha,void 0),yield(function(M,Y){const J=fe(M);return J.persistence.runTransaction("Save bundle","readwrite",(X=>J.Ii.saveBundleMetadata(X,Y)))})(s.localStore,c),l._completeWith(v.progress),Promise.resolve(v.Ja)}catch(c){return or(Zi,`Loading bundle failed with ${c}`),l._failWith(c),Promise.resolve(new Set)}})})(r,e,t).then((i=>{r.sharedClientState.notifyBundleLoaded(i)}))}class Ta{constructor(){this.kind="memory",this.synchronizeTabs=!1}initialize(e){return H(this,null,function*(){this.serializer=Qs(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),yield this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)})}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Ky(this.persistence,new $y,e.initialUser,this.serializer)}Cu(e){return new Pf(nh.mi,this.serializer)}Du(e){return new nv}terminate(){return H(this,null,function*(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),yield this.persistence.shutdown()})}}Ta.provider={build:()=>new Ta};class sp extends Ta{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Pe(this.persistence.referenceDelegate instanceof rh,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Oy(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?vn.withCacheSize(this.cacheSizeBytes):vn.DEFAULT;return new Pf((r=>rh.mi(r,t)),this.serializer)}}class sl extends Ta{constructor(e,t,r){super(),this.xu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}initialize(e){return H(this,null,function*(){yield lg(sl.prototype,this,"initialize").call(this,e),yield this.xu.initialize(this,e),yield ip(this.xu.syncEngine),yield _a(this.xu.remoteStore),yield this.persistence.Ji((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))})}vu(e){return Ky(this.persistence,new $y,e.initialUser,this.serializer)}Fu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new Oy(r,e.asyncQueue,t)}Mu(e,t){const r=new MA(t,this.persistence);return new VA(e.asyncQueue,r)}Cu(e){const t=xf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?vn.withCacheSize(this.cacheSizeBytes):vn.DEFAULT;return new kf(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,sv(),lh(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Du(e){return new nv}}class fh extends sl{constructor(e,t){super(e,t,!1),this.xu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}initialize(e){return H(this,null,function*(){yield lg(fh.prototype,this,"initialize").call(this,e);const t=this.xu.syncEngine;this.sharedClientState instanceof Ff&&(this.sharedClientState.syncEngine={Co:_0.bind(null,t),vo:I0.bind(null,t),Fo:T0.bind(null,t),Ts:v0.bind(null,t),Do:g0.bind(null,t)},yield this.sharedClientState.start()),yield this.persistence.Ji((r=>H(this,null,function*(){yield y0(this.xu.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})))})}Du(e){const t=sv();if(!Ff.v(t))throw new Z(K.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=xf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Ff(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class es{initialize(e,t){return H(this,null,function*(){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>bv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=f0.bind(null,this.syncEngine),yield zf(this.remoteStore,this.syncEngine.isPrimaryClient))})}createEventManager(e){return(function(){return new JS})()}createDatastore(e){const t=Qs(e.databaseInfo.databaseId),r=(function(s){return new OS(s)})(e.databaseInfo);return(function(s,o,l,c){return new LS(s,o,l,c)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,s,o,l){return new US(r,i,s,o,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>bv(this.syncEngine,t,0)),(function(){return iv.v()?new iv:new CS})())}createSyncEngine(e,t){return(function(i,s,o,l,c,d,g){const v=new n0(i,s,o,l,c,d);return g&&(v.gu=!0),v})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return H(this,null,function*(){var e,t;yield(function(i){return H(this,null,function*(){const s=fe(i);ne(Ys,"RemoteStore shutting down."),s.Ea.add(5),yield ma(s),s.Aa.shutdown(),s.Ra.set("Unknown")})})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()})}}es.provider={build:()=>new es};function Cv(n,e=10240){let t=0;return{read(){return H(this,null,function*(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}})},cancel(){return H(this,null,function*(){})},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):qt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,t){this.Bu=e,this.serializer=t,this.metadata=new sn,this.buffer=new Uint8Array,this.Lu=(function(){return new TextDecoder("utf-8")})(),this.ku().then((r=>{r&&r.$a()?this.metadata.resolve(r.Qa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Qa)}`))}),(r=>this.metadata.reject(r)))}close(){return this.Bu.cancel()}getMetadata(){return H(this,null,function*(){return this.metadata.promise})}bu(){return H(this,null,function*(){return yield this.getMetadata(),this.ku()})}ku(){return H(this,null,function*(){const e=yield this.qu();if(e===null)return null;const t=this.Lu.decode(e),r=Number(t);isNaN(r)&&this.Qu(`length string (${t}) is not valid number`);const i=yield this.$u(r);return new _v(JSON.parse(i),e.length+r)})}Uu(){return this.buffer.findIndex((e=>e===123))}qu(){return H(this,null,function*(){for(;this.Uu()<0&&!(yield this.Ku()););if(this.buffer.length===0)return null;const e=this.Uu();e<0&&this.Qu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t})}$u(e){return H(this,null,function*(){for(;this.buffer.length<e;)(yield this.Ku())&&this.Qu("Reached the end of bundle when more is expected.");const t=this.Lu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t})}Qu(e){throw this.Bu.cancel(),new Error(`Invalid bundle format: ${e}`)}Ku(){return H(this,null,function*(){const e=yield this.Bu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done})}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,t){this.bundleData=e,this.serializer=t,this.cursor=0,this.elements=[];let r=this.bu();if(!r||!r.$a())throw new Error(`The first element of the bundle is not a metadata object, it is
         ${JSON.stringify(r==null?void 0:r.Qa)}`);this.metadata=r;do r=this.bu(),r!==null&&this.elements.push(r);while(r!==null)}getMetadata(){return this.metadata}Wu(){return this.elements}bu(){if(this.cursor===this.bundleData.length)return null;const e=this.qu(),t=this.$u(e);return new _v(JSON.parse(t),e)}$u(e){if(this.cursor+e>this.bundleData.length)throw new Z(K.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=e)}qu(){const e=this.cursor;let t=this.cursor;for(;t<this.bundleData.length;){if(this.bundleData[t]==="{"){if(t===e)throw new Error("First character is a bracket and not a number");return this.cursor=t,Number(this.bundleData.slice(e,t))}t++}throw new Error("Reached the end of bundle when more is expected.")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}lookup(e){return H(this,null,function*(){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new Z(K.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=yield(function(i,s){return H(this,null,function*(){const o=fe(i),l={documents:s.map((v=>Qu(o.serializer,v)))},c=yield o.Ho("BatchGetDocuments",o.serializer.databaseId,He.emptyPath(),l,s.length),d=new Map;c.forEach((v=>{const w=qb(o.serializer,v);d.set(w.key.toString(),w)}));const g=[];return s.forEach((v=>{const w=d.get(v.toString());Pe(!!w,55234,{key:v}),g.push(w)})),g})})(this.datastore,e);return t.forEach((r=>this.recordVersion(r))),t})}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new sa(e,this.precondition(e))),this.writtenDocs.add(e.toString())}commit(){return H(this,null,function*(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,r)=>{const i=de.fromPath(r);this.mutations.push(new cf(i,this.precondition(i)))})),yield(function(r,i){return H(this,null,function*(){const s=fe(r),o={writes:i.map((l=>Yu(s.serializer,l)))};yield s.Go("Commit",s.serializer.databaseId,He.emptyPath(),o)})})(this.datastore,this.mutations),this.committed=!0})}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Ie(50498,{Gu:e.constructor.name});t=ke.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new Z(K.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ke.min())?Dt.exists(!1):Dt.updateTime(t):Dt.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ke.min()))throw new Z(K.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Dt.updateTime(t)}return Dt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,t,r,i,s){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=i,this.deferred=s,this.zu=r.maxAttempts,this.M_=new qf(this.asyncQueue,"transaction_retry")}ju(){this.zu-=1,this.Ju()}Ju(){this.M_.p_((()=>H(this,null,function*(){const e=new b0(this.datastore),t=this.Hu(e);t&&t.then((r=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(r)})).catch((i=>{this.Yu(i)}))))})).catch((r=>{this.Yu(r)}))})))}Hu(e){try{const t=this.updateFunction(e);return!bu(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Yu(e){this.zu>0&&this.Zu(e)?(this.zu-=1,this.asyncQueue.enqueueAndForget((()=>(this.Ju(),Promise.resolve())))):this.deferred.reject(e)}Zu(e){if((e==null?void 0:e.name)==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!B_(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="FirestoreClient";class P0{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=rn.UNAUTHENTICATED,this.clientId=Vd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,(o=>H(this,null,function*(){ne(ts,"Received user=",o.uid),yield this.authCredentialListener(o),this.user=o}))),this.appCheckCredentials.start(r,(o=>(ne(ts,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((()=>H(this,null,function*(){try{this._onlineComponents&&(yield this._onlineComponents.terminate()),this._offlineComponents&&(yield this._offlineComponents.terminate()),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=va(t,"Failed to shutdown persistence");e.reject(r)}}))),e.promise}}function op(n,e){return H(this,null,function*(){n.asyncQueue.verifyOperationInProgress(),ne(ts,"Initializing OfflineComponentProvider");const t=n.configuration;yield e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((i=>H(null,null,function*(){r.isEqual(i)||(yield zy(e.localStore,i),r=i)}))),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e})}function Dv(n,e){return H(this,null,function*(){n.asyncQueue.verifyOperationInProgress();const t=yield ap(n);ne(ts,"Initializing OnlineComponentProvider"),yield e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>fv(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>fv(e.remoteStore,i))),n._onlineComponents=e})}function ap(n){return H(this,null,function*(){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ne(ts,"Using user provided OfflineComponentProvider");try{yield op(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===K.FAILED_PRECONDITION||i.code===K.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;or("Error using user provided cache. Falling back to memory cache: "+t),yield op(n,new Ta)}}else ne(ts,"Using default OfflineComponentProvider"),yield op(n,new sp(void 0));return n._offlineComponents})}function mh(n){return H(this,null,function*(){return n._onlineComponents||(n._uninitializedComponentsProvider?(ne(ts,"Using user provided OnlineComponentProvider"),yield Dv(n,n._uninitializedComponentsProvider._online)):(ne(ts,"Using default OnlineComponentProvider"),yield Dv(n,new es))),n._onlineComponents})}function kv(n){return ap(n).then((e=>e.persistence))}function Ea(n){return ap(n).then((e=>e.localStore))}function xv(n){return mh(n).then((e=>e.remoteStore))}function up(n){return mh(n).then((e=>e.syncEngine))}function Ov(n){return mh(n).then((e=>e.datastore))}function wa(n){return H(this,null,function*(){const e=yield mh(n),t=e.eventManager;return t.onListen=r0.bind(null,e.syncEngine),t.onUnlisten=s0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=i0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=o0.bind(null,e.syncEngine),t})}function R0(n){return n.asyncQueue.enqueue((()=>H(null,null,function*(){const e=yield kv(n),t=yield xv(n);return e.setNetworkEnabled(!0),(function(i){const s=fe(i);return s.Ea.delete(0),il(s)})(t)})))}function C0(n){return n.asyncQueue.enqueue((()=>H(null,null,function*(){const e=yield kv(n),t=yield xv(n);return e.setNetworkEnabled(!1),(function(i){return H(this,null,function*(){const s=fe(i);s.Ea.add(0),yield ma(s),s.Ra.set("Offline")})})(t)})))}function D0(n,e){const t=new sn;return n.asyncQueue.enqueueAndForget((()=>H(null,null,function*(){return(function(i,s,o){return H(this,null,function*(){try{const l=yield(function(d,g){const v=fe(d);return v.persistence.runTransaction("read document","readonly",(w=>v.localDocuments.getDocument(w,g)))})(i,s);l.isFoundDocument()?o.resolve(l):l.isNoDocument()?o.resolve(null):o.reject(new Z(K.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(l){const c=va(l,`Failed to get document '${s} from cache`);o.reject(c)}})})(yield Ea(n),e,t)}))),t.promise}function Nv(n,e,t={}){const r=new sn;return n.asyncQueue.enqueueAndForget((()=>H(null,null,function*(){return(function(s,o,l,c,d){const g=new ph({next:w=>{g.Nu(),o.enqueueAndForget((()=>Hf(s,v)));const M=w.docs.has(l);!M&&w.fromCache?d.reject(new Z(K.UNAVAILABLE,"Failed to get document because the client is offline.")):M&&w.fromCache&&c&&c.source==="server"?d.reject(new Z(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),v=new Jf(Zo(l.path),g,{includeMetadataChanges:!0,qa:!0});return Gf(s,v)})(yield wa(n),n.asyncQueue,e,t,r)}))),r.promise}function k0(n,e){const t=new sn;return n.asyncQueue.enqueueAndForget((()=>H(null,null,function*(){return(function(i,s,o){return H(this,null,function*(){try{const l=yield sh(i,s,!0),c=new Ev(s,l.Qs),d=c.ru(l.documents),g=c.applyChanges(d,!1);o.resolve(g.snapshot)}catch(l){const c=va(l,`Failed to execute query '${s} against cache`);o.reject(c)}})})(yield Ea(n),e,t)}))),t.promise}function Vv(n,e,t={}){const r=new sn;return n.asyncQueue.enqueueAndForget((()=>H(null,null,function*(){return(function(s,o,l,c,d){const g=new ph({next:w=>{g.Nu(),o.enqueueAndForget((()=>Hf(s,v))),w.fromCache&&c.source==="server"?d.reject(new Z(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),v=new Jf(l,g,{includeMetadataChanges:!0,qa:!0});return Gf(s,v)})(yield wa(n),n.asyncQueue,e,t,r)}))),r.promise}function x0(n,e,t){const r=new sn;return n.asyncQueue.enqueueAndForget((()=>H(null,null,function*(){try{const i=yield Ov(n);r.resolve((function(o,l,c){return H(this,null,function*(){var d;const g=fe(o),{request:v,gt:w,parent:M}=ny(g.serializer,v_(l),c);g.connection.$o||delete v.parent;const Y=(yield g.Ho("RunAggregationQuery",g.serializer.databaseId,M,v,1)).filter((X=>!!X.result));Pe(Y.length===1,64727);const J=(d=Y[0].result)==null?void 0:d.aggregateFields;return Object.keys(J).reduce(((X,ve)=>(X[w[ve]]=J[ve],X)),{})})})(i,e,t))}catch(i){r.reject(i)}}))),r.promise}function O0(n,e){const t=new ph(e);return n.asyncQueue.enqueueAndForget((()=>H(null,null,function*(){return(function(i,s){fe(i).Ca.add(s),s.next()})(yield wa(n),t)}))),()=>{t.Nu(),n.asyncQueue.enqueueAndForget((()=>H(null,null,function*(){return(function(i,s){fe(i).Ca.delete(s)})(yield wa(n),t)})))}}function N0(n,e,t,r){const i=(function(o,l){let c;return c=typeof o=="string"?j_().encode(o):o,(function(g,v){return new w0(g,v)})((function(g,v){if(g instanceof Uint8Array)return Cv(g,v);if(g instanceof ArrayBuffer)return Cv(new Uint8Array(g),v);if(g instanceof ReadableStream)return g.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")})(c),l)})(t,Qs(e));n.asyncQueue.enqueueAndForget((()=>H(null,null,function*(){E0(yield up(n),i,r)})))}function V0(n,e){return n.asyncQueue.enqueue((()=>H(null,null,function*(){return(function(r,i){const s=fe(r);return s.persistence.runTransaction("Get named query","readonly",(o=>s.Ii.getNamedQuery(o,i)))})(yield Ea(n),e)})))}function Mv(n,e){return(function(r,i){return new A0(r,i)})(n,e)}function M0(n,e){return n.asyncQueue.enqueue((()=>H(null,null,function*(){return(function(r,i){return H(this,null,function*(){const s=fe(r),o=s.indexManager,l=[];return s.persistence.runTransaction("Configure indexes","readwrite",(c=>o.getFieldIndexes(c).next((d=>(function(v,w,M,Y,J){v=[...v],w=[...w],v.sort(M),w.sort(M);const X=v.length,ve=w.length;let Re=0,we=0;for(;Re<ve&&we<X;){const qe=M(v[we],w[Re]);qe<0?J(v[we++]):qe>0?Y(w[Re++]):(Re++,we++)}for(;Re<ve;)Y(w[Re++]);for(;we<X;)J(v[we++])})(d,i,kA,(g=>{l.push(o.addFieldIndex(c,g))}),(g=>{l.push(o.deleteFieldIndex(c,g))})))).next((()=>q.waitFor(l)))))})})(yield Ea(n),e)})))}function L0(n,e){return n.asyncQueue.enqueue((()=>H(null,null,function*(){return(function(r,i){fe(r).Fs.Vs=i})(yield Ea(n),e)})))}function F0(n){return n.asyncQueue.enqueue((()=>H(null,null,function*(){return(function(t){const r=fe(t),i=r.indexManager;return r.persistence.runTransaction("Delete All Indexes","readwrite",(s=>i.deleteAllFieldIndexes(s)))})(yield Ea(n))})))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv="firestore.googleapis.com",Bv=!0;class qv{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Uv,this.ssl=Bv}else this.host=e.host,this.ssl=(t=e.ssl)!=null?t:Bv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=by;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ky)throw new Z(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lv((r=e.experimentalLongPollingOptions)!=null?r:{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Z(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Z(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Z(K.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ol{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new IA;switch(r.type){case"firstParty":return new AA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}_restart(){return H(this,null,function*(){this._terminateTask==="notTerminated"?yield this._terminate():this._terminateTask="notTerminated"})}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Fv.get(t);r&&(ne("ComponentProvider","Removing Datastore"),Fv.delete(t),r.terminate())})(this),Promise.resolve()}}function U0(n,e,t,r={}){var i;n=Ye(n,ol);const s=isCloudWorkstation(e),o=n._getSettings(),l=ug(Ir({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;s&&(pingServer(`https://${c}`),updateEmulatorBanner("Firestore",!0)),o.host!==Uv&&o.host!==c&&or("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=ug(Ir({},o),{host:c,ssl:s,emulatorOptions:r});if(!deepEqual(d,l)&&(n._setSettings(d),r.mockUserToken)){let g,v;if(typeof r.mockUserToken=="string")g=r.mockUserToken,v=rn.MOCK_USER;else{g=createMockUserToken(r.mockUserToken,(i=n._app)==null?void 0:i.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new Z(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new rn(w)}n._authCredentials=new TA(new fg(g,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new an(this.firestore,e,this._query)}}class ct{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ct(this.firestore,e,this._key)}toJSON(){return{type:ct._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ds(t,ct._jsonSchema))return new ct(e,r||null,new de(He.fromString(t.referencePath)))}}ct._jsonSchemaVersion="firestore/documentReference/1.0",ct._jsonSchema={type:Gt("string",ct._jsonSchemaVersion),referencePath:Gt("string")};class zr extends an{constructor(e,t,r){super(e,t,Zo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ct(this.firestore,null,new de(e))}withConverter(e){return new zr(this.firestore,e,this._path)}}function QD(n,e,...t){if(n=getModularInstance(n),Ud("collection","path",e),n instanceof ol){const r=He.fromString(e,...t);return gg(r),new zr(n,null,r)}{if(!(n instanceof ct||n instanceof zr))throw new Z(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(He.fromString(e,...t));return gg(r),new zr(n.firestore,null,r)}}function YD(n,e){if(n=Ye(n,ol),Ud("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new Z(K.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new an(n,null,(function(r){return new hi(He.emptyPath(),r)})(e))}function kn(n,e,...t){if(n=Ut(n),arguments.length===1&&(e=Vd.newId()),Ud("doc","path",e),n instanceof ol){const r=He.fromString(e,...t);return mg(r),new ct(n,null,new de(r))}{if(!(n instanceof ct||n instanceof zr))throw new Z(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(He.fromString(e,...t));return mg(r),new ct(n.firestore,n instanceof zr?n.converter:null,new de(r))}}function JD(n,e){return n=getModularInstance(n),e=getModularInstance(e),(n instanceof ct||n instanceof zr)&&(e instanceof ct||e instanceof zr)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function jv(n,e){return n=getModularInstance(n),e=getModularInstance(e),n instanceof an&&e instanceof an&&n.firestore===e.firestore&&Bu(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v="AsyncQueue";class Kv{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new qf(this,"async_queue_retry"),this._c=()=>{const r=lh();r&&ne($v,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=lh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=lh();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new sn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}lc(){return H(this,null,function*(){if(this.Xu.length!==0){try{yield this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ui(e))throw e;ne($v,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}})}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,qt("INTERNAL UNHANDLED ERROR: ",zv(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Wf.createAndSchedule(this,e,t,r,(s=>this.hc(s)));return this.tc.push(i),i}uc(){this.nc&&Ie(47125,{Pc:zv(this.nc)})}verifyOperationInProgress(){}Tc(){return H(this,null,function*(){let e;do e=this.ac,yield e;while(e!==this.ac)})}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function zv(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1})(n,["next","error","complete"])}class B0{constructor(){this._progressObserver={},this._taskCompletionResolver=new sn,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD=null;class mt extends ol{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Kv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return H(this,null,function*(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Kv(e),this._firestoreClient=void 0,yield e}})}}function q0(n,e,t){t||(t=Nu);const r=bs(n,"firestore");if(r.isInitialized(t)){const i=r.getImmediate({identifier:t}),s=r.getOptions(t);if(bn(s,e))return i;throw new Z(K.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new Z(K.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ky)throw new Z(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&oe(e.host)&&be(e.host),r.initialize({options:e,instanceIdentifier:t})}function ZD(n,e){const t=typeof n=="object"?n:getApp(),r=typeof n=="string"?n:e||Nu,i=_getProvider(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=getDefaultEmulatorHostnameAndPort("firestore");s&&U0(i,...s)}return i}function xt(n){if(n._terminated)throw new Z(K.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Wv(n),n._firestoreClient}function Wv(n){var e,t,r;const i=n._freezeSettings(),s=(function(l,c,d,g){return new cb(l,c,d,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,Lv(g.experimentalLongPollingOptions),g.useFetchStreams,g.isUsingEmulator)})(n._databaseId,((e=n._app)==null?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||(t=i.localCache)!=null&&t._offlineComponentProvider&&((r=i.localCache)!=null&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new P0(n._authCredentials,n._appCheckCredentials,n._queue,s,n._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(n._componentsProvider))}function ek(n,e){or("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings();return Gv(n,es.provider,{build:r=>new sl(r,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}function tk(n){return H(this,null,function*(){or("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=n._freezeSettings();Gv(n,es.provider,{build:t=>new fh(t,e.cacheSizeBytes)})})}function Gv(n,e,t){if((n=Ye(n,mt))._firestoreClient||n._terminated)throw new Z(K.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(n._componentsProvider||n._getSettings().localCache)throw new Z(K.FAILED_PRECONDITION,"SDK cache is already specified.");n._componentsProvider={_online:e,_offline:t},Wv(n)}function nk(n){if(n._initialized&&!n._terminated)throw new Z(K.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new sn;return n._queue.enqueueAndForgetEvenWhileRestricted((()=>H(null,null,function*(){try{yield(function(r){return H(this,null,function*(){if(!Ur.v())return Promise.resolve();const i=r+jy;yield Ur.delete(i)})})(xf(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}))),e.promise}function rk(n){return(function(t){const r=new sn;return t.asyncQueue.enqueueAndForget((()=>H(null,null,function*(){return h0(yield up(t),r)}))),r.promise})(xt(n=Ye(n,mt)))}function ik(n){return R0(xt(n=Ye(n,mt)))}function sk(n){return C0(xt(n=Ye(n,mt)))}function ok(n){return _removeServiceInstance(n.app,"firestore",n._databaseId.database),n._delete()}function Hv(n,e){const t=xt(n=Ye(n,mt)),r=new B0;return N0(t,n._databaseId,e,r),r}function j0(n,e){return V0(xt(n=Ye(n,mt)),e).then((t=>t?new an(n,null,t.query):null))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class $0{constructor(e,t,r){this._userDataWriter=t,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hn(Ot.fromBase64String(e))}catch(t){throw new Z(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Hn(Ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Hn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ds(e,Hn._jsonSchema))return Hn.fromBase64String(e.bytes)}}Hn._jsonSchemaVersion="firestore/bytes/1.0",Hn._jsonSchema={type:Gt("string",Hn._jsonSchemaVersion),bytes:Gt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Z(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function ak(){return new Zs(Fd)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Z(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Z(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Wr._jsonSchemaVersion}}static fromJSON(e){if(Ds(e,Wr._jsonSchema))return new Wr(e.latitude,e.longitude)}}Wr._jsonSchemaVersion="firestore/geoPoint/1.0",Wr._jsonSchema={type:Gt("string",Wr._jsonSchemaVersion),latitude:Gt("number"),longitude:Gt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Er._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ds(e,Er._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Er(e.vectorValues);throw new Z(K.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Er._jsonSchemaVersion="firestore/vectorValue/1.0",Er._jsonSchema={type:Gt("string",Er._jsonSchemaVersion),vectorValues:Gt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=/^__.*__$/;class z0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new fi(e,this.data,this.fieldMask,t,this.fieldTransforms):new ia(e,this.data,t,this.fieldTransforms)}}class Qv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new fi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Yv(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ie(40011,{Ac:n})}}class gh{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Rc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new gh(Ir(Ir({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var t;const r=(t=this.path)==null?void 0:t.child(e),i=this.Vc({path:r,fc:!1});return i.gc(e),i}yc(e){var t;const r=(t=this.path)==null?void 0:t.child(e),i=this.Vc({path:r,fc:!1});return i.Rc(),i}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return vh(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Yv(this.Ac)&&K0.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class W0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Qs(e)}Cc(e,t,r,i=!1){return new gh({Ac:e,methodName:t,Dc:r,path:Rt.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eo(n){const e=n._freezeSettings(),t=Qs(n._databaseId);return new W0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function _h(n,e,t,r,i,s={}){const o=n.Cc(s.merge||s.mergeFields?2:0,e,t,i);mp("Data must be an object, but it was:",o,r);const l=Zv(r,o);let c,d;if(s.merge)c=new Fn(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const g=[];for(const v of s.mergeFields){const w=ll(e,v,t);if(!o.contains(w))throw new Z(K.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);tI(g,w)||g.push(w)}c=new Fn(g),d=o.fieldTransforms.filter((v=>c.covers(v.field)))}else c=null,d=o.fieldTransforms;return new z0(new fn(l),c,d)}class ul extends ba{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ul}}function Jv(n,e,t){return new gh({Ac:3,Dc:e.settings.Dc,methodName:n._methodName,fc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class lp extends null{_toFieldTransform(e){return new Ku(e.path,new na)}isEqual(e){return e instanceof lp}}class cp extends ba{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Jv(this,e,!0),r=this.vc.map((s=>to(s,t))),i=new Bs(r);return new Ku(e.path,i)}isEqual(e){return e instanceof cp&&bn(this.vc,e.vc)}}class hp extends ba{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Jv(this,e,!0),r=this.vc.map((s=>to(s,t))),i=new qs(r);return new Ku(e.path,i)}isEqual(e){return e instanceof hp&&bn(this.vc,e.vc)}}class dp extends ba{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){const t=new ra(e.serializer,R_(e.serializer,this.Fc));return new Ku(e.path,t)}isEqual(e){return e instanceof dp&&this.Fc===e.Fc}}function fp(n,e,t,r){const i=n.Cc(1,e,t);mp("Data must be an object, but it was:",i,r);const s=[],o=fn.empty();qi(r,((c,d)=>{const g=yh(e,c,t);d=Ut(d);const v=i.yc(g);if(d instanceof ul)s.push(g);else{const w=to(d,v);w!=null&&(s.push(g),o.set(g,w))}}));const l=new Fn(s);return new Qv(o,l,i.fieldTransforms)}function pp(n,e,t,r,i,s){const o=n.Cc(1,e,t),l=[ll(e,r,t)],c=[i];if(s.length%2!=0)throw new Z(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<s.length;w+=2)l.push(ll(e,s[w])),c.push(s[w+1]);const d=[],g=fn.empty();for(let w=l.length-1;w>=0;--w)if(!tI(d,l[w])){const M=l[w];let Y=c[w];Y=Ut(Y);const J=o.yc(M);if(Y instanceof ul)d.push(M);else{const X=to(Y,J);X!=null&&(d.push(M),g.set(M,X))}}const v=new Fn(d);return new Qv(g,v,o.fieldTransforms)}function Xv(n,e,t,r=!1){return to(t,n.Cc(r?4:3,e))}function to(n,e){if(eI(n=Ut(n)))return mp("Unsupported field value:",e,n),Zv(n,e);if(n instanceof ba)return(function(r,i){if(!Yv(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,i){const s=[];let o=0;for(const l of r){let c=to(l,i.wc(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}})(n,e)}return(function(r,i){if((r=Ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return R_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=st.fromDate(r);return{timestampValue:oa(i.serializer,s)}}if(r instanceof st){const s=new st(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:oa(i.serializer,s)}}if(r instanceof Wr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Hn)return{bytesValue:Q_(i.serializer,r._byteString)};if(r instanceof ct){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:gf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Er)return(function(o,l){return{mapValue:{fields:{[Jd]:{stringValue:Xd},[Yo]:{arrayValue:{values:o.toArray().map((d=>{if(typeof d!="number")throw l.Sc("VectorValues must only contain numeric values.");return lf(l.serializer,d)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${vc(r)}`)})(n,e)}function Zv(n,e){const t={};return $g(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qi(n,((r,i)=>{const s=to(i,e.mc(r));s!=null&&(t[r]=s)})),{mapValue:{fields:t}}}function eI(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof st||n instanceof Wr||n instanceof Hn||n instanceof ct||n instanceof ba||n instanceof Er)}function mp(n,e,t){if(!eI(t)||!_g(t)){const r=vc(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function ll(n,e,t){if((e=Ut(e))instanceof Zs)return e._internalPath;if(typeof e=="string")return yh(n,e);throw vh("Field path arguments must be of type string or ",n,!1,void 0,t)}const G0=new RegExp("[~\\*/\\[\\]]");function yh(n,e,t){if(e.search(G0)>=0)throw vh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Zs(...e.split("."))._internalPath}catch(r){throw vh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function vh(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Z(K.INVALID_ARGUMENT,l+n+c)}function tI(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new H0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ih("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class H0 extends cl{data(){return super.data()}}function Ih(n,e){return typeof e=="string"?yh(n,e):e instanceof Zs?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Z(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gp{}class hl extends gp{}function uk(n,e,...t){let r=[];e instanceof gp&&r.push(e),r=r.concat(t),(function(s){const o=s.filter((c=>c instanceof Sa)).length,l=s.filter((c=>c instanceof dl)).length;if(o>1||o>0&&l>0)throw new Z(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class dl extends hl{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new dl(e,t,r)}_apply(e){const t=this._parse(e);return oI(e._query,t),new an(e.firestore,e.converter,af(e._query,t))}_parse(e){const t=eo(e.firestore);return(function(s,o,l,c,d,g,v){let w;if(d.isKeyField()){if(g==="array-contains"||g==="array-contains-any")throw new Z(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${g}' queries on documentId().`);if(g==="in"||g==="not-in"){sI(v,g);const Y=[];for(const J of v)Y.push(iI(c,s,J));w={arrayValue:{values:Y}}}else w=iI(c,s,v)}else g!=="in"&&g!=="not-in"&&g!=="array-contains-any"||sI(v,g),w=Xv(l,o,v,g==="in"||g==="not-in");return Je.create(d,g,w)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function lk(n,e,t){const r=e,i=Ih("where",n);return dl._create(i,r,t)}class Sa extends gp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Sa(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:at.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,s){let o=i;const l=s.getFlattenedFilters();for(const c of l)oI(o,c),o=af(o,c)})(e._query,t),new an(e.firestore,e.converter,af(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ck(...n){return n.forEach((e=>aI("or",e))),Sa._create("or",n)}function hk(...n){return n.forEach((e=>aI("and",e))),Sa._create("and",n)}class _p extends hl{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new _p(e,t)}_apply(e){const t=(function(i,s,o){if(i.startAt!==null)throw new Z(K.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Z(K.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Fu(s,o)})(e._query,this._field,this._direction);return new an(e.firestore,e.converter,(function(i,s){const o=i.explicitOrderBy.concat([s]);return new hi(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)})(e._query,t))}}function dk(n,e="asc"){const t=e,r=Ih("orderBy",n);return _p._create(r,t)}class Th extends hl{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Th(e,t,r)}_apply(e){return new an(e.firestore,e.converter,Fc(e._query,this._limit,this._limitType))}}function fk(n){return yg("limit",n),Th._create("limit",n,"F")}function pk(n){return yg("limitToLast",n),Th._create("limitToLast",n,"L")}class Eh extends hl{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Eh(e,t,r)}_apply(e){const t=rI(e,this.type,this._docOrFields,this._inclusive);return new an(e.firestore,e.converter,(function(i,s){return new hi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)})(e._query,t))}}function mk(...n){return Eh._create("startAt",n,!0)}function gk(...n){return Eh._create("startAfter",n,!1)}class wh extends hl{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new wh(e,t,r)}_apply(e){const t=rI(e,this.type,this._docOrFields,this._inclusive);return new an(e.firestore,e.converter,(function(i,s){return new hi(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)})(e._query,t))}}function _k(...n){return wh._create("endBefore",n,!1)}function yk(...n){return wh._create("endAt",n,!0)}function rI(n,e,t,r){if(t[0]=Ut(t[0]),t[0]instanceof cl)return(function(s,o,l,c,d){if(!c)throw new Z(K.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${l}().`);const g=[];for(const v of ea(s))if(v.field.isKeyField())g.push(Fs(o,c.key));else{const w=c.data.field(v.field);if(Dc(w))throw new Z(K.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+v.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(w===null){const M=v.field.canonicalString();throw new Z(K.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${M}' (used as the orderBy) does not exist.`)}g.push(w)}return new zi(g,d)})(n._query,n.firestore._databaseId,e,t[0]._document,r);{const i=eo(n.firestore);return(function(o,l,c,d,g,v){const w=o.explicitOrderBy;if(g.length>w.length)throw new Z(K.INVALID_ARGUMENT,`Too many arguments provided to ${d}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const M=[];for(let Y=0;Y<g.length;Y++){const J=g[Y];if(w[Y].field.isKeyField()){if(typeof J!="string")throw new Z(K.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${d}(), but got a ${typeof J}`);if(!of(o)&&J.indexOf("/")!==-1)throw new Z(K.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${d}() must be a plain document ID, but '${J}' contains a slash.`);const X=o.path.child(He.fromString(J));if(!de.isDocumentKey(X))throw new Z(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${d}() must result in a valid document path, but '${X}' is not because it contains an odd number of segments.`);const ve=new de(X);M.push(Fs(l,ve))}else{const X=Xv(c,d,J);M.push(X)}}return new zi(M,v)})(n._query,n.firestore._databaseId,i,e,t,r)}}function iI(n,e,t){if(typeof(t=Ut(t))=="string"){if(t==="")throw new Z(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!of(e)&&t.indexOf("/")!==-1)throw new Z(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(He.fromString(t));if(!de.isDocumentKey(r))throw new Z(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Fs(n,new de(r))}if(t instanceof ct)return Fs(n,t._key);throw new Z(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vc(t)}.`)}function sI(n,e){if(!Array.isArray(n)||n.length===0)throw new Z(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function oI(n,e){const t=(function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new Z(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function aI(n,e){if(!(e instanceof dl||e instanceof Sa))throw new Z(K.INVALID_ARGUMENT,`Function ${n}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class uI{convertValue(e,t="none"){switch($i(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ci(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ie(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return qi(e,((i,s)=>{r[i]=this.convertValue(s,t)})),r}convertVectorValue(e){var t,r,i;const s=(i=(r=(t=e.fields)==null?void 0:t[Yo].arrayValue)==null?void 0:r.values)==null?void 0:i.map((o=>Ct(o.doubleValue)));return new Er(s)}convertGeoPoint(e){return new Wr(Ct(e.latitude),Ct(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=kc(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ou(e));default:return null}}convertTimestamp(e){const t=li(e);return new st(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=He.fromString(e);Pe(oy(r),9688,{name:e});const i=new Ls(r.get(1),r.get(3)),s=new de(r.popFirst(5));return i.isEqual(t)||qt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class yp extends uI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,t)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vk(n){return new al("sum",ll("sum",n))}function Ik(n){return new al("avg",ll("average",n))}function Q0(){return new al("count")}function Tk(n,e){var t,r;return n instanceof al&&e instanceof al&&n.aggregateType===e.aggregateType&&((t=n._internalFieldPath)==null?void 0:t.canonicalString())===((r=e._internalFieldPath)==null?void 0:r.canonicalString())}function Ek(n,e){return jv(n.query,e.query)&&deepEqual(n.data(),e.data())}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI="NOT SUPPORTED";class ns{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qn extends cl{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new bh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ih("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(K.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Qn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}function wk(n,e,t){if(Ds(e,Qn._jsonSchema)){if(e.bundle===lI)throw new Z(K.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const r=Qs(n._databaseId),i=Mv(e.bundle,r),s=i.Wu(),o=new Xf(i.getMetadata(),r);for(const g of s)o.Ga(g);const l=o.documents;if(l.length!==1)throw new Z(K.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${l.length} documents.`);const c=zc(r,l[0].document),d=new de(He.fromString(e.bundleName));return new Qn(n,new yp(n),d,c,new ns(!1,!1),t||null)}}Qn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qn._jsonSchema={type:Gt("string",Qn._jsonSchemaVersion),bundleSource:Gt("string","DocumentSnapshot"),bundleName:Gt("string"),bundle:Gt("string")};class bh extends Qn{data(e={}){return super.data(e)}}class Yn{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ns(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new bh(this._firestore,this._userDataWriter,r.key,r,new ns(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Z(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((l=>{const c=new bh(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ns(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((l=>s||l.type!==3)).map((l=>{const c=new bh(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ns(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,g=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),g=o.indexOf(l.doc.key)),{type:Y0(l.type),doc:c,oldIndex:d,newIndex:g}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Z(K.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Yn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Vd.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ak(n,e,t){if(Ds(e,Yn._jsonSchema)){if(e.bundle===lI)throw new Z(K.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const r=Qs(n._databaseId),i=Mv(e.bundle,r),s=i.Wu(),o=new Xf(i.getMetadata(),r);for(const w of s)o.Ga(w);if(o.queries.length!==1)throw new Z(K.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${o.queries.length} queries.`);const l=Hc(o.queries[0].bundledQuery),c=o.documents;let d=new Js;c.map((w=>{const M=zc(r,w.document);d=d.add(M)}));const g=Xs.fromInitialDocuments(l,d,Be(),!1,!1),v=new an(n,t||null,l);return new Yn(n,new yp(n),v,g)}}function Y0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ie(61501,{type:n})}}function bk(n,e){return n instanceof Qn&&e instanceof Qn?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Yn&&e instanceof Yn&&n._firestore===e._firestore&&jv(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(n){n=Ye(n,ct);const e=Ye(n.firestore,mt);return Nv(xt(e),n._key).then((t=>vp(e,n,t)))}Yn._jsonSchemaVersion="firestore/querySnapshot/1.0",Yn._jsonSchema={type:Gt("string",Yn._jsonSchemaVersion),bundleSource:Gt("string","QuerySnapshot"),bundleName:Gt("string"),bundle:Gt("string")};class rs extends uI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ct(this.firestore,null,t)}}function Sk(n){n=Ye(n,ct);const e=Ye(n.firestore,mt),t=xt(e),r=new rs(e);return D0(t,n._key).then((i=>new Qn(e,r,n._key,i,new ns(i!==null&&i.hasLocalMutations,!0),n.converter)))}function Pk(n){n=Ye(n,ct);const e=Ye(n.firestore,mt);return Nv(xt(e),n._key,{source:"server"}).then((t=>vp(e,n,t)))}function Rk(n){n=Ye(n,an);const e=Ye(n.firestore,mt),t=xt(e),r=new rs(e);return nI(n._query),Vv(t,n._query).then((i=>new Yn(e,r,n,i)))}function Ck(n){n=Ye(n,an);const e=Ye(n.firestore,mt),t=xt(e),r=new rs(e);return k0(t,n._query).then((i=>new Yn(e,r,n,i)))}function Dk(n){n=Ye(n,an);const e=Ye(n.firestore,mt),t=xt(e),r=new rs(e);return Vv(t,n._query,{source:"server"}).then((i=>new Yn(e,r,n,i)))}function gi(n,e,t){n=Ye(n,ct);const r=Ye(n.firestore,mt),i=Ah(n.converter,e,t);return fl(r,[_h(eo(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Dt.none())])}function cI(n,e,t,...r){n=Ye(n,ct);const i=Ye(n.firestore,mt),s=eo(i);let o;return o=typeof(e=Ut(e))=="string"||e instanceof Zs?pp(s,"updateDoc",n._key,e,t,r):fp(s,"updateDoc",n._key,e),fl(i,[o.toMutation(n._key,Dt.exists(!0))])}function kk(n){return fl(Ye(n.firestore,mt),[new sa(n._key,Dt.none())])}function xk(n,e){const t=Ye(n.firestore,mt),r=kn(n),i=Ah(n.converter,e);return fl(t,[_h(eo(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Dt.exists(!1))]).then((()=>r))}function hI(n,...e){var t,r,i;n=getModularInstance(n);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Aa(e[o])||(s=e[o++]);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Aa(e[o])){const v=e[o];e[o]=(t=v.next)==null?void 0:t.bind(v),e[o+1]=(r=v.error)==null?void 0:r.bind(v),e[o+2]=(i=v.complete)==null?void 0:i.bind(v)}let c,d,g;if(n instanceof ct)d=Ye(n.firestore,mt),g=Zo(n._key.path),c={next:v=>{e[o]&&e[o](vp(d,n,v))},error:e[o+1],complete:e[o+2]};else{const v=Ye(n,an);d=Ye(v.firestore,mt),g=v._query;const w=new rs(d);c={next:M=>{e[o]&&e[o](new Yn(d,w,v,M))},error:e[o+1],complete:e[o+2]},nI(n._query)}return(function(w,M,Y,J){const X=new ph(J),ve=new Jf(M,X,Y);return w.asyncQueue.enqueueAndForget((()=>H(null,null,function*(){return Gf(yield wa(w),ve)}))),()=>{X.Nu(),w.asyncQueue.enqueueAndForget((()=>H(null,null,function*(){return Hf(yield wa(w),ve)})))}})(xt(d),g,l,c)}function Ok(n,e,...t){const r=getModularInstance(n),i=(function(c){const d={bundle:"",bundleName:"",bundleSource:""},g=["bundle","bundleName","bundleSource"];for(const v of g){if(!(v in c)){d.error=`snapshotJson missing required field: ${v}`;break}const w=c[v];if(typeof w!="string"){d.error=`snapshotJson field '${v}' must be a string.`;break}if(w.length===0){d.error=`snapshotJson field '${v}' cannot be an empty string.`;break}v==="bundle"?d.bundle=w:v==="bundleName"?d.bundleName=w:v==="bundleSource"&&(d.bundleSource=w)}return d})(e);if(i.error)throw new Z(K.INVALID_ARGUMENT,i.error);let s,o=0;if(typeof t[o]!="object"||Aa(t[o])||(s=t[o++]),i.bundleSource==="QuerySnapshot"){let l=null;if(typeof t[o]=="object"&&Aa(t[o])){const c=t[o++];l={next:c.next,error:c.error,complete:c.complete}}else l={next:t[o++],error:t[o++],complete:t[o++]};return(function(d,g,v,w,M){let Y,J=!1;return Hv(d,g.bundle).then((()=>j0(d,g.bundleName))).then((ve=>{ve&&!J&&(M&&ve.withConverter(M),Y=hI(ve,v||{},w))})).catch((ve=>(w.error&&w.error(ve),()=>{}))),()=>{J||(J=!0,Y&&Y())}})(r,i,s,l,t[o])}if(i.bundleSource==="DocumentSnapshot"){let l=null;if(typeof t[o]=="object"&&Aa(t[o])){const c=t[o++];l={next:c.next,error:c.error,complete:c.complete}}else l={next:t[o++],error:t[o++],complete:t[o++]};return(function(d,g,v,w,M){let Y,J=!1;return Hv(d,g.bundle).then((()=>{if(!J){const ve=new ct(d,M||null,de.fromPath(g.bundleName));Y=hI(ve,v||{},w)}})).catch((ve=>(w.error&&w.error(ve),()=>{}))),()=>{J||(J=!0,Y&&Y())}})(r,i,s,l,t[o])}throw new Z(K.INVALID_ARGUMENT,`unsupported bundle source: ${i.bundleSource}`)}function Nk(n,e){return O0(xt(n=Ye(n,mt)),Aa(e)?e:{next:e})}function fl(n,e){return(function(r,i){const s=new sn;return r.asyncQueue.enqueueAndForget((()=>H(null,null,function*(){return a0(yield up(r),i,s)}))),s.promise})(xt(n),e)}function vp(n,e,t){const r=t.docs.get(e._key),i=new rs(n);return new Qn(n,i,e._key,r,new ns(t.hasPendingWrites,t.fromCache),e.converter)}function Vk(n){return J0(n,{count:Q0()})}function J0(n,e){const t=Ye(n.firestore,mt),r=xt(t),i=jg(e,((s,o)=>new U_(o,s.aggregateType,s._internalFieldPath)));return x0(r,n._query,i).then((s=>(function(l,c,d){const g=new rs(l);return new $0(c,g,d)})(t,n,s)))}class X0{constructor(e){this.kind="memory",this._onlineComponentProvider=es.provider,this._offlineComponentProvider=e!=null&&e.garbageCollector?e.garbageCollector._offlineComponentProvider:{build:()=>new sp(void 0)}}toJSON(){return{kind:this.kind}}}class Z0{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=dI(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class eP{constructor(){this.kind="memoryEager",this._offlineComponentProvider=Ta.provider}toJSON(){return{kind:this.kind}}}class tP{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new sp(e)}}toJSON(){return{kind:this.kind}}}function Mk(){return new eP}function Lk(n){return new tP(n==null?void 0:n.cacheSizeBytes)}function Fk(n){return new X0(n)}function nP(n){return new Z0(n)}class rP{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=es.provider,this._offlineComponentProvider={build:t=>new sl(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class iP{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=es.provider,this._offlineComponentProvider={build:t=>new fh(t,e==null?void 0:e.cacheSizeBytes)}}}function dI(n){return new rP(n==null?void 0:n.forceOwnership)}function Uk(){return new iP}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sP={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=eo(e)}set(e,t,r){this._verifyNotCommitted();const i=is(e,this._firestore),s=Ah(i.converter,t,r),o=_h(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Dt.none())),this}update(e,t,r,...i){this._verifyNotCommitted();const s=is(e,this._firestore);let o;return o=typeof(t=getModularInstance(t))=="string"||t instanceof Zs?pp(this._dataReader,"WriteBatch.update",s._key,t,r,i):fp(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Dt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=is(e,this._firestore);return this._mutations=this._mutations.concat(new sa(t._key,Dt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Z(K.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function is(n,e){if((n=Ut(n)).firestore!==e)throw new Z(K.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=eo(e)}get(e){const t=is(e,this._firestore),r=new yp(this._firestore);return this._transaction.lookup([t._key]).then((i=>{if(!i||i.length!==1)return Ie(24041);const s=i[0];if(s.isFoundDocument())return new cl(this._firestore,r,s.key,s,t.converter);if(s.isNoDocument())return new cl(this._firestore,r,t._key,null,t.converter);throw Ie(18433,{doc:s})}))}set(e,t,r){const i=is(e,this._firestore),s=Ah(i.converter,t,r),o=_h(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,t,r,...i){const s=is(e,this._firestore);let o;return o=typeof(t=Ut(t))=="string"||t instanceof Zs?pp(this._dataReader,"Transaction.update",s._key,t,r,i):fp(this._dataReader,"Transaction.update",s._key,t),this._transaction.update(s._key,o),this}delete(e){const t=is(e,this._firestore);return this._transaction.delete(t._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP extends aP{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=is(e,this._firestore),r=new rs(this._firestore);return super.get(e).then((i=>new Qn(this._firestore,r,t._key,i._document,new ns(!1,!1),t.converter)))}}function Bk(n,e,t){n=Ye(n,mt);const r=Ir(Ir({},sP),t);return(function(s){if(s.maxAttempts<1)throw new Z(K.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r),(function(s,o,l){const c=new sn;return s.asyncQueue.enqueueAndForget((()=>H(null,null,function*(){const d=yield Ov(s);new S0(s.asyncQueue,d,l,o,c).ju()}))),c.promise})(xt(n),(i=>e(new uP(n,i))),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(){return new ul("deleteField")}function qk(){return new lp("serverTimestamp")}function jk(...n){return new cp("arrayUnion",n)}function $k(...n){return new hp("arrayRemove",n)}function Kk(n){return new dp("increment",n)}function zk(n){return new Er(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(n){return xt(n=Ye(n,mt)),new oP(n,(e=>fl(n,e)))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(n,e){const t=xt(n=Ye(n,mt));if(!t._uninitializedComponentsProvider||t._uninitializedComponentsProvider._offline.kind==="memory")return or("Cannot enable indexes when persistence is disabled"),Promise.resolve();const r=(function(s){const o=typeof s=="string"?(function(d){try{return JSON.parse(d)}catch(g){throw new Z(K.INVALID_ARGUMENT,"Failed to parse JSON: "+(g==null?void 0:g.message))}})(s):s,l=[];if(Array.isArray(o.indexes))for(const c of o.indexes){const d=pI(c,"collectionGroup"),g=[];if(Array.isArray(c.fields))for(const v of c.fields){const w=yh("setIndexConfiguration",pI(v,"fieldPath"));v.arrayConfig==="CONTAINS"?g.push(new xs(w,2)):v.order==="ASCENDING"?g.push(new xs(w,0)):v.order==="DESCENDING"&&g.push(new xs(w,1))}l.push(new jo(jo.UNKNOWN_ID,d,g,$o.empty()))}return l})(e);return M0(t,r)}function pI(n,e){if(typeof n[e]!="string")throw new Z(K.INVALID_ARGUMENT,"Missing string value for: "+e);return n[e]}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function Hk(n){var e;n=Ye(n,mt);const t=gI.get(n);if(t)return t;if(((e=xt(n)._uninitializedComponentsProvider)==null?void 0:e._offline.kind)!=="persistent")return null;const i=new lP(n);return gI.set(n,i),i}function Qk(n){mI(n,!0)}function Yk(n){mI(n,!1)}function Jk(n){F0(xt(n._firestore)).then((e=>ne("deleting all persistent cache indexes succeeded"))).catch((e=>or("deleting all persistent cache indexes failed",e)))}function mI(n,e){L0(xt(n._firestore),e).then((t=>ne(`setting persistent cache index auto creation isEnabled=${e} succeeded`))).catch((t=>or(`setting persistent cache index auto creation isEnabled=${e} failed`,t)))}const gI=new WeakMap;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(n){var e;const t=xt(Ye(n.firestore,mt)),r=(e=t._onlineComponents)==null?void 0:e.datastore.serializer;return r===void 0?null:Wc(r,yn(n._query)).ft}function Zk(n,e){var t;const r=jg(e,((o,l)=>new U_(l,o.aggregateType,o._internalFieldPath))),i=xt(Ye(n.firestore,mt)),s=(t=i._onlineComponents)==null?void 0:t.datastore.serializer;return s===void 0?null:ny(s,v_(n._query),r,!0).request}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return Ip.instance.onExistenceFilterMismatch(e)}}class Ip{constructor(){this.Mc=new Map}static get instance(){return Ph||(Ph=new Ip,(function(t){if(jc)throw new Error("a TestingHooksSpi instance is already set");jc=t})(Ph)),Ph}lt(e){this.Mc.forEach((t=>t(e)))}onExistenceFilterMismatch(e){const t=Symbol(),r=this.Mc;return r.set(t,e),()=>r.delete(t)}}let Ph=null;(function(e,t=!0){(function(i){Fo=i})(Ss),Vr(new xr("firestore",((r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new mt(new EA(r.getProvider("auth-internal")),new bA(o,r.getProvider("app-check-internal")),(function(d,g){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new Z(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ls(d.options.projectId,g)})(o,i),o);return s=Ir({useFetchStreams:t},s),l._setSettings(s),l}),"PUBLIC").setMultipleInstances(!0)),gr(cg,hg,e),gr(cg,hg,"esm2020")})();var cP=bt(3861),_i=bt.n(cP),hP=bt(9242),dP=bt.n(hP),fP=bt(9166),pP=bt.n(fP),Tn=(n=>(n.REAL="real",n.TOTAL="total",n))(Tn||{}),mP=Object.defineProperty,gP=(n,e,t)=>e in n?mP(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Tp=(n,e,t)=>gP(n,typeof e!="symbol"?e+"":e,t);class ar{constructor(e,t=0,r=0,i=0,s=0,o=0){this.type=e,this.milliseconds=t,this.seconds=r,this.minutes=i,this.hours=s,this.days=o,this.milliseconds=t,this.seconds=r,this.minutes=i,this.hours=s,this.days=o,this.type=e}addDuration(e){this.milliseconds+=e.milliseconds,this.seconds=this.seconds+e.seconds+Math.floor(this.milliseconds/1e3),this.milliseconds%=1e3,this.minutes=this.minutes+e.minutes+Math.floor(this.seconds/60),this.seconds%=60,this.hours=this.hours+e.hours+Math.floor(this.minutes/60),this.minutes%=60,this.days=this.days+e.days+Math.floor(this.hours/24),this.hours%=24}getAsMilliseconds(){return((((this.days||0)*24+(this.hours||0))*60+(this.minutes||0))*60+(this.seconds||0))*1e3+(this.milliseconds||0)||0}normalize(){if(this.getAsMilliseconds()<=0){this.milliseconds=0,this.seconds=0,this.minutes=0,this.hours=0,this.days=0;return}this.addDuration(new ar(Tn.REAL))}getAsString(e=!1){this.normalize();let t="";return this.days&&(t+=`${this.days}D `),this.hours&&(t+=`${this.hours}H `),this.minutes&&(t+=`${this.minutes}M `),this.seconds&&(t+=`${this.seconds}S `),e&&(t+=`${this.milliseconds}MS `),t===""?"00:00:00":t}}class ss{constructor(e){Tp(this,"count"),Tp(this,"real"),Tp(this,"total");var t,r,i,s,o,l,c,d,g,v,w,M,Y,J,X,ve,Re,we,qe,We,Ne,O,S,C,F;this.count=(t=e==null?void 0:e.count)!=null?t:0,this.real=e?new ar((i=(r=e.real)==null?void 0:r.type)!=null?i:Tn.REAL,(o=(s=e.real)==null?void 0:s.milliseconds)!=null?o:0,(c=(l=e.real)==null?void 0:l.seconds)!=null?c:0,(g=(d=e.real)==null?void 0:d.minutes)!=null?g:0,(w=(v=e.real)==null?void 0:v.hours)!=null?w:0,(Y=(M=e.real)==null?void 0:M.days)!=null?Y:0):new ar(Tn.REAL),this.total=e?new ar((X=(J=e.total)==null?void 0:J.type)!=null?X:Tn.TOTAL,(Re=(ve=e.total)==null?void 0:ve.milliseconds)!=null?Re:0,(qe=(we=e.total)==null?void 0:we.seconds)!=null?qe:0,(Ne=(We=e.total)==null?void 0:We.minutes)!=null?Ne:0,(S=(O=e.total)==null?void 0:O.hours)!=null?S:0,(F=(C=e.total)==null?void 0:C.days)!=null?F:0):new ar(Tn.TOTAL)}getOpenedDuration(){return this.total}getWatchedDuration(){return this.real}getCount(){return this.count}addDuration(e){e.type===Tn.REAL?this.real.addDuration(new ar(e.type,e.milliseconds,e.seconds,e.minutes,e.hours,e.days)):e.type===Tn.TOTAL&&this.total.addDuration(new ar(e.type,e.milliseconds,e.seconds,e.minutes,e.hours,e.days))}addCount(e){this.count+=e}}var no=(n=>(n.PLAYING="opened",n.WATCHED="watched",n.LEAVING="leaving",n.NO_VIDEO="noVideo",n))(no||{}),Pa=(n=>(n.TODAY="Today",n.Yesterday="Yesterday",n.WEEK="This Week",n.MONTH="This Month",n.TOTAL="Total",n))(Pa||{}),_P=(n=>(n[n.PLAYING=1]="PLAYING",n[n.PAUSED=2]="PAUSED",n[n.ENDED=0]="ENDED",n[n.UNSTARTED=-1]="UNSTARTED",n[n.BUFFERING=3]="BUFFERING",n[n.CUED=5]="CUED",n[n.CHANGED=-5]="CHANGED",n))(_P||{}),yP=Object.defineProperty,vP=Object.defineProperties,IP=Object.getOwnPropertyDescriptors,_I=Object.getOwnPropertySymbols,TP=Object.prototype.hasOwnProperty,EP=Object.prototype.propertyIsEnumerable,yI=(n,e,t)=>e in n?yP(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,wr=(n,e)=>{for(var t in e||(e={}))TP.call(e,t)&&yI(n,t,e[t]);if(_I)for(var t of _I(e))EP.call(e,t)&&yI(n,t,e[t]);return n},Ep=(n,e)=>vP(n,IP(e));_i().locale(Ep(wr({},pP()),{weekStart:1})),_i().extend(dP());const wp=n=>_i()(n).dayOfYear().toString(),vI=(n,e)=>new Date(_i()().set("year",e).dayOfYear(n).toISOString()),wP=n=>_i()(n).format("dddd"),AP=n=>_i()(n).format("MMMM"),bP=n=>_i()(n).format("YYYY"),pl=(n=null)=>{if(n!==null)return`day${wp(n)}${n.getFullYear()}`;const e=new Date;return`day${wp(e)}${e.getFullYear()}`},SP=()=>{const n=new Date;return n.setDate(n.getDate()-1),`day${wp(n)}${n.getFullYear()}`},II=()=>({count:0,real:{days:0,hours:0,minutes:0,seconds:0,milliseconds:0,type:Tn.REAL},total:{days:0,hours:0,minutes:0,seconds:0,milliseconds:0,type:Tn.TOTAL}});function Rh(n,e){return n.milliseconds+=e.milliseconds,n.seconds=n.seconds+e.seconds+Math.floor(n.milliseconds/1e3),n.milliseconds%=1e3,n.minutes=n.minutes+e.minutes+Math.floor(n.seconds/60),n.seconds%=60,n.hours=n.hours+e.hours+Math.floor(n.minutes/60),n.minutes%=60,n.days=n.days+e.days+Math.floor(n.hours/24),n.hours%=24,n}const PP=n=>{var e,t,r;const s=(e=/day([0-9]{1,3})([0-9]{4})/gi.exec(n))!=null?e:[],o=parseInt((t=s[1])!=null?t:"0"),l=parseInt((r=s[2])!=null?r:"0");return vI(o,l)},RP=n=>_i()().isSame(n,"week"),CP=n=>_i()().isSame(n,"month"),TI=(n,e)=>{const t={count:0,real:{days:0,hours:0,minutes:0,seconds:0,milliseconds:0,type:Tn.REAL},total:{days:0,hours:0,minutes:0,seconds:0,milliseconds:0,type:Tn.TOTAL}};for(const r in n)if(r.includes("day")){const i=PP(r),s=n[r];switch(e){case"week":RP(i)&&(t.real=Rh(t.real,s.real),t.total=Rh(t.total,s.total),t.count+=s.count);break;case"month":CP(i)&&(t.real=Rh(t.real,s.real),t.total=Rh(t.total,s.total),t.count+=s.count);break;default:break}}return t},tx=n=>{if(n<0)return"";let e;function t(c,d){return d=d||2,`00${c}`.slice(-d)}function r(c){return e=2,c>99?c.toString():`00${c}`.slice(-e)}const i=n%1e3;n=(n-i)/1e3;const s=n%60;n=(n-s)/60;const o=n%60,l=(n-o)/60;return`${r(l)}:${t(o)}:${t(s)}`},ro=n=>((((n.days||0)*24+(n.hours||0))*60+(n.minutes||0))*60+(n.seconds||0))*1e3+(n.milliseconds||0)||0,EI=n=>{const e=[],t=pl();let r;t in n?r=n[t]:r=II();const i=SP();let s;i in n?s=n[i]:s=II();const o=TI(n,"week"),l=TI(n,"month"),c=n.YTT_Total;return e.push([Pa.TODAY,r.count,ro(r.real)]),e.push([Pa.Yesterday,s.count,ro(s.real)]),e.push([Pa.WEEK,o.count,ro(o.real)]),e.push([Pa.MONTH,l.count,ro(l.real)]),e.push([Pa.TOTAL,c.count,ro(c.real)]),e},DP=n=>n.sort((e,t)=>t.value-e.value),kP=n=>{switch(n){case"Monday":return"Mon.";case"Tuesday":return"Tues.";case"Wednesday":return"Wed.";case"Thursday":return"Thur.";case"Friday":return"Fri.";case"Saturday":return"Sat.";case"Sunday":return"Sun.";default:return""}},xP=n=>Math.round(n/1e3/60),wI=(n,e)=>{const t=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];return t.indexOf(n[0])>t.indexOf(e[0])?1:-1},OP=(n,e)=>{const t={Monday:[0,0],Tuesday:[0,0],Wednesday:[0,0],Thursday:[0,0],Friday:[0,0],Saturday:[0,0],Sunday:[0,0]},r=wr(wr({},t),n),i=wr(wr({},t),e),s=Object.entries(r).sort(wI),o=Object.entries(i).sort(wI);let l={};return o.forEach((c,d)=>{const g=s[d],v=o[d];if(!g||!v)return;const w=c[1][0]+g[1][0],M=c[1][1]+g[1][1];l=Ep(wr({},l),{[v[0]]:[w,M]})}),l},NP=n=>{var e,t,r;const i=[];for(const c in n)if(c.includes("day")){const g=(e=/day([0-9]{1,3})([0-9]{4})/gi.exec(c))!=null?e:[],v=parseInt((t=g[1])!=null?t:"0"),w=parseInt((r=g[2])!=null?r:"0"),M=vI(v,w),Y=new ss(n[c]),J=wr({day:wP(M),month:AP(M),year:bP(M)},Y);i.push(J)}const s=i.reduce((c,d)=>("day"in d&&(c[d.day]=(c[d.day]||0)+1),c),{}),o=i.reduce((c,d)=>{if("day"in d){const v=new ss(d).getWatchedDuration().getAsMilliseconds();c[d.day]=(c[d.day]||0)+v}return c},{});let l={};for(const c in s)if(Object.prototype.hasOwnProperty.call(s,c)){const d=s[c],g=o[c];d!==void 0&&g!==void 0&&(l=Ep(wr({},l),{[c]:[d,g]}))}return l},AI=(n,e)=>{const t=NP(e),r=OP(t,n),i=[];for(const s in r){const o=r[s];if(!o)continue;let l=o[1]/o[0];(Number.isNaN(l)||!l)&&(l=0),i.push({day:kP(s),[s]:xP(l)})}return i},VP=(n,e)=>{const t=ro(n.real),r=ro(e.real);return t>r?n:e},bI=(n,e)=>{const t={};for(const i in n)(i.includes("day")||i==="YTT_Total")&&(Object.prototype.hasOwnProperty.call(e,i)?t[i]=VP(n[i],e[i]):t[i]=n[i]);for(const i in e)(i.includes("day")||i==="YTT_Total")&&(Object.prototype.hasOwnProperty.call(t,i)||(t[i]=e[i]));return wr(wr(wr({},e),n),t)},MP=(n,e)=>{const t={};for(const r in n){const i=n[r],s=e[r];r in e&&i!==void 0&&s!==void 0?t[r]=i+s:i!==void 0&&(t[r]=i)}for(const r in e){const i=e[r];(!n[r]||!n)&&i!==void 0&&(t[r]=i)}return t},SI=(n,e)=>{const t={};for(const r in n){const i=n[r],s=e[r];r in e&&i&&s?((Number.isNaN(i.time)||!i.time)&&(i.time=0),t[r]={count:i.count+s.count||s.count,avatar:s.avatar,time:i.time+s.time||s.time}):i&&(t[r]=i)}for(const r in e){const i=e[r];(!n[r]||!n)&&i&&(t[r]=i)}return t},PI=(n,e=null)=>{let t={};!n&&e&&(t=e),!e&&n&&(t=n),n&&e&&(t=MP(n,e));const r=[];for(const i in t){const s=t[i];i!=="Settings"&&i!=="uuid"&&i!==""&&s!==void 0&&s>0&&r.push([i,s*1e3])}return r.sort((i,s)=>s[1]-i[1]),r},RI=(n,e=null)=>{let t={};!n&&e&&(t=e),!e&&n&&(t=n),n&&e&&(t=SI(n,e));let r=[];for(const i in t){const s=t[i];s&&r.push({id:i,label:i,value:s.count})}return r=DP(r),r.length>10?r.slice(0,10):r},CI=(n,e=null)=>{let t={};!n&&e&&(t=e),!e&&n&&(t=n),n&&e&&(t=SI(n,e));const r=[];for(const i in t){const s=t[i];s&&s.time&&s.time>0&&r.push([i,s.time*1e3])}return r.sort((i,s)=>s[1]-i[1]),r},nx=n=>{const e=new Map;return n.forEach(r=>{const i=Object.keys(r)[0];if(!i)return;const s=r[i];if(e.has(i)){const o=e.get(i);if(o){const[l,c]=o;e.set(i,[l+s[0],c&&s[1]])}}else e.set(i,s)}),Array.from(e,([r,i])=>({[r]:i}))},rx=(n,e)=>{const t=JSON.parse(JSON.stringify(n)),r=JSON.parse(JSON.stringify(e));return!r||!t?[]:(r.forEach(i=>{const s=Object.keys(i)[0];if(!s)return;const o=i[s],l=o[1],c=Math.round(o[0])*1e3,d=t.findIndex(g=>g[0]===s);if(d===-1)t.push([s,c,l]);else{const g=t[d];g&&(g[1]+=c,g[2]=l)}}),t)};var LP=Object.defineProperty,FP=Object.defineProperties,UP=Object.getOwnPropertyDescriptors,DI=Object.getOwnPropertySymbols,BP=Object.prototype.hasOwnProperty,qP=Object.prototype.propertyIsEnumerable,kI=(n,e,t)=>e in n?LP(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Ch=(n,e)=>{for(var t in e||(e={}))BP.call(e,t)&&kI(n,t,e[t]);if(DI)for(var t of DI(e))qP.call(e,t)&&kI(n,t,e[t]);return n},Dh=(n,e)=>FP(n,UP(e)),Nt=(n,e,t)=>new Promise((r,i)=>{var s=c=>{try{l(t.next(c))}catch(d){i(d)}},o=c=>{try{l(t.throw(c))}catch(d){i(d)}},l=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,o);l((t=t.apply(n,e)).next())});const kh=()=>Nt(null,null,function*(){return(yield Ae().storage.sync.get("uuid")).uuid}),jP=(n,e="local")=>Nt(null,null,function*(){return e==="local"?(yield Ae().storage.local.get(n))[n]:(yield Ae().storage.sync.get(n))[n]}),Ap=(n,e,t="local")=>Nt(null,null,function*(){t==="local"?yield Ae().storage.local.set({[n]:e}):yield Ae().storage.sync.set({[n]:e})}),xI=n=>Nt(null,null,function*(){yield Ae().storage.local.set({termsAccepted:n}),yield Ae().storage.sync.set({termsAccepted:n})}),ix=()=>Nt(null,null,function*(){const n=yield browser.storage.sync.get(["uuid","termsAccepted"]);return n.termsAccepted===void 0&&(yield xI(null),n.termsAccepted=null),n}),$P=()=>Nt(null,null,function*(){const n=yield Ae().storage.sync.get("termsAccepted");return n.termsAccepted===void 0?(xI(null),null):n.termsAccepted}),xh=n=>Nt(null,null,function*(){return(yield Ae().storage.local.get(n))[n]}),KP=n=>Nt(null,null,function*(){const e=`${n}_pushed`;return(yield Ae().storage.local.get(e))[e]}),OI=(n,e)=>Promise.race([n,new Promise((t,r)=>setTimeout(r,e))]),NI=(n,e)=>Nt(null,null,function*(){return n.id?yield browser.tabs.sendMessage(n.id,{from:"popup",subject:e}):Promise.reject(new Error("Tab has no id"))}),sx=()=>Nt(null,null,function*(){const n=yield browser.tabs.query({url:"*://*.twitch.tv/*"}),e=[];for(const t of n)try{if(t.discarded===!0&&(yield browser.tabs.update(t.id,{url:t.url})),t.id!==void 0){const r=yield OI(NI(t,"currentTime"),1500);r&&Object.keys(r)[0]!==""&&e.push(r)}}catch(r){yield browser.tabs.update(t.id,{url:t.url})}return e}),ox=()=>Nt(null,null,function*(){const n=yield browser.tabs.query({url:"*://*.youtube.com/*"});let e=[];for(const t of n)if(t.id)try{t.discarded===!0&&(yield browser.tabs.update(t.id,{url:t.url}));const r=yield OI(NI(t,"currentYoutubeInfos"),1500);r&&Object.keys(r)[0]!==""&&e.push(r)}catch(r){yield browser.tabs.update(t.id,{url:t.url})}return e=removeDuplicateChannelsAndAddTime(e),e}),VI=n=>Nt(null,null,function*(){yield Ae().storage.local.set({uuid:n}),yield Ae().storage.sync.set({uuid:n})}),bp=(n,e)=>Nt(null,null,function*(){n&&(yield Ae().storage.local.set({[n]:e}))}),Sp=(n,e,t,r)=>Nt(null,null,function*(){var i;const s=`${n}_channels`,o=parseFloat((t/1e3).toFixed(3)),l=(yield Ae().storage.local.get(s))||{},c=((i=l[s])==null?void 0:i[e])||{count:0,avatar:"",time:0};r&&(c.count+=1),c.time+=o;const d=Dh(Ch({},l[s]),{[e]:c});return yield Ae().storage.local.set({[s]:d}),d}),zP=(n,e,t)=>Nt(null,null,function*(){if(!n||!e||t<=2)return{};const r=`${n}_twitch`,i=yield Ae().storage.local.get(r);if(!i[r])return yield Ae().storage.local.set({[r]:{[e]:t}}),{[e]:t};if(!i[r][e])return yield Ae().storage.local.set({[r]:Dh(Ch({},i[r]),{[e]:t})}),Dh(Ch({},i[r]),{[e]:t});const s=Dh(Ch({},i[r]),{[e]:i[r][e]+t});return yield Ae().storage.local.set({[r]:s}),s}),MI=n=>Nt(null,null,function*(){const e=`${n}_twitch`;return(yield Ae().storage.local.get(e))[e]||{}}),LI=n=>Nt(null,null,function*(){const e=`${n}_channels`;return(yield Ae().storage.local.get(e))[e]||{}}),WP=(n,e)=>Nt(null,null,function*(){if(n){const t=`${n}_pushed`;yield Ae().storage.local.set({[t]:e})}}),ax=()=>{browser.storage.sync.clear(),browser.storage.local.clear()},ux=(n,e)=>Nt(null,null,function*(){let r=(yield browser.storage.local.get("Settings")).Settings;r?(r[n]=e,browser.storage.local.set({Settings:r})):(r={[n]:e},browser.storage.local.set({Settings:r}))}),GP=()=>Nt(null,null,function*(){let n=yield Ae().storage.local.get("Settings");return n.Settings||(n={Settings:{twitchMuted:!1,twitchDefault:!1}}),n.Settings||{twitchMuted:!1,twitchDefault:!1}}),HP=n=>Nt(null,null,function*(){const e=`${n}_twitch`;yield Ae().storage.local.remove(e)}),QP=n=>Nt(null,null,function*(){const e=`${n}_channels`;yield Ae().storage.local.remove(e)});var Pp=(n,e,t)=>new Promise((r,i)=>{var s=c=>{try{l(t.next(c))}catch(d){i(d)}},o=c=>{try{l(t.throw(c))}catch(d){i(d)}},l=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,o);l((t=t.apply(n,e)).next())});function YP(){return Ae().runtime.getManifest().version}const FI=()=>{const{userAgent:n}=navigator;return n.indexOf("Edg")>-1?"Edge":n.indexOf("Chrome")>-1?"Chrome":"Other"},UI=n=>({YTT_User_ID:n,YTT_Version:YP(),YTT_Total:new ss,_id:n,initialDate:new Date}),lx=(n,e)=>{const t={type:n,value:e};browser.runtime.sendMessage(t)},cx=n=>{const e={type:YTT_LOG_EVENT,value:n};browser.runtime.sendMessage(e)},hx=n=>chrome.runtime.getURL(n),dx=(n,e)=>Pp(null,null,function*(){return yield browser.runtime.sendMessage({type:n,uuid:e})}),fx=(n,e)=>Pp(null,null,function*(){return yield browser.runtime.sendMessage({type:n,data:e})}),px=(n,e,t)=>Pp(null,null,function*(){return yield browser.runtime.sendMessage({type:n,mail:e,password:t})}),mx=n=>n.some(e=>{const t=Object.keys(e)[0];return t?!e[t][1]:!1}),gx=n=>{let e=0;return n.forEach(t=>{const r=Object.keys(t)[0];if(!r)return;const i=t[r];e+=i[0]}),e*1e3},_x=()=>new Promise(n=>{chrome.permissions.request({permissions:["downloads"],origins:["*://*.youtube.com/*","*://*.twitch.tv/*"]},e=>{n(e)})});var Jn=(n,e,t)=>new Promise((r,i)=>{var s=c=>{try{l(t.next(c))}catch(d){i(d)}},o=c=>{try{l(t.throw(c))}catch(d){i(d)}},l=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,o);l((t=t.apply(n,e)).next())});const BI=ec({apiKey:"AIzaSyBL39toNzSL5hF3d1G559skpgjYrhCgpY8",authDomain:"websitecounter-256911.firebaseapp.com",databaseURL:"https://websitecounter-256911.firebaseio.com",projectId:"websitecounter-256911",storageBucket:"websitecounter-256911.appspot.com",messagingSenderId:"800771478396",appId:"1:800771478396:web:e2f23025718af9c34c4af9",measurementId:"G-7EEJ6JGJ7K"}),pn=hA(BI),Bn=q0(BI,{localCache:nP({tabManager:dI({forceOwnership:!0})})}),JP=()=>Jn(null,null,function*(){return new Promise((n,e)=>{pn!=null&&pn.currentUser&&n(pn.currentUser.isAnonymous);const t=jw(pn,r=>{t(),n(r?r.isAnonymous:null)},e)})}),XP=()=>Jn(null,null,function*(){const n=pn.currentUser;try{return yield n==null?void 0:n.delete(),!0}catch(e){return console.error(e),!1}}),ZP=()=>Jn(null,null,function*(){try{yield $w(pn),console.log("Signed out")}catch(n){console.error(n)}}),qI=()=>Jn(null,null,function*(){try{return yield Td(pn)}catch(n){return console.error("Error in guest Sign in",n),n.message}}),eR=(n,e)=>Jn(null,null,function*(){const t=n.toLowerCase();try{return yield Nw(pn,t,e)}catch(r){return console.error("Error in User signIn",r),r.message}}),tR=(n,e)=>Jn(null,null,function*(){var t;const r=n.toLowerCase();try{const i=yield Ow(pn,r,e);if(typeof i!="string"){const s=(t=i.user)==null?void 0:t.uid;s&&(yield gi(kn(Bn,"users",s),{uuid:s}))}return i}catch(i){return console.error("Error in YTTUserSignup",i),i.message}}),nR=(n,e)=>Jn(null,null,function*(){var t;const r=n.toLowerCase();try{pn.currentUser||(yield Td(pn));const i=xi.credential(r,e),s=yield Bm(pn.currentUser,i);if(typeof s!="string"){const o=(t=s==null?void 0:s.user)==null?void 0:t.uid;o&&(yield gi(kn(Bn,"users",o),{uuid:o}))}return s}catch(i){return console.error("Error in guestSignUp",i),i.message}});function jI(){return Jn(this,null,function*(){return new Promise((n,e)=>{chrome.identity.getAuthToken({interactive:!0},t=>{chrome.runtime.lastError?(console.log(chrome.runtime.lastError.message),e(new Error(chrome.runtime.lastError.message))):n(t)})})})}function $I(){return Jn(this,null,function*(){var n,e;const t=Math.floor(Math.random()*1e3),r="800771478396-frped1orr16rnjmav8f58dqaqcu8tmoo.apps.googleusercontent.com";console.log(Ae().identity.getRedirectURL());const i=yield Ae().identity.launchWebAuthFlow({url:`https://accounts.google.com/o/oauth2/v2/auth?response_type=id_token&nonce=${t}&scope=openid%20profile&client_id=${r}&redirect_uri=${Ae().identity.getRedirectURL()}&prompt=select_account`,interactive:!0});return(e=(n=i==null?void 0:i.split("id_token=")[1])==null?void 0:n.split("&")[0])!=null?e:null})}function KI(n,e,t,r){return Jn(this,null,function*(){let i;r==="Edge"?i=Lr.credential(e):i=Lr.credential(null,e);try{let s;return t==="signUp"?s=yield Bm(n,i):s=yield Ed(n,i),s}catch(s){return console.log(s.message),s.message}})}const rR=()=>Jn(null,null,function*(){var n;try{const e=FI();let t;e==="Chrome"?t=yield jI():t=yield $I(),pn.currentUser||(yield Td(pn));const r=yield KI(pn.currentUser,t,"signUp",e);if(r&&typeof r!="string"){const i=(n=r.user)==null?void 0:n.uid;i&&(yield gi(kn(Bn,"users",i),{uuid:i}))}return r}catch(e){return console.error("Error in User signUp",e),e.message}}),iR=()=>Jn(null,null,function*(){var n;try{const e=FI();let t;e==="Chrome"?t=yield jI():t=yield $I();const r=yield KI(pn,t,"signIn",e);if(r&&typeof r!="string"){const i=(n=r.user)==null?void 0:n.uid;i&&(yield gi(kn(Bn,"users",i),{uuid:i}),yield VI(i))}return r}catch(e){return console.error("Error in User sign in",e),e.message}}),sR=n=>Jn(null,null,function*(){const e=n.toLowerCase();try{return yield kw(pn,e)}catch(t){return console.error("Error in password reset",t),t.message}});var oR=Object.defineProperty,zI=Object.getOwnPropertySymbols,aR=Object.prototype.hasOwnProperty,uR=Object.prototype.propertyIsEnumerable,Rp=(n,e,t)=>e in n?oR(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,WI=(n,e)=>{for(var t in e||(e={}))aR.call(e,t)&&Rp(n,t,e[t]);if(zI)for(var t of zI(e))uR.call(e,t)&&Rp(n,t,e[t]);return n},lR=(n,e,t)=>Rp(n,typeof e!="symbol"?e+"":e,t),ml=(n,e,t)=>new Promise((r,i)=>{var s=c=>{try{l(t.next(c))}catch(d){i(d)}},o=c=>{try{l(t.throw(c))}catch(d){i(d)}},l=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,o);l((t=t.apply(n,e)).next())});const cR="https://www.google-analytics.com/mp/collect",hR="https://www.google-analytics.com/debug/mp/collect",dR="G-4CDN85HHSB",fR="NbAF0HSFRH6YUsqK2lcxww",pR=100,mR=30;class gR{constructor(){lR(this,"debug"),this.debug=!1}getOrCreateClientId(){return ml(this,null,function*(){let{uuid:e}=yield Ae().storage.sync.get("uuid");return e||(e=self.crypto.randomUUID(),yield chrome.storage.local.set({uuid:e})),e})}getOrCreateSessionId(){return ml(this,null,function*(){let{sessionData:e}=yield chrome.storage.session.get("sessionData");const t=Date.now();return e&&e.timestamp&&((t-parseInt(e.timestamp))/6e4>mR?e=null:(e.timestamp=t.toString(),yield chrome.storage.session.set({sessionData:e}))),e||(e={session_id:t.toString(),timestamp:t.toString()},yield chrome.storage.session.set({sessionData:e})),e.session_id})}fireEvent(e){return ml(this,arguments,function*(t,r={}){r.session_id||(r.session_id=yield this.getOrCreateSessionId()),r.engagement_time_msec||(r.engagement_time_msec=pR);try{const i=yield fetch(`${this.debug?hR:cR}?measurement_id=${dR}&api_secret=${fR}`,{method:"POST",body:JSON.stringify({client_id:yield this.getOrCreateClientId(),events:[{name:t,params:r}]})});if(!this.debug)return;console.log(yield i.text())}catch(i){console.error("Google Analytics request failed with an exception",i)}})}firePageViewEvent(e,t){return ml(this,arguments,function*(r,i,s={}){return this.fireEvent("page_view",WI({page_title:r,page_location:i},s))})}fireErrorEvent(e){return ml(this,arguments,function*(t,r={}){return this.fireEvent("extension_error",WI({error_message:t==null?void 0:t.message},r))})}}const _R=new gR;var yR=(n,e,t)=>new Promise((r,i)=>{var s=c=>{try{l(t.next(c))}catch(d){i(d)}},o=c=>{try{l(t.throw(c))}catch(d){i(d)}},l=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,o);l((t=t.apply(n,e)).next())});const wt=(n,e,t,r=null)=>yR(null,null,function*(){if((yield $P())!==!0)return;const s={uuid:n,eventAction:t,eventLabel:r?"indexedDB":r===!1?"firebase":"none"};_R.fireEvent(e,s)}),vR="log",IR="playerDuration",TR="playerStateChange",vx="time",Ix="videoState",Tx="playerInfos",Ex="videoTimeOffset",wx="@",Ax="/live_chat",bx="/live_chat_replay",Sx="a > h1.tw-title",Px=".moderation-view-page .tw-title",Rx="auth/credential-already-in-use";var ur=(n,e,t)=>new Promise((r,i)=>{var s=c=>{try{l(t.next(c))}catch(d){i(d)}},o=c=>{try{l(t.throw(c))}catch(d){i(d)}},l=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,o);l((t=t.apply(n,e)).next())});const Cp=(n,e,t=!1)=>ur(null,null,function*(){const r=kn(Bn,`users/${n}/totals`,"youtube");try{t?yield gi(r,e):yield gi(r,e,{merge:!0}),console.log("Document was pushed to totals/youtube")}catch(i){console.log("Error updating totals/youtube: ",i)}}),GI=(n,e)=>ur(null,null,function*(){const t=kn(Bn,`users/${n}/stats`,"YTChannels");try{yield gi(t,e,{merge:!0}),console.log("Document was pushed to stats/YTChannels")}catch(r){console.log("Error updating stats/YTChannels: ",r)}}),HI=n=>ur(null,null,function*(){const e=kn(Bn,`users/${n}/totals`,"youtube"),t=yield Sh(e);if(t.exists())return t.data();const r=UI(n),i=JSON.stringify(r),s=JSON.parse(i);return yield Cp(n,s,!0),r}),Dp=n=>ur(null,null,function*(){const e=kn(Bn,`users/${n}/stats`,"YTChannels"),t=yield Sh(e);return t.exists()?t.data():{}}),QI=n=>ur(null,null,function*(){const e=kn(Bn,`users/${n}/stats`,"YTWatchtime"),t=yield Sh(e);return t.exists()?t.data():{}}),kp=n=>ur(null,null,function*(){const e=kn(Bn,`users/${n}/totals`,"twitch"),t=yield Sh(e);return t.exists()?t.data():{}}),Cx=(n,e,t)=>{const r=doc(db,`users/${n}/yt_video_clicks`,e);setDoc(r,t)},ER=(n,e)=>ur(null,null,function*(){if(n&&e){let t=yield Dp(n);t?Object.keys(e).forEach(r=>{var i,s,o,l,c,d,g,v;if(t[r])t[r].count=((s=(i=t[r])==null?void 0:i.count)!=null?s:0)+((l=(o=e[r])==null?void 0:o.count)!=null?l:0),t[r].time=((d=(c=t[r])==null?void 0:c.time)!=null?d:0)+((v=(g=e[r])==null?void 0:g.time)!=null?v:0);else{const w=e[r];w&&(t[r]=w)}}):t=e;try{return yield GI(n,t),!0}catch(r){return console.log("Error updating stats/YTChannels: ",r),!1}}return!1}),YI=(n,e)=>ur(null,null,function*(){const t=kn(Bn,`users/${n}/totals`,"twitch");try{return yield gi(t,e,{merge:!0}),console.log("Document was pushed to totals/stats/twitch"),!0}catch(r){return console.log("Error updating totals/twitch: ",r),!1}}),wR=(n,e)=>ur(null,null,function*(){if(n&&e){let t=yield kp(n);return t?Object.keys(e).forEach(i=>{const s=e[i];s!==void 0&&(t[i]?t[i]+=Math.floor(s):t[i]=Math.floor(s))}):t=e,yield YI(n,t)}return!1}),AR=(n,e)=>{const t=kn(Bn,`users/${n}/totals`,"twitch");cI(t,{[e]:fI()})},bR=(n,e)=>{const t=kn(Bn,`users/${n}/stats`,"YTChannels");cI(t,{[e]:fI()})},SR=n=>ur(null,null,function*(){const e=yield HI(n),t=yield Dp(n),r=yield QI(n),i=yield kp(n);return{config:e,ytChannels:t,ytWatchtime:r,twWatchtime:i}}),PR=(n,e)=>ur(null,null,function*(){const t=kn(Bn,`users/${n}/stats`,"YTWatchtime");try{yield gi(t,e,{merge:!0}),console.log("Document was pushed to stats/YTWatchtime")}catch(r){console.log("Error updating stats/YTWatchtime: ",r)}}),RR=(n,e)=>ur(null,null,function*(){const{config:t,ytChannels:r,ytWatchtime:i,twWatchtime:s}=e;t&&(yield Cp(n,t)),r&&(yield GI(n,r)),i&&(yield PR(n,i)),s&&(yield YI(n,s))});var xp=bt(5380);const JI=Symbol.for("Dexie"),Oh=globalThis[JI]||(globalThis[JI]=xp);if(xp.semVer!==Oh.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${xp.semVer} and ${Oh.semVer}`);const{liveQuery:Dx,mergeRanges:kx,rangesOverlap:xx,RangeSet:Ox,cmp:Nx,Entity:Vx,PropModification:Mx,replacePrefix:Lx,add:Fx,remove:Ux,DexieYProvider:Bx}=Oh,XI=Oh;var CR=Object.defineProperty,DR=(n,e,t)=>e in n?CR(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,Nh=(n,e,t)=>DR(n,typeof e!="symbol"?e+"":e,t),$t=(n,e,t)=>new Promise((r,i)=>{var s=c=>{try{l(t.next(c))}catch(d){i(d)}},o=c=>{try{l(t.throw(c))}catch(d){i(d)}},l=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,o);l((t=t.apply(n,e)).next())});class kR extends XI{constructor(){super("watchtimeTracker"),Nh(this,"YTConfig"),Nh(this,"YTChannels"),Nh(this,"YTWatchtime"),Nh(this,"twWatchtime"),this.version(1).stores({YTChannels:"uuid,channels",YTConfig:"uuid,config",YTWatchtime:"uuid,watchtime",twWatchtime:"uuid,watchtime"})}getConfig(e){return $t(this,null,function*(){const t=yield this.YTConfig.where("uuid").equals(e).first();if(t!=null&&t.uuid&&(t!=null&&t.config))return JSON.parse(t.config);const r=UI(e);return yield this.YTConfig.put({uuid:e,config:JSON.stringify(r)}),r})}setConfig(e,t){return $t(this,null,function*(){yield this.YTConfig.put({uuid:e,config:JSON.stringify(t)})})}getChannels(e){return $t(this,null,function*(){const t=yield this.YTChannels.where("uuid").equals(e).first();return t!=null&&t.uuid&&(t!=null&&t.channels)?JSON.parse(t.channels):{}})}getAvgWatchtime(e){return $t(this,null,function*(){const t=yield this.YTWatchtime.where("uuid").equals(e).first();return t!=null&&t.uuid&&(t!=null&&t.watchtime)?JSON.parse(t.watchtime):{}})}getTwWatchtime(e){return $t(this,null,function*(){const t=yield this.twWatchtime.where("uuid").equals(e).first();return t!=null&&t.uuid&&(t!=null&&t.watchtime)?JSON.parse(t.watchtime):{}})}addOrIncrementYTChannel(e,t){return $t(this,null,function*(){if(e&&t){const r=yield this.YTChannels.where("uuid").equals(e).first();if(r!=null&&r.uuid&&(r!=null&&r.channels)){const i=JSON.parse(r.channels);Object.keys(t).forEach(s=>{var o,l,c,d,g,v,w,M;if(i[s])i[s].count=((l=(o=i[s])==null?void 0:o.count)!=null?l:0)+((d=(c=t[s])==null?void 0:c.count)!=null?d:0),i[s].time=((v=(g=i[s])==null?void 0:g.time)!=null?v:0)+((M=(w=t[s])==null?void 0:w.time)!=null?M:0);else{const Y=t[s];Y&&(i[s]=Y)}});try{return yield this.YTChannels.put({uuid:e,channels:JSON.stringify(i)}),!0}catch(s){return console.warn(s),!1}}else try{return yield this.YTChannels.put({uuid:e,channels:JSON.stringify(t)}),!0}catch(i){return console.warn(i),!1}}return!1})}addOrIncrementTwitchTime(e,t){return $t(this,null,function*(){if(e&&t){const r=yield this.twWatchtime.where("uuid").equals(e).first();if(r!=null&&r.uuid&&(r!=null&&r.watchtime)){const i=JSON.parse(r.watchtime);Object.keys(t).forEach(s=>{const o=t[s];o!==void 0&&(i[s]?i[s]+=Math.floor(o):i[s]=Math.floor(o))});try{return yield this.twWatchtime.put({uuid:e,watchtime:JSON.stringify(i)}),!0}catch(s){return console.warn(s),!1}}else try{return yield this.twWatchtime.put({uuid:e,watchtime:JSON.stringify(t)}),!0}catch(i){return console.warn(i),!1}}return!1})}deleteTwitchEntry(e,t){return $t(this,null,function*(){const r=yield this.twWatchtime.where("uuid").equals(e).first();if(r!=null&&r.uuid&&(r!=null&&r.watchtime)){const i=JSON.parse(r.watchtime);i[t]&&(delete i[t],yield this.twWatchtime.put({uuid:e,watchtime:JSON.stringify(i)}))}})}deleteYoutubeEntry(e,t){return $t(this,null,function*(){const r=yield this.YTChannels.where("uuid").equals(e).first();if(r!=null&&r.uuid&&(r!=null&&r.channels)){const i=JSON.parse(r.channels);i[t]&&(delete i[t],yield this.YTChannels.put({uuid:e,channels:JSON.stringify(i)}))}})}}const Kt=new kR,ZI=n=>$t(null,null,function*(){return Kt.getConfig(n)}),xR=(n,e)=>$t(null,null,function*(){yield Kt.setConfig(n,e)}),eT=n=>$t(null,null,function*(){return Kt.getChannels(n)}),tT=n=>$t(null,null,function*(){return Kt.getAvgWatchtime(n)}),nT=n=>$t(null,null,function*(){return Kt.getTwWatchtime(n)}),OR=(n,e)=>$t(null,null,function*(){return Kt.addOrIncrementYTChannel(n,e)}),NR=(n,e)=>$t(null,null,function*(){return Kt.addOrIncrementTwitchTime(n,e)}),VR=(n,e)=>$t(null,null,function*(){return Kt.deleteTwitchEntry(n,e)}),MR=(n,e)=>$t(null,null,function*(){return Kt.deleteYoutubeEntry(n,e)}),LR=(n,e)=>{const{config:t,ytChannels:r,ytWatchtime:i,twWatchtime:s}=e;Kt.YTConfig.put({uuid:n,config:JSON.stringify(t)}),Kt.YTChannels.put({uuid:n,channels:JSON.stringify(r)}),Kt.twWatchtime.put({uuid:n,watchtime:JSON.stringify(s)}),Kt.YTWatchtime.put({uuid:n,watchtime:JSON.stringify(i)})},FR=()=>$t(null,null,function*(){return yield XI.exists("watchtimeTracker")}),UR=n=>$t(null,null,function*(){const e=yield ZI(n),t=yield eT(n),r=yield tT(n),i=yield nT(n);return{config:e,ytChannels:t,ytWatchtime:r,twWatchtime:i}}),BR=n=>$t(null,null,function*(){const e=yield Kt.YTConfig.where("uuid").equals(n).count(),t=yield Kt.YTChannels.where("uuid").equals(n).count(),r=yield Kt.YTWatchtime.where("uuid").equals(n).count(),i=yield Kt.twWatchtime.where("uuid").equals(n).count();e>0&&(yield Kt.YTConfig.where("uuid").equals(n).delete()),t>0&&(yield Kt.YTChannels.where("uuid").equals(n).delete()),r>0&&(yield Kt.YTWatchtime.where("uuid").equals(n).delete()),i>0&&(yield Kt.twWatchtime.where("uuid").equals(n).delete())});var qR=Object.defineProperty,jR=Object.defineProperties,$R=Object.getOwnPropertyDescriptors,rT=Object.getOwnPropertySymbols,KR=Object.prototype.hasOwnProperty,zR=Object.prototype.propertyIsEnumerable,iT=(n,e,t)=>e in n?qR(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,WR=(n,e)=>{for(var t in e||(e={}))KR.call(e,t)&&iT(n,t,e[t]);if(rT)for(var t of rT(e))zR.call(e,t)&&iT(n,t,e[t]);return n},GR=(n,e)=>jR(n,$R(e)),un=(n,e,t)=>new Promise((r,i)=>{var s=c=>{try{l(t.next(c))}catch(d){i(d)}},o=c=>{try{l(t.throw(c))}catch(d){i(d)}},l=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,o);l((t=t.apply(n,e)).next())});const lr=()=>un(null,null,function*(){const n=yield jP("anonymous","local");if(n==null){const e=yield JP();return yield Ap("anonymous",e,"local"),e!=null?e:!0}return n}),gl=n=>un(null,null,function*(){if(!n)return null;let e;return(yield lr())?(e=yield ZI(n),wt(n,"getConfig","Config fetch indexedDB",!0)):(e=yield HI(n),wt(n,"getConfig","Config fetch firebase",!1)),e});let Vh;const HR=(n,e,t)=>un(null,null,function*(){if(!Vh)Vh=Date.now();else if(Date.now()-Vh<500)return Vh=Date.now(),!1;return JSON.stringify(t)!==JSON.stringify(e)?(yield lr())?(yield xR(n,e),wt(n,"setConfig","Config update",!0),!0):(yield Cp(n,e,!0),wt(n,"setConfig","Config update",!1),!0):!1}),sT=n=>un(null,null,function*(){let e;return(yield lr())?(e=yield eT(n),wt(n,"getChannels","get Remote Channels",!0)):(e=yield Dp(n),wt(n,"getChannels","get Remote Channels",!1)),e}),oT=n=>un(null,null,function*(){let e;return(yield lr())?(e=yield tT(n),wt(n,"getYTWatchtime","get YT Watchtime",!0)):(e=yield QI(n),wt(n,"getYTWatchtime","get YT Watchtime",!1)),e}),aT=n=>un(null,null,function*(){let e;return(yield lr())?(e=yield nT(n),wt(n,"getTWWatchtime","get TW Watchtime",!0)):(e=yield kp(n),wt(n,"getTWWatchtime","get TW Watchtime",!1)),e}),QR=n=>un(null,null,function*(){try{const[e,t,r,i]=yield Promise.all([gl(n),sT(n),oT(n),aT(n)]),s=PI(i),o=RI(t);if(!e)return null;const l=EI(e),c=AI(r,e),d=CI(t);return{config:e,tableData:l,pieData:o,barData:c,twitchData:s,ytChannelTableData:d}}catch(e){return console.log("Error getting Popup data",e),null}}),uT=(n,e,t,r)=>un(null,null,function*(){try{const[i,s,o]=yield Promise.all([sT(n),oT(n),aT(n)]),l=PI(o,t),c=RI(i,r),d=AI(s,e),g=CI(i,r);return{pieData:c,barData:d,twitchData:l,ytChannelTableData:g}}catch(i){return console.log("Error getting Popup data",i),null}}),qx=(n,e)=>un(null,null,function*(){const t={user_id:n,videoID:e.ID,channelTitle:e.channelName},r=`${n}@ytstats@${new Date().toISOString()}`;(yield lr())||(pushVideoDataFirebase(n,r,t),gAnalyticsEvent(n,"addVideo","Push video to yt_video_clicks",!1))}),YR=(n,e)=>un(null,null,function*(){let t;return(yield lr())?(t=yield OR(n,e),wt(n,"incrementChannel","Increment channel count",!0)):(t=yield ER(n,e),wt(n,"incrementChannel","Increment channel count",!1)),t}),JR=(n,e)=>un(null,null,function*(){let t;return(yield lr())?(t=yield NR(n,e),wt(n,"UpdateTWTime","Update Twitch Time",!0)):(t=yield wR(n,e),wt(n,"UpdateTWTime","Update Twitch Time",!1)),t}),XR=(n,e)=>un(null,null,function*(){(yield lr())?(VR(n,e),wt(n,"deleteTwitchEntry","Delete Twitch Entry",!0)):(AR(n,e),wt(n,"deleteTwitchEntry","Delete Twitch Entry",!1))}),ZR=(n,e)=>un(null,null,function*(){(yield lr())?(MR(n,e),wt(n,"deleteYoutubeEntry","Delete Youtube Entry",!0)):(bR(n,e),wt(n,"deleteYoutubeEntry","Delete Youtube Entry",!1))}),eC=n=>un(null,null,function*(){try{const e=yield UR(n);return yield RR(n,e),wt(n,"transferIndexedDBToFirebase","Transfer IndexedDB to Firebase"),!0}catch(e){return console.log("transferIndexedDBToFirebase failed",e),null}}),lT=(n,e="",t="")=>un(null,null,function*(){var r;let i;if(n==="google"?i=yield rR():n==="email"&&(i=yield nR(e,t)),typeof i!="string"&&i){const s=(r=i.user)==null?void 0:r.uid;if(s){const o=yield eC(s);return o&&(yield Ap("anonymous",!1,"local")),wt(s,"guestRegistered","Guest registered"),o?s:null}}else if(typeof i=="string")return{error:!0,message:i};return null}),tC=n=>un(null,null,function*(){const e=yield SR(n);wt(n,"getAllFirebaseDocs","Get all Firebase Docs"),LR(n,e)}),nC=n=>un(null,null,function*(){(yield lr())&&((yield FR())||(yield tC(n)))}),rC=n=>un(null,null,function*(){let e=yield gl(n);const t=yield xh(n);if(t&&(e?e=bI(e,t):e=t),!e)return null;const r=EI(e),i=yield MI(n),s=yield LI(n),o=yield uT(n,e,i,s);return GR(WR({},o),{config:e,tableData:r})});var cT=(n=>(n.PUSH="push",n.IGNORE="ignore",n.LEAVING="leaving",n))(cT||{}),hT=(n,e,t)=>new Promise((r,i)=>{var s=c=>{try{l(t.next(c))}catch(d){i(d)}},o=c=>{try{l(t.throw(c))}catch(d){i(d)}},l=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,o);l((t=t.apply(n,e)).next())});const iC=()=>hT(null,null,function*(){return(yield GP()).twitchMuted});let dT;const sC=n=>hT(null,null,function*(){if(dT!==n.twTime&&n.twTime>=2){if((yield iC())&&n.twMuted)return;const e=yield kh(),{twStreamer:t,twTime:r,twState:i}=n;dT=r,i===cT.PUSH&&(yield zP(e,t,r))}});var Ra=(n,e,t)=>new Promise((r,i)=>{var s=c=>{try{l(t.next(c))}catch(d){i(d)}},o=c=>{try{l(t.throw(c))}catch(d){i(d)}},l=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,o);l((t=t.apply(n,e)).next())});const fT=86400*1e3,pT=()=>Ra(null,null,function*(){return(yield Ae().storage.local.get("activePlayers")).activePlayers||{}}),oC=n=>Ra(null,null,function*(){return(yield pT())[n]||null}),mT=(n,e)=>Ra(null,null,function*(){const t=yield pT();return e===null?delete t[n]:t[n]=e,Ae().storage.local.set({activePlayers:t})}),gT=()=>Ra(null,null,function*(){yield Ae().storage.local.set({activePlayers:{}})}),aC=(n,e)=>{let t=e;const r=new Date;r.setHours(0,0,0,0);const i=n.getTime()-r.getTime(),s={};if(t>i){s[pl()]={date:n.getTime(),duration:new ar(Tn.REAL,i)},t=e-i;const o=r;for(o.setHours(23,59,59,0);t>0;){o.setTime(o.getTime()-fT);const l=pl(o),c=Math.min(fT,t);s[l]={date:o.getTime(),duration:new ar(Tn.REAL,c)},t-=c}}else s[pl()]={date:n.getTime(),duration:new ar(Tn.REAL,t)};return s},uC=(n,e)=>(n.YTT_Total=new ss(n==null?void 0:n.YTT_Total),Object.keys(e).filter(t=>Object.prototype.hasOwnProperty.call(e,t)).forEach(t=>{const{duration:r,date:i}=e[t];n[t]?n[t]=new ss(n[t]):n[t]=new ss,n.YTT_Total.getWatchedDuration().addDuration(r),n[t].getWatchedDuration().addDuration(r),console.log(`Added real time: ${r.getAsString(!0)} for day ${new Date(i).toLocaleString()}`)}),n),lC=n=>Ra(null,null,function*(){if(n.state===no.PLAYING){yield mT(n.tabID,{time:new Date().getTime(),vid:n.videoID});return}if(n.state===no.WATCHED||n.state===no.NO_VIDEO||n.state===no.LEAVING){const t=yield oC(n.tabID);if(yield mT(n.tabID,null),!t)return;const r=new Date,i=r.getTime()-t.time;if(i>500){const s=aC(r,i),o=yield kh();let l=yield xh(o);if(!l)return;l=uC(l,s),n.state===no.WATCHED?(yield bp(o,l),yield Sp(o,n.channelName,i,!1)):n.state===no.LEAVING&&(yield bp(o,l),yield Sp(o,n.channelName,i,!1))}}else console.warn("how??",n)}),cC=n=>Ra(null,null,function*(){if(!n.ID||n.ID==="undefined"){console.log("Not video page");return}const e=yield kh();let t=yield gl(e);if(!t)return;wt(e,"getConfig","Config fetch on YT-Video opened");const r=yield xh(e);r&&(t=bI(t,r)),Sp(e,n.channelName,0,!0);const i=new ar(Tn.TOTAL,n.isLive?0:n.duration*1e3);t.YTT_Total=new ss(t==null?void 0:t.YTT_Total),t.YTT_Total.getOpenedDuration().addDuration(i),t.YTT_Total.addCount(1);const s=pl();t[s]=new ss(t[s]),t[s].addCount(1),t[s].getOpenedDuration().addDuration(i),t.YTT_Start=t.YTT_Start||new Date().getTime(),console.log(`New total opened time: ${t.YTT_Total.getOpenedDuration().getAsString(!0)}`),yield bp(e,t)});var os=(n,e,t)=>new Promise((r,i)=>{var s=c=>{try{l(t.next(c))}catch(d){i(d)}},o=c=>{try{l(t.throw(c))}catch(d){i(d)}},l=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,o);l((t=t.apply(n,e)).next())});const hC=2880*60*1e3,dC=()=>os(null,null,function*(){yield Ae().storage.sync.set({lastUpdate:Date.now()})}),fC=()=>os(null,null,function*(){const n=yield Ae().storage.sync.get("lastUpdate");if(Object.keys(n).length!==0)return n.lastUpdate}),pC=()=>os(null,null,function*(){const n=yield fC();return n?Date.now()-n>hC:!0}),mC=n=>os(null,null,function*(){const e=yield xh(n),t=yield KP(n);e&&(yield HR(n,e,t||{}))&&WP(n,e)}),gC=n=>os(null,null,function*(){const e=yield LI(n);e&&Object.values(e).reduce((r,i)=>r+(i.time||0),0)>=30&&(yield YR(n,e))&&(yield QP(n))}),_C=n=>os(null,null,function*(){const e=yield MI(n);e&&Object.values(e).reduce((r,i)=>r+i,0)>=30&&(yield JR(n,e))&&(yield HP(n))});function _T(n){return os(this,null,function*(){try{return yield Promise.all([dC(),mC(n),gC(n),_C(n)]),!0}catch(e){return console.error(e),!1}})}const yT=n=>os(null,null,function*(){(yield pC())&&_T(n)});var Mh=(n,e,t)=>new Promise((r,i)=>{var s=c=>{try{l(t.next(c))}catch(d){i(d)}},o=c=>{try{l(t.throw(c))}catch(d){i(d)}},l=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,o);l((t=t.apply(n,e)).next())});const yC=()=>Mh(null,null,function*(){const n=yield qI();!n||!n.user||(yield VI(n.user.uid))}),vC=()=>Mh(null,null,function*(){const n=yield kh();if(n){yield nC(n);const e=yield gl(n);wt(n,"getConfig","Config fetch on user init"),e&&e.YTT_User_ID&&(console.log("User already logged in"),yT(n))}else yield yC()});Ae().runtime.onInstalled.addListener(()=>Mh(null,null,function*(){yield gT(),yield vC()})),Ae().runtime.onStartup.addListener(gT);const IC=(n,e)=>Mh(null,null,function*(){var t;const r=n;if(r.type===vR)console.log(r.value||"undefined");else if(r.type===TR){const i=r.value;(t=e.tab)!=null&&t.id&&(i.tabID=e.tab.id,lC(i))}else if(r.type===IR){const i=r.value;cC(i)}else if(r.type==="streamStateChanged")sC(r.value);else if(r.type==="ytConfig"&&r.uuid){const i=yield gl(r.uuid);return i&&wt(r.uuid,"getConfig","Config fetch on popup opened"),new Promise(s=>s(i))}else if(r.type==="ytPopupData"&&r.uuid){const i=yield QR(r.uuid);return new Promise(s=>s(i))}else if(r.type==="signIn"&&r.mail&&r.password){const i=yield eR(r.mail,r.password);return new Promise((s,o)=>{var l;typeof i=="string"?o(new Error(i)):s((l=i==null?void 0:i.user)==null?void 0:l.uid)})}else if(r.type==="signUp"&&r.mail&&r.password){const i=yield tR(r.mail,r.password);return new Promise((s,o)=>{var l;typeof i=="string"?o(new Error(i)):s((l=i==null?void 0:i.user)==null?void 0:l.uid)})}else if(r.type==="guestSignUp"&&r.mail&&r.password){const i=yield lT("email",r.mail,r.password);return new Promise((s,o)=>{typeof i!="string"&&(i==null?void 0:i.error)===!0&&o(new Error(i==null?void 0:i.message)),s(i)})}else if(r.type==="guestGoogleSignUp"){const i=yield lT("google");return new Promise((s,o)=>{typeof i!="string"&&(i==null?void 0:i.error)===!0&&o(new Error(i==null?void 0:i.message)),s(i)})}else if(r.type==="passwordReset"&&r.mail){const i=yield sR(r.mail);return new Promise(s=>s(i))}else if(r.type==="signOut"){const i=yield ZP();return yield Ap("anonymous",!0,"local"),new Promise(s=>s(i))}else if(r.type==="deleteUser"){const i=yield XP();return new Promise(s=>s(i))}else if(r.type==="deleteGuestUser"&&r.data){const i=yield BR(r.data.uuid);return new Promise(s=>s(i))}else if(r.type==="guestSignIn"){const i=yield qI();return new Promise((s,o)=>{var l;typeof i=="string"?o(new Error(i)):s((l=i==null?void 0:i.user)==null?void 0:l.uid)})}else if(r.type==="checkIfAnonymous"){const i=yield lr();return new Promise(s=>s(i))}else if(r.type==="ytPopupDataWithoutConfig"){const i=r.uuid,s=yield uT(i.uuid,i.config,i.localTwitchData,i.localYTData);return new Promise(o=>o(s))}else if(r.type==="delTwEntry"){const i=r.data;XR(i.uuid,i.streamerName)}else if(r.type==="delYoutubeEntry"){const i=r.data;ZR(i.uuid,i.channelName)}else if(r.type==="gAnalyticsEvent"){const{uuid:i,eventCategory:s,eventAction:o}=r.data;wt(i,s,o)}else if(r.type==="googleSignIn"){const i=yield iR();return new Promise((s,o)=>{var l;typeof i=="string"?o(new Error(i)):s((l=i==null?void 0:i.user)==null?void 0:l.uid)})}else if(r.type==="getUuid"){const i=yield Ae().storage.sync.get("uuid");return new Promise(s=>s(i.uuid))}else if(r.type==="syncWithDatabase"){const i=yield Ae().storage.sync.get("uuid");let s=!1;return i.uuid&&(s=yield _T(i.uuid)),new Promise(o=>o(s))}else if(r.type==="downloadData"){const i=yield rC(r.data);return new Promise(s=>s({data:i}))}else if(r.type==="checkForRemoteUpdate"){const{uuid:i}=yield Ae().storage.sync.get("uuid");return yT(i),new Promise(s=>s(!0))}return!0});Ae().runtime.onMessage.addListener(IC)})()})();})();
