import {iosVhFix} from './utils/ios-vh-fix';
import {checkWebp} from './utils/webp-checker';
import {createSmoothScroll} from './utils/scroll-smooth';
import {initializeLocalStorage} from './utils/local-storage';
import {initializeMobileMenu} from './modules/mobile-menu';
import {initializeFormValidation} from './modules/form';

const jsException = document.querySelector('[data-js-exception]');
jsException.classList.remove('js-exception');

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  checkWebp();
  createSmoothScroll();

  // Modules
  // ---------------------------------

  const breakpoint = window.matchMedia('(max-width:767px)');

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      initializeMobileMenu();
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initializeLocalStorage();
    initializeFormValidation();
  });
});
