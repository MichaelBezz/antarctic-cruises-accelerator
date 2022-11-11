const forms = document.querySelectorAll('[data-form]');

const initializeValidation = (form) => {
  const phone = form.querySelector('[data-phone]');

  if (phone) {
    const prefixNumber = (str) => {
      if (str === '9') {
        return '89';
      }
      return '8';
    };

    phone.addEventListener('input', () => {
      const value = phone.value.replace(/\D/g, '');
      const numberLength = 11;

      let result = '';

      for (let i = 0; i < value.length && i < numberLength; i++) {
        switch (i) {
          case 0:
            result += prefixNumber(value[i]);
            continue;
          default:
            break;
        }
        result += value[i];
      }

      if (result.length < numberLength || result.length > numberLength) {
        phone.setCustomValidity(`Телефон содержит ${result.length} из ${numberLength} цифр`);
      } else {
        phone.setCustomValidity('');
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
