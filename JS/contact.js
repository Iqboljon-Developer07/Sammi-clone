const nightIcon = document.querySelector('.dark');
const lightIcon = document.querySelector('.light');

const header = document.getElementById('header');
const headerLogoImg = document.querySelector('.header-logo-image');
const Headermenu = document.querySelector('.menu');

const nav = document.getElementById('nav');

const body = document.getElementById('body');
const navigationContents = document.querySelectorAll('.navigation-content');

const kontaktBox = document.querySelector('.kontakt-box');
const kontaktRoyhatdanOtish = document.querySelector('.kontakt-royhatdan-otish');

const kontaktHuquqlarHioyalangan = document.querySelector('.kontakt-huquqlar-hioyalangan');
const huquqlarHioyalanganIcons = document.querySelectorAll('.huquqlar-hioyalangan-icons > div');
navigationContents[3].classList.add('hello');
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
    kontaktBox.classList.toggle('color-white');
    kontaktBox.classList.toggle('header-nav-night');
    kontaktHuquqlarHioyalangan.classList.toggle('color-white')

    // huquqlarHioyalanganIcons[0].classList.toggle('color-white')
    // huquqlarHioyalanganIcons[1].classList.toggle('color-white')
    // huquqlarHioyalanganIcons[2].classList.toggle('color-white')
};

lightIcon.onclick = () =>{
    nightIcon.classList.toggle('light-night');
    lightIcon.classList.toggle('night-light');
    header.classList.toggle('header-nav-night');
    headerLogoImg.classList.toggle('header-logo-image2');

    nav.classList.toggle('header-nav-night')
  
    body.classList.toggle('body-night');
    kontaktBox.classList.toggle('color-white');
    kontaktBox.classList.toggle('header-nav-night');
    kontaktHuquqlarHioyalangan.classList.toggle('color-white')

    // huquqlarHioyalanganIcons[0].classList.toggle('color-white')
    // huquqlarHioyalanganIcons[1].classList.toggle('color-white')
    // huquqlarHioyalanganIcons[2].classList.toggle('color-white')
}