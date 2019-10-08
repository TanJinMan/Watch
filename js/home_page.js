$.ajax({
	type: "get",
	url: "home.json",
	async: true,
	success: function(res) {
//		console.log(res);
		var listarr = res.home;
		var liststr = "";
		$.each(listarr, function(index, ele) {
			liststr +=
				'<div class="watch_list">' +
				'<div class="watch_list_img"  pid="' + ele.pid + '">' +
				'<img src="' + ele.imgsrc + '"/>' +
				'<p>' + ele.Table_name + '</p>' +
				'<p>' + ele.PO_name + '</p>' +
				'<div class="Pay_monthly">' +
				'<span>月付 </span>' +
				'<span>&nbsp;¥' + ele.fenqi_price + '</span>' +
				'<span>&nbsp;|&nbsp;</span>' +
				'<span>¥' + ele.price + '</span>' +
				'</div>' +
				'</div>' +
				'</div>' +
				'</div>'

		})
		$(".watch_list").html(liststr);

						$(".watch_list_img").click(function(){
							var pidss=$(this).attr("pid");
							console.log(pidss)
							location.href="列表.详情.购物/Details_page.html?pidss"+pidss;
//
				})
	}
})

//轮播图
$(function() {
	
	
			register()
function register(){  //接收登录的账号
	var keys=localStorage.keys
	console.log(keys)
	if(keys){
		console.log('s')
		var arr = JSON.parse(keys)
	var reg=/(\d{3})(\d{4})(\d{4})/
	var ss=arr[0].name.replace(reg,'$1***$3')
	console.log(ss)
	
	$("#register").html(ss)
	}
}
	console.log(register())
	

	

	var num = 0;
	var timers = null;
	timers = setInterval(move, 4000);

	function move() {
		num++;
		if(num > $("#move img").size()) {
			num = 0;
		}
		$("#move div").eq(num).fadeIn(50).siblings().fadeOut(50);

		$("#banner_nav li").eq(num).addClass("active").siblings().removeClass("active");
	}
	//鼠标移入移出
	$(".Wheelplanting_banner").mouseenter(function() {
		clearInterval(timers);
	}).mouseleave(function() {
		timers = setInterval(move, 4000);
	})
	//后按钮
	$("#banner_ctrl .next").click(function() {
		move();
	})
	//前按钮
	$("#banner_ctrl .prev").click(function() {
		num--;
		if(num < 0) {
			num = $("#move img").length - 1;
		}
		$("#move div").eq(num).fadeIn(50).siblings().fadeOut(50);
		$("#banner_nav li").eq(num).addClass("active").siblings().removeClass("active");
	})
	//点击圆点
	$("#banner_nav li").click(function() {
		num = $(this).index();
		$("#move div").eq(num).fadeIn(50).siblings().fadeOut(50);
		$("#banner_nav li").eq(num).addClass("active").siblings().removeClass("active");
	})

	//  排行榜tab切换
	$(".tab_box ul li").mouseenter(function() {
		var index = $(this).index();

		$(this).addClass("lis").siblings().removeClass("lis");

		$(".tab_img .tab_imgs").eq(index).fadeIn(0).siblings().fadeOut(0);
	})
	//	
	//	
	//	
	//	       中间盒子
	//	
	//	
	//	
	$(".tab_img_box").mouseover(function() {
		$(".p3").css({
			"background": "#cc9952"
		})
		$(".p3").css({
			"color": "white"
		})
	});
	$(".tab_img_box").mouseout(function() {
		$(".p3").css({
			"background": "white"
		})
		$(".p3").css({
			"color": "#cc9952"
		})
	});
	//	
	//	   字体升降
	//	
	$(".b_txt").each(function(i) {
		$(".tab_img_right>div").eq(i).hover(function() {
			$(".b_txt").eq(i).show().stop(true, true).animate({
				height: "50px"
			});
		}, function() {
			$(".b_txt").stop(true, true).animate({
				height: "0px"
			});
		})
	})

	//品牌馆tab切换
	$(".tab_box01 ul li").mouseenter(function() {
		var index = $(this).index();

		$(this).addClass("lis01").siblings().removeClass("lis01");

		$(".four_bigimg .four_bigimgs").eq(index).fadeIn(0).siblings().fadeOut(0);
	})

	//	
})
//	

//倒计时

$(document).ready(function() {
	var oDate = new Date();
	var nowTime = oDate.getTime(); //现在的毫秒数
	oDate.setDate(oDate.getDate() + 1); // 设定截止时间为第二天
	var targetDate = new Date(oDate.toLocaleDateString());
	run(targetDate);
});

