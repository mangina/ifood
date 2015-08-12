$(function() {
    var gallery = $('#slider'),
        el =  gallery.find('img'),
        indexImg = 1,
        indexMax = el.length;

    function change() {
        el.fadeOut(500);
        el.filter(':nth-child('+indexImg+')').fadeIn(500);
    }

    function autoCange() {
        indexImg++;
        if(indexImg > indexMax) {
            indexImg = 1;
        }
        change();
    }
    var interval = setInterval(autoCange, 3000);

    gallery.mouseover(function() {
        clearInterval(interval);
    });
    gallery.mouseout(function() {
        interval = setInterval(autoCange, 3000);
    });
});