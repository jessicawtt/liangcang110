
$(function(){
    var a = $(".header3");
    console.log($(".header3"));
    b = a.offset();
    $(document).on('scroll',function(){
        var c = $(document).scrollTop();
        if(b.top<=c){
            a.css({'position':'fixed','top':'0px'})
        }else{
            a.css({'position':'absolute','top':'140px'})
        }
    })
});

