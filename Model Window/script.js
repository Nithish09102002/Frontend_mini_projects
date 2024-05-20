'use strict';

const btnsOpenModel = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btnsCloseModel = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let i = 0; i < btnsOpenModel.length; i++) {
  btnsOpenModel[i].addEventListener('click', openModal);
}

document.addEventListener('keydown', function (event) {
  if (event.key === '1' && modal.classList.contains('hidden')) {
    openModal();
  } else if (event.key === '2' && modal.classList.contains('hidden')) {
    openModal();
  } else if (event.key === '3' && modal.classList.contains('hidden')) {
    openModal();
  }
});

btnsCloseModel.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
