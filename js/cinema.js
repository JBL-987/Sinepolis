let swiper = new Swiper(".mySwiper", {
      slidesPerView: 5,
      spaceBetween: 2,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

function copyAddress(location) {
      navigator.clipboard.writeText(location)
        .then(() => {
            Swal.fire({
                title: "Address copied to clipboard!",
                icon: "success"
            });
        })
        .catch(err => {
          console.error("Error copying address:", err);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
        });
    });
}