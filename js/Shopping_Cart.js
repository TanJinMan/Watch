window.onload=function(){




//全选和复选事件
//		CheackEle();		
//	}
//		var arr=localStorage.arr;
//		console.log(arr)
//	    LoadCart();
//	    //全选和复选的总计变动
//	    function CheackEle(){
//	    	var total=document.querySelector("#total");
//	    	total.innerHTML="总计：¥"+getTotal();
//	    //所有的复选框change事件
//			var cks=document.querySelectorAll(".ck");
//			for(var k=0;k<cks.length;k++){
//				cks[k].onchange=function(){
//					total.innerHTML="总计：￥"+getTotal();
//				}		
//			}
//			var checkAll=document.querySelector("#checkAll");
//			//全选
//			checkAll.onchange=function(){
//				for(var k=0;k<cks.length;k++){
//						cks[k].checked=this.checked;
//						total.innerHTML="总计：￥"+getTotal();
//				}
			
		


//$(function() {
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
	
	
	var num = 0;
	var arrs = '';
	var list = [];
	var uid = localStorage.uid;
	var arr = JSON.parse(localStorage.arr);
	for(var i = 0; i < arr.length; i++) {
		if(uid == arr[i].uid) {
			list.push(arr[i])
			//删除方法绑定
		}
	};

	if(list.length != 0) {
		$.each(list, function(index, ele) {
			arrs += 
//				'<td><input type="checkbox" class="ck" /></td>' +
////				'<td>' + ele.pid + '</td>' +
//				'<td>' + ele.name + '</td>' +
//				'<td><img src="' + ele.imag + '"/></td>' +
//				'<td>' + ele.pic + '</td>' +
//				'<td><button>-</button>' + ele.num + '<button>+</button></td>' +
//				'<td><button class="del">删除</button></td>' +
//				'</tr>'
                 '<div class="car_info">'
			    +'<input type="checkbox" class="checks" />'
				+'<div>'
				+'<img src="'+ ele.imag +'"/>'
				+'<span>'+ele.name+'</span>'
				+'</div> '
				+'<span class=pic	>' + ele.pic + '</span>'
				+'<div class="number">'
			    +'<div><button>-</button>' + ele.num + '<button>+</button></div>'
				+'</div>'
				+'<span class="del" pid="'+ele.pid+'">删除</span>'
				+'</div>'
           
		
		});
	
//		$("table").html(arrs);
        $(".car_info").html(arrs);
         console.log($(".car_info"))
//		LoadCart();
//       delEle()
	} else {
		alert('数据为空')
	}

	$("table td input").click(function() {
		
	})
	$(this);
	$(this).index()

//	function ji() {
//		for(var i = 0; i < $(".car_info").length; i++) {
//			var index = i;
//			if($("table  td input").val()) {
//				num += Number($("table tr:eq(i) td").eq(3).html()) * Number($("table td").eq(4).html());
//				console.log($("table tr:eq(i) td").eq(4).html())
//				console.log(num);
//				console.log($("table tr:").eq(index).html())
//			}
//		}
//	}
	var car_info=document.getElementsByClassName("car_info");
	console.log(car_info)
		
		
//	var del=document.getElementsByClassName("del");
//	console.log(del);
//	for(let j=0;j<del.length;j++){
//		del[j].onclick=function(){
//			var pare=this.parentNode.parentNode;
//			console.log(pare)
//			var pare_01=this.parentNode;
//			console.log(pare_01)
//			pare.removeChild(pare_01);
//			arr.splice(arr[j],1);
//			var date=new Date();
//			date.setDate(date.getDate()+5);
//			(uid,JSON.stringify(arr),date.toGMTString()); 
//		}
//	}
console.log(arr)
	$(".del").click(function(){
	console.log($(this).attr("pid"))	
		$(this).parent().remove();
//		$(this).parent()=null;
		for(var i=0;i<arr.length;i++){
			if($(this).attr("pid")==arr[i].pid){
				arr.splice(i,1);
				localStorage.arr=JSON.stringify(arr)
			}
		}
	})
}