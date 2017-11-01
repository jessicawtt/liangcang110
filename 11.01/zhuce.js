
	
	$(function(){
			$(".ft4").change(function(){
			
			console.log($(".ft4"))
			
			var reg1 = /^1[3|4|5|7|8][0-9]{9}$/;
			var str1 = $(".ft4").val();
		
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
			
			var reg2 = /^[0-9a-zA-Z_#]{6,16}$/;
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
			
	   
		
//验证
  $.idcode.setCode();   //加载生成验证码方法
    $(".bt2").click(function(){
        var IsBy = $.idcode.validateCode()  //调用返回值，返回值结果为true或者false
        if(IsBy){
            alert("验证成功")
        }else {
            $(".yz1").css("visibility","visible") && $(".ft1").val("")
        }
    })
})
	