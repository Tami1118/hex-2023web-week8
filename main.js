import './assets/scss/all.scss';
import './node_modules/bootstrap/dist/js/bootstrap.min';
import './node_modules/jquery/dist/jquery.min.js';
import AOS from 'aos';
import './node_modules/aos/dist/aos.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const shareSwiper = new Swiper('.shareSwiper', {
  spaceBetween: 24,
  slidesPerView: 3,

  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
});

const productSwiper = new Swiper('.productSwiper', {
  spaceBetween: 0,
  slidesPerView: 1,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-arrow-pre",
    prevEl: ".swiper-button-arrow-next",
  },
});


AOS.init();