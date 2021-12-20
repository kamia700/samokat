import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';
import {initSwiper} from './utils/init-swiper';
import {initMask} from './utils/init-mask';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  // только если ie11
  ieFix();

  initSwiper();
  initMask();
  iosVhFix();
});
