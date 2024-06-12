// wait for document to load
document.addEventListener('DOMContentLoaded', function() {
    // set all variables
    // get form by class name
    var form = document.querySelector('.recipe-form');
    // select tbody as variable
    const responseTable = document.getElementById('recipe-response-table').getElementsByTagName('tbody')[0];
    // select the table container as variable
    var responseDisplay = document.querySelector('.recipe-response-display');
    // select toggle button as variable
    var toggleButton = document.querySelector('.table-btn');
    // select clear button as variable
    var clearStorageButton = document.querySelector('.clear-btn');

    //fucntioon to update the response table
    function updateTable() {
        // retrieve previous submissions from local storage - parsed into an array
        const storedData = JSON.parse(localStorage.getItem('recipes')) || [];
        // clear table
        responseTable.innerHTML = '';
        // for each submission
        storedData.forEach(submission => {
            // create new row
            const row = responseTable.insertRow();
            // insert cells and contets of cells
            row.insertCell(0).textContent = submission.cocktailName;
            row.insertCell(1).textContent = submission.method;
            row.insertCell(2).textContent = submission.baseSpirit;
            row.insertCell(3).textContent = submission.glassType;
            row.insertCell(4).textContent = submission.garnish;
            row.insertCell(5).textContent = submission.ingredients.join(', ');
            row.insertCell(6).textContent = submission.measurements.join(', ');
            row.insertCell(7).textContent = submission.description;
            row.insertCell(8).textContent = submission.prepTime;
            row.insertCell(9).textContent = submission.preparation;
        });
    }

    // refresh table with above function
    updateTable();
    
    //when the form is submitted, perform checks
    form.addEventListener('submit', function(event) {
        // dont allow default form to be submitted
        event.preventDefault();

        // check cocktail name field input
        var cocktailName = document.getElementById('cocktailName').value;
        if (cocktailName.length === 0) {
            alert('Please enter a cocktail name.');
            return false; // don't allow submit
        }

        // check shaken/stirred is selected
        var method = document.querySelector('input[name="method"]:checked').value;
        // if neither is selected, dont allow submit
        if (!method) {
            alert('Please select whether the cocktail is shaken or stirred.');
            return false;
        }

        // base spirit input
        var baseSpirit = document.getElementById('baseSpirit').value;
        // if none selected
        if (baseSpirit === "") {
            alert('Please select a base spirit.');
            return false;
        }

        // glass type input
        var glassType = document.getElementById('glassType').value;
        // if none selected
        if (glassType === "") {
            alert('Please select a glass to be used.');
            return false;
        }

        // check description field input
        var description = document.getElementById('description').value;
        if (description.length === 0) {
            alert('Please enter a description for your cocktail.');
            return false; // don't allow submit
        }

        // prep time field check
        var prepTime = document.getElementById('prepTime').value;
        // make sure input is a number and between 1 and 60
        if (isNaN(prepTime) || prepTime < 1 || prepTime > 60) {
            alert('Preparation time must be a number between 1 and 60 minutes.');
            return false;
        }

        // check prep steps field input
        var preparation = document.getElementById('preparation').value;
        if (preparation.length === 0) {
            alert('Please enter the preparation steps for your cocktail.');
            return false; // don't allow submit
        }

        // select remaining inputs as variables
        var garnish = document.getElementById('garnish').value;
        // for ingredients and measurements, select all and place in an array
        var ingredients = Array.from(document.querySelectorAll('input[name="ingredients[]"]')).map(input => input.value);
        var measurements = Array.from(document.querySelectorAll('input[name="measurements[]"]')).map(input => input.value);
        var imageUrl = document.getElementById('imageUrl').value;

        // create a submission with the above values
        const submission = { 
            cocktailName, method, baseSpirit, glassType, garnish, ingredients, measurements, description, prepTime, preparation, imageUrl 
        };

        // retrieve past submissions
        const currentSubmissions = JSON.parse(localStorage.getItem('recipes')) || [];
        // add the new submission
        currentSubmissions.push(submission);
        // restore the newly updated list
        localStorage.setItem('recipes', JSON.stringify(currentSubmissions));

        // refresh the table to show the new addition
        updateTable();
        // reset the form
        form.reset();
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
            input.style.borderColor = '';
            input.style.boxShadow = '';
        });
    });

    // add listener for click to toggle button
    toggleButton.addEventListener('click', function() {
        // if tabel is not shown
        if (responseDisplay.style.display === 'none' || responseDisplay.style.display === '') {
            // show table and clear button
            responseDisplay.style.display = 'block';
            clearStorageButton.style.display = 'block';
            // otherwise hide them both
        } else {
            responseDisplay.style.display = 'none';
            clearStorageButton.style.display = 'none';
        }
    });

    // clear button event listener
    clearStorageButton.addEventListener('click', function() {
        // confirmation bix to ensure user wants to cklear responses
        if (confirm('Are you sure you want to clear all responses?')) {
            // clear the recipes data
            localStorage.removeItem('recipes');
            // refresh the table to show changes
            updateTable();
        }
    });
});

// function too another ingredient
function addIngredientMeasurement() {
    // select ingredients list as container
    var container = document.querySelector('.ingredients-list');
    //create new row with format of the ingredient and measurement
    var newRow = document.createElement('div');
    newRow.className = 'form-row ingredient-row';
    newRow.innerHTML = `
        <div class="ingredient-group">
            <label class="form-label">Ingredient</label>
            <input type="text" name="ingredients[]" class="form-input" required>
        </div>
        <div class="ingredient-group">
            <label class="form-label">Measurement</label>
            <input type="text" name="measurements[]" class="form-input" required>
        </div>
    `;
    // add row to container
    container.appendChild(newRow);
}

// function to remove row
function removeIngredientMeasurement(button) {
    var ingredientList = document.querySelector('.ingredients-list');
    // make sure there is at least one row
    if (ingredientList.children.length > 1) {
        // remove last ingredient
        ingredientList.removeChild(ingredientList.lastElementChild);
    } else {
        alert("You must have at least one ingredient.");
    }
}