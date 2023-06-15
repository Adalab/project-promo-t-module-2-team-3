'use strict';
const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');
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