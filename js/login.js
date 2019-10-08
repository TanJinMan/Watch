$(function(){
	var use = localStorage.use;
	console.log(use)
	var arr = JSON.parse(use)
	console.log(arr)
	$('.login').on('click', function() { //判断输入密码账号是否正确
		var phone = $('.phone').val();
		var pwd = $('.pwd').val();
		console.log(phone)
		var flag = true;
		$.each(arr, function(index, ele) { //判断是账号错误还是密码错误
			if(ele.name == phone) {
				flag = false;
				if(ele.value == pwd) {
					alert('登录成功')
					localStorage.uid=phone
					location.href ="../home_page.html";
				} else {
					alert('密码错误')
				}
			}
		})
		if(flag) {
			alert("账号错误")
		}

	})

	function locastage(value) {
		if(value != '') {
			var count = 1
			var arr = [];
			var Cdata = new Object()


			Cdata.name=value
			Cdata.count=count
			arr.push(Cdata)
			aa=JSON.stringify(arr)
		
					localStorage.keys=aa

		}
	}
})