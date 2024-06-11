// once the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.querySelector('.contact-form');

    // once the form is submitted
    contactForm.addEventListener('submit', function(event) {
        // dont allow blank submission
        event.preventDefault();

        var name = document.getElementById('name').value;
        // check that a name has been input
        if (name.length() === '') {
            alert('Please enter your name.');
            return false;
        }

        var email = document.getElementById('email').value;
        //  check if email has no input
        if (email.length() === '') {
            alert('Please enter your email address.');
            return false;
        // or if email doesnt include @ or .
        } else if (!email.includes('@') || !email.includes('.')) {
            alert('Please enter a valid email address.');
            return flase;
        }

        var message = document.getElementById('message').value;
        // check if message is empty
        if (message.length() === '') {
            alert('Please enter your message.');
            return;
        }

        // if all checks pass, submit form
        contactForm.submit();
    });
});