'use strict';

function getImage(e){
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}
function writeImage() {
  profileImage.style.backgroundImage = `url(${fr.result})`;
  img.style.backgroundImage = `url(${fr.result})`;
  dataPreview.photo = fr.result;
}
form.addEventListener('keyup', handleInputs);
fileField.addEventListener('change', getImage);