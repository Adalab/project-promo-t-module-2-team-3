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
radio1.addEventListener('click', handleClickRadio1);
radio2.addEventListener('click', handleClickRadio2);
radio3.addEventListener('click', handleClickRadio3);
