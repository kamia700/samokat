import Swiper, {Pagination} from 'swiper';

let swiper;

const settings = {
  modules: [Pagination],
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
};

const initSwiper = () => {
  swiper = new Swiper('.swiper', settings);
  window.swiper = swiper;
};

export {swiper, initSwiper};
