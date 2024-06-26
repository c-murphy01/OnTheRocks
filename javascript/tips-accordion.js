// wait for document to load
document.addEventListener('DOMContentLoaded', function() {
    // set variable for all accordion buttons
    const accordionButtons = document.querySelectorAll('.accordion-btn');
    
    // for each button add a listener for click events
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tipContent = this.closest('.tip-tile').querySelector('.tip-content');
            
            // if the tip content is being shown, remove classes for expand and rotate 
            if (tipContent.classList.contains('expanded')) {
                // this will collapse the content
                tipContent.classList.remove('expanded');
                // this will reverse the rotation
                this.classList.remove('rotate');
            // if the content is shown, do the opposite
            } else {
                // expand content
                tipContent.classList.add('expanded');
                // rotate button
                this.classList.add('rotate')
            }
        });
    });
});