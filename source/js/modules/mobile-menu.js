import {ScrollLock} from '../../js/utils/scroll-lock';
import {createSmoothEffect} from '../utils/scroll-smooth';

const DefaultPosition = {
  LOGO_OPEN: 20,
  LOGO_CLOSE: 0,
  TOGGLE_OPEN: 28,
  TOGGLE_CLOSE: 0,
};

const mobileMenu = document.querySelector('[data-mobile-menu]');
const mobileMenuLogo = mobileMenu.querySelector('[data-mobile-menu-logo]');
const mobileMenuToggle = mobileMenu.querySelector('[data-mobile-menu-toggle]');
const mobileMenuNavigation = mobileMenu.querySelector('[data-mobile-menu-navigation]');

const scrollLock = new ScrollLock();

export const initializeMobileMenu = () => {
  if (mobileMenu && mobileMenuLogo && mobileMenuToggle && mobileMenuNavigation) {

    const close = () => {
      mobileMenu.classList.remove('is-open');
      mobileMenu.classList.add('is-close');

      mobileMenuLogo.style.top = `${DefaultPosition.LOGO_CLOSE}px`;
      mobileMenuToggle.style.top = `${DefaultPosition.TOGGLE_CLOSE}px`;

      scrollLock.enableScrolling();
    };

    const open = () => {
      mobileMenu.classList.remove('is-close');
      mobileMenu.classList.add('is-open');

      mobileMenuNavigation.scrollTop = 0;
      mobileMenuLogo.style.top = `${DefaultPosition.LOGO_OPEN}px`;
      mobileMenuToggle.style.top = `${DefaultPosition.TOGGLE_OPEN}px`;

      scrollLock.disableScrolling();
    };

    mobileMenu.addEventListener('click', (event) => {
      const {target} = event;

      if (target.classList.contains('mobile-menu__navigation')) {
        close();
      }

      if (target.classList.contains('mobile-menu__toggle')) {
        if (mobileMenu.classList.contains('is-close')) {
          open();
        } else {
          close();
        }
      }

      if (target.closest('.navigation__link')) {
        event.preventDefault();

        close();
        createSmoothEffect(target);
      }
    });

    mobileMenuNavigation.addEventListener('scroll', () => {
      if (mobileMenu.classList.contains('is-open')) {
        mobileMenuLogo.style.top = `${DefaultPosition.LOGO_OPEN - mobileMenuNavigation.scrollTop}px`;
        mobileMenuToggle.style.top = `${DefaultPosition.TOGGLE_OPEN - mobileMenuNavigation.scrollTop}px`;
      }
    });
  }
};
