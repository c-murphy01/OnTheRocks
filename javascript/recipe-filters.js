// wait for page to load fully
document.addEventListener("DOMContentLoaded", function() {
    // set variable for filters and recipes
    const filters = document.querySelectorAll('.filter, .filter-btn');
    const recipes = document.querySelectorAll('.recipe');

    // for each filter add an event listener for click
    filters.forEach(filter => {
        filter.addEventListener('click', function(event) {
            // prevent default handling of a click event which is to redirect, keep user on the same page
            event.preventDefault();
            // if filter has class 'filter-btn', set the value to 'special', otherwise set to 'spirit'
            // since we only have one dropdown, which filters by spirit this works
            // need to revidse if more filters are added
            const filterType = this.classList.contains('filter-btn') ? 'special' : 'spirit';
            // set variable for the data-filter attribute
            const filterValue = this.getAttribute('data-filter');

            // if the filter type is spirit
            if (filterType === 'spirit') {
                // call the filter by spirit function for this value
                filterBySpirit(filterValue);
            // otherwise, check which button filter has been clciked and run the corresponding function
            } else if (filterType === 'special' && filterValue === 'classics') {
                filterByClassic();
            } else if (filterType === 'special' && filterValue === 'none') {
                showAllRecipes();
            }
        });
    });

    // function to filter by spirit
    function filterBySpirit(spirit) {
        // for each recipe
        recipes.forEach(recipe => {
            // if the recipes data-spirit attribute matches the filter spirit
            const matchesSpirit = recipe.getAttribute('data-spirit') === spirit;
            // display the recipe, if htey dont match, hide it
            recipe.style.display = matchesSpirit ? 'block' : 'none';
        });
    }

    // function to filter by classic recipes
    function filterByClassic() {
        // for each recipe
        recipes.forEach(recipe => {
            // check if the data-classic attribute is true
            const isClassic = recipe.getAttribute('data-classic') === 'true';
            // if true, display the recipe, otherwise hide it
            recipe.style.display = isClassic ? 'block' : 'none';
        });
    }

    // function to show all recipes
    function showAllRecipes() {
        // for each recipe
        recipes.forEach(recipe => {
            // set display style to block to show it
            recipe.style.display = 'block';
        });
    }
});
