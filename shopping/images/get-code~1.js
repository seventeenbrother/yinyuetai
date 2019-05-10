define(["require","exports","module","ajaxform","modules/yinyuetai/login-register/login-tools","modules/yinyuetai/login-register/art-template","modules/yinyuetai/login-register/bindphone","pwdencrypt","dialog","user"],function(e,t,n){var r=e("ajaxform"),i=e("modules/yinyuetai/login-register/login-tools"),s=i.API,o=e("modules/yinyuetai/login-register/art-template"),u=e("modules/yinyuetai/login-register/bindphone"),a=e("pwdencrypt"),f=e("dialog"),l=e("user"),c=Backbone.View.extend({initialize:function(e){console.log("get-code init	"),console.log(e.sign),this.params=e,this.bindPhone=e.bindPhone?!0:!1,this.beforeDOM=e.beforeDOM,e.needAuth=!0,this.$el=$(o("code-template",{needAuth:e.needAuth})),this.observer=new i.Observer,this.render(),this._getDOM(),this._getCode(),this._getCodeAction(),this._geetest()},render:function(){this.beforeDOM.after(this.$el),this.$el.find("input, textarea").placeholder()},_getDOM:function(){var e=this;this.getCodeBtn=this.$el.find(".login-get-code"),this.input=this.$el.find("input[name=code]"),this.phoneNumber=$("#register-form").find("#dialog-mobile"),this.passNumber=$("#register-form").find("#dialog-password"),this.errorDiv=$("#register-form").find(".login-error-tips"),this.observer.sub("geetestReady",function(){e.geetest_challenge=e.$el.find('[name="geetest_challenge"]'),e.geetest_validate=e.$el.find('[name="geetest_validate"]'),e.geetest_seccode=e.$el.find('[name="geetest_seccode"]')})},_getCode:function(){function t(){var t,n;e.observer.pub("getCodeBegin"),e.params.interCode.data("code")!=""?n=e.params.interCode.data("code")+"-"+$.trim(e.params.mobileInput.val()):n=$.trim(e.params.mobileInput.val()),console.log(n),t={type:e.params.type,mobile:n,sign:e.params.sign},t.geetest_challenge=e.valiDate.geetest_challenge,t.geetest_validate=e.valiDate.geetest_validate,t.geetest_seccode=e.valiDate.geetest_seccode,console.log(t),$.when(i.iframeAjax({url:s.getAuth,data:t})).then(function(t){console.log(t),t.error===!1?e.observer.pub("getCodeSuccess"):e.observer.pub("getCodeError",t.message)})}var e=this;this.getCodeBtn.click(function(){if(e.codeDisable)return;if(!e.bindPhone){if($.trim(e.phoneNumber.val())==""){e.errorDiv.text("请输入手机号");return}if($.trim(e.passNumber.val())==""){e.errorDiv.text("请输入密码");return}}e.captchaObj.verify()}),e.observer.sub("geetestSuccess",t)},_geetest:function(){var e=this;console.log("%c%s","color: red; background: yellow; font-size: 14px;","初始化极验"),$.ajax({url:s.getGt,dataType:"jsonp"}).then(function(t){e.oCaptcha=window.initGeetest({gt:t.gt,challenge:t.challenge,offline:!Boolean(t.success),new_captcha:!0,product:"bind"},function(n){console.log(t,n),n.appendTo("#register-geetest"),n.bindForm("#register-form"),n.onReady(function(){console.log("gt ready"),e.observer.pub("geetestReady")}).onSuccess(function(){console.log("get-code success");var t=n.getValidate();e.valiDate=t,console.log("gt success",t),e.observer.pub("geetestSuccess")}).onError(function(){console.log("gt error")}),e.captchaObj=n})})},_getCodeAction:function(){var e=this,t;this.codeDisable=!1,this.resetCodeTime=60,e.observer.sub("getCodeSuccess",function(n){function r(){if(e.resetCodeTime<=0){clearInterval(t),e._enableCode();return}e.getCodeBtn.val("重新发送("+e.resetCodeTime-- +")")}e._disableCode(),r(),t=setInterval(r,1e3)}),e.observer.sub("getCodeBegin",function(){e.codeDisable=!0}),e.observer.sub("getCodeError",function(){e.codeDisable=!1})},_disableCode:function(){this.getCodeBtn.addClass("login-code-disable"),this.codeDisable=!0},_enableCode:function(){this.getCodeBtn.removeClass("login-code-disable"),this.codeDisable=!1,this.getCodeBtn.val("获取验证码"),this.resetCodeTime=60}});return c});