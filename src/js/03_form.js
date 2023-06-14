function renderCard(dataPreview) {
  previewName.innerHTML = dataPreview.name || 'Nombre Apellido';
  previewJob.innerHTML = dataPreview.job || 'Front-end developer';
  previewEmail.href = `Mailto:${dataPreview.email}`;
  previewTel.href = `Tel:${dataPreview.phone}`;
  previewLinkedin.href = `https://www.${dataPreview.linkedin}`;
  previewGithub.href = `https://github.com/${dataPreview.github}`;
}
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
    dataPreview.phone = valueInput;
  } else if (idInput === 'linkedin') {
    dataPreview.linkedin = valueInput;
  } else if (idInput === 'github') {
    const githubValue = valueInput;
    const newGithubValue = githubValue.slice(1);
    dataPreview.github = newGithubValue;
  } else if (idInput === 'photo') {
    dataPreview.photo = valueInput;
  } else if (idInput.includes('option')) {
    dataPreview.palette = valueInput;
  }
  renderCard(dataPreview);
}
function handleCreateButton(event) {
  event.preventDefault();
  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(dataPreview),
  })
    .then((response) => response.json())
    .then((data) => {
      dataPreview = data;
      console.log(data);
      if (data.success) {
        sectionShare.classList.remove('collapsed');
        cardURL.innerHTML = data.cardURL;
        cardURL.href = data.cardURL;
        twitterURL.href = `https://twitter.com/intent/tweet?text=${data.cardURL}`
      } else {
       
        createError.innerHTML = 'Rellena todos los campos obligatorios';
      }
    });
    console.log(dataPreview);
}
form.addEventListener('input', handleInputs);
createButton.addEventListener('click', handleCreateButton);
