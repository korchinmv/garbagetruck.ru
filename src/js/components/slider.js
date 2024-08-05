// Подключение свайпера
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
Swiper.use([Navigation, Pagination]);

const heroSwiper = new Swiper(".hero__slider", {
  loop: true,
  slidesPerView: 1,
  initialSlide: 1,
  navigation: {
    nextEl: ".hero__slider-controls-next",
    prevEl: ".hero__slider-controls-prev",
  },
  pagination: {
    el: ".hero__pagination",
    dynamicBullets: true,
    clickable: true,
  },
});

const technicSwiper = new Swiper(".technic__slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: ".technic__slider-controls-next",
    prevEl: ".technic__slider-controls-prev",
  },
  pagination: {
    el: ".technic__pagination",
    dynamicBullets: true,
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 990px
    990: {
      slidesPerView: 3,
      spaceBetween: 32,
    },

    630: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const width = window.innerWidth;

  if (width > 768) {
    const servicesSwiper = new Swiper(".services__slider", {
      slidesPerView: 3,
      spaceBetween: 32,
      navigation: {
        nextEl: ".services__slider-controls-next",
        prevEl: ".services__slider-controls-prev",
      },
      pagination: {
        el: ".services__pagination",
        dynamicBullets: true,
        clickable: true,
      },
      breakpoints: {
        // when window width is >= 1200px
        1200: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 22,
        },
      },
    });
  } else if (width < 768) {
    const newsSwiper = new Swiper(".news__slider", {
      slidesPerView: 1,
      pagination: {
        el: ".news__pagination",
        dynamicBullets: true,
        clickable: true,
      },
      breakpoints: {
        // when window width is >= 768px
        768: {
          slidesPerView: 1,
        },
      },
    });
  }
});

const clientsSwiper = new Swiper(".clients__slider", {
  slidesPerView: 4,
  spaceBetween: 32,
  navigation: {
    nextEl: ".clients__slider-controls-next",
    prevEl: ".clients__slider-controls-prev",
  },
  pagination: {
    el: ".clients__pagination",
    dynamicBullets: true,
    clickable: true,
  },
});

const clientsMobileSwiper = new Swiper(".clients__slider-mobile", {
  slidesPerView: 1,
  navigation: {
    nextEl: ".clients__slider-controls-next",
    prevEl: ".clients__slider-controls-prev",
  },
  pagination: {
    el: ".clients__pagination-mobile",
    dynamicBullets: true,
    clickable: true,
  },
});
