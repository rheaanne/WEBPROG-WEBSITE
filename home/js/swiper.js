var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // Show one slide at a time
    spaceBetween: 20, // Space between slides
    centeredSlides: true, // Ensure the active slide is centered
    loop: true, // Enable infinite scrolling
    loopAdditionalSlides: 2, // Fix issue with first/last slide cut-off
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true, // Dynamic pagination bullets
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0, // No rotation
        stretch: 20, // Stretch effect for spacing
        depth: 120, // Depth effect
        modifier: 1.2, // Modifier for the effect
        slideShadows: false, // Disable shadows
    },
    breakpoints: {
        480: { slidesPerView: 1 }, // 1 slide on mobile
        768: { slidesPerView: 1.5 }, // 1.5 slides on tablets
        1024: { slidesPerView: 2 }, // 2 slides on desktops
    },
    on: {
        init: function () {
            let slides = this.slides;
            slides.forEach(slide => slide.style.opacity = '0.7'); // Dim non-active slides
            slides[this.activeIndex].style.opacity = '1'; // Highlight active slide
        },
        slideChangeTransitionEnd: function () {
            let slides = this.slides;
            slides.forEach(slide => slide.style.opacity = '0.7'); // Dim non-active slides
            slides[this.activeIndex].style.opacity = '1'; // Highlight active slide
        },
    },
});