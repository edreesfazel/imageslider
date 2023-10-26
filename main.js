const slider = document.querySelector('.slider'); // this is the div that holds the slides
const slides = document.querySelectorAll('.slide'); // these are all the slides
const prevButton = document.querySelector('.prev-button'); // previous button
const nextButton = document.querySelector('.next-button'); // next button
const navDotsContainer = document.querySelector('.navDotsContainer')

let currentSlide = 0;
const numberOfSlides = slides.length;

//add navigation dots
for(let i = 0; i < slides.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        currentSlide = i;
        updateSlidePosition();
    } );
    navDotsContainer.appendChild(dot)
}

const nextSlide = () => {
    currentSlide++;
    if (currentSlide >= numberOfSlides) {
        currentSlide = 0;
    }
    updateSlidePosition()

}

const prevSlide = () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    updateSlidePosition();
}


const updateSlidePosition = () => {
    const slideWidth = slides[currentSlide].offsetWidth;
    const translationAmount = -slideWidth * currentSlide;

    slider.style.transform = `translateX(${translationAmount}px)`

    const allDots = document.querySelectorAll('.dot')
    allDots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active-dot')
        } else {
            dot.classList.remove('active-dot')
        }
    })

}

prevButton.addEventListener('click', prevSlide)
nextButton.addEventListener('click', nextSlide)
