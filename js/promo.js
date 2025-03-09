 function copyPromo(code) {
      navigator.clipboard.writeText(code)
        .then(() => {
          alert('Promo code copied to clipboard!');
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
    });
}