'use strict'
const handleClickReset = (event) => {
  event.preventDefault();
  const radio1 = document.querySelector('.js_radio1');
  const previewCard = document.querySelector('.js_preview__card');
  //containers
  designContainer.classList.remove('collapsed');
  fillContainer.classList.add('collapsed');
  shareContainer.classList.add('collapsed');
  radio1.checked = true;
  previewCard.classList.add('palette1');
  previewCard.classList.remove('palette2');
  previewCard.classList.remove('palette3');
  //inputs en form
  inputName.value = '';
  inputJob.value = '';
  inputEmail.value = '';
  inputLinkedin.value = '';
  inputTel.value = '';
  inputGithub.value ='';
  // data object
  dataPreview = {
    palette: '',
    name: '',
    job: '',
    email: '',
    tel: '',
    linkedin: '',
    github: '',
    photo: '',
  };
  // card preview
  cardName.innerHTML = 'Nombre Apellido';
  cardJob.innerHTML = 'Front-end developer';
  previewEmail.href = '';
  previewTel.href = '';
  previewLinkedin.href = '';
  previewGithub.href = '';
};
resetButton.addEventListener('click', handleClickReset);
