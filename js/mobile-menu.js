(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");
  const mobileMenuLinks = document.querySelectorAll(".mobile-header-link");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");

    const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
    // bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  for (let index = 0; index < mobileMenuLinks.length; index++) {
    mobileMenuLinks[index].addEventListener("click", toggleMenu);
  }

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    // bodyScrollLock.enableBodyScroll(document.body);
  });
})();



// Swiper section Category
const swiper = new Swiper('.slider-our-products', {
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
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});