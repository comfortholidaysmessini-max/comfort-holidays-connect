var swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: false,
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 1,
    on: {
        slideChange: function () {
            document.getElementById("current").textContent = swiper.activeIndex + 1;
        }
    }
});
