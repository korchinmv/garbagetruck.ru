// Подключение свайпера
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
Swiper.use([Navigation, Pagination]);

const heroSwiper = new Swiper(".hero__slider", {
  loop: true,
  slidesPerView: 1,
  initialSlide: 1,
  navigation: {
    nextEl: ".slider-controls__next",
    prevEl: ".slider-controls__prev",
  },
  pagination: {
    el: ".hero__pagination",
    dynamicBullets: true,
    clickable: true,
  },
});

const technicSwiper = new Swiper(".technic__slider", {
  slidesPerView: 3,
  spaceBetween: 32,
  navigation: {
    nextEl: ".slider-controls__next",
    prevEl: ".slider-controls__prev",
  },
  pagination: {
    el: ".technic__pagination",
    dynamicBullets: true,
    clickable: true,
  },
});

const servicesSwiper = new Swiper(".services__slider", {
  slidesPerView: 3,
  spaceBetween: 32,
  navigation: {
    nextEl: ".slider-controls__next",
    prevEl: ".slider-controls__prev",
  },
  pagination: {
    el: ".services__pagination",
    dynamicBullets: true,
    clickable: true,
  },
});

const clientsSwiper = new Swiper(".clients__slider", {
  slidesPerView: 4,
  spaceBetween: 32,
  navigation: {
    nextEl: ".slider-controls__next",
    prevEl: ".slider-controls__prev",
  },
  pagination: {
    el: ".clients__pagination",
    dynamicBullets: true,
    clickable: true,
  },
});
