function copyPromo(code) {
    navigator.clipboard.writeText(code)
        .then(() => {
            alert("Promo code copied to clipboard!");
        })
        .catch(err => {
            console.error("Error copying promo code:", err);
            alert("Something went wrong!");
        });
}