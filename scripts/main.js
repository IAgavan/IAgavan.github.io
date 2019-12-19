let menuElem = document.getElementById('navigation');
let titleElem = document.querySelector('.menu-toggler');

titleElem.onclick = function () {
  menuElem.classList.toggle('open');
}