'use strict';


const resetButton = document.getElementById('reset');

const cardName = document.querySelector('.js_card-name');
const cardJob = document.querySelector('.js_card-job');

const handleClickReset = (event) => {
  event.preventDefault();

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
  previewCard.classList.add('palette1');
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
};


resetButton.addEventListener('click', handleClickReset);


