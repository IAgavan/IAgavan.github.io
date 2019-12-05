const slides = document.querySelectorAll('.slider .slide');
const slideInterval = setInterval(nextSlide,3000);
let currentSlide = 0; 

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide displayed';
}