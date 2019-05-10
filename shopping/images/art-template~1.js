/*!art-template - Template Engine | http://aui.github.com/artTemplate/*/

!function(){function e(e){return e.replace(b,"").replace(w,",").replace(E,"").replace(S,"").replace(x,"").split(T)}function t(e){return"'"+e.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+"'"}function n(n,r){function i(e){return h+=e.split(/\n/).length-1,l&&(e=e.replace(/\s+/g," ").replace(/<!--[\w\W]*?-->/g,"")),e&&(e=y[1]+t(e)+y[2]+"\n"),e}function s(t){var n=h;if(f?t=f(t,r):o&&(t=t.replace(/\n/g,function(){return h++,"$line="+h+";"})),0===t.indexOf("=")){var i=c&&!/^=[=#]/.test(t);if(t=t.replace(/^=[=#]?|[\s;]*$/g,""),i){var s=t.replace(/\s*\([^\)]+\)/,"");p[s]||/^(include|print)$/.test(s)||(t="$escape("+t+")")}else t="$string("+t+")";t=y[1]+t+y[2]}return o&&(t="$line="+n+";"+t),g(e(t),function(e){if(e&&!v[e]){var t;t="print"===e?w:"include"===e?E:p[e]?"$utils."+e:d[e]?"$helpers."+e:"$data."+e,S+=e+"="+t+",",v[e]=!0}}),t+"\n"}var o=r.debug,u=r.openTag,a=r.closeTag,f=r.parser,l=r.compress,c=r.escape,h=1,v={$data:1,$filename:1,$utils:1,$helpers:1,$out:1,$line:1},m="".trim,y=m?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"],b=m?"$out+=text;return $out;":"$out.push(text);",w="function(){var text=''.concat.apply('',arguments);"+b+"}",E="function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);"+b+"}",S="var $utils=this,$helpers=$utils.$helpers,"+(o?"$line=0,":""),x=y[0],T="return new String("+y[3]+");";g(n.split(u),function(e){e=e.split(a);var t=e[0],n=e[1];1===e.length?x+=i(t):(x+=s(t),n&&(x+=i(n)))});var N=S+x+T;o&&(N="try{"+N+"}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:"+t(n)+".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");try{var C=new Function("$data","$filename",N);return C.prototype=p,C}catch(k){throw k.temp="function anonymous($data,$filename) {"+N+"}",k}}var r=function(e,t){return"string"==typeof t?m(t,{filename:e}):o(e,t)};r.version="3.0.0",r.config=function(e,t){i[e]=t};var i=r.defaults={openTag:"<%",closeTag:"%>",escape:!0,cache:!0,compress:!1,parser:null},s=r.cache={};r.render=function(e,t){return m(e,t)};var o=r.renderFile=function(e,t){var n=r.get(e)||v({filename:e,name:"Render Error",message:"Template not found"});return t?n(t):n};r.get=function(e){var t;if(s[e])t=s[e];else if("object"==typeof document){var n=document.getElementById(e);if(n){var r=(n.value||n.innerHTML).replace(/^\s*|\s*$/g,"");t=m(r,{filename:e})}}return t};var u=function(e,t){return"string"!=typeof e&&(t=typeof e,"number"===t?e+="":e="function"===t?u(e.call(e)):""),e},a={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},f=function(e){return a[e]},l=function(e){return u(e).replace(/&(?![\w#]+;)|[<>"']/g,f)},c=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},h=function(e,t){var n,r;if(c(e))for(n=0,r=e.length;r>n;n++)t.call(e,e[n],n,e);else for(n in e)t.call(e,e[n],n)},p=r.utils={$helpers:{},$include:o,$string:u,$escape:l,$each:h};r.helper=function(e,t){d[e]=t};var d=r.helpers=p.$helpers;r.onerror=function(e){var t="Template Error\n\n";for(var n in e)t+="<"+n+">\n"+e[n]+"\n\n";"object"==typeof console&&console.error(t)};var v=function(e){return r.onerror(e),function(){return"{Template Error}"}},m=r.compile=function(e,t){function r(n){try{return new a(n,u)+""}catch(r){return t.debug?v(r)():(t.debug=!0,m(e,t)(n))}}t=t||{};for(var o in i)void 0===t[o]&&(t[o]=i[o]);var u=t.filename;try{var a=n(e,t)}catch(f){return f.filename=u||"anonymous",f.name="Syntax Error",v(f)}return r.prototype=a.prototype,r.toString=function(){return a.toString()},u&&t.cache&&(s[u]=r),r},g=p.$each,y="break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",b=/\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,w=/[^\w$]+/g,E=new RegExp(["\\b"+y.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g"),S=/^\d[^,]*|,\d[^,]*/g,x=/^,+|,+$/g,T=/^$|,+/;i.openTag="{{",i.closeTag="}}";var N=function(e,t){var n=t.split(":"),r=n.shift(),i=n.join(":")||"";return i&&(i=", "+i),"$helpers."+r+"("+e+i+")"};i.parser=function(e){e=e.replace(/^\s/,"");var t=e.split(" "),n=t.shift(),i=t.join(" ");switch(n){case"if":e="if("+i+"){";break;case"else":t="if"===t.shift()?" if("+t.join(" ")+")":"",e="}else"+t+"{";break;case"/if":e="}";break;case"each":var s=t[0]||"$data",o=t[1]||"as",u=t[2]||"$value",a=t[3]||"$index",f=u+","+a;"as"!==o&&(s="[]"),e="$each("+s+",function("+f+"){";break;case"/each":e="});";break;case"echo":e="print("+i+");";break;case"print":case"include":e=n+"("+t.join(",")+");";break;default:if(/^\s*\|\s*[\w\$]/.test(i)){var l=!0;0===e.indexOf("#")&&(e=e.substr(1),l=!1);for(var c=0,h=e.split("|"),p=h.length,d=h[c++];p>c;c++)d=N(d,h[c]);e=(l?"=":"=#")+d}else e=r.helpers[n]?"=#"+n+"("+t.join(",")+");":"="+e}return e},"function"==typeof define?define([],function(){return r}):"undefined"!=typeof exports?module.exports=r:this.template=r}();