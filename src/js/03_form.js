'use strict'
const inputName = document.querySelector ('.js_input_name');
const previewName = document.querySelector ('.card__info--name');
function handleInputName(event){
    const inputValue = event.target.value || 'Nombre Apellido';
    previewName.innerHTML= inputValue;

}
inputName.addEventListener('input', handleInputName);

const inputJob = document.querySelector ('.js_input_job');
const previewJob = document.querySelector ('.card__info--job');
function handleInputJob(event){
    const jobValue = event.target.value || 'Front-end developer';
    previewJob.innerHTML=jobValue;
}
inputJob.addEventListener('input', handleInputJob);


const inputEmail = document.querySelector ('.js_input_email');
const previewEmail = document.querySelector ('.rrss__link--email');
function handleInputEmail(event){
    const emailValue = event.target.value;
    previewEmail.href = `Mailto:${emailValue}`;  //he añadido inner.html, ahora no da error en el navegardor y se abre la app de envio de mails
}
inputEmail.addEventListener ('input',handleInputEmail);

const inputTel = document.querySelector ('.js_input_tel');
const previewTel = document.querySelector ('.rrss__link--tel');
function handleInputTel(event){
    const telValue = event.target.value;
    previewTel.href = `Tel:${telValue}`;
}
inputTel.addEventListener ('input',handleInputTel);  //he cambiado el inputMail del evento por el inputTel, ahora no resetea la pag

const inputLinkedin = document.querySelector ('.js_input_linkedin');
const previewLinkedin = document.querySelector ('.rrss__link--linkedin');
function handleInputLinkedin(event){
  const linkedinValue = event.target.value;
  previewLinkedin.href = linkedinValue; //he sustituido html (previewLinkedin.html )por href
}
inputLinkedin.addEventListener ('input',handleInputLinkedin);

const inputGithub = document.querySelector ('.js_input_github');
const previewGithub = document.querySelector ('.rrss__link--github');
function handleInputGithub(event){
  event.preventDefault();
  const githubValue = event.target.value;
  previewGithub.href = githubValue;
}
inputGithub.addEventListener ('input', handleInputGithub);
const createButton = document.querySelector('.js_createbutton');
const createError = document.querySelector('.js - create - error');
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

