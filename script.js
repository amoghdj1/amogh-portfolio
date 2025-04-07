window.addEventListener('scroll', function() {
    const header = document.querySelector('.portfolio-header');
    if (window.scrollY > 100) { // Adjust scroll threshold as needed
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

