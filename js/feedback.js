function sendfeedback(feedbackmessage) {
    feedbackmessage.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            const emailBody = `
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Message: ${message}
            `;
            Email.send({
                Host: "smtp.yourisp.com",
                Username: "username",
                Password: "password",
                To: 'jasonbrandonloi02@gmail.com',
                From: email,
                Subject: "Feedback Form Submission",
                Body: emailBody
            })
            .then(() => {
                Swal.fire({
                    title: "Message successfully sent!",
                    icon: "success"
                });
                document.getElementById('feedbackForm').reset();
            })
            .catch(err => {
                console.error("Error sending message:", err);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            });
            
    return false;
}