
	
	$(function(){
		
			$(".ft4").change(function(){
			
				console.log($(".ft4"))
				
				var reg1 = /^[0-9]\w{2,19}$/;
				var str1 = $(".ft4").val()
			
				if (reg1.test(str1)) {
					$(".yz4").css("visibility","hidden")
					return true
					
				}else{
					$(".yz4").css("visibility","visible")
					
						console.log($(".yz4"))
					
					return false
				}
			});
			
			$(".ft2").change(function(){
			
				console.log($(".ft4"))
				
				var reg2 = /^\d{6,12}$/;
				var str2 = $(".ft2").val();
			
				if (reg2.test(str2)) {
					$(".yz2").css("visibility","hidden")
					return true
					
				}else{
					$(".yz2").css("visibility","visible")
					
						console.log($(".yz2"))
					
					return false
				}
			});
		
			$(".ft3").change(function(){
				
				if( $(".ft3").val()!=$(".ft2").val() ){
					
					$(".yz3").css("visibility","visible")&& $(".ft2,.ft3").val("")
					
				}
				else{
					$(".yz3").css("visibility","hidden")
				}
				
			});
			
	   
		
			       $.idcode.setCode();
			   //加载生成验证码方法
			    $(".bt2").click(function(){
			      
			        var IsBy = $.idcode.validateCode()  //调用返回值，返回值结果为true或者false
			        if(IsBy){
			        	alert("验证成功")
			        	if( $(".font2").is(":checked") ){
				            var url =  "http://h6.duchengjiu.top/shop/api_user.php"
				  		    var data = {
						    	status:"register",
						    	username:$(".ft4").val(),
						    	password:$(".ft2").val()
					  	    }
					   		$.post(url,data,function(obj){
					    	alert(obj.message)  	
					    	
							})
					   		window.location.href="http://127.0.0.1:8020/%E7%B2%AE%E4%BB%93%E7%94%B5%E5%AD%90%E5%95%86%E5%9F%8E/login.html?ff=125|2|1|1"
					   	}else{
			        		alert("未同意条款！请同意后再注册")	
			      	    }
				    }else{
			            alert("验证码输入错误，请重新输入")
			            $(".yz1").css("visibility","visible") && $(".ft1").val("")
			        }
			    })

			       
    });
	