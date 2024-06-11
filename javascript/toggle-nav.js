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