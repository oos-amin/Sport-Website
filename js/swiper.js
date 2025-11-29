"use strict";

const swiper = new Swiper(".swiper", {
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableInInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});