function run(enddate) {
	getDate(enddate);
	setInterval("getDate('" + enddate + "')", 500);
}

function getDate(enddate) {
	var oDate = new Date(); //获取日期对象

	var nowTime = oDate.getTime(); //现在的毫秒数
	var enddate = new Date(enddate);
	var targetTime = enddate.getTime(); // 截止时间的毫秒数
	var second = Math.floor((targetTime - nowTime) / 1000); //截止时间距离现在的秒数

	var day = Math.floor(second / 24 * 60 * 60); //整数部分代表的是天；一天有24*60*60=86400秒 ；
	second = second % 86400; //余数代表剩下的秒数；
	var hour = Math.floor(second / 3600); //整数部分代表小时；
	second %= 3600; //余数代表 剩下的秒数；
	var minute = Math.floor(second / 60);
	second %= 60;
	var spanH = $('.se-txt')[0];
	var spanM = $('.se-txt')[1];
	var spanS = $('.se-txt')[2];

	spanH.innerHTML = tow(hour);
	spanM.innerHTML = tow(minute);
	spanS.innerHTML = tow(second);
}

function tow(n) {
	return n >= 0 && n < 10 ? '0' + n : '' + n;
}

//回到顶部

window.onload = function() {
	


	
	var returntop04 = document.querySelectorAll(".return_top li i")[4];
	console.log(returntop04);
	window.onscroll = function() {
		var top = document.documentElement.scrollTop || document.body.scrollTop;
		//		if(top>500){
		//			btn.style.display="block"
		//		}else{
		//			btn.style.display="none";
		//		}
		returntop04.onclick = function() {
			timer = setInterval(function() {
				flag = false;
				window.scrollBy(0, -100);
			}, 20)
		}
		if(top <= 0) {
			flag = true;
			clearInterval(timer);
		}
	}
	

	

	//回到顶部菜单栏

	var RTi = document.querySelectorAll(".return_top li i");
	var RTspan = document.querySelectorAll(".return_top li span");
	//    console.log(RTi)
	for(let i = 0; i < RTi.length; i++) {
		  	console.log(RTspan[i]) 
		RTi[i].index = i;
		RTi[i].onmouseover = function() {
			for(let j = 0; j < RTspan.length; j++) {
				RTspan[j].style.display = "none";
				//  			RTi[i].style.background="#E6E6E6";
			}
			RTspan[i].style.display = "block";
			RTi[i].style.background = "#E6E6E6";

			RTspan[i].onmouseout = function() {
				RTspan[i].style.display = "none";
				RTi[i].style.background = "white";
			}

		}

	}
	var big_img = document.getElementsByClassName("big_img");
//	console.log(big_img)
	var small_img = document.getElementsByClassName("small_img");
	for(let i = 0; i < big_img.length; i++) {

		big_img[i].index = i;

		big_img[i].onmouseover = function() {
			for(let j = 0; j < small_img.length; j++) {
				//					small_img[j].style.display="none";
				small_img[i].style.transition = "0.5s";
				small_img[i].style.opacity = "1";
				small_img[i].style.display = "block";
				small_img[i].style.filter = "blur(0px)";
				//					
			}
			//				small_img[i].style.filter="blur(0px)";

		}
		big_img[i].onmouseout = function() {
			small_img[i].style.opacity = "0";

		}

	}

	//客户服务

	var TOPBOXa = document.querySelectorAll(".Top_box_rigth_inside02 a")[1];
//	console.log(TOPBOXa)
	var kkfw = document.getElementsByClassName("kkfw")[0];
	var kkfws = document.Elem
//	console.log(kkfw)
	TOPBOXa.onmouseenter = function() {
		kkfw.style.height = "150px";
		kkfw.style.display = "block";
		kkfw.style.transition = "1s";
		kkfw.style.opacity = "1";
		TOPBOXa.style.background = "white";

		kkfw.onmouseleave = function() {
			kkfw.style.opacity = "0";
			TOPBOXa.style.background = "";
			kkfw.style.height = "0px";
		}

	}
	//轮播01
	jQuery(".picScroll-left").slide({
		titCell: ".hd ul",
		mainCell: ".bd ul",
		autoPage: true,
		effect: "leftLoop",
		autoPlay: true,
		vis: 3,
		scroll: 4,
		trigger: "click"
	});

	//轮播02
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	//  var big_img=document.querySelectorAll("")

}