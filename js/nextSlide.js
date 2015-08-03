function nextSlide(n) {
    if (n == 1) {
        $(".progress-select").animate({marginLeft: '1px'}, 300);
    }   else if (n == 2) {
        $(".progress-select").animate({marginLeft: '19px'}, 300);
    } else if (n == 3) {
        $(".progress-select").animate({marginLeft: '40px'}, 300);
    }

    $(".content-switch").hide();
    $("#slide"+n).show();
}