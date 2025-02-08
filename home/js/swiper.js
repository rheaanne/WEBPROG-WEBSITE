
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,  
    grid: {
        rows: 2,  
    },
    spaceBetween: 20,  
    loop: true,  
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {  
            slidesPerView: 4,
            grid: {
                rows: 2,
            },
        },
        1024: { 
            slidesPerView: 5,
            grid: {
                rows: 2,
            },
        }
    }
});
