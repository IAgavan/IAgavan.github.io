// modal

const modal = document.getElementById('modal');
const btns = document.querySelectorAll('button');
const span = document.getElementsByClassName('close')[0];

for (let i = 0; i<btns.length; i++) {
    btns[i].onclick = function () {
        modal.style.display = "flex";
    }
}
span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none"
    }
}

// slider_top
const slides = document.querySelectorAll('.slider_top .slide_top');
const slideInterval = setInterval(nextslide, 3000);
let currentslide = 0;

function nextslide() {
    slides[currentslide].className = 'slide_top';
    currentslide = (currentslide + 1) % slides.length;
    slides[currentslide].className = 'slide_top displayed';
}

// gallery
;
(function ($) {

    $('.swipebox').swipebox();

})(jQuery);