window.onload = function() {
	
	   		register()

	   		function register() { //接收登录的账号
	   			var keys = localStorage.keys
	   			if(keys) {
	   				//		console.log('s')
	   				var arr = JSON.parse(keys)
	   				var reg = /(\d{3})(\d{4})(\d{4})/
	   				var ss = arr[0].name.replace(reg, '$1***$3')
	   				//	console.log(arr)
	   				$('#register').html(ss)
	   			}
	   		}
	
	

	var xhr = null
	try {
		xhr = new XMLHttpRequest();
	} catch(e) {
		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xhr.open("GET", "../home.json", true);
	xhr.send();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200) {
			var data = xhr.responseText;
			var datarr = JSON.parse(data);
			//			console.log(datarr.list)
			var arr = datarr.list;
			var str = "";
			for(var i = 0; i < arr.length; i++) {
				//				console.log(arr[i])
				str +=
					'<div class="Product_list_watch">' +
					'<span id="' + arr[i].pic + '">' +
					'<img src="' + arr[i].imgs + '" />' +
					'<div class="wenzi">' +
					'<span>月付</span>' +
					'<span>¥' + arr[i].pricef + '</span>' +
					'<span>|</span>' +
					'<span>¥' + arr[i].price + '</span>' +
					'</div>' +
					'<p>' + arr[i].name + '</p>' +
					'<p>' + arr[i].liang + '</p>' +
					'<p>' + arr[i].pinpai + '</p>' +
					'<span>免息分期</span>' +
					'</div>' +
					'</div>'
			}

			var list_watch = document.getElementsByClassName("Product_list_watch")[0];
			list_watch.innerHTML = str;
			var span = document.getElementsByTagName("span");

			for(var i = 0; i < span.length; i++) {
				span[i].onclick = function() {
					//					var objs=new Object();
					//					var arr=[];
					//获取自定义属性 传送到详情页面
					var pid = this.id;
					//					objs=[pid]=arr
					//					var ss=JSON.stringify(objs);
					//					console.log(ss)
					//					localStorage.setItem("json",ss)

					console.log(this.id)
					location.href = "Details_page.html?pid=" + pid;

				}
			}
		}
	}

	//轮播01
	jQuery(".picScroll-left").slide({
		titCell: ".hd ul",
		mainCell: ".bd ul",
		autoPage: true,
		effect: "leftLoop",
		autoPlay: true,
		delayTime: 1000
	});

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



}