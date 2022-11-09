import {ScrollLock} from '../../js/utils/scroll-lock';

const mobileMenu = document.querySelector('[data-mobile-menu]');
const mobileMenuToggle = mobileMenu.querySelector('[data-mobile-menu-toggle]');

const scrollLock = new ScrollLock();

export const initializeMobileMenu = () => {
  if (mobileMenu && mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      if (mobileMenu.classList.contains('is-close')) {
        mobileMenu.classList.remove('is-close');
        mobileMenu.classList.add('is-open');

        scrollLock.disableScrolling();
      } else {
        mobileMenu.classList.add('is-close');
        mobileMenu.classList.remove('is-open');

        scrollLock.enableScrolling();
      }
    });
  }
};
