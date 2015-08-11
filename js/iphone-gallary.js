var numberImage = 4, i = 0, opacity = 100, timeout;

function nextImage() {
    opacity--;
    var k = i + 1;
    var image_now = 'image_' + i;
    if (i == numberImage)
        k = 1;
    var image_next = 'image_' + k;
    document.getElementById(image_now).style.opacity = opacity/100;
    document.getElementById(image_now).style.filter = 'alpha(opacity='+ opacity +')';
    document.getElementById(image_next).style.opacity = (100-opacity)/100;
    document.getElementById(image_next).style.filter = 'alpha(opacity='+ (100-opacity) +')';
    timeout = setTimeout("nextImage()",1);
    if (opacity==1) {
        opacity = 100;
        clearTimeout(timeout);
    }
}
setInterval (
    function() {
        i++;
        if (i > numberImage) i=1;
            nextImage();
    }, 1000
);