document.addEventListener("DOMContentLoaded", function() {
    // Inisialisasi Swiper dan simpan dalam variabel global
    window.swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 15,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        }
    });
    
    console.log("Swiper initialized");
});