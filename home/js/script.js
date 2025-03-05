let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

// Function to show the next slide
function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    updateSlide();
}

// Function to show the previous slide
function prevSlide() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
}

// Function to update the slide position
function updateSlide() {
    slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Function to show all images in a grid
function showAllImages() {
    const slider = document.querySelector('.slider');
    const allPictures = document.querySelector('.all-pictures');
    const showAllBtn = document.querySelector('.show-all-btn');

    slider.style.display = 'none'; // Hide the slider
    allPictures.style.display = 'grid'; // Show the grid
    showAllBtn.style.display = 'none'; // Hide the button
}

// Automatically move to the next slide every 5 seconds
setInterval(nextSlide, 5000);

// Add event listeners for navigation arrows
document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);

function showAllImages() {
    const slider = document.querySelector('.slider');
    const allPictures = document.querySelector('.all-pictures');
    const showAllBtn = document.querySelector('.show-all-btn');

    // Hide the slider and button
    slider.style.display = 'none';
    showAllBtn.style.display = 'none';

    // Show the full picture grid
    allPictures.style.display = 'grid';
}


function showAllImages() {
    const slider = document.querySelector('.slider');
    const allPictures = document.querySelector('.all-pictures');
    const showAllBtn = document.querySelector('.show-all-btn');

    // Hide the slider and "Show All" button
    slider.style.display = 'none';
    showAllBtn.style.display = 'none';

    // Show the full picture grid
    allPictures.style.display = 'grid';
}

function closeAllImages() {
    const slider = document.querySelector('.slider');
    const allPictures = document.querySelector('.all-pictures');
    const showAllBtn = document.querySelector('.show-all-btn');

    // Show the slider and "Show All" button
    slider.style.display = 'block';
    showAllBtn.style.display = 'block';

    // Hide the full picture grid
    allPictures.style.display = 'none';
}