define(["require","exports","module","modules/widget/slider","app/shop/widget/slick.min","app/shop/tpl/main","alertify","app/shop/like"],function(e,t,n){function f(){a.init()}function l(){a.exhibition()}var r=e("modules/widget/slider"),i=e("app/shop/widget/slick.min"),s=e("app/shop/tpl/main"),o=e("alertify"),u=e("app/shop/like"),a={init:function(){var e=this;e.renderSlider(),e.renderScene(),e.renderGoods(),e.goodsChart(),e.artistsChart(),e.renderNew(),e.renderLike(),e.events(),u.bind(),e.mlalbumChart(),e.albumChart(),e.signADpost(),e.albumADpost(),$(".navbox .index").addClass("active")},exhibition:function(){var e=this;e.renderSlider()},events:function(){$(".artists_title").on("click",function(){$(this).addClass("active").siblings("span").removeClass("active"),$(".goods_chart").hide(),$(".artists_chart").show()}),$(".goods_title").on("click",function(){$(this).addClass("active").siblings("span").removeClass("active"),$(".artists_chart").hide(),$(".goods_chart").show()}),$(".goodsList_rank").on("mouseenter","li",function(e){$(e.currentTarget).addClass("movein").siblings("li").removeClass("movein")}),$(".goodsList_rank").on("mouseleave",function(){$(".goodsList_rank").children("li").removeClass("movein"),$(".goodsList_rank li:first-child").addClass("movein")}),$(".mlablumList").on("mouseenter","li",function(e){$(e.currentTarget).addClass("movein").siblings("li").removeClass("movein")}),$(".mlablumList").on("mouseleave",function(){$(".mlablumList").children("li").removeClass("movein"),$(".mlablumList li:first-child").addClass("movein")}),$("#ml").on("mouseover",function(){$("#im").removeClass("albumActive"),$("#ml").addClass("albumActive"),$(".mlablumList").show(),$(".goodsList_rank").hide()}),$("#im").on("mouseover",function(){var e=this;$("#ml").removeClass("albumActive"),$("#im").addClass("albumActive"),$(".goodsList_rank").show(),$(".mlablumList").hide()})},getData:function(e,t,n){$.ajax({type:"get",dataType:"json",url:"//shop.yinyuetai.com/shopRec/list.json",data:{rec_id:e,max_count:t},success:function(e){e.status!=="200"?o.error(e.statusText):n(e)}})},renderSlider:function(){this.getData(7,"",function(e){$(".slider").html(juicer(s.sliderBoxTpl,e)),new r($("#sliderBox"),{effect:"slide",duration:3e3}),$(".bannerBox .J_toggle").css("display","none"),$(".bannerBox").on("mouseenter",function(){$(".bannerBox .J_toggle").css("display","inline")}),$(".bannerBox").on("mouseleave",function(){$(".bannerBox .J_toggle").css("display","none")})})},renderScene:function(){this.getData(2,"",function(e){$(".slick").html(juicer(s.sceneTpl,e)),$(".slick").slick({dots:!0,slidesToShow:4,slidesToScroll:4})})},renderGoods:function(){this.getData(3,6,function(e){$(".goodsList_album").append(juicer(s.albumTpl,e))}),this.getData(4,10,function(e){$(".nearBox .goodsList").append(juicer(s.nearTpl,e))}),this.getData(12,10,function(e){$(".makeupBox .goodsList").append(juicer(s.makeupTpl,e))}),this.getData(11,10,function(e){$(".digitalBox .goodsList").append(juicer(s.makeupTpl,e))}),this.getData(13,4,function(e){$(".artistBox .goodsList").append(juicer(s.artistTpl,e))})},albumChart:function(){$.ajax({dataType:"jsonp",url:"//vchart.yinyuetai.com/album/get-trend?type=im",cache:!0,success:function(e){console.log(e.length),e.error||($(".goodsList_rank").html(juicer(s.albumChartTpl,e)),$(".goodsList_rank li:first-child").addClass("movein"))}})},mlalbumChart:function(){$.ajax({dataType:"jsonp",url:"//vchart.yinyuetai.com/album/get-trend?type=ml",cache:!0,success:function(e){console.log(e.length),e.error||($(".mlablumList").html(juicer(s.albumChartTpl,e)),$(".mlablumList li:first-child").addClass("movein"))}})},goodsChart:function(){$.ajax({type:"get",dataType:"json",url:"//shop.yinyuetai.com/goods/listForGood.json",data:{order_snum:!0,max_count:8},success:function(e){e.status!=="200"?o.error(e.statusText):$(".goods_chart").append(juicer(s.goodsChartTpl,e))}})},signADpost:function(){$.ajax({dataType:"json",url:"//shop.yinyuetai.com/shopRec/list.json",data:{rec_id:22,max_count:1},success:function(e){e.status=="200"&&e.data&&($(".signGoods a").attr({alt:e.data[0].title1,href:e.data[0].url1}),$(".signGoods a img").attr({src:e.data[0].image1}))}})},albumADpost:function(){$.ajax({dataType:"json",url:"//shop.yinyuetai.com/shopRec/list.json",data:{rec_id:21,max_count:1},success:function(e){e.status=="200"&&e.data&&($(".goodsList_album li.album_first a").attr("href",e.data[0].url1),$(".goodsList_album li.album_first a img").attr("src",e.data[0].image1))}})},artistsChart:function(){$.ajax({dataType:"jsonp",jsonp:"callback",url:Y.domains.shopSite+"/goods/listForArt.json",data:{group_art:!0,order_snum:!0,max_count:8},success:function(e){e.status!=="200"?o.error(e.statusText):$(".artists_chart").append(juicer(s.artistsChartTpl,e))}})},artistsTag:function(){$.ajax({type:"get",dataType:"json",url:"//shop.yinyuetai.com/tag/list.json",data:{tag_type:11},success:function(e){e.status!=="200"?o.error(e.statusText):$(".artistListBox").append(juicer(s.artistsTagTpl,e))}})},renderNew:function(){$.ajax({type:"get",dataType:"json",url:"//shop.yinyuetai.com/goods/publish.json",data:{max_count:6},success:function(e){e.status!=="200"?o.error(e.statusText):$(".goodsList_new").append(juicer(s.newTpl,e))}})},renderLike:function(){$.ajax({type:"get",dataType:"json",url:"//shop.yinyuetai.com/goods/publish.json/everybody/favorites.json",success:function(e){if(e.status!=="200")o.error(e.statusText);else{$(".likeBox .goodsList").append(juicer(s.likeTpl,e)),$(".likeBox .li0").show();var t=0;$(".change").on("click",function(){t==3?t=0:t++,$(".likeBox li").hide(),$(".likeBox .li"+t).show()})}}})}};n.exports={init:f,exhibition:l}});