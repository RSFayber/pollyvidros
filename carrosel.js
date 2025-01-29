let index = 0;
const slides = document.querySelector('.carousel').children;
const totalSlides = slides.length;

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${index * 100 / 3}%)`;
}

function prevSlide() {
    if (index === 0) {
        index = totalSlides - 3; // Vai para o final
    } else {
        index--;
    }
    updateCarousel();
}

function nextSlide() {
    if (index === totalSlides - 3) {
        index = 0; // Volta para o início
    } else {
        index++;
    }
    updateCarousel();
}

updateCarousel();