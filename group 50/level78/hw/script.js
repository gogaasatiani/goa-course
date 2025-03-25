let slideIndex = 0;

    function showSlides() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
    slide.style.display = (index === slideIndex) ? 'block' : 'none';
});
    }

    function changeSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slideIndex += n;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
} else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }


}

        
   