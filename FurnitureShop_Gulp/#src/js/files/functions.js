//возвращает устройства с которого пользователь зашёл на сайт
let ua = window.navigator.userAgent;
let MSIE  = ua.indexOf("MSIE ");
let  isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);},
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
function isIE(){
    ua = navigator.userAgent;
    return ua.indexOf('MSIE') > -1 || ua.indexOf("Trident/") > -1;
}
if (isIE()){
    document.querySelector('html').classList.add('ie');
}
if(isMobile.any()){
    document.querySelector('html').classList.add('_touch');
}

//

