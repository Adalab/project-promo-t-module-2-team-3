'use strict';

const resetButton = document.getElementById('reset');

const handleClickReset = (event) => {
  event.preventDefault();

  inputName.value = '';
  inputJob.value = '';
  inputEmail.value = '';
  inputTel.value = '';
  inputLinkedin.value = '';
  inputGithub.value = '';
};

resetButton.addEventListener('click', handleClickReset);

