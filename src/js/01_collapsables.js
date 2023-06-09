'use strict';

const designLegend = document.querySelector('.js_design_legend');

const fillLegend = document.querySelector('.js_fill_legend');

const shareLegend = document.querySelector('.js_share_legend');

const designContainer = document.querySelector('.js_design_container');

const fillContainer = document.querySelector('.js_fill_container');

const shareContainer = document.querySelector('.js_share_container');

const rotateDesign = document.querySelector('.js-rotate-design');
const rotateFill = document.querySelector('.js-rotate-fill');
const rotateShare = document.querySelector('.js-rotate-share');

function rotateArrow(event) {
  if (designContainer.classList.contains('collapsed')) {
    rotateDesign.classList.remove('rotate');
  } else {
    rotateDesign.classList.add('rotate');
  }
  if (fillContainer.classList.contains('collapsed')) {
    rotateFill.classList.remove('rotate');
  } else {
    rotateFill.classList.add('rotate');
  }
  if (shareContainer.classList.contains('collapsed')) {
    rotateShare.classList.remove('rotate');
  } else {
    rotateShare.classList.add('rotate');
  }
}

designLegend.addEventListener('click', (event) => {
  designContainer.classList.remove('collapsed');
  fillContainer.classList.add('collapsed');
  shareContainer.classList.add('collapsed');
  rotateArrow();
});

fillLegend.addEventListener('click', (event) => {
  fillContainer.classList.remove('collapsed');
  shareContainer.classList.add('collapsed');
  designContainer.classList.add('collapsed');
  rotateArrow();
});

shareLegend.addEventListener('click', (event) => {
  shareContainer.classList.remove('collapsed');
  fillContainer.classList.add('collapsed');
  designContainer.classList.add('collapsed');
  rotateArrow();
});