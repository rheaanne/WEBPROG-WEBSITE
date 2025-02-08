var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto", // Adjust dynamically to center the active slide
    centeredSlides: true, // Ensures the active slide is in the center
    spaceBetween: 20, // Adjust space between slides
    loop: true, // Enables infinite scrolling
    grabCursor: true, // Makes swiping feel natural
    speed: 600, // Adjust for smooth transition
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true, // Makes pagination more interactive
    },
    effect: "coverflow", // Adds a cool 3D swipe effect
    coverflowEffect: {
        rotate: 0,
        stretch: 50, // Slightly spreads slides for a dynamic look
        depth: 100,
        modifier: 1,
        slideShadows: false,
    }
});
