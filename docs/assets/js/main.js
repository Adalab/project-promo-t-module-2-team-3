"use strict";const designLegend=document.querySelector(".js_design_legend"),fillLegend=document.querySelector(".js_fill_legend"),shareLegend=document.querySelector(".js_share_legend"),designContainer=document.querySelector(".js_design_container"),fillContainer=document.querySelector(".js_fill_container"),shareContainer=document.querySelector(".js_share_container"),rotateDesign=document.querySelector(".js-rotate-design"),rotateFill=document.querySelector(".js-rotate-fill"),rotateShare=document.querySelector(".js-rotate-share");function rotateArrow(e){designContainer.classList.contains("collapsed")?rotateDesign.classList.remove("rotate"):rotateDesign.classList.add("rotate"),fillContainer.classList.contains("collapsed")?rotateFill.classList.remove("rotate"):rotateFill.classList.add("rotate"),shareContainer.classList.contains("collapsed")?rotateShare.classList.remove("rotate"):rotateShare.classList.add("rotate")}designLegend.addEventListener("click",e=>{designContainer.classList.remove("collapsed"),fillContainer.classList.add("collapsed"),shareContainer.classList.add("collapsed"),rotateArrow()}),fillLegend.addEventListener("click",e=>{fillContainer.classList.remove("collapsed"),shareContainer.classList.add("collapsed"),designContainer.classList.add("collapsed"),rotateArrow()}),shareLegend.addEventListener("click",e=>{shareContainer.classList.remove("collapsed"),fillContainer.classList.add("collapsed"),designContainer.classList.add("collapsed"),rotateArrow()});const radio1=document.querySelector(".js_radio1"),radio2=document.querySelector(".js_radio2"),radio3=document.querySelector(".js_radio3"),previewCard=document.querySelector(".js_preview__card");function handleClickRadio1(e){previewCard.classList.remove("palette2","palette3"),previewCard.classList.add("palette1")}function handleClickRadio2(e){previewCard.classList.remove("palette1","palette3"),previewCard.classList.add("palette2")}function handleClickRadio3(e){previewCard.classList.remove("palette1","palette2"),previewCard.classList.add("palette3")}radio1.addEventListener("click",handleClickRadio1),radio2.addEventListener("click",handleClickRadio2),radio3.addEventListener("click",handleClickRadio3);const inputName=document.querySelector(".js_input_name"),previewName=document.querySelector(".card__info--name");function handleInputName(e){const t=e.target.value;previewName.innerHTML=t}inputName.addEventListener("input",handleInputName);const inputJob=document.querySelector(".js_input_job"),previewJob=document.querySelector(".card__info--job");function handleInputJob(e){const t=e.target.value;previewJob.innerHTML=t}inputJob.addEventListener("input",handleInputJob);const inputEmail=document.querySelector(".js_input_email"),previewEmail=document.querySelector(".rrss__link--email");function handleInputEmail(e){const t=e.target.value;previewEmail.href=t}inputEmail.addEventListener("input",handleInputEmail);const inputTel=document.querySelector(".js_input_tel"),previewTel=document.querySelector(".rrss__link--tel");function handleInputTel(e){const t=e.target.value;previewTel.href=t}inputEmail.addEventListener("input",handleInputTel);const inputLinkedin=document.querySelector(".js_input_linkedin"),previewLinkedin=document.querySelector(".rrss__link--linkedin");function handleInputLinkedin(e){const t=e.target.value;previewLinkedin.html=t}inputLinkedin.addEventListener("input",handleInputLinkedin);const inputGithub=document.querySelector(".js_input_github"),previewGithub=document.querySelector(".rrss__link--github");function handleInputGithub(e){const t=e.target.value;previewGithub.html=t}inputGithub.addEventListener("input",handleInputGithub);