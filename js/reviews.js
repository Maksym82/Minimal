// Swiper section Category
const swiper = new Swiper('.slider-clients-reviews', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 10,

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },

  breakpoints: {
    // when window width is >= 530px
    590: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    // when window width is >= 1280px
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
