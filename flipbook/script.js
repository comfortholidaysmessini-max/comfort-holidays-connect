/* FIX REAL FULLSCREEN HEIGHT ON MOBILE */
function fixHeight() {
    const realHeight = window.innerHeight;
    document.documentElement.style.setProperty('--real-height', realHeight + 'px');
}

fixHeight();
window.addEventListener('resize', fixHeight);

/* SWIPER INITIALIZATION */
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    grabCursor: true,
    spaceBetween: 0,
    on: {
        slideChange: function () {
            document.getElementById("current").textContent = this.activeIndex + 1;
        }
    }
});
