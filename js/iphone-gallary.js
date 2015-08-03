imgs = [
    'img/Nav-bar---Green.jpg',
    'img/Nav-bar---Cuisines.jpg',
    'img/Nav-bar---Benefits.jpg',
];

setInterval(function(){
    img = imgs[Math.floor(Math.random()*imgs.length)];
    $('#iphone__gallary').attr('src', img);
}, 5000);