// once the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    // select contact form as variable
    var contactForm = document.querySelector('.contact-form');
    // select tbody as variable
    const responseTable = document.getElementById('contact-response-table').getElementsByTagName('tbody')[0];
    // select the table container as variable
    var responseDisplay = document.getElementsByClassName('contact-response-display')[0];
    // select toggle button as variable
    var toggleButton = document.getElementsByClassName('table-btn')[0];

    //fucntioon to update the response table
    function updateTable() {
        // retrieve previous submissions from local storage - parsed into an array
        const storedData = JSON.parse(localStorage.getItem('submissions')) || [];
        // clear table
        responseTable.innerHTML = '';
        // for each submission
        storedData.forEach(submission => {
            // create new row
            const row = responseTable.insertRow();
            // insert cells and contets of cells
            row.insertCell(0).textContent = submission.name;
            row.insertCell(1).textContent = submission.email;
            row.insertCell(2).textContent = submission.message;
        });
    }

    // refresh table with above function
    updateTable();

    // once the form is submitted
    contactForm.addEventListener('submit', function(event) {
        // dont allow blank submission
        event.preventDefault();

        var name = document.getElementById('name').value;
        // check that a name has been input
        if (name.trim() === '') {
            alert('Please enter your name.');
            return false;
        }

        var email = document.getElementById('email').value;
        //  check if email has no input
        if (email.trim() === '') {
            alert('Please enter your email address.');
            return false;
        // or if email doesnt include @ or .
        } else if (!email.includes('@') || !email.includes('.')) {
            alert('Please enter a valid email address.');
            return false;
        }

        var message = document.getElementById('message').value;
        // check if message is empty
        if (message.trim() === '') {
            alert('Please enter your message.');
            return;
        }

        // create a submission object
        const submission = { name, email, message };

        // retrieve previous submissions from storage
        const currentSubmissions = JSON.parse(localStorage.getItem('submissions')) || [];
        // add the new submission
        currentSubmissions.push(submission);
        // store again
        localStorage.setItem('submissions', JSON.stringify(currentSubmissions));

        // refresh the table with the new submission
        updateTable();

        // clear the form
        contactForm.reset();
    });

    // add event listener for the toggle button
    toggleButton.addEventListener('click', function() {
        // toggle the display property of the response display
        if (responseDisplay.style.display === 'none' || responseDisplay.style.display === '') {
            responseDisplay.style.display = 'block';
        } else {
            responseDisplay.style.display = 'none';
        }
    });
});

