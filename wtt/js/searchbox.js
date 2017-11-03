$(".three3").click(function(){
    var url = "http://h6.duchengjiu.top/shop/api_goods.php";
    var str =$(".three").val();
// 数据
    var data = {
        search_text: str
    };
// ajax 请求
    $.get(url, data, function(obj) {

        var data =obj.data;
        console.log(data);

        for(var i=0;i<data.length;i++){
            var  html="";
            html+="<a>"+data[i].goods_name+"</a>" + "<div><img src="+data[i].goods_thumb+"/></div>" +
                "<p>"+data[i].price+"</p>"
        }
        $(".container").html(html)
    });
});






