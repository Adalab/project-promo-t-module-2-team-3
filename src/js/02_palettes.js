'use strict';

const radio1 = document.querySelector('.js_radio1');
const radio2 = document.querySelector('.js_radio2');
const radio3 = document.querySelector('.js_radio3');
const previewCard = document.querySelector('.js_preview__card');

function handleClickRadio1 (event){
  previewCard.classList.remove('palette2', 'palette3');
  previewCard.classList.add('palette1');
}

radio1.addEventListener('click', handleClickRadio1);

function handleClickRadio2 (event){
  previewCard.classList.remove('palette1', 'palette3');
  previewCard.classList.add('palette2');
}

radio2.addEventListener('click', handleClickRadio2);

function handleClickRadio3 (event){
  previewCard.classList.remove('palette1', 'palette2');
  previewCard.classList.add('palette3');
}

radio3.addEventListener('click', handleClickRadio3);



