"use strict";

const designLegend = document.querySelector(".js_design_legend");

const fillLegend = document.querySelector(".js_fill_legend");

const shareLegend = document.querySelector(".js_share_legend");

const designContainer = document.querySelector(".js_design_container");

const fillContainer = document.querySelector(".js_fill_container");

const shareContainer = document.querySelector(".js_share_container");

designLegend.addEventListener("click", (event) => {
  designContainer.classList.remove("collapsed");
  fillContainer.classList.add("collapsed");
  shareContainer.classList.add("collapsed");
});

fillLegend.addEventListener("click", (event) => {
  fillContainer.classList.remove("collapsed");
  shareContainer.classList.add("collapsed");
  designContainer.classList.add("collapsed");
});

shareLegend.addEventListener("click", (event) => {
  shareContainer.classList.remove("collapsed");
  fillContainer.classList.add("collapsed");
  designContainer.classList.add("collapsed");
});
