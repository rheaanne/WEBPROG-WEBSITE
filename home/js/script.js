
function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

let index = 0;

function showSlide() {
    const track = document.querySelector(".carousel-track");
    const images = document.querySelectorAll(".carousel-track img");
    track.style.transform = `translateX(${-index * 310}px)`;
}

function nextSlide() {
    const images = document.querySelectorAll(".carousel-track img");
    index = (index + 1) % images.length;
    showSlide();
}

function prevSlide() {
    const images = document.querySelectorAll(".carousel-track img");
    index = (index - 1 + images.length) % images.length;
    showSlide();
}

function toggleMenu() {
    const menu = document.querySelector("nav");
    menu.classList.toggle("active");
}
