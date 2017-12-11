// JavaScript Document
$(document).ready(function(){
	// 新闻滚动开始
	var h = $(".news").height();
	function play(){
		$(".news > ul").animate({
			marginTop : - h
			},500,function(){
				$(".news > ul > li:first").appendTo(".news > ul");
				$(".news > ul").css("marginTop",0);
				});
		}
	var times = setInterval(play,5000);
	$(".news > ul > li > a").hover(
		function(){
			clearInterval(times);
			},
		function(){
			times = setInterval(play,5000);
			});
	//新闻滚动结束
	
	//项目案例展示代码开始
	var w = parseInt($(".scan_ul1 > li").outerWidth()) + parseInt($(".scan_ul1 > li").css("marginRight"));
	var sum = 0; 
	$(".scan_ul2").html($(".scan_ul1").html());
	    //项目案例展示自动播放代码开始
	function autoplay(){
		var scrollleft = parseInt($(".scan").scrollLeft());
		var width = parseInt($(".scan_ul1").width());
		if(scrollleft >= width){
			$(".scan").scrollLeft(0);
			sum = 0 ;
			}
			sum += w;
			$(".scan").stop().animate({
					scrollLeft : sum + "px"
					},500);
		}
	var autotime = setInterval(autoplay,4000);
	
	//项目案例展示自动播放代码结
	$(".tright").click(function(){
		var scrollleft = parseInt($(".scan").scrollLeft());
		var width = parseInt($(".scan_ul1").width());
		if(scrollleft >= width){
			$(".scan").scrollLeft(0);
			sum = 0 ;
			}
			sum += w;
			$(".scan").stop().animate({
					scrollLeft : sum + "px"
					},500);
			clearInterval(autotime);
			autotime = setInterval(autoplay,4000);
			
		});
	$(".tleft").click(function(){
		var scrollleft = parseInt($(".scan").scrollLeft());
		var width = parseInt($(".scan_ul1").width());
		if(scrollleft <= 0){
			$(".scan").scrollLeft(width);
			sum = width;
			}
			sum -= w;
			$(".scan").stop().animate({
					scrollLeft : sum + "px"
					},500);
			clearInterval(autotime);
			autotime = setInterval(autoplay,4000);
		});
		$(".scan_ul1 li,.scan_ul2 li").hover(
		function(){
			clearInterval(autotime);
			$(this).find(".fliter").hide();
			$(this).find(".imgdiv").css("borderColor","#14abd2");
			$(this).find("a").css("color","#14abd2");
			},
		function(){
			autotime = setInterval(autoplay,4000);
			$(this).find(".fliter").show();
			$(this).find(".imgdiv").css("borderColor","#CECFCF");
			$(this).find("a").css("color","#666")
			});
	//项目案例展示代码结束束
	
	
	//banner 代码开始
	var i= 0 ;
	var length = $(".banner_ul > li").size();
	var bdelay = 5000;
	$(".banner_ul > li:first").show().siblings("li").hide();
	function bplay(){
		i ++ ;
		if(i == length){
			i = 0 ;
			}
		$(".banner_ul > li").fadeOut(500).eq(i).fadeIn(1000);
		$(".num a").removeClass("current").eq(i).addClass("current");
		}
	var btime = setInterval(bplay,bdelay);
	$(".num a").each(function(index){
		$(this).click(function(){
			i = index ;
			$(".banner_ul > li").fadeOut(500).eq(i).fadeIn(1000);
			$(".num a").removeClass("current").eq(i).addClass("current");
			clearInterval(btime);
			btime = setInterval(bplay,bdelay);
			return false;
			});
		});
	//banner 代码结束
	$(".wg").width((parseInt($(document).width())-1000)/2 + "px");
		$(window).resize(function(){
			$(".wg").width((parseInt($(document).width())-1000)/2 + "px")
			});
			
			
			
$(".wg").height((parseInt($(document).height())));
//alert(parseInt($(document).height()));			
			
			
});




function AddFavorite(sURL, sTitle) {   
    try {   
        window.external.addFavorite(sURL, sTitle);   
    } catch (e) {   
        try {   
            window.sidebar.addPanel(sTitle, sURL, "");   
        } catch (e) {   
            alert("加入收藏失败，请使用Ctrl+D进行添加");   
        }   
    }   
}  
