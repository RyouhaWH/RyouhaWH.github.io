let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = ()=>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    }

let homeBtn = document.querySelector(".home-btn");
let aboutBtn = document.querySelector(".about-btn");
let menuBtn = document.querySelector(".menu-btn");
let reviewBtn = document.querySelector(".review-btn");
let contactBtn = document.querySelector(".contact-btn");

homeBtn.onclick = () => {
    homeBtn.classList.toggle('active');
    aboutBtn.classList.remove('active');
    menuBtn.classList.remove('active');
    reviewBtn.classList.remove('active');
    contactBtn.classList.remove('active');
}
aboutBtn.onclick = () => {
    aboutBtn.classList.toggle('active');
    homeBtn.classList.remove('active');
    menuBtn.classList.remove('active');
    reviewBtn.classList.remove('active');
    contactBtn.classList.remove('active');
}
menuBtn.onclick = () => {
    menuBtn.classList.toggle('active');
    homeBtn.classList.remove('active');
    aboutBtn.classList.remove('active');
    reviewBtn.classList.remove('active');
    contactBtn.classList.remove('active');
}
reviewBtn.onclick = () => {
    reviewBtn.classList.toggle('active');
    homeBtn.classList.remove('active');
    aboutBtn.classList.remove('active');
    menuBtn.classList.remove('active');
    contactBtn.classList.remove('active');
}
contactBtn.onclick = () => {
    contactBtn.classList.toggle('active');
    homeBtn.classList.remove('active');
    aboutBtn.classList.remove('active');
    menuBtn.classList.remove('active');
    reviewBtn.classList.remove('active');
}

const onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

