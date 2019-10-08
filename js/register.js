

window.onload=function(){

var val='';
	
	var cav =document.getElementsByClassName('auth_code')[0]
	console.log(cav)
	var arr=[1,2,3,4,5,6,7,8,9]
	var str='';
	canvas(cav,arr,4,function(res){
		val=res
	})




// car--画板
    // arr--数组
    // num--随机数的个数
    // fn--函数返回的随机数
    function canvas(cav,arr,num,fn){
        var num=num;
        var str='';
        var ctx = cav.getContext('2d')
        ctx.clearRect(0,0,cav.width,cav.height)
        ctx.fillStyle="#"+Math.floor(Math.random()*0xFFFFFF).toString(16);
        ctx.rect(0,0,cav.width,cav.height)
        ctx.fill();
        ctx.closePath()
        ctx.beginPath()
        for(var i = 0;i<num;i++){
        var color="#"+Math.floor(Math.random()*0xFFFFFF).toString(16)
        var f=Math.random()*80+80;
        var w=cav.width/num
        var h=cav.height-f
        var x=Math.random()*w;
        var y=Math.random()*f+h ;
        var ran=random()
        ctx.font=f+'px 黑体';
        ctx.fillStyle=color;
        str+=arr[ran]
        y= y<f?y=f:y;
        y= y>cav.height?y=cav.height:y
        var s=i*w+x
        s= s>cav.width-f/2?s=cav.width-f/2:s
        ctx.fillText(arr[ran],s,y)
         ctx.closePath()
    }
        function random(){
        return Math.floor(Math.random()*arr.length)
    }
    return fn(str)
    }

	

$('.auth_code').on('click',function(){
	canvas(cav,arr,4,function(res){
		val=res
	})	
	})


register()
function register(){//验证注册
	var div=document.getElementsByClassName('content_box')[0];
	console.log(div)
	var inpt=div.getElementsByTagName('input')
		
	var reg=[val,/^[1]\d{10}$/g,/^\w{6,12}$/,inpt[2].value];
	
	function Tex(dom,reg){//	构造函数
		this.dom=dom;
		this.reg=reg;
		this.way=function(){
			var that=this
			this.dom.onblur=function(){
				
				if(that.reg.test(that.dom.value)){//正则判断
					
					var flag=true;
					var use=localStorage.use					
					console.log(flag)
					if(flag){
//                    flag=true
						this.nextElementSibling.innerHTML='√输入正确';
						this.nextElementSibling.style.color="green";
						this.nextElementSibling.className='correct';
					}else{
						alert('账号已存在')
					}
					return;
				}else{
					console.log('cuo')
					this.nextElementSibling.innerHTML='X 输入格式不正确 ,请重新输入!';
					this.nextElementSibling.style.color="red";
					this.nextElementSibling.className='error';
				}
			}
		};
		this.fairly=function(){//判断相等的方法
			var tha=this
			this.dom.onblur=function(){
				console.log(val)

				if(tha.dom.value==val){
					$('.auth_code').hide()
					this.nextElementSibling.innerHTML='√输入正确';
					this.nextElementSibling.style.color="green";
					this.nextElementSibling.className='correct';
				}else{
					$('.auth_code').show()
					this.nextElementSibling.innerHTML='X 输入格式不正确 ,请重新输入!'
					this.nextElementSibling.style.color="red";
					this.nextElementSibling.className='error'
				}
			}
		}
	}

//	给每个输入框绑定聚焦事件.
	var inpt1=new Tex(inpt[0],reg[1])
	console.log(inpt1)
	var inpt2=new Tex(inpt[1],val)
	console.log(inpt2)
//	var inpt3=new Tex(inpt1[1],reg[1])
//	console.log(inpt3)
	var inpt3=new Tex(inpt[2],reg[2])
	console.log(inpt3)
	inpt1.way()
	inpt2.fairly()
//	inpt3.way()
	inpt3.way()

	inpt[3].onblur=function(){//给最后一个绑定聚焦事件
		console.log('s')
		if(inpt[2].value!=''){
				if(this.value==inpt[2].value){
					$('.auth_code').hide()
					console.log('a')
					this.nextElementSibling.innerHTML='√输入正确'
					this.nextElementSibling.style.color="green";
					this.nextElementSibling.className='correct'	
					opinion()
				}else{
					$('.auth_code').show()
					this.nextElementSibling.innerHTML='X 输入格式不正确 ,请重新输入!'
					this.nextElementSibling.style.color="red";
					this.nextElementSibling.className='error'
					console.log(val)
					
				}
		}
	}

	function opinion(){//判断所有输入框是否都正确
		var flag=true;

		$('.main-enroll span').each(function(index,ele){//循环判断
			console.log(ele.innerHTML)
			if(ele.innerHTML=='×'){
				flag=false;
				return false;
			}
		})
		
		if(flag){
			var count=1
			
	
			$('#register').on('click',function(){//给注册按钮绑定点击事件
				if(count==1){
//					$(this).find('a').html('注册')
					count++
				}else{
					var use=localStorage.use
					var Cdata=new Object()
					var aa=null;
					if(use==null||use==undefined||use==""){
						var data=[]
						Cdata.name=inpt[0].value
						Cdata.value=inpt[3].value
						data.push(Cdata)
						aa=JSON.stringify(data)
					}else{
						var arr = JSON.parse(use)
						Cdata.name=inpt[0].value
						Cdata.value=inpt[3].value
						arr.push(Cdata)
						aa=JSON.stringify(arr)
					}
					alert("登录成功")
					localStorage.use=aa;
						location.href="login.html";
				}
			})
		}
	}
}
		
}		
