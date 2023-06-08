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

function handleClickRadio(event) {
  for (const input of radio) {
    if (dataPreview.palette === 1) {
      handleClickRadio1();
    } else if (dataPreview.palette === 2) {
      handleClickRadio2();
    } else if (dataPreview.palette === 3) {
      handleClickRadio3();
    }
  }
}
input.addEventListener('click', handleClickRadio);
