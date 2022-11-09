const smoothLinks = document.querySelectorAll('a[data-smooth-link]');

export const createSmoothScroll = () => {
  if (smoothLinks.length) {
    [...smoothLinks].forEach((link) => {
      const id = link.getAttribute('href');
      const targetBlock = document.querySelector(id);

      if (targetBlock) {
        link.addEventListener('click', (event) => {
          event.preventDefault();

          targetBlock.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        });
      }
    });
  }
};
