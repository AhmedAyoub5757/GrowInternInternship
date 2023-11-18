// document.write("hello world");

//dynamic images

var images = [
    'https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_640.jpg',
    'https://cdn.pixabay.com/photo/2016/11/13/04/52/statistic-1820320_640.png',
    'https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_640.png',
    'https://cdn.pixabay.com/photo/2016/02/23/15/58/earth-1217979_640.png',
    'https://cdn.pixabay.com/photo/2015/09/09/21/12/monitor-933392_640.jpg',
    'https://cdn.pixabay.com/photo/2018/09/05/10/12/domain-3655918_640.png'
];

var ri = Math.floor(Math.random()*images.length);
document.getElementById('dimg').src=images[ri];