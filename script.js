const hamButton = document.querySelector('.hamburger');
const nav = document.getElementById('navbar');

hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('is-active');
    if (hamButton.className == 'hamburger is-active') {
        nav.style.left = '0';
    } else if (hamButton.className == 'hamburger') {
        nav.style.left = '-100%';
    }
});