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
  slidesPerView: 3,
  spaceBetween: 32,
  navigation: {
    nextEl: ".technic__slider-controls-next",
    prevEl: ".technic__slider-controls-prev",
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
    nextEl: ".services__slider-controls-next",
    prevEl: ".services__slider-controls-prev",
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
    nextEl: ".clients__slider-controls-next",
    prevEl: ".clients__slider-controls-prev",
  },
  pagination: {
    el: ".clients__pagination",
    dynamicBullets: true,
    clickable: true,
  },
});
