const swiper = new Swiper('.swiper', {
    spaceBetween: 100,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        clickable: true,
    },

    scrollbar: {
        enabled: false,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});