"use strict";var Jt=Object.create;var Q=Object.defineProperty;var Kt=Object.getOwnPropertyDescriptor;var Ht=Object.getOwnPropertyNames;var zt=Object.getPrototypeOf,Wt=Object.prototype.hasOwnProperty;var v=(e,t)=>()=>(e&&(t=e(e=0)),t);var b=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Yt=(e,t)=>{for(var r in t)Q(e,r,{get:t[r],enumerable:!0})},Ne=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Ht(t))!Wt.call(e,i)&&i!==r&&Q(e,i,{get:()=>t[i],enumerable:!(n=Kt(t,i))||n.enumerable});return e};var K=(e,t,r)=>(r=e!=null?Jt(zt(e)):{},Ne(t||!e||!e.__esModule?Q(r,"default",{value:e,enumerable:!0}):r,e)),Qt=e=>Ne(Q({},"__esModule",{value:!0}),e);var X=b(j=>{"use strict";Object.defineProperty(j,"__esModule",{value:!0});j.toCommandProperties=j.toCommandValue=void 0;function Xt(e){return e==null?"":typeof e=="string"||e instanceof String?e:JSON.stringify(e)}j.toCommandValue=Xt;function Zt(e){return Object.keys(e).length?{title:e.title,file:e.file,line:e.startLine,endLine:e.endLine,col:e.startColumn,endColumn:e.endColumn}:{}}j.toCommandProperties=Zt});var $e=b(O=>{"use strict";var er=O&&O.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),tr=O&&O.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),rr=O&&O.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.hasOwnProperty.call(e,r)&&er(t,e,r);return tr(t,e),t};Object.defineProperty(O,"__esModule",{value:!0});O.issue=O.issueCommand=void 0;var nr=rr(require("os")),ke=X();function Be(e,t,r){let n=new fe(e,t,r);process.stdout.write(n.toString()+nr.EOL)}O.issueCommand=Be;function ir(e,t=""){Be(e,{},t)}O.issue=ir;var je="::",fe=class{constructor(t,r,n){t||(t="missing.command"),this.command=t,this.properties=r,this.message=n}toString(){let t=je+this.command;if(this.properties&&Object.keys(this.properties).length>0){t+=" ";let r=!0;for(let n in this.properties)if(this.properties.hasOwnProperty(n)){let i=this.properties[n];i&&(r?r=!1:t+=",",t+=`${n}=${or(i)}`)}}return t+=`${je}${sr(this.message)}`,t}};function sr(e){return ke.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function or(e){return ke.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}});function H(){return Z>ee.length-16&&(Le.default.randomFillSync(ee),Z=0),ee.slice(Z,Z+=16)}var Le,ee,Z,de=v(()=>{Le=K(require("crypto")),ee=new Uint8Array(256),Z=ee.length});var Fe,Ve=v(()=>{Fe=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i});function ar(e){return typeof e=="string"&&Fe.test(e)}var U,z=v(()=>{Ve();U=ar});function ur(e,t=0){let r=(g[e[t+0]]+g[e[t+1]]+g[e[t+2]]+g[e[t+3]]+"-"+g[e[t+4]]+g[e[t+5]]+"-"+g[e[t+6]]+g[e[t+7]]+"-"+g[e[t+8]]+g[e[t+9]]+"-"+g[e[t+10]]+g[e[t+11]]+g[e[t+12]]+g[e[t+13]]+g[e[t+14]]+g[e[t+15]]).toLowerCase();if(!U(r))throw TypeError("Stringified UUID is invalid");return r}var g,q,W=v(()=>{z();g=[];for(let e=0;e<256;++e)g.push((e+256).toString(16).substr(1));q=ur});function cr(e,t,r){let n=t&&r||0,i=t||new Array(16);e=e||{};let s=e.node||Ge,o=e.clockseq!==void 0?e.clockseq:he;if(s==null||o==null){let h=e.random||(e.rng||H)();s==null&&(s=Ge=[h[0]|1,h[1],h[2],h[3],h[4],h[5]]),o==null&&(o=he=(h[6]<<8|h[7])&16383)}let u=e.msecs!==void 0?e.msecs:Date.now(),c=e.nsecs!==void 0?e.nsecs:me+1,a=u-pe+(c-me)/1e4;if(a<0&&e.clockseq===void 0&&(o=o+1&16383),(a<0||u>pe)&&e.nsecs===void 0&&(c=0),c>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");pe=u,me=c,he=o,u+=122192928e5;let l=((u&268435455)*1e4+c)%4294967296;i[n++]=l>>>24&255,i[n++]=l>>>16&255,i[n++]=l>>>8&255,i[n++]=l&255;let d=u/4294967296*1e4&268435455;i[n++]=d>>>8&255,i[n++]=d&255,i[n++]=d>>>24&15|16,i[n++]=d>>>16&255,i[n++]=o>>>8|128,i[n++]=o&255;for(let h=0;h<6;++h)i[n+h]=s[h];return t||q(i)}var Ge,he,pe,me,Je,Ke=v(()=>{de();W();pe=0,me=0;Je=cr});function lr(e){if(!U(e))throw TypeError("Invalid UUID");let t,r=new Uint8Array(16);return r[0]=(t=parseInt(e.slice(0,8),16))>>>24,r[1]=t>>>16&255,r[2]=t>>>8&255,r[3]=t&255,r[4]=(t=parseInt(e.slice(9,13),16))>>>8,r[5]=t&255,r[6]=(t=parseInt(e.slice(14,18),16))>>>8,r[7]=t&255,r[8]=(t=parseInt(e.slice(19,23),16))>>>8,r[9]=t&255,r[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,r[11]=t/4294967296&255,r[12]=t>>>24&255,r[13]=t>>>16&255,r[14]=t>>>8&255,r[15]=t&255,r}var te,ge=v(()=>{z();te=lr});function fr(e){e=unescape(encodeURIComponent(e));let t=[];for(let r=0;r<e.length;++r)t.push(e.charCodeAt(r));return t}function re(e,t,r){function n(i,s,o,u){if(typeof i=="string"&&(i=fr(i)),typeof s=="string"&&(s=te(s)),s.length!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let c=new Uint8Array(16+i.length);if(c.set(s),c.set(i,s.length),c=r(c),c[6]=c[6]&15|t,c[8]=c[8]&63|128,o){u=u||0;for(let a=0;a<16;++a)o[u+a]=c[a];return o}return q(c)}try{n.name=e}catch{}return n.DNS=dr,n.URL=hr,n}var dr,hr,ve=v(()=>{W();ge();dr="6ba7b810-9dad-11d1-80b4-00c04fd430c8",hr="6ba7b811-9dad-11d1-80b4-00c04fd430c8"});function pr(e){return Array.isArray(e)?e=Buffer.from(e):typeof e=="string"&&(e=Buffer.from(e,"utf8")),He.default.createHash("md5").update(e).digest()}var He,ze,We=v(()=>{He=K(require("crypto"));ze=pr});var mr,Ye,Qe=v(()=>{ve();We();mr=re("v3",48,ze),Ye=mr});function gr(e,t,r){e=e||{};let n=e.random||(e.rng||H)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,t){r=r||0;for(let i=0;i<16;++i)t[r+i]=n[i];return t}return q(n)}var Xe,Ze=v(()=>{de();W();Xe=gr});function vr(e){return Array.isArray(e)?e=Buffer.from(e):typeof e=="string"&&(e=Buffer.from(e,"utf8")),et.default.createHash("sha1").update(e).digest()}var et,tt,rt=v(()=>{et=K(require("crypto"));tt=vr});var yr,nt,it=v(()=>{ve();rt();yr=re("v5",80,tt),nt=yr});var st,ot=v(()=>{st="00000000-0000-0000-0000-000000000000"});function _r(e){if(!U(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}var at,ut=v(()=>{z();at=_r});var ct={};Yt(ct,{NIL:()=>st,parse:()=>te,stringify:()=>q,v1:()=>Je,v3:()=>Ye,v4:()=>Xe,v5:()=>nt,validate:()=>U,version:()=>at});var lt=v(()=>{Ke();Qe();Ze();it();ot();ut();z();W();ge()});var pt=b(E=>{"use strict";var wr=E&&E.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),br=E&&E.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),dt=E&&E.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.hasOwnProperty.call(e,r)&&wr(t,e,r);return br(t,e),t};Object.defineProperty(E,"__esModule",{value:!0});E.prepareKeyValueMessage=E.issueFileCommand=void 0;var ft=dt(require("fs")),ye=dt(require("os")),Or=(lt(),Qt(ct)),ht=X();function Er(e,t){let r=process.env[`GITHUB_${e}`];if(!r)throw new Error(`Unable to find environment variable for file command ${e}`);if(!ft.existsSync(r))throw new Error(`Missing file at path: ${r}`);ft.appendFileSync(r,`${ht.toCommandValue(t)}${ye.EOL}`,{encoding:"utf8"})}E.issueFileCommand=Er;function Pr(e,t){let r=`ghadelimiter_${Or.v4()}`,n=ht.toCommandValue(t);if(e.includes(r))throw new Error(`Unexpected input: name should not contain the delimiter "${r}"`);if(n.includes(r))throw new Error(`Unexpected input: value should not contain the delimiter "${r}"`);return`${e}<<${r}${ye.EOL}${n}${ye.EOL}${r}`}E.prepareKeyValueMessage=Pr});var gt=b(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});k.checkBypass=k.getProxyUrl=void 0;function xr(e){let t=e.protocol==="https:";if(mt(e))return;let r=(()=>t?process.env.https_proxy||process.env.HTTPS_PROXY:process.env.http_proxy||process.env.HTTP_PROXY)();if(r)return new URL(r)}k.getProxyUrl=xr;function mt(e){if(!e.hostname)return!1;let t=process.env.no_proxy||process.env.NO_PROXY||"";if(!t)return!1;let r;e.port?r=Number(e.port):e.protocol==="http:"?r=80:e.protocol==="https:"&&(r=443);let n=[e.hostname.toUpperCase()];typeof r=="number"&&n.push(`${n[0]}:${r}`);for(let i of t.split(",").map(s=>s.trim().toUpperCase()).filter(s=>s))if(n.some(s=>s===i))return!0;return!1}k.checkBypass=mt});var wt=b(B=>{"use strict";var Oi=require("net"),Ar=require("tls"),_e=require("http"),vt=require("https"),Rr=require("events"),Ei=require("assert"),Sr=require("util");B.httpOverHttp=Tr;B.httpsOverHttp=Ur;B.httpOverHttps=qr;B.httpsOverHttps=Ir;function Tr(e){var t=new T(e);return t.request=_e.request,t}function Ur(e){var t=new T(e);return t.request=_e.request,t.createSocket=yt,t.defaultPort=443,t}function qr(e){var t=new T(e);return t.request=vt.request,t}function Ir(e){var t=new T(e);return t.request=vt.request,t.createSocket=yt,t.defaultPort=443,t}function T(e){var t=this;t.options=e||{},t.proxyOptions=t.options.proxy||{},t.maxSockets=t.options.maxSockets||_e.Agent.defaultMaxSockets,t.requests=[],t.sockets=[],t.on("free",function(n,i,s,o){for(var u=_t(i,s,o),c=0,a=t.requests.length;c<a;++c){var l=t.requests[c];if(l.host===u.host&&l.port===u.port){t.requests.splice(c,1),l.request.onSocket(n);return}}n.destroy(),t.removeSocket(n)})}Sr.inherits(T,Rr.EventEmitter);T.prototype.addRequest=function(t,r,n,i){var s=this,o=we({request:t},s.options,_t(r,n,i));if(s.sockets.length>=this.maxSockets){s.requests.push(o);return}s.createSocket(o,function(u){u.on("free",c),u.on("close",a),u.on("agentRemove",a),t.onSocket(u);function c(){s.emit("free",u,o)}function a(l){s.removeSocket(u),u.removeListener("free",c),u.removeListener("close",a),u.removeListener("agentRemove",a)}})};T.prototype.createSocket=function(t,r){var n=this,i={};n.sockets.push(i);var s=we({},n.proxyOptions,{method:"CONNECT",path:t.host+":"+t.port,agent:!1,headers:{host:t.host+":"+t.port}});t.localAddress&&(s.localAddress=t.localAddress),s.proxyAuth&&(s.headers=s.headers||{},s.headers["Proxy-Authorization"]="Basic "+new Buffer(s.proxyAuth).toString("base64")),I("making CONNECT request");var o=n.request(s);o.useChunkedEncodingByDefault=!1,o.once("response",u),o.once("upgrade",c),o.once("connect",a),o.once("error",l),o.end();function u(d){d.upgrade=!0}function c(d,h,N){process.nextTick(function(){a(d,h,N)})}function a(d,h,N){if(o.removeAllListeners(),h.removeAllListeners(),d.statusCode!==200){I("tunneling socket could not be established, statusCode=%d",d.statusCode),h.destroy();var J=new Error("tunneling socket could not be established, statusCode="+d.statusCode);J.code="ECONNRESET",t.request.emit("error",J),n.removeSocket(i);return}if(N.length>0){I("got illegal response body from proxy"),h.destroy();var J=new Error("got illegal response body from proxy");J.code="ECONNRESET",t.request.emit("error",J),n.removeSocket(i);return}return I("tunneling connection has established"),n.sockets[n.sockets.indexOf(i)]=h,r(h)}function l(d){o.removeAllListeners(),I(`tunneling socket could not be established, cause=%s
`,d.message,d.stack);var h=new Error("tunneling socket could not be established, cause="+d.message);h.code="ECONNRESET",t.request.emit("error",h),n.removeSocket(i)}};T.prototype.removeSocket=function(t){var r=this.sockets.indexOf(t);if(r!==-1){this.sockets.splice(r,1);var n=this.requests.shift();n&&this.createSocket(n,function(i){n.request.onSocket(i)})}};function yt(e,t){var r=this;T.prototype.createSocket.call(r,e,function(n){var i=e.request.getHeader("host"),s=we({},r.options,{socket:n,servername:i?i.replace(/:.*$/,""):e.host}),o=Ar.connect(0,s);r.sockets[r.sockets.indexOf(n)]=o,t(o)})}function _t(e,t,r){return typeof e=="string"?{host:e,port:t,localAddress:r}:e}function we(e){for(var t=1,r=arguments.length;t<r;++t){var n=arguments[t];if(typeof n=="object")for(var i=Object.keys(n),s=0,o=i.length;s<o;++s){var u=i[s];n[u]!==void 0&&(e[u]=n[u])}}return e}var I;process.env.NODE_DEBUG&&/\btunnel\b/.test(process.env.NODE_DEBUG)?I=function(){var e=Array.prototype.slice.call(arguments);typeof e[0]=="string"?e[0]="TUNNEL: "+e[0]:e.unshift("TUNNEL:"),console.error.apply(console,e)}:I=function(){};B.debug=I});var Ot=b((xi,bt)=>{bt.exports=wt()});var Pt=b(p=>{"use strict";var Mr=p&&p.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),Dr=p&&p.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),ae=p&&p.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.hasOwnProperty.call(e,r)&&Mr(t,e,r);return Dr(t,e),t},m=p&&p.__awaiter||function(e,t,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function u(l){try{a(n.next(l))}catch(d){o(d)}}function c(l){try{a(n.throw(l))}catch(d){o(d)}}function a(l){l.done?s(l.value):i(l.value).then(u,c)}a((n=n.apply(e,t||[])).next())})};Object.defineProperty(p,"__esModule",{value:!0});p.HttpClient=p.isHttps=p.HttpClientResponse=p.HttpClientError=p.getProxyUrl=p.MediaTypes=p.Headers=p.HttpCodes=void 0;var ne=ae(require("http")),be=ae(require("https")),Et=ae(gt()),ie=ae(Ot()),x;(function(e){e[e.OK=200]="OK",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.ResourceMoved=302]="ResourceMoved",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.SwitchProxy=306]="SwitchProxy",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.TooManyRequests=429]="TooManyRequests",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout"})(x=p.HttpCodes||(p.HttpCodes={}));var y;(function(e){e.Accept="accept",e.ContentType="content-type"})(y=p.Headers||(p.Headers={}));var M;(function(e){e.ApplicationJson="application/json"})(M=p.MediaTypes||(p.MediaTypes={}));function Cr(e){let t=Et.getProxyUrl(new URL(e));return t?t.href:""}p.getProxyUrl=Cr;var Nr=[x.MovedPermanently,x.ResourceMoved,x.SeeOther,x.TemporaryRedirect,x.PermanentRedirect],jr=[x.BadGateway,x.ServiceUnavailable,x.GatewayTimeout],kr=["OPTIONS","GET","DELETE","HEAD"],Br=10,$r=5,$=class extends Error{constructor(t,r){super(t),this.name="HttpClientError",this.statusCode=r,Object.setPrototypeOf(this,$.prototype)}};p.HttpClientError=$;var oe=class{constructor(t){this.message=t}readBody(){return m(this,void 0,void 0,function*(){return new Promise(t=>m(this,void 0,void 0,function*(){let r=Buffer.alloc(0);this.message.on("data",n=>{r=Buffer.concat([r,n])}),this.message.on("end",()=>{t(r.toString())})}))})}};p.HttpClientResponse=oe;function Lr(e){return new URL(e).protocol==="https:"}p.isHttps=Lr;var Oe=class{constructor(t,r,n){this._ignoreSslError=!1,this._allowRedirects=!0,this._allowRedirectDowngrade=!1,this._maxRedirects=50,this._allowRetries=!1,this._maxRetries=1,this._keepAlive=!1,this._disposed=!1,this.userAgent=t,this.handlers=r||[],this.requestOptions=n,n&&(n.ignoreSslError!=null&&(this._ignoreSslError=n.ignoreSslError),this._socketTimeout=n.socketTimeout,n.allowRedirects!=null&&(this._allowRedirects=n.allowRedirects),n.allowRedirectDowngrade!=null&&(this._allowRedirectDowngrade=n.allowRedirectDowngrade),n.maxRedirects!=null&&(this._maxRedirects=Math.max(n.maxRedirects,0)),n.keepAlive!=null&&(this._keepAlive=n.keepAlive),n.allowRetries!=null&&(this._allowRetries=n.allowRetries),n.maxRetries!=null&&(this._maxRetries=n.maxRetries))}options(t,r){return m(this,void 0,void 0,function*(){return this.request("OPTIONS",t,null,r||{})})}get(t,r){return m(this,void 0,void 0,function*(){return this.request("GET",t,null,r||{})})}del(t,r){return m(this,void 0,void 0,function*(){return this.request("DELETE",t,null,r||{})})}post(t,r,n){return m(this,void 0,void 0,function*(){return this.request("POST",t,r,n||{})})}patch(t,r,n){return m(this,void 0,void 0,function*(){return this.request("PATCH",t,r,n||{})})}put(t,r,n){return m(this,void 0,void 0,function*(){return this.request("PUT",t,r,n||{})})}head(t,r){return m(this,void 0,void 0,function*(){return this.request("HEAD",t,null,r||{})})}sendStream(t,r,n,i){return m(this,void 0,void 0,function*(){return this.request(t,r,n,i)})}getJson(t,r={}){return m(this,void 0,void 0,function*(){r[y.Accept]=this._getExistingOrDefaultHeader(r,y.Accept,M.ApplicationJson);let n=yield this.get(t,r);return this._processResponse(n,this.requestOptions)})}postJson(t,r,n={}){return m(this,void 0,void 0,function*(){let i=JSON.stringify(r,null,2);n[y.Accept]=this._getExistingOrDefaultHeader(n,y.Accept,M.ApplicationJson),n[y.ContentType]=this._getExistingOrDefaultHeader(n,y.ContentType,M.ApplicationJson);let s=yield this.post(t,i,n);return this._processResponse(s,this.requestOptions)})}putJson(t,r,n={}){return m(this,void 0,void 0,function*(){let i=JSON.stringify(r,null,2);n[y.Accept]=this._getExistingOrDefaultHeader(n,y.Accept,M.ApplicationJson),n[y.ContentType]=this._getExistingOrDefaultHeader(n,y.ContentType,M.ApplicationJson);let s=yield this.put(t,i,n);return this._processResponse(s,this.requestOptions)})}patchJson(t,r,n={}){return m(this,void 0,void 0,function*(){let i=JSON.stringify(r,null,2);n[y.Accept]=this._getExistingOrDefaultHeader(n,y.Accept,M.ApplicationJson),n[y.ContentType]=this._getExistingOrDefaultHeader(n,y.ContentType,M.ApplicationJson);let s=yield this.patch(t,i,n);return this._processResponse(s,this.requestOptions)})}request(t,r,n,i){return m(this,void 0,void 0,function*(){if(this._disposed)throw new Error("Client has already been disposed.");let s=new URL(r),o=this._prepareRequest(t,s,i),u=this._allowRetries&&kr.includes(t)?this._maxRetries+1:1,c=0,a;do{if(a=yield this.requestRaw(o,n),a&&a.message&&a.message.statusCode===x.Unauthorized){let d;for(let h of this.handlers)if(h.canHandleAuthentication(a)){d=h;break}return d?d.handleAuthentication(this,o,n):a}let l=this._maxRedirects;for(;a.message.statusCode&&Nr.includes(a.message.statusCode)&&this._allowRedirects&&l>0;){let d=a.message.headers.location;if(!d)break;let h=new URL(d);if(s.protocol==="https:"&&s.protocol!==h.protocol&&!this._allowRedirectDowngrade)throw new Error("Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.");if(yield a.readBody(),h.hostname!==s.hostname)for(let N in i)N.toLowerCase()==="authorization"&&delete i[N];o=this._prepareRequest(t,h,i),a=yield this.requestRaw(o,n),l--}if(!a.message.statusCode||!jr.includes(a.message.statusCode))return a;c+=1,c<u&&(yield a.readBody(),yield this._performExponentialBackoff(c))}while(c<u);return a})}dispose(){this._agent&&this._agent.destroy(),this._disposed=!0}requestRaw(t,r){return m(this,void 0,void 0,function*(){return new Promise((n,i)=>{function s(o,u){o?i(o):u?n(u):i(new Error("Unknown error"))}this.requestRawWithCallback(t,r,s)})})}requestRawWithCallback(t,r,n){typeof r=="string"&&(t.options.headers||(t.options.headers={}),t.options.headers["Content-Length"]=Buffer.byteLength(r,"utf8"));let i=!1;function s(c,a){i||(i=!0,n(c,a))}let o=t.httpModule.request(t.options,c=>{let a=new oe(c);s(void 0,a)}),u;o.on("socket",c=>{u=c}),o.setTimeout(this._socketTimeout||3*6e4,()=>{u&&u.end(),s(new Error(`Request timeout: ${t.options.path}`))}),o.on("error",function(c){s(c)}),r&&typeof r=="string"&&o.write(r,"utf8"),r&&typeof r!="string"?(r.on("close",function(){o.end()}),r.pipe(o)):o.end()}getAgent(t){let r=new URL(t);return this._getAgent(r)}_prepareRequest(t,r,n){let i={};i.parsedUrl=r;let s=i.parsedUrl.protocol==="https:";i.httpModule=s?be:ne;let o=s?443:80;if(i.options={},i.options.host=i.parsedUrl.hostname,i.options.port=i.parsedUrl.port?parseInt(i.parsedUrl.port):o,i.options.path=(i.parsedUrl.pathname||"")+(i.parsedUrl.search||""),i.options.method=t,i.options.headers=this._mergeHeaders(n),this.userAgent!=null&&(i.options.headers["user-agent"]=this.userAgent),i.options.agent=this._getAgent(i.parsedUrl),this.handlers)for(let u of this.handlers)u.prepareRequest(i.options);return i}_mergeHeaders(t){return this.requestOptions&&this.requestOptions.headers?Object.assign({},se(this.requestOptions.headers),se(t||{})):se(t||{})}_getExistingOrDefaultHeader(t,r,n){let i;return this.requestOptions&&this.requestOptions.headers&&(i=se(this.requestOptions.headers)[r]),t[r]||i||n}_getAgent(t){let r,n=Et.getProxyUrl(t),i=n&&n.hostname;if(this._keepAlive&&i&&(r=this._proxyAgent),this._keepAlive&&!i&&(r=this._agent),r)return r;let s=t.protocol==="https:",o=100;if(this.requestOptions&&(o=this.requestOptions.maxSockets||ne.globalAgent.maxSockets),n&&n.hostname){let u={maxSockets:o,keepAlive:this._keepAlive,proxy:Object.assign(Object.assign({},(n.username||n.password)&&{proxyAuth:`${n.username}:${n.password}`}),{host:n.hostname,port:n.port})},c,a=n.protocol==="https:";s?c=a?ie.httpsOverHttps:ie.httpsOverHttp:c=a?ie.httpOverHttps:ie.httpOverHttp,r=c(u),this._proxyAgent=r}if(this._keepAlive&&!r){let u={keepAlive:this._keepAlive,maxSockets:o};r=s?new be.Agent(u):new ne.Agent(u),this._agent=r}return r||(r=s?be.globalAgent:ne.globalAgent),s&&this._ignoreSslError&&(r.options=Object.assign(r.options||{},{rejectUnauthorized:!1})),r}_performExponentialBackoff(t){return m(this,void 0,void 0,function*(){t=Math.min(Br,t);let r=$r*Math.pow(2,t);return new Promise(n=>setTimeout(()=>n(),r))})}_processResponse(t,r){return m(this,void 0,void 0,function*(){return new Promise((n,i)=>m(this,void 0,void 0,function*(){let s=t.message.statusCode||0,o={statusCode:s,result:null,headers:{}};s===x.NotFound&&n(o);function u(l,d){if(typeof d=="string"){let h=new Date(d);if(!isNaN(h.valueOf()))return h}return d}let c,a;try{a=yield t.readBody(),a&&a.length>0&&(r&&r.deserializeDates?c=JSON.parse(a,u):c=JSON.parse(a),o.result=c),o.headers=t.message.headers}catch{}if(s>299){let l;c&&c.message?l=c.message:a&&a.length>0?l=a:l=`Failed request: (${s})`;let d=new $(l,s);d.result=o.result,i(d)}else n(o)}))})}};p.HttpClient=Oe;var se=e=>Object.keys(e).reduce((t,r)=>(t[r.toLowerCase()]=e[r],t),{})});var xt=b(A=>{"use strict";var Ae=A&&A.__awaiter||function(e,t,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function u(l){try{a(n.next(l))}catch(d){o(d)}}function c(l){try{a(n.throw(l))}catch(d){o(d)}}function a(l){l.done?s(l.value):i(l.value).then(u,c)}a((n=n.apply(e,t||[])).next())})};Object.defineProperty(A,"__esModule",{value:!0});A.PersonalAccessTokenCredentialHandler=A.BearerCredentialHandler=A.BasicCredentialHandler=void 0;var Ee=class{constructor(t,r){this.username=t,this.password=r}prepareRequest(t){if(!t.headers)throw Error("The request has no headers");t.headers.Authorization=`Basic ${Buffer.from(`${this.username}:${this.password}`).toString("base64")}`}canHandleAuthentication(){return!1}handleAuthentication(){return Ae(this,void 0,void 0,function*(){throw new Error("not implemented")})}};A.BasicCredentialHandler=Ee;var Pe=class{constructor(t){this.token=t}prepareRequest(t){if(!t.headers)throw Error("The request has no headers");t.headers.Authorization=`Bearer ${this.token}`}canHandleAuthentication(){return!1}handleAuthentication(){return Ae(this,void 0,void 0,function*(){throw new Error("not implemented")})}};A.BearerCredentialHandler=Pe;var xe=class{constructor(t){this.token=t}prepareRequest(t){if(!t.headers)throw Error("The request has no headers");t.headers.Authorization=`Basic ${Buffer.from(`PAT:${this.token}`).toString("base64")}`}canHandleAuthentication(){return!1}handleAuthentication(){return Ae(this,void 0,void 0,function*(){throw new Error("not implemented")})}};A.PersonalAccessTokenCredentialHandler=xe});var St=b(L=>{"use strict";var At=L&&L.__awaiter||function(e,t,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function u(l){try{a(n.next(l))}catch(d){o(d)}}function c(l){try{a(n.throw(l))}catch(d){o(d)}}function a(l){l.done?s(l.value):i(l.value).then(u,c)}a((n=n.apply(e,t||[])).next())})};Object.defineProperty(L,"__esModule",{value:!0});L.OidcClient=void 0;var Fr=Pt(),Vr=xt(),Rt=ue(),D=class{static createHttpClient(t=!0,r=10){let n={allowRetries:t,maxRetries:r};return new Fr.HttpClient("actions/oidc-client",[new Vr.BearerCredentialHandler(D.getRequestToken())],n)}static getRequestToken(){let t=process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN;if(!t)throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable");return t}static getIDTokenUrl(){let t=process.env.ACTIONS_ID_TOKEN_REQUEST_URL;if(!t)throw new Error("Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable");return t}static getCall(t){var r;return At(this,void 0,void 0,function*(){let s=(r=(yield D.createHttpClient().getJson(t).catch(o=>{throw new Error(`Failed to get ID Token. 
 
        Error Code : ${o.statusCode}
 
        Error Message: ${o.result.message}`)})).result)===null||r===void 0?void 0:r.value;if(!s)throw new Error("Response json body do not have ID Token field");return s})}static getIDToken(t){return At(this,void 0,void 0,function*(){try{let r=D.getIDTokenUrl();if(t){let i=encodeURIComponent(t);r=`${r}&audience=${i}`}Rt.debug(`ID token url is ${r}`);let n=yield D.getCall(r);return Rt.setSecret(n),n}catch(r){throw new Error(`Error message: ${r.message}`)}})}};L.OidcClient=D});var Ue=b(_=>{"use strict";var Re=_&&_.__awaiter||function(e,t,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function u(l){try{a(n.next(l))}catch(d){o(d)}}function c(l){try{a(n.throw(l))}catch(d){o(d)}}function a(l){l.done?s(l.value):i(l.value).then(u,c)}a((n=n.apply(e,t||[])).next())})};Object.defineProperty(_,"__esModule",{value:!0});_.summary=_.markdownSummary=_.SUMMARY_DOCS_URL=_.SUMMARY_ENV_VAR=void 0;var Gr=require("os"),Se=require("fs"),{access:Jr,appendFile:Kr,writeFile:Hr}=Se.promises;_.SUMMARY_ENV_VAR="GITHUB_STEP_SUMMARY";_.SUMMARY_DOCS_URL="https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary";var Te=class{constructor(){this._buffer=""}filePath(){return Re(this,void 0,void 0,function*(){if(this._filePath)return this._filePath;let t=process.env[_.SUMMARY_ENV_VAR];if(!t)throw new Error(`Unable to find environment variable for $${_.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);try{yield Jr(t,Se.constants.R_OK|Se.constants.W_OK)}catch{throw new Error(`Unable to access summary file: '${t}'. Check if the file has correct read/write permissions.`)}return this._filePath=t,this._filePath})}wrap(t,r,n={}){let i=Object.entries(n).map(([s,o])=>` ${s}="${o}"`).join("");return r?`<${t}${i}>${r}</${t}>`:`<${t}${i}>`}write(t){return Re(this,void 0,void 0,function*(){let r=!!(t!=null&&t.overwrite),n=yield this.filePath();return yield(r?Hr:Kr)(n,this._buffer,{encoding:"utf8"}),this.emptyBuffer()})}clear(){return Re(this,void 0,void 0,function*(){return this.emptyBuffer().write({overwrite:!0})})}stringify(){return this._buffer}isEmptyBuffer(){return this._buffer.length===0}emptyBuffer(){return this._buffer="",this}addRaw(t,r=!1){return this._buffer+=t,r?this.addEOL():this}addEOL(){return this.addRaw(Gr.EOL)}addCodeBlock(t,r){let n=Object.assign({},r&&{lang:r}),i=this.wrap("pre",this.wrap("code",t),n);return this.addRaw(i).addEOL()}addList(t,r=!1){let n=r?"ol":"ul",i=t.map(o=>this.wrap("li",o)).join(""),s=this.wrap(n,i);return this.addRaw(s).addEOL()}addTable(t){let r=t.map(i=>{let s=i.map(o=>{if(typeof o=="string")return this.wrap("td",o);let{header:u,data:c,colspan:a,rowspan:l}=o,d=u?"th":"td",h=Object.assign(Object.assign({},a&&{colspan:a}),l&&{rowspan:l});return this.wrap(d,c,h)}).join("");return this.wrap("tr",s)}).join(""),n=this.wrap("table",r);return this.addRaw(n).addEOL()}addDetails(t,r){let n=this.wrap("details",this.wrap("summary",t)+r);return this.addRaw(n).addEOL()}addImage(t,r,n){let{width:i,height:s}=n||{},o=Object.assign(Object.assign({},i&&{width:i}),s&&{height:s}),u=this.wrap("img",null,Object.assign({src:t,alt:r},o));return this.addRaw(u).addEOL()}addHeading(t,r){let n=`h${r}`,i=["h1","h2","h3","h4","h5","h6"].includes(n)?n:"h1",s=this.wrap(i,t);return this.addRaw(s).addEOL()}addSeparator(){let t=this.wrap("hr",null);return this.addRaw(t).addEOL()}addBreak(){let t=this.wrap("br",null);return this.addRaw(t).addEOL()}addQuote(t,r){let n=Object.assign({},r&&{cite:r}),i=this.wrap("blockquote",t,n);return this.addRaw(i).addEOL()}addLink(t,r){let n=this.wrap("a",t,{href:r});return this.addRaw(n).addEOL()}},Tt=new Te;_.markdownSummary=Tt;_.summary=Tt});var Ut=b(w=>{"use strict";var zr=w&&w.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),Wr=w&&w.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),Yr=w&&w.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.hasOwnProperty.call(e,r)&&zr(t,e,r);return Wr(t,e),t};Object.defineProperty(w,"__esModule",{value:!0});w.toPlatformPath=w.toWin32Path=w.toPosixPath=void 0;var Qr=Yr(require("path"));function Xr(e){return e.replace(/[\\]/g,"/")}w.toPosixPath=Xr;function Zr(e){return e.replace(/[/]/g,"\\")}w.toWin32Path=Zr;function en(e){return e.replace(/[/\\]/g,Qr.sep)}w.toPlatformPath=en});var ue=b(f=>{"use strict";var tn=f&&f.__createBinding||(Object.create?function(e,t,r,n){n===void 0&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){n===void 0&&(n=r),e[n]=t[r]}),rn=f&&f.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),qt=f&&f.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)r!=="default"&&Object.hasOwnProperty.call(e,r)&&tn(t,e,r);return rn(t,e),t},It=f&&f.__awaiter||function(e,t,r,n){function i(s){return s instanceof r?s:new r(function(o){o(s)})}return new(r||(r=Promise))(function(s,o){function u(l){try{a(n.next(l))}catch(d){o(d)}}function c(l){try{a(n.throw(l))}catch(d){o(d)}}function a(l){l.done?s(l.value):i(l.value).then(u,c)}a((n=n.apply(e,t||[])).next())})};Object.defineProperty(f,"__esModule",{value:!0});f.getIDToken=f.getState=f.saveState=f.group=f.endGroup=f.startGroup=f.info=f.notice=f.warning=f.error=f.debug=f.isDebug=f.setFailed=f.setCommandEcho=f.setOutput=f.getBooleanInput=f.getMultilineInput=f.getInput=f.addPath=f.setSecret=f.exportVariable=f.ExitCode=void 0;var P=$e(),C=pt(),F=X(),Mt=qt(require("os")),nn=qt(require("path")),sn=St(),Dt;(function(e){e[e.Success=0]="Success",e[e.Failure=1]="Failure"})(Dt=f.ExitCode||(f.ExitCode={}));function on(e,t){let r=F.toCommandValue(t);if(process.env[e]=r,process.env.GITHUB_ENV||"")return C.issueFileCommand("ENV",C.prepareKeyValueMessage(e,t));P.issueCommand("set-env",{name:e},r)}f.exportVariable=on;function an(e){P.issueCommand("add-mask",{},e)}f.setSecret=an;function un(e){process.env.GITHUB_PATH||""?C.issueFileCommand("PATH",e):P.issueCommand("add-path",{},e),process.env.PATH=`${e}${nn.delimiter}${process.env.PATH}`}f.addPath=un;function qe(e,t){let r=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!r)throw new Error(`Input required and not supplied: ${e}`);return t&&t.trimWhitespace===!1?r:r.trim()}f.getInput=qe;function cn(e,t){let r=qe(e,t).split(`
`).filter(n=>n!=="");return t&&t.trimWhitespace===!1?r:r.map(n=>n.trim())}f.getMultilineInput=cn;function ln(e,t){let r=["true","True","TRUE"],n=["false","False","FALSE"],i=qe(e,t);if(r.includes(i))return!0;if(n.includes(i))return!1;throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${e}
Support boolean input list: \`true | True | TRUE | false | False | FALSE\``)}f.getBooleanInput=ln;function fn(e,t){if(process.env.GITHUB_OUTPUT||"")return C.issueFileCommand("OUTPUT",C.prepareKeyValueMessage(e,t));process.stdout.write(Mt.EOL),P.issueCommand("set-output",{name:e},F.toCommandValue(t))}f.setOutput=fn;function dn(e){P.issue("echo",e?"on":"off")}f.setCommandEcho=dn;function hn(e){process.exitCode=Dt.Failure,Ct(e)}f.setFailed=hn;function pn(){return process.env.RUNNER_DEBUG==="1"}f.isDebug=pn;function mn(e){P.issueCommand("debug",{},e)}f.debug=mn;function Ct(e,t={}){P.issueCommand("error",F.toCommandProperties(t),e instanceof Error?e.toString():e)}f.error=Ct;function gn(e,t={}){P.issueCommand("warning",F.toCommandProperties(t),e instanceof Error?e.toString():e)}f.warning=gn;function vn(e,t={}){P.issueCommand("notice",F.toCommandProperties(t),e instanceof Error?e.toString():e)}f.notice=vn;function yn(e){process.stdout.write(e+Mt.EOL)}f.info=yn;function Nt(e){P.issue("group",e)}f.startGroup=Nt;function jt(){P.issue("endgroup")}f.endGroup=jt;function _n(e,t){return It(this,void 0,void 0,function*(){Nt(e);let r;try{r=yield t()}finally{jt()}return r})}f.group=_n;function wn(e,t){if(process.env.GITHUB_STATE||"")return C.issueFileCommand("STATE",C.prepareKeyValueMessage(e,t));P.issueCommand("save-state",{name:e},F.toCommandValue(t))}f.saveState=wn;function bn(e){return process.env[`STATE_${e}`]||""}f.getState=bn;function On(e){return It(this,void 0,void 0,function*(){return yield sn.OidcClient.getIDToken(e)})}f.getIDToken=On;var En=Ue();Object.defineProperty(f,"summary",{enumerable:!0,get:function(){return En.summary}});var Pn=Ue();Object.defineProperty(f,"markdownSummary",{enumerable:!0,get:function(){return Pn.markdownSummary}});var Ie=Ut();Object.defineProperty(f,"toPosixPath",{enumerable:!0,get:function(){return Ie.toPosixPath}});Object.defineProperty(f,"toWin32Path",{enumerable:!0,get:function(){return Ie.toWin32Path}});Object.defineProperty(f,"toPlatformPath",{enumerable:!0,get:function(){return Ie.toPlatformPath}})});var kt=K(ue(),1),V=()=>{let e=V.coreGetInput("arguments"),t=V.coreGetInput("additional-plugin-paths").split(/\n|\r/).map(n=>n.trim()).filter(n=>!!n),r=V.coreGetInput("script-file");return{customArguments:e,additionalPluginPaths:t,scriptFile:r}};V.coreGetInput=kt.getInput;var Bt=K(ue(),1),G=e=>{G.setFailed(e||G.genericErrorMessage)};G.setFailed=Bt.setFailed;G.genericErrorMessage="Unexpected error occurred";var Vt=require("fs"),S=require("fs/promises"),R=require("path");var $t=require("util"),De=require("fs"),Lt=require("child_process"),ce=require("path"),Y=require("process"),xn=(0,$t.promisify)(Lt.exec),Ft=e=>{let t=e.filter(De.existsSync);return t.length?t[0]:""},An=()=>{let e=Y.env.PATH.split(";").concat([(0,ce.join)("C:","Program Files (x86)","NSIS")]).map(t=>(0,ce.join)(t,"makensis.exe"));return Ft(e)},Rn=()=>{let e=Y.env.PATH.split(":").concat(["/usr/local/bin","/usr/bin","/opt/local/bin"]).map(t=>(0,ce.join)(t,"makensis"));return Ft(e)},Me=class{constructor(t){if(!t||!(0,De.existsSync)(t))throw new Error("Unable to find makensis executable");this.path=t}async execAsync(t){return(await xn(`"${this.path}" ${t}`)).stdout}async getSymbolsAsync(){let t=await this.execAsync("-HDRINFO"),n=/Defined symbols: (.*)/g.exec(t.toString("utf-8"));if(!n||!n.length||n.length<2)throw new Error("Unable to get symbols");let i={};return n[1].split(",").forEach(s=>{let o=s.indexOf("=");if(o===-1)i[s]="";else{let u=s.substr(0,o),c=s.substr(o+1);i[u]=c}}),i}},Sn=Y.platform==="win32"?An():Rn(),Ce=new Me(Sn);var{F_OK:Tn}=Vt.constants,Un=async e=>(await(0,S.stat)(e)).isDirectory(),qn=async e=>{try{await(0,S.access)(e,Tn)}catch{return!1}return!0},Gt=async(e,t)=>{console.log("copyDirectory",e,t),await qn(t)||await(0,S.mkdir)(t);let n=(await(0,S.readdir)(e)).map(async i=>{let s=(0,R.basename)(i),o=(0,R.join)(e,s);await Un(o)?await Gt(o,(0,R.join)(t,s)):(console.log("copying",o,(0,R.join)(t,s)),await(0,S.copyFile)(o,(0,R.join)(t,s)))});await Promise.all(n)},le=class{constructor(t){this.debugMode=t,this.pluginPaths=[],this.customArguments=""}debugLog(t){this.debugMode&&console.log(t)}getCustomArguments(){return this.customArguments}setCustomArguments(t){this.debugLog(`Settings arguments: ${t}`),this.customArguments=t}addPluginPath(t){this.debugLog(`Adding plugin path: ${t}`),this.pluginPaths.push(t)}getProcessArguments(t){let r=[];return this.customArguments.indexOf("/V")===-1&&this.customArguments.indexOf("-V")===-1&&(this.debugMode?r.push("-V4"):r.push("-V1")),r.push(this.customArguments),r.push(`"${(0,R.resolve)(t)}"`),r}async createInstallerAsync(t){if(console.log(`Creating installer for: ${t}`),this.pluginPaths.length){let i=(await Ce.getSymbolsAsync()).NSISDIR;if(!i)throw new Error("Unable to determine NSISDIR. Check makensis -HDRINFO output");let s=(0,R.join)(i,"Plugins");this.debugLog(`Using system Plugins path ${s}`);let o=this.pluginPaths.map(u=>(console.log("Including plugin path",u),Gt(u,s)));await Promise.all(o)}let r=this.getProcessArguments(t).join(" ");this.debugLog(`Running ${r}`);let n=await Ce.execAsync(r)}};var In=e=>{if(!e)return!1;if(e!=="true"&&e!=="false")throw new Error(`Input must be boolean value 'true' or 'false' but got '${e}'`);return e==="true"},Mn=async()=>{try{let e=In(process.env.debug),{customArguments:t,additionalPluginPaths:r,scriptFile:n}=V(),i=new le(e);i.setCustomArguments(t),r.forEach(s=>i.addPluginPath(s.trim())),await i.createInstallerAsync(n)}catch(e){G(e.message)}};Mn().then(()=>process.exit(0)).catch(()=>process.exit(1));
