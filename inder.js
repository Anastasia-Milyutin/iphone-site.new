document.addEventListener("DOMContentLoaded", () => {
    var hamburger = document.querySelector('.hamburger');
    var menu = document.querySelector('menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.add('is-active')
    })
})