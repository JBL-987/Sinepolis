function sendfeedback(event) {
     event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !phone || !message) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please fill in all fields!",
            });
            return false;
        } else {
            Swal.fire({
                title: "Feedback sent successfully!",
                icon: "success"
            });
        }
        document.getElementById('feedback-form').reset();
    return true;
}
       