// Swiper section Category
const swiper = new Swiper('.slider-clients-reviews', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    // when window width is >= 590px
    590: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    // when window width is >= 1440px
    1440: {
      slidesPerView: 3,
      spaceBetween: 120,
    },
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});
