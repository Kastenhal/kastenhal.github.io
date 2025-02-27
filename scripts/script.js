const menuButton = document.getElementById('menuButton');
const navMenu = document.getElementById('navMenu');
const container = document.querySelector('.container');

menuButton.addEventListener('click', () => {
    container.classList.toggle('active');
})