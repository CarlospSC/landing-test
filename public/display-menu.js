let menu = document.querySelector('#btn-menu');
let navbar = document.querySelector('.header .navbar');

menu.onclick = ()=> {
    menu.classList.toggle('vertical');
    navbar.classList.toggle('active');
}