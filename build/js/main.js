'use strict';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});

(function () {
  var telInput = document.querySelector('.tel');

  var submit = document.querySelector('.app__submit-btn');
  var form = document.querySelector('.app__form');
  const inputError = document.querySelector('.error__text');
  const messageError = document.querySelector('.app__error');

  const clear  = document.querySelector('.app__input-clear');

  var patternMask = new IMask(telInput, {
    mask: '0 000 0000000',
  });

  var showError = function () {
    if(telInput.validity.valueMissing) {
      inputError.textContent = 'Проверьте, правильно ли указан номер телефона';
    } else if(telInput.value.length < 13) {
      inputError.textContent = 'Проверьте, правильно ли указан номер телефона';
    } else if(telInput.validity.typeMismatch) {
      inputError.textContent = 'Проверьте, правильно ли указан номер телефона';
    }
    messageError.className = 'error active';
  }

  var submitErrorHandler = function (e) {
    if(!telInput.validity.valid || telInput.value.length < 13) {
      showError();
      e.preventDefault();
    }
  };

  form.addEventListener('submit', submitErrorHandler);

  let inputHandler = function () {
    telInput.setAttribute('value', this.value);

    if (!telInput.validity.valueMissing) {
      clear.style.display = 'block';
    } else if (telInput.validity.valueMissing) {
      clear.style.display = 'none';
    }

    inputError.textContent = '';
    messageError.className = 'error';
  };

  telInput.addEventListener('keyup', inputHandler);

  let clearHandler = function () {
    inputError.textContent = '';
    telInput.value = '';
    telInput.setAttribute('value', '');
    clear.style.display = 'none';
    messageError.className = 'error';

    // Syncronize mask with current value
    patternMask.updateValue();
  };

  clear.addEventListener('click', clearHandler);
}());
