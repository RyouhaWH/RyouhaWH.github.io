let navMenu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

navMenu.onclick = () => {
    navbar.classList.toggle('active');
}