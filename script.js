function toggleMenu () {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.menu-icon');
    menu.classList.toggle('menu-active');
    icon.classList.toggle('menu-icon-active');

}