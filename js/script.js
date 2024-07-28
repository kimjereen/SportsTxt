document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed');
    var navbar = document.getElementById('navbar');
    
    if (!navbar) {
        console.error('Navbar element not found!');
        return;
    }

    function handleScroll() {
        console.log('Scroll event fired!');
        if (window.scrollY > 50) {
            console.log('Adding scrolled class');
            navbar.classList.add('scrolled');
        } else {
            console.log('Removing scrolled class');
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
});
