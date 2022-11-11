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

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
