$(function(){

    // 메뉴
    $(".main > li").hover(function(){
        $(".sub").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
    })// main>li hover


    //슬라이드이미지
    var n = 0; // top:0  1  /top:-300  2   /top:-600  3

    setInterval(function(){

        if( n == 2 ){
            n=0;
        }else{
            n++;
        }//if
        console.log(n)

        $(".top_move").animate({top : n * (-300) + "px"}, 500)
        
    }, 3000)


    //팝업
    $(".pop").click(function(){
        $(".popup").show();
    })//

    $(".close").click(function(){
        $(".popup").hide();
    })


    //tab
    $(".cont1 h2").click(function(){

        // $(".container h2").addClass("on")
        $(".container .cont1 h2").addClass("on")
        $(this).removeClass("on");
        

        $(".cont1 ul").hide();
        $(this).next().css({display: "flex"});
        // $(this).next().show() 안됨 display: block이여서


    })// click


})//