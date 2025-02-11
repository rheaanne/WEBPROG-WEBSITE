var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,        
    centeredSlides: true,    
    loop: true,              
    spaceBetween: 20,        
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
