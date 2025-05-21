let swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
       breakpoints: {
        480: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});

function copyAddress(location) {
    navigator.clipboard.writeText(location)
        .then(() => {
            alert("Address copied to clipboard!");
        })
        .catch(err => {
            console.error("Error copying address:", err);
            alert("Something went wrong!");
        });
}