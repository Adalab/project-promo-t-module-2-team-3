function handleClickRadio1(event) {
  previewCard.classList.remove('palette2', 'palette3');
  previewCard.classList.add('palette1');
}
function handleClickRadio2(event) {
  previewCard.classList.remove('palette1', 'palette3');
  previewCard.classList.add('palette2');
}
function handleClickRadio3(event) {
  previewCard.classList.remove('palette1', 'palette2');
  previewCard.classList.add('palette3');
}

const radioCont = document.querySelector('.main__box');

radioCont.addEventListener('click', handleClickRadio);
function handleClickRadio(event) {
  if(event.target.parentNode.classList.contains('js_radio-one')) {
    handleClickRadio1();
    radio1.checked = true;
  } else if (event.target.parentNode.classList.contains('js_radio-two')) {
    handleClickRadio2();
    radio2.checked = true;
  } else if (event.target.parentNode.classList.contains('js_radio-three')) {
    handleClickRadio3();
    radio3.checked = true;
  }
}


