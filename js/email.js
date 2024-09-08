function sendMail(){
    var params = {
        fname: document.getElementById("fname").value ,
        email: document.getElementById("email").value ,
        message: document.getElementById("message").value 
    };
    const serviceID = 'service_dz9jr38';
    const templateID = 'template_krdgzde';

    emailjs
        .send(serviceID, templateID, params)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Your message has been sent successfully!");
        }, function(error) {
            console.log('FAILED...', error);
            alert("There was an error sending your message. Please try again.");
        });

        // Optionally, clear the form after submission
        document.getElementById("contact-form").reset();
}

