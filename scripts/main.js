const slides = document.querySelectorAll('.slider_top .slide_top');
const slideInterval = setInterval(nextslide,3000);
let currentslide = 0; 

function nextslide() {
    slides[currentslide].className = 'slide_top';
    currentslide = (currentslide+1)%slides.length;
    slides[currentslide].className = 'slide_top displayed';
}