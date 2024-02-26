'use strict';

document.addEventListener('DOMContentLoaded', () => {
  let modal = document.querySelector('.js-modal');
  let overlay = document.querySelector('.js-overlay');
  let close = document.querySelector('.js-modal-close');
  let open = document.querySelector('.js-modal-open');
  let phoneInput = document.querySelector(".js-phone");

  let burger = document.querySelector('.js-menu-burger');
  let item = document.querySelector('.js-menu-burger-item');
  let menu = document.querySelector('.js-menu');

  open.addEventListener('click', () => {
    modal.classList.add('active');
    overlay.classList.add('active');
  });

  overlay.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
  });

  close.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
  });

  const phoneMask = new IMask(phoneInput, {
    mask: "+{7}(000)000-00-00",
  });


  burger.addEventListener('click', () => {
    item.classList.toggle('burger__item--active');
    menu.classList.toggle('social--active');
  });
});