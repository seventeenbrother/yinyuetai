!function(){!function(t,a){var r=1e4,g_moduleConfig={uabModule:{stable:["AWSC/uab/115.js"],grey:["AWSC/uab/117.js"],ratio:4999},umidPCModule:{stable:["AWSC/WebUMID/1.70.2/um.js"],grey:["AWSC/WebUMID/1.71.7/um.js"],ratio:10000},ncPCModule:{stable:["js/nc/60.js"],grey:["js/nc/60.js"],ratio:1e4},ncH5Module:{stable:["js/nc/60.js"],grey:["js/nc/60.js"],ratio:1e4}},s=[{name:"umidPCModule",features:["umpc","um","umh5"],depends:[],sync:!1},{name:"uabModule",features:["uab"],depends:[],sync:!1},{name:"nsModule",features:["ns"],depends:[],sync:!1},{name:"ncPCModule",features:["ncPC","scPC"],depends:["uab","umpc"],sync:!0},{name:"ncH5Module",features:["ncH5","scH5"],depends:["uab","umh5"],sync:!0}];function c(a,s){var c="AWSC_SPECIFY_"+a.toUpperCase()+"_ADDRESSES";if(t[c])return t[c];var v=[];for(var p in g_moduleConfig)if(g_moduleConfig.hasOwnProperty(p)&&p===a){var moduleConfig=g_moduleConfig[p];v=Math.ceil(Math.random()*r)<=moduleConfig.ratio?moduleConfig.grey:moduleConfig.stable;for(var h=(new Date).getDate(),b=0;b<v.length;b++){var w=s?"//"+s+"/":A;"//assets.alicdn.com/"===w&&(w+="g/"),v[b]=w+v[b]+"?d="+h}return v}}var v=[],p="loading",h="loaded",b="timeout",w="unexpected",y="no such feature",S=new RegExp("^([\\w\\d+.-]+:)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(\\?[^#]*)?(#.*)?$"),A=k(j());function k(t){var a="//g.alicdn.com/";if(!t)return a;if(/aliexpress/.test(location.href))return"//aeis.alicdn.com/";var r=S.exec(t);return r?"//"+r[3]+(r[4]?":"+r[4]:"")+"/":a}function j(){for(var t=document.getElementsByTagName("script"),i=0;i<t.length;i++){var a=t[i],r=a.hasAttribute?a.src:a.getAttribute("src",4);if(/\/awsc\.js/.test(r))return r}}function x(t){for(var a=void 0,r=0;r<s.length;r++){for(var c=s[r],v=0;v<c.features.length;v++)if(c.features[v]===t){a=c;break}if(a)break}return a}function M(t){for(var a=0;a<v.length;a++){var r=v[a];if(r.name===t)return r}}function W(t){for(var a=void 0,r=0;r<s.length;r++){var c=s[r];if(c.name===t){a=c;break}if(a)break}return a}function E(t){return/http/.test(location.protocol)||(t="https:"+t),t}function I(t,r,s){if(s)for(var c=0;c<t.length;c++){var v=t[c];v=E(v),a.write("<script src="+v+"></script>")}else for(var c=0;c<t.length;c++){var v=t[c];v=E(v);var p=a.createElement("script");p.async=!1,p.src=v,p.id=r;var m=a.getElementsByTagName("script")[0];m&&m.parentNode?m.parentNode.insertBefore(p,m):(m=a.body||a.head,m&&m.appendChild(p))}}function T(a,r,s){var c="//acjs.aliyun.com/error?v="+a+"&e="+encodeURIComponent(r)+"&stack="+encodeURIComponent(s);c=E(c);var v=new Image,p="_awsc_img_"+Math.floor(1e6*Math.random());t[p]=v,v.onload=v.onerror=function(){try{delete t[p]}catch(e){t[p]=null}},v.src=c}function P(t,a){Math.random()<1e-4&&T("awsc_state","feature="+t.name+"&state="+t.state+"&href="+encodeURIComponent(location.href));for(var r=void 0;r=t.callbacks.shift();)try{r(t.state,t.exportObj)}catch(e){if(a)throw e;T(t.name,e.message,e.stack)}}function O(t,a,r){var s=x(t);if(!s)return a&&a(y),void 0;var h=r&&r.cdn,w=r&&r.sync,S=r&&r.timeout||5e3;if(0!==s.depends.length)for(var A=0;A<s.depends.length;A++){var k=s.depends[A];r&&(delete r.sync,delete r.timeout,delete r.cdn),R(k,void 0,r)}var j={};if(j.module=s,j.name=t,j.state=p,j.callbacks=[],j.options=r,a&&j.callbacks.push(a),j.timeoutTimer=setTimeout(function(){j.state=b,P(j,r&&r.throwExceptionInCallback)},S),v.push(j),!s.moduleLoadStatus){var M=s.sync;w&&(M=w);var W=c(s.name,h);I(W,"AWSC_"+s.name,M)}s.moduleLoadStatus=p}function R(t,a,r){var s=M(t);return s?(s.state===h||s.state===b?a&&a(s.state,s.exportObj):s.state===p?a&&s.callbacks.push(a):void 0,void 0):(O(t,a,r),void 0)}function U(t,a,r){var s=!1;try{var c=W(t);c||void 0,c.moduleLoadStatus=h;for(var w=void 0,y=0;y<v.length;y++){var S=v[y];S.module===c&&S.name===a&&(s=S.options&&S.options.throwExceptionInCallback,w=S,clearTimeout(w.timeoutTimer),delete w.timeoutTimer,w.exportObj=r,S.state===p||S.state===b?(w.state=h,P(w,s)):void 0)}w||(w={},w.module=c,w.name=a,w.state=h,w.exportObj=r,w.callbacks=[],v.push(w))}catch(e){if(s)throw e;T("awsc_error",e.message,e.stack)}}function D(){t.AWSC||(t.AWSC={},t.AWSC.use=R,t.AWSCInner={},t.AWSCInner.register=U)}D()}(window,document);var t=new RegExp("^([\\w\\d+.-]+:)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(\\?[^#]*)?(#.*)?$");function a(a){var r="//g.alicdn.com";if(!a)return r;if(/aliexpress/.test(location.href))return"//aeis.alicdn.com";var s=t.exec(a);return s?"//"+s[3]+(s[4]?":"+s[4]:""):r}function r(){for(var t=document.getElementsByTagName("script"),a=/\/js\/ua[b|c]\.js/,r,i=0;i<t.length;i++)if(r=s(t[i]),a.test(r))return t[i]}function s(t){return t&&(t.hasAttribute?t.src:t.getAttribute("src",4))}var c=a(s(r()));window.AWSC.use("uab",function(t,a){},{cdn:c.substr(2)}),window.UA_Opt&&!UA_Opt.reload&&(UA_Opt.reload=function(){}),window.acjs=1}();