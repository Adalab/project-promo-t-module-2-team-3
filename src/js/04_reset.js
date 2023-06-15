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
  profileImage.style= '';
  // data object
  dataPreview = {
    palette: '',
    name: '',
    job: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    photo: '',
  };
  // card preview
  img.style = '';
  cardName.innerHTML = 'Nombre Apellido';
  cardJob.innerHTML = 'Front-end developer';
  previewEmail.href = '';
  previewTel.href = '';
  previewLinkedin.href = '';
  previewGithub.href = '';
  localStorage.setItem('dataPreview', JSON.stringify(dataPreview));
  rotateArrow();
};
resetButton.addEventListener('click', handleClickReset);
