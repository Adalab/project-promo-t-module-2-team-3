'use strict';


const resetButton = document.getElementById('reset');

const cardName = document.querySelector('.js_card-name');
const cardJob = document.querySelector('.js_card-job');


const handleClickReset = (event) => {
  event.preventDefault();
  const radio1 = document.querySelector('.js_radio1');
  const previewCard = document.querySelector('.js_preview__card');
  inputName.value = '';
  inputJob.value = '';
  inputEmail.value = '';
  inputTel.value = '';
  inputLinkedin.value = '';
  inputGithub.value = '';
  cardName.innerHTML = 'Nombre Apellido';
  cardJob.innerHTML = 'Front-end developer';
  designContainer.classList.remove('collapsed');
  fillContainer.classList.add('collapsed');
  shareContainer.classList.add('collapsed');
  radio1.setAttribute('checked','checked');
  previewCard.classList.add('palette1');
  previewCard.classList.remove('palette2');
  previewCard.classList.remove('palette3')
};

  /*
  designLegend.addEventListener('click', (event) => {
    designContainer.classList.remove('collapsed');
    fillContainer.classList.add('collapsed');
    shareContainer.classList.add('collapsed');
    rotateArrow();
  });
  previewCard.classList.remove('palette2', 'palette3');
  previewCard.classList.add('palette1');
*/



resetButton.addEventListener('click', handleClickReset);


