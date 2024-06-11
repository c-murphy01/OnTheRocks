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

// wait for document to load
document.addEventListener('DOMContentLoaded', function() {
    // get form by class name
    var form = document.querySelector('.recipe-form');
    
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
        var shaken = document.getElementById('shaken').checked;
        var stirred = document.getElementById('stirred').checked;
        // if neither is selected, dont allow submit
        if (!shaken && !stirred) {
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

        // if all checks above pass, submit the form
        form.submit();
    });
});