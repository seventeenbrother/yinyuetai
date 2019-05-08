define(["require","exports","module","modules/widget/dialog/mask"],function(e,t,n){function u(e,t){return t=t||{},t.el=e||"<b></b>",new r(t)}var r,i,s,o;return i=e("modules/widget/dialog/mask"),s='<a href="javascript:void(0);" class="ico_close J_close">关闭</a>',o='<h3 class="dialog_title J_title">{title}</h3>',r=Backbone.View.extend({options:{width:"",height:"",hasMark:!0,hasClose:!0,isRemoveAfterHide:!0,isAutoShow:!0,title:"",className:"",effect:"fade",draggable:!0,onShow:function(){},onHide:function(){}},events:{"click .J_close":"_close"},initialize:function(){this._status=!1,this.$el=$('<div class="dialog"/>').append(this.$el.show()).addClass(this.options.className).appendTo(document.body),this._isShowTitle(),this._isShowClose(),this._adjustPosition(),this.on("show",function(){this._status=!0,this._toggle("show")}),this.on("hide",function(){this._status=!1,this._toggle("hide")}),this.on("show",this.options.onShow,this.$el),this.on("hide",this.options.onHide,this.$el),this.options.isAutoShow&&this.trigger("show"),this._setDraggable()},_getStyle:function(e){var t,n;t=this.options.width,n=this.options.height,n&&this.options.title!=""&&(n+=30);var e={width:t,height:n,"margin-left":-(t/2),"margin-top":-(n/2)};return e},_isShowTitle:function(){var e=this.options.title;e!=""&&(this.$title=$(o.replace("{title}",e)).prependTo(this.$el))},_isShowClose:function(){this.options.hasClose&&$(s).attr("hidefocus","true").appendTo(this.$el)},_close:function(){this.trigger("hide")},_toggle:function(e){var t,n;t=this.options.effect,n=this,e=="show"?t==="none"?this.$el.css("display","block"):t==="fade"&&this.$el.fadeIn():e=="hide"&&(t==="none"?this.$el.css("display","none"):t==="fade"&&this.$el.fadeOut(),this.options.isRemoveAfterHide&&setTimeout(function(){n.$el.remove()},2e3)),this._toggleMask(e)},_toggleMask:function(e){this.options.hasMark&&(e=="show"?i.show():e=="hide"&&i.hide())},_adjustPosition:function(){var e={width:this.options.width||this.$el.innerWidth(),height:this.options.height?this.options.title!=""?this.options.height+30:this.options.height:this.$el.innerHeight()};this.$el.css(_.extend({marginLeft:-(e.width/2),marginTop:-(e.height/2)},e))},_setDraggable:function(){var t=this,n=this.options.draggable,r=this.options.title;n&&e(["modules/widget/jquery-draggable-min"],function(){var e={containment:i.element||"body",scroll:!1},n;r&&(n="h3.J_title",e.handle=n,$(n).css("cursor","move")),t.$el.draggable(e)})},status:function(){return this._status?"show":"hide"},show:function(){return this.trigger("show"),this},hide:function(){return this.trigger("hide"),this},destroy:function(){this.$el.remove(),i.hide()},resize:function(e,t){return this.options.width=e,this.options.height=t,this._adjustPosition(),this},title:function(e){return this.$title&&this.$title.html(e),this}}),u});