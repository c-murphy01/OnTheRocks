// once the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    // set all variables
    // select contact form as variable
    var contactForm = document.querySelector('.contact-form');
    // select tbody as variable
    const responseTable = document.getElementById('contact-response-table').getElementsByTagName('tbody')[0];
    // select the table container as variable
    var responseDisplay = document.querySelector('.contact-response-display');
    // select toggle button as variable
    var toggleButton = document.querySelector('.table-btn');
    // select clear button as variable
    var clearStorageButton = document.querySelector('.clear-btn');

    //fucntioon to update the response table
    function updateTable() {
        // retrieve previous submissions from local storage - parsed into an array
        const storedData = JSON.parse(localStorage.getItem('messages')) || [];
        // clear table
        responseTable.innerHTML = '';
        // for each submission
        storedData.forEach(submission => {
            // create new row
            const row = responseTable.insertRow();
            // insert cells and contents of cells
            row.insertCell(0).textContent = submission.name;
            row.insertCell(1).textContent = submission.email;
            row.insertCell(2).textContent = submission.message;
        });
    }

    // refresh table with above function
    updateTable();

    // once the submit button is clicked
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
        const currentSubmissions = JSON.parse(localStorage.getItem('messages')) || [];
        // add the new submission
        currentSubmissions.push(submission);
        // store again
        localStorage.setItem('messages', JSON.stringify(currentSubmissions));

        // refresh the table with the new submission
        updateTable();

        // clear the form
        contactForm.reset();
    });

    // select all input fields
    document.querySelectorAll('.form-input, .form-textarea').forEach(input => {
        
        // add focus event listener
        input.addEventListener('focus', function() {
            // add green shadow on focus
            input.style.boxShadow = '0 0 15px var(--primary-500)';
        });

        // add blur event listener
        input.addEventListener('blur', function() {
            // remove shadow on blur
            input.style.boxShadow = '';
        });
    });

    // add event listener for the toggle button
    toggleButton.addEventListener('click', function() {
        // toggle the display property of the response display
        if (responseDisplay.style.display === 'none' || responseDisplay.style.display === '') {
            responseDisplay.style.display = 'block';
            clearStorageButton.style.display = 'block';
        } else {
            responseDisplay.style.display = 'none';
            clearStorageButton.style.display = 'none';
        }
    });

    // clear button event listener
    clearStorageButton.addEventListener('click', function() {
        // confirm box dialog to make sure the user wants to clear responses
        if (confirm('Are you sure you want to clear all responses?')) {
            // clear the recipes data
            localStorage.removeItem('messages');
            // refresh the table to show changes
            updateTable();
        }
    });
});

