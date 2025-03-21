function copyPromo(code) {
      navigator.clipboard.writeText(code)
        .then(() => {
            Swal.fire({
                title: "Promo code copied to clipboard!",
                icon: "success"
            });
        })
        .catch(err => {
            console.error("Error copying promo code:", err);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
        });
    });
}