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
    }
    if (name.length < 2) {
        Swal.fire({
            icon: "error",
            title: "Invalid Name",
            text: "Name must be at least 2 characters long.",
        });
        return false;
    }
    for (let i = 0; i < name.length; i++) {
        if (name.charAt(i) >= '0' && name.charAt(i) <= '9') {
            Swal.fire({
                icon: "error",
                title: "Invalid Name",
                text: "Name should not contain numbers.",
            });
            return false;
        }
    }
    const atIndex = email.indexOf('@');
    const dotIndex = email.lastIndexOf('.');
    if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex + 2 >= email.length) {
        Swal.fire({
            icon: "error",
            title: "Invalid Email",
            text: "Please enter a valid email address.",
        });
        return false;
    }
    if (phone.length < 10 || phone.length > 15) {
        Swal.fire({
            icon: "error",
            title: "Invalid Phone Number",
            text: "Phone number should be between 10 and 15 digits.",
        });
        return false;
    }
    let validPhone = true;
    for (let i = 0; i < phone.length; i++) {
        if (!((phone.charAt(i) >= '0' && phone.charAt(i) <= '9') || 
            phone.charAt(i) === '+' || phone.charAt(i) === '-' || phone.charAt(i) === ' ')) {
            validPhone = false;
            break;
        }
    }
    
    if (!validPhone) {
        Swal.fire({
            icon: "error",
            title: "Invalid Phone Number",
            text: "Phone number should contain only digits, +, -, or spaces.",
        });
        return false;
    }
    if (message.length < 10) {
        Swal.fire({
            icon: "error",
            title: "Message Too Short",
            text: "Please provide a more detailed message (at least 10 characters).",
        });
        return false;
    }
    
    if (message.length > 500) {
        Swal.fire({
            icon: "error",
            title: "Message Too Long",
            text: "Message cannot exceed 500 characters.",
        });
        return false;
    }
    Swal.fire({
        title: "Feedback sent successfully!",
        icon: "success"
    });
    document.getElementById('feedbackForm').reset();
    return true;
}