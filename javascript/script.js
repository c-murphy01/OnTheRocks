
document.addEventListener('DOMContentLoaded', function () {
    const navBtn = document.querySelector('.nav-btn');
    const navbar = document.querySelector('.navbar');
    const navTabs = document.querySelector('.nav-tabs');

    navBtn.addEventListener('click', function() {
        if (navTabs.style.display === 'none') {
            navTabs.style.display = 'flex';
        }
        else {
            navTabs.style.display = 'none';
        }
    });
});