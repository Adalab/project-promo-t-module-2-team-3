'use strict';

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
rotateArrow();
function handlerClickHeader(ev) {
  const clickedHeader = ev.currentTarget;

  const parentClicked = clickedHeader.parentNode;
  for (let i = 0; i < collapseParent.length; i++) {
    if (collapseParent[i] === parentClicked) {
      collapseContainer[i].classList.remove('collapsed');
      rotateArrow();
    } else {
      collapseContainer[i].classList.add('collapsed');
      rotateArrow();
    }
  }
}
for (const header of collapseHeader) {
  header.addEventListener('click', handlerClickHeader);
}
