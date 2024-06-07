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

document.getElementById('toggleButton').addEventListener('click', function() {
    var moreText = document.getElementById('moreText');
    var text = document.getElementById('text');
    var button = document.getElementById('toggleButton');

    if (moreText.style.display === 'none' || moreText.style.display === '') {
        moreText.style.display = 'inline';
        text.style.display = 'block';
        text.style.webkitLineClamp = 'unset';
        button.textContent = 'Read less';
    } else {
        moreText.style.display = 'none';
        text.style.webkitLineClamp = '3';
        button.textContent = 'Read more';
    }
});
