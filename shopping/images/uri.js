/*!
* jsUri
* https://github.com/derek-watson/jsUri
*
* Copyright 2013, Derek Watson
* Released under the MIT license.
*
* Includes parseUri regular expressions
* http://blog.stevenlevithan.com/archives/parseuri
* Copyright 2007, Steven Levithan
* Released under the MIT license.
*/

(function(e){function n(e){return e&&(e=decodeURIComponent(e),e=e.replace(t.pluses," ")),e}function r(e){var n=t.uri_parser,r=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],i=n.exec(e||""),s={};return r.forEach(function(e,t){s[e]=i[t]||""}),s}function i(e){var n,r,i,s,o,u,a=[];if(typeof e=="undefined"||e===null||e==="")return a;e.indexOf("?")===0&&(e=e.substring(1)),r=e.toString().split(t.query_separator);for(n=0;n<r.length;n++)i=r[n],s=i.indexOf("="),s!==0&&(o=decodeURIComponent(i.substring(0,s)),u=decodeURIComponent(i.substring(s+1)),a.push(s===-1?[i,null]:[o,u]));return a}function s(e){this.uriParts=r(e),this.queryPairs=i(this.uriParts.query),this.hasAuthorityPrefixUserPref=null}var t={starts_with_slashes:/^\/+/,ends_with_slashes:/\/+$/,pluses:/\+/g,query_separator:/[&;]/,uri_parser:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/};Array.prototype.forEach||(Array.prototype.forEach=function(e,t){for(var n=0,r=this.length;n<r;++n)e.call(t||this,this[n],n,this)}),["protocol","userInfo","host","port","path","anchor"].forEach(function(e){s.prototype[e]=function(t){return typeof t!="undefined"&&(this.uriParts[e]=t),this.uriParts[e]}}),s.prototype.hasAuthorityPrefix=function(e){return typeof e!="undefined"&&(this.hasAuthorityPrefixUserPref=e),this.hasAuthorityPrefixUserPref===null?this.uriParts.source.indexOf("//")!==-1:this.hasAuthorityPrefixUserPref},s.prototype.query=function(e){var t="",n,r;typeof e!="undefined"&&(this.queryPairs=i(e));for(n=0;n<this.queryPairs.length;n++)r=this.queryPairs[n],t.length>0&&(t+="&"),r[1]===null?t+=r[0]:(t+=r[0],t+="=",r[1]&&(t+=encodeURIComponent(r[1])));return t.length>0?"?"+t:t},s.prototype.getQueryParamValue=function(e){var t,n;for(n=0;n<this.queryPairs.length;n++){t=this.queryPairs[n];if(e===t[0])return t[1]}},s.prototype.getQueryParamValues=function(e){var t=[],n,r;for(n=0;n<this.queryPairs.length;n++)r=this.queryPairs[n],e===r[0]&&t.push(r[1]);return t},s.prototype.deleteQueryParam=function(e,t){var r=[],i,s,o,u;for(i=0;i<this.queryPairs.length;i++)s=this.queryPairs[i],o=n(s[0])===n(e),u=s[1]===t,(arguments.length===1&&!o||arguments.length===2&&(!o||!u))&&r.push(s);return this.queryPairs=r,this},s.prototype.addQueryParam=function(e,t,n){return arguments.length===3&&n!==-1?(n=Math.min(n,this.queryPairs.length),this.queryPairs.splice(n,0,[e,t])):arguments.length>0&&this.queryPairs.push([e,t]),this},s.prototype.replaceQueryParam=function(e,t,r){var i=-1,s,o;if(arguments.length===3){for(s=0;s<this.queryPairs.length;s++){o=this.queryPairs[s];if(n(o[0])===n(e)&&decodeURIComponent(o[1])===n(r)){i=s;break}}this.deleteQueryParam(e,r).addQueryParam(e,t,i)}else{for(s=0;s<this.queryPairs.length;s++){o=this.queryPairs[s];if(n(o[0])===n(e)){i=s;break}}this.deleteQueryParam(e),this.addQueryParam(e,t,i)}return this},["protocol","hasAuthorityPrefix","userInfo","host","port","path","query","anchor"].forEach(function(e){var t="set"+e.charAt(0).toUpperCase()+e.slice(1);s.prototype[t]=function(t){return this[e](t),this}}),s.prototype.scheme=function(){var e="";return this.protocol()?(e+=this.protocol(),this.protocol().indexOf(":")!==this.protocol().length-1&&(e+=":"),e+="//"):this.hasAuthorityPrefix()&&this.host()&&(e+="//"),e},s.prototype.origin=function(){var e=this.scheme();return e=="file://"?e+this.uriParts.authority:(this.userInfo()&&this.host()&&(e+=this.userInfo(),this.userInfo().indexOf("@")!==this.userInfo().length-1&&(e+="@")),this.host()&&(e+=this.host(),this.port()&&(e+=":"+this.port())),e)},s.prototype.addTrailingSlash=function(){var e=this.path()||"";return e.substr(-1)!=="/"&&this.path(e+"/"),this},s.prototype.toString=function(){var e,n=this.origin();return this.path()?(e=this.path(),!t.ends_with_slashes.test(n)&&!t.starts_with_slashes.test(e)?n+="/":(n&&n.replace(t.ends_with_slashes,"/"),e=e.replace(t.starts_with_slashes,"/")),n+=e):this.host()&&(this.query().toString()||this.anchor())&&(n+="/"),this.query().toString()&&(this.query().toString().indexOf("?")!==0&&(n+="?"),n+=this.query().toString()),this.anchor()&&(this.anchor().indexOf("#")!==0&&(n+="#"),n+=this.anchor()),n},s.prototype.clone=function(){return new s(this.toString())},typeof define=="function"&&define.amd?define([],function(){return s}):typeof module!="undefined"&&typeof module.exports!="undefined"?module.exports=s:e.Uri=s})(this);