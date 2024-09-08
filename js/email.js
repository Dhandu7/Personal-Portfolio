document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const sendButton = document.getElementById('send-button');

    function validateForm() {
        // Check if the form is valid
        return form.checkValidity();
    }

    function sendMail(event) {
        event.preventDefault(); // Prevent traditional form submission

        // Check if the form is valid
        if (!validateForm()) {
            alert("Please fill out all required fields.");
            return;
        }

        // Get form values
        const name = document.getElementById("fname").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const params = {
            fname: name,
            email: email,
            message: message
        };

        const serviceID = 'service_dz9jr38'; // Replace with your service ID
        const templateID = 'template_krdgzde'; // Replace with your template ID

        emailjs.send(serviceID, templateID, params)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert("Your message has been sent successfully!");
                form.reset(); // Clear the form after submission
            }, function(error) {
                console.log('FAILED...', error);
                alert("There was an error sending your message. Please try again.");
            });
    }

    // Add event listener to form submit
    form.addEventListener('submit', sendMail);
});
