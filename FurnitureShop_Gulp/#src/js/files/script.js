window.onload = function () {
    document.addEventListener("click", documentActions)

    //Actions (делегирование события click)
    function documentActions(e){
        const targetElement = e.target;
        if(window.innerWidth > 768 && isMobile.any()){
            if(targetElement.classList.contains('menu_arrow')){
                targetElement.closest('.menu_item').classList.toggle('_hover');
            }
            if (!targetElement.closest('.menu_item') && document.querySelectorAll('.menu_item._hover').length > 0){
                _removeClasses(document.querySelectorAll('.menu_item._hover'), "_hover")
            }
        }
    }
}


//JS-функция определения поддержки WebP
function testWebP(callback) {

    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});