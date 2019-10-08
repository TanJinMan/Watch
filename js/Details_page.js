window.onload = function() {
	   		register()
function register(){  //接收登录的账号
	var keys=localStorage.keys
	if(keys){
//		console.log('s')
		var arr = JSON.parse(keys)
	var reg=/(\d{3})(\d{4})(\d{4})/
	var ss=arr[0].name.replace(reg,'$1***$3')
//	console.log(arr)
	$('#register').html(ss)
	}
}

	function getQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) {
			return decodeURIComponent(r[2]);
		}
		return '';
	}
	searc()

	function searc() {
		//获取search值中的pid(商品id)
		var pid = getQueryString("pid");
		console.log(pid) //商品id

		$.ajax({
			type: "get",
			url: "../home.json",
			success: function(res) {
				//			var arr=JSON.parse(res);
				var infoarr = res.info;

				//			console.log(res.info);
				//			console.log(infoarr)
				var name = "";
				$.each(infoarr, function(index, ele) {
					//		console.log(infoarr)	
					if(ele.pic == pid) {

						name +=
							'<div class="name">"' + ele.pname + '"</div>'
						$(".name").html(name);
						$(".fenqi span").eq(1).html(ele.fenqi);
						$(".market_price span").eq(1).html(ele.price01);
						$(".market_price span").eq(3).html(ele.price02);
						$(".name_watch_right .name").eq(0).html(ele.pname);

						//详情图
						$(".style img").eq(0).attr("src", ele.kuanshi);
						$(".art_No img").eq(0).attr("src", ele.imgb01);
						$(".art_No img").eq(1).attr("src", ele.imgb02);
						$(".art_No img").eq(2).attr("src", ele.imgb03);
						$(".art_No img").eq(3).attr("src", ele.imgb04);

						//放大镜小图片
						$(".bottom_img img").eq(0).attr("src", ele.small_img01);
						$(".bottom_img img").eq(1).attr("src", ele.small_img02);
						$(".bottom_img img").eq(2).attr("src", ele.small_img03);
						$(".bottom_img img").eq(3).attr("src", ele.small_img04);
						$(".bottom_img img").eq(4).attr("src", ele.small_img05);

						$(".big img").eq(0).attr("src", ele.small_img01);
						$(".big img").eq(1).attr("src", ele.small_img02);
						$(".big img").eq(2).attr("src", ele.small_img03);
						$(".big img").eq(3).attr("src", ele.small_img04);
						$(".big img").eq(4).attr("src", ele.small_img05);

						//大图
						$(".box_img img").eq(0).attr("src", ele.big_img01);
						$(".box_img img").eq(1).attr("src", ele.big_img02);
						$(".box_img img").eq(2).attr("src", ele.big_img03);
						$(".box_img img").eq(3).attr("src", ele.big_img04);
						$(".box_img img").eq(4).attr("src", ele.big_img05);


						$(".box_img img").eq(0).show().siblings().hide();
						$(".big").eq(0).hide()
             	                    	
						$(".bottom_img li").hover(function() {

							var ind = $(this).index();			
							$(this).addClass("lis").siblings().removeClass("lis");
							$(".box_img img").eq(ind).show().siblings().hide();
							$(".big img ").eq(ind).show().siblings().hide();
							//                 	                    	
						})

						//鼠标移入移出小盒子 让大盒子和遮罩显示 和隐藏
						$(".box_img").mouseover(function() {
							$(".box_img #mask").show();
							$(".big").show();
							$(".box_img").css("z-index", 10)
							$(".box_img").stop().animate({
								opacity: "0"
							}, 400)
						}).mouseout(function() {
							$(".box_img #mask").hide();
							$(".big ").hide();
							$(".box_img").stop().animate({
								opacity: "1"
							}, 400)
						})

						//给小盒子绑定鼠标移动事件
						$(".box_img").mousemove(function(e) {
							var x = e.pageX - $(".box_img").offset().left - $(".box_img").width() / 5;
							var y = e.pageY - $(".box_img").offset().top - $(".box_img").height() / 3;
							//限制
							x < 0 ? x = 0 : x;
							y < 0 ? y = 0 : y;
							x > $(".box_img").width() - $("#mask").width() ? x = $(".box_img").width() - $("#mask").width() : x;
							y > $(".box_img").height() - $("#mask").height() ? y = $(".box_img").height() - $("#mask").height() : y;
							$("#mask").css({
								left: x + "px",
								top: y + "px"
							})
							//算出比例
							var bilix = $(".big img").width() / $(".box_img").width();
							var biliy = $(".big img").height() / $(".box_img").height();
							//
							$(".big").scrollLeft(bilix * x);
							$(".big").scrollTop(biliy * y);

						})

						//点击减
						var min = document.querySelectorAll(".Number button")[0];
						console.log(min)
						var pnum = document.querySelectorAll(".Number input")[0];
						console.log(pnum)
						min.onclick = function() {
							min.value = Number(pnum.value) - 1;
						}

						//点击加
						var plus = document.querySelectorAll(".Number button")[1];
						console.log(plus)
						plus.onclick = function() {
							pnum.value = Number(pnum.value) - 1;
							if(pnum.value <= 0) {
								pnum.value = 1;
							}
						}

						var arr = null;

						$("#gouwu").click(function() {
							if(!localStorage.arr) {
								arr = []
							} else {
								arr = JSON.parse(localStorage.arr)
							}

							console.log($("#gouwu"))
							var uid = localStorage.uid;
							console.log(uid)
							var list = {
								uid: uid,     
								name: ele.pname,
								pic: ele.price01,
								pid: ele.pic,
								imag: $(".style img").eq(0).attr("src"),
								num: 1
							};
							if(arr.length == 0) {
								arr.push(list);
								alert(333)
							} else {
								var flag = false;
								for(var i = 0; i < arr.length; i++) {
									if(list.pid == arr[i].pid) {
										flag = true;
										arr[i].num += 1
										localStorage.arr = JSON.stringify(arr)
										alert("商品数量+1")
										return;
									} else {
										flag = false;
									}
								}
								if(!flag) {
									arr.push(list);
									alert("已添加到购物车")
								}

							}

							//						for(var i=0;i<arr.length;i++){
							//							if(list.pid==arr[i].pid){
							//								arr[i].num+=1
							//							}else {
							//								arr.push(list);
							//							}
							//						}

							localStorage.arr = JSON.stringify(arr)

						})

					}
				})
			}
		});
	}
	
	
	
	
	
	//addshoping(pid)
	/* 详简切换通过添加on类名和css控制 */
	$("#tabRank li").hover(function() {
		$(this).addClass("on").siblings().removeClass("on")
	}, function() {});
	/* Tab切换 */
	$("#tabRank").slide({
		titCell: "dt h3",
		mainCell: "dd",
		autoPlay: false,
		effect: "left",
		delayTime: 300
	});
	
	function register() { //接收登录的账号
		var keys = localStorage.keys
		if(keys) {
			console.log('s')
			var arr = JSON.parse(keys)
			var reg = /(\d{3})(\d{4})(\d{4})/
			var ss = arr[0].name.replace(reg, '$1***$3')
			console.log(arr)
			$('#register').html(ss)
		}
	}
}