
const mediaQuery = window.matchMedia('(min-width: 800px)')

function Desktop(e) {
    if (e.matches) {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 4,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } else {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
}


mediaQuery.addListener(Desktop)


Desktop(mediaQuery)