import './assets/scss/all.scss';
import './node_modules/bootstrap/dist/js/bootstrap.min';
import './node_modules/jquery/dist/jquery.min.js';
import AOS from 'aos';
import './node_modules/aos/dist/aos.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  spaceBetween: 24,
  slidesPerView: 3,

  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
});


AOS.init();