document.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const firstSection = document.querySelector('#first-section');
    const sectionHeight = firstSection.offsetHeight;

    if (window.scrollY > sectionHeight) {
        navbar.classList.add('navbar-scrolled');
        navbar.classList.remove('navbar-transparent');
    } else {
        navbar.classList.add('navbar-transparent');
        navbar.classList.remove('navbar-scrolled');
    }
});