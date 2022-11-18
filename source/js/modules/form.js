const forms = document.querySelectorAll('[data-form]');

const initializeValidation = (form) => {
  const phone = form.querySelector('[data-phone]');

  if (phone) {
    phone.addEventListener('input', () => {
      const value = phone.value.replace(/[а-яА-ЯёЁa-zA-Z]/, '');
      let result = '';

      for (let i = 0; i < value.length; i++) {
        result += value[i];
      }

      phone.value = result;
    });
  }
};

export const initializeFormValidation = () => {
  if (forms.length) {
    [...forms].forEach(initializeValidation);
  }
};
