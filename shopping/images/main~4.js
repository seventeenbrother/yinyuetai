define([],function(){return["<!-- 登录注册框 -->",'<script type="text/template" id="login-reg-template">','<div class="login-register">','<div class="login-image" style="background-image: url({{bgImage}})"></div>','<div class="login-view">','<div class="login-tab">','<a href="javascript:void(0)">登录</a>','<a href="javascript:void(0)">注册</a>',"</div>",'<div class="login-main" id="login-area">','<div class="login-main-loading">正在加载登录模块，请稍候...</div>','<div id="other-login"></div>',"</div>",'<div class="login-main" id="register-area">','<div class="login-main-loading">正在加载注册模块，请稍候...</div>',"</div>","</div>","</div>","</script>","<!-- 第三方登录-->",'<script type="text/template" id="other-login-template" >','<div class="login-third-wrap">','<span class="third-text">第三方登录:</span>','<span><a href="//login.yinyuetai.com/api/login/sina-auth" target="_blank"  class="ui-login-weibo">新浪登录</a></span>','<span><a href="//login.yinyuetai.com/api/login/wechat-auth" target="_blank" class="ui-login-weixin">微信登录</a></span>','<span><a href="//login.yinyuetai.com/api/login/qq-auth" target="_blank" class="ui-login-qq">QQ登录</a></span>',"</div>","</script>","<!-- 登录 -->",'<script type="text/template" id="login-template">','<form id="login-form" action="http://login.beta.yinyuetai.com/v2/login" method="post">','<div class="login-error-tips"></div>','<div class="inter-content inter-content-login">','<div class="area-code-content">','<span class="country-name" data-code="">中国大陆</span>','<ul class="code-list" style="display:none;">','<li data-code="" data-name="中国大陆">中国大陆 (+86)</li>','<li data-code="1" data-name="美国/加拿大">美国/加拿大 (+1)</li>','<li data-code="66" data-name="泰国">泰国 (+66)</li>','<li data-code="81" data-name="日本">日本 (+81)</li>','<li data-code="82" data-name="韩国">韩国 (+82)</li>','<li data-code="853" data-name="澳门">澳门 (+853)</li>','<li data-code="852" data-name="香港">香港 (+852)</li>','<li data-code="886" data-name="台湾">台湾 (+886)</li>',"</ul>","</div>",'<input type="text" name="phone" class="login-text-long" placeholder="请输入手机号码或邮箱">',"</div>",'<div><input type="password" class="login-text-long" placeholder="请输入密码"></div>','<div class="login-fun-wrap">','<label class="login-auto">','<input type="checkbox" name="autologin" checked>',"<span>自动登录</span>","</label>",'<a href="//login.yinyuetai.com/forgot-password" target="_blank" class="login-forget">忘记密码</a>',"</div>","{{ if !needAuth }}",'<input type="submit" value="登录" class="login-submit">',"{{ else }}",'<div id="geetest-wrap"></div>',"{{ /if }}","</form>","</script>","<!-- 注册 -->",'<script type="text/template" id="register-template">','<form id="register-form" action="https://login.yinyuetai.com/v2/reg" method="post">','<div class="login-error-tips"></div>','<div class="inter-content inter-content-register">','<div class="area-code-content">','<span class="country-name" data-code="">中国大陆</span>','<ul class="code-list" style="display:none;">','<li data-code="" data-name="中国大陆">中国大陆 (+86)</li>','<li data-code="1" data-name="美国/加拿大">美国/加拿大 (+1)</li>','<li data-code="66" data-name="泰国">泰国 (+66)</li>','<li data-code="81" data-name="日本">日本 (+81)</li>','<li data-code="82" data-name="韩国">韩国 (+82)</li>','<li data-code="853" data-name="澳门">澳门 (+853)</li>','<li data-code="852" data-name="香港">香港 (+852)</li>','<li data-code="886" data-name="台湾">台湾 (+886)</li>',"</ul>","</div>",'<input id="dialog-mobile" type="text" name="phone" class="login-text-long" placeholder="请输入手机号码">',"</div>",'<div><input id="dialog-password" type="password" class="login-text-long" placeholder="密码为6-20位字符，支持大小写"></div>','<input type="submit" value="立即注册" class="login-submit">','<div class="login-fun-wrap">','<label class="login-auto">','<input type="checkbox" name="agree" checked="">','<span>我已阅读并同意<a href="//www.yinyuetai.com/article/45" target="_blank">《音悦Tai服务条款》</a></span>',"</label>","</div>","</form>","</script>","<!-- 验证码 -->",'<script type="text/template" id="code-template">','<div class="login-code-wrap">','<input type="text" name="code" class="login-text-short" placeholder="请输入验证码">','<input type="button" class="login-get-code" value="获取验证码">',"{{ if needAuth }}",'<div id="register-geetest"></div>',"{{ /if }}","</div>","</script>","<!-- 绑定手机 -->",'<script type="text/template" id="phone-template">','<div class="phone-box">','<form class="phone-form" action="//login.yinyuetai.com/v2/bind-mobile" method="post">','<div class="phone-title">绑定手机</div>','<div class="login-error-tips"></div>','<div class="inter-content inter-content-bind">','<div class="area-code-content">','<span class="country-name" data-code="">中国大陆</span>','<ul class="code-list" style="display:none;">','<li data-code="" data-name="中国大陆">中国大陆 (+86)</li>','<li data-code="1" data-name="美国/加拿大">美国/加拿大 (+1)</li>','<li data-code="66" data-name="泰国">泰国 (+66)</li>','<li data-code="81" data-name="日本">日本 (+81)</li>','<li data-code="82" data-name="韩国">韩国 (+82)</li>','<li data-code="853" data-name="澳门">澳门 (+853)</li>','<li data-code="852" data-name="香港">香港 (+852)</li>','<li data-code="886" data-name="台湾">台湾 (+886)</li>',"</ul>","</div>",'<input type="text" name="phone" class="login-text-long" placeholder="请输入手机号码">',"</div>",'<div class="beforedom"></div>','<input type="submit" value="提交" class="login-submit">',"</form>","</div>","</script>","<!-- 第三方登录绑定成功提示 -->",'<script type="text/template" id="bind-success-template">','<div class="bind-phone-success">',"<h3>绑定成功！</h3>","<p>今后您也可以使用手机号进行登录</p>","{{ if newpwd }}","<p>注：登录密码为您<em>手机号后6位</em></p>","{{ /if }}",'<input type="button" value="确定" class="login-submit">',"</div>","</script>"].join("")});