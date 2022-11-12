const smoothLinks = document.querySelectorAll('[data-smooth-link]');

export const createSmoothEffect = (element) => {
  const id = element.getAttribute('href');
  const targetBlock = document.querySelector(id);

  if (targetBlock) {
    targetBlock.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export const createSmoothScroll = () => {
  if (smoothLinks.length) {
    [...smoothLinks].forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();

        createSmoothEffect(event.target);
      });
    });
  }
};
