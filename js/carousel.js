var $item=$(".carousel .item"),$wHeight=$(window).height();$item.eq(0).addClass("active"),$item.height($wHeight),$item.addClass("full-screen"),$(".carousel img").each(function(){var t=$(this).attr("src"),e=$(this).attr("data-color");$(this).parent().css({"background-image":"url("+t+")","background-color":e}),$(this).remove()}),$(window).on("resize",function(){$wHeight=$(window).height(),$item.height($wHeight)}),$(".carousel").carousel({interval:6e3,pause:"false"}),$(window).scroll(function(){$(this).scrollTop()>=200?$("#return-to-top").fadeIn(200):$("#return-to-top").fadeOut(200)}),$("#return-to-top").click(function(){$("body,html").animate({scrollTop:0},500)}); var area = document.getElementById('date');area.innerHTML = new Date().getFullYear();