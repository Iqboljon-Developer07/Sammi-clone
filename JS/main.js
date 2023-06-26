const nightIcon = document.querySelector('.dark');
const lightIcon = document.querySelector('.light');

const header = document.getElementById('header');
const headerLogoImg = document.querySelector('.header-logo-image');

const Headermenu = document.querySelector('.menu');

const nav = document.getElementById('nav');

const body = document.getElementById('body');

const mernAlert = document.querySelector('.mern');
const mernCloseBtn = document.querySelector('.mern > .exitBtn');

mernCloseBtn.onclick = () =>{
    mernAlert.remove()
}

Headermenu.onclick = () =>{
    nav.classList.toggle('show-hide-nav')
}
nightIcon.onclick = () =>{
    nightIcon.classList.toggle('light-night');
    lightIcon.classList.toggle('night-light');
    header.classList.toggle('header-nav-night');
    headerLogoImg.classList.toggle('header-logo-image2');

    nav.classList.toggle('header-nav-night')
    body.classList.toggle('body-night');
    mernAlert.classList.toggle('header-nav-night');
}
lightIcon.onclick = () =>{
    nightIcon.classList.toggle('light-night');
    lightIcon.classList.toggle('night-light');
    header.classList.toggle('header-nav-night');
    headerLogoImg.classList.toggle('header-logo-image2');

    nav.classList.toggle('header-nav-night')
    body.classList.toggle('body-night');
    mernAlert.classList.toggle('header-nav-night');
}