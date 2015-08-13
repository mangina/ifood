(function ($) {
    var SlideSpeed = 2000, TimeOut = 5000;

    $(document).ready(function(e) {
        $('.slide').css({"position" : "absolute", "top":'0', "left": '0'}).hide().eq(0).show();
        var slideNum = 0;
        var slideTime;
        slideCount = $(".reviews-slider__content .slide").size();

        var animationSlide = function(arrow){
            clearTimeout(slideTime);
            $('.slide').eq(slideNum).fadeOut(SlideSpeed);
            if(arrow == "next"){
                if(slideNum == (slideCount - 1)){
                    slideNum = 0;
                } else{
                    slideNum++;
                }
            } else if(arrow == "prew") {
                if(slideNum == 0){
                    slideNum = slideCount - 1;
                } else{
                    slideNum -= 1;
                }
            } else{
                slideNum = arrow;
            }
            $('.slide').eq(slideNum).fadeIn(SlideSpeed, rotator);
            $(".control-slide.active").removeClass("active");
            $('.control-slide').eq(slideNum).addClass('active');
        }
        var $addSpan = '';
        $('.slide').each(function(index) {
            $addSpan += '<span class = "control-slide">' + index + '</span>';
        });
        $('<div class ="slider-controls">' + $addSpan +'</div>').appendTo('.reviews-slider');
        $(".control-slide:first").addClass("active");
        $('.control-slide').click(function(){
            var goToNum = parseFloat($(this).text());
            animationSlide(goToNum);
        });
        var pause = false;

        var rotator = function(){
            if(!pause){
                slideTime = setTimeout(function(){
                    animationSlide('next');
                }, TimeOut);
            }
        }
        $('.reviews-slider').hover(
            function(){
                clearTimeout(slideTime);
                pause = true;
            }, function(){
                pause = false;
                rotator();
            });
        rotator();
    });
})(jQuery);