'use strict';
const previewName = document.querySelector('.card__info--name');
const previewJob = document.querySelector('.card__info--job');
const previewEmail = document.querySelector('.rrss__link--email');
const previewTel = document.querySelector('.rrss__link--tel');
const createButton = document.querySelector('.js_createbutton');
const createError = document.querySelector('.js-create-error');
const previewLinkedin = document.querySelector('.rrss__link--linkedin');
const previewGithub = document.querySelector('.rrss__link--github');
const form = document.querySelector('.js_form');

let dataPreview = {
  palette: '',
  name: '',
  job: '',
  email: '',
  tel: '',
  linkedin: '',
  github: '',
  photo: '',
};

function handleInputs(event) {
  const idInput = event.target.id;
  const valueInput = event.target.value;
  console.log(idInput, valueInput);

  if (idInput === 'name') {
    dataPreview.name = valueInput;
  } else if (idInput === 'job') {
    dataPreview.job = valueInput;
  } else if (idInput === 'email') {
    dataPreview.email = valueInput;
  } else if (idInput === 'tel') {
    dataPreview.tel = valueInput;
  } else if (idInput === 'linkedin') {
    dataPreview.linkedin = valueInput;
  } else if (idInput === 'github') {
    dataPreview.github = valueInput;
  } else if (idInput === 'photo') {
    dataPreview.photo = valueInput;
  }
}

function handleInputName(event) {
  const inputValue = event.target.value || 'Nombre Apellido';
  previewName.innerHTML = inputValue;
}
function handleInputJob(event) {
  const jobValue = event.target.value || 'Front-end developer';
  previewJob.innerHTML = jobValue;
}
function handleInputEmail(event) {
  const emailValue = event.target.value;
  previewEmail.href = `Mailto:${emailValue}`;
}
function handleInputTel(event) {
  const telValue = event.target.value;
  previewTel.href = `Tel:${telValue}`;
}
function handleInputLinkedin(event) {
  const linkedinValue = event.target.value;
  previewLinkedin.href = `https://www.${linkedinValue}`;
}
function handleInputGithub(event) {
  event.preventDefault();
  const githubValue = event.target.value;
  const newGithubValue = githubValue.slice(1);
  previewGithub.href = `https://github.com/${newGithubValue}`;
}
function handleCreateButton(event) {
  if (
    inputName === '' ||
    inputJob === '' ||
    inputTel === '' ||
    inputEmail === ''
  ) {
    createError.innerHTML = 'Rellena todos los campos obligatorios';
  }
}
inputName.addEventListener('input', handleInputs);
inputEmail.addEventListener('input', handleInputEmail);
inputTel.addEventListener('input', handleInputTel);
inputGithub.addEventListener('input', handleInputGithub);
inputJob.addEventListener('input', handleInputJob);
inputLinkedin.addEventListener('input', handleInputLinkedin);
