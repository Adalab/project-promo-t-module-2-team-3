'use strict';

const designContainer = document.querySelector('.js_design_container');
const fillContainer = document.querySelector('.js_fill_container');
const shareContainer = document.querySelector('.js_share_container');
const rotateDesign = document.querySelector('.js-rotate-design');
const rotateFill = document.querySelector('.js-rotate-fill');
const rotateShare = document.querySelector('.js-rotate-share');
const collapseHeader = document.querySelectorAll('.js_collapse_header');
const collapseContainer = document.querySelectorAll('.js_collapse_container');
const collapseParent = document.querySelectorAll('.js_collapse_parent');
const radio1 = document.querySelector('.js_radio1');
const radio2 = document.querySelector('.js_radio2');
const radio3 = document.querySelector('.js_radio3');
const radio = document.querySelectorAll('.radio__check');
const previewCard = document.querySelector('.js_preview__card');
const previewName = document.querySelector('.card__info--name');
const previewJob = document.querySelector('.card__info--job');
const previewEmail = document.querySelector('.rrss__link--email');
const previewTel = document.querySelector('.rrss__link--tel');
const createButton = document.querySelector('.js_createbutton');
const createError = document.querySelector('.js-create-error');
const previewLinkedin = document.querySelector('.rrss__link--linkedin');
const previewGithub = document.querySelector('.rrss__link--github');
const form = document.querySelector('.js_form');
const resetButton = document.getElementById('reset');
const cardName = document.querySelector('.js_card-name');
const cardJob = document.querySelector('.js_card-job');
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
