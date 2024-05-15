
document.addEventListener('DOMContentLoaded', function () {
    const navBtn = document.querySelector('.nav-btn');
    const navTabs = document.querySelector('.nav-tabs');

    // on click
    navBtn.addEventListener('click', function() {
        // check if the nav tabs are being shown
        if (navBtn.classList.contains('active')) {
            // if so, hide them and remove 'active' class
            navTabs.style.transform = 'translateX(150%)';
            navBtn.classList.remove('active');
        } else {
            //if they arent being shown, show them and add the 'active' class
            navTabs.style.transform = 'translateX(2.5%)';
            navBtn.classList.add('active');
        }
    });
});

function addIngredientMeasurement() {
    var container = document.querySelector('.ingredients-list');
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
    container.appendChild(newRow);
}

function removeIngredientMeasurement(button) {
    var ingredientList = document.querySelector('.ingredients-list');
    if (ingredientList.children.length > 1) { // Check to ensure at least one row remains
        ingredientList.removeChild(ingredientList.lastElementChild);
    } else {
        alert("You must have at least one ingredient.");
    }
}