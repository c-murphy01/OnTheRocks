// wait for document to load
document.addEventListener('DOMContentLoaded', function() {
    // set variable for all accordion buttons
    const accordionButtons = document.querySelectorAll('.accordion-btn');
    
    // for each button add a listener for click events
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tipContent = this.closest('.tip-tile').querySelector('.tip-content');
            
            // if the tip content is hidden, show it
            if (tipContent.classList.contains('expanded')) {
                tipContent.classList.remove('expanded');
                this.classList.remove('rotate');
                // this.innerHTML = '<i class="fa-solid fa-arrow-down-long"></i>';
            } else {
                tipContent.classList.add('expanded');
                this.classList.add('rotate')
                // this.innerHTML = '<i class="fa-solid fa-arrow-up-long"></i>';
            }

            // // Toggle the expanded class to show or hide the content
            // if (tipContent.classList.contains('expanded')) {
            //     tipContent.classList.remove('expanded');
            //     this.classList.remove('rotate');
            //     tipContent.style.maxHeight = '0';
            // } else {
            //     tipContent.classList.add('expanded');
            //     this.classList.add('rotate');
            //     tipContent.style.maxHeight = tipContent.scrollHeight + 'px';
            // }
        });
    });
});