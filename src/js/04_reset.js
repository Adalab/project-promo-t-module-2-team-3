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
};

resetButton.addEventListener('click', handleClickReset);


