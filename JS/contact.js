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

const kirishBtn = document.querySelector('.kirish_Btn1');
let kirishImg = document.querySelector('.kirish-img');
let confirm = localStorage.getItem('confirm');
let button = document.querySelector('.buttons');
kirishImg.onclick = ()=>{
    button.classList.toggle('buttons2')
}
let buttonSettings = document.getElementById('button');
buttonSettings.onclick = () =>{
    location.replace('../index/settings.html')
};
button2.onclick = () =>{
    localStorage.removeItem('confirm');
    location.reload();
}
confirm = JSON.parse(confirm);
console.log(confirm);
if (confirm == 'tasdiqlandi'){
    kirishBtn.classList.add('yoq');
    kirishImg.classList.add('bor');
}
else{
    kirishBtn.classList.add('bor');
    kirishImg.classList.add('yoq');
}

Headermenu.onclick = () =>{
    nav.classList.toggle('show-hide-nav')
}
console.log(localStorage.getItem('users'));
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

    let night = 'night';
    let night_JSON = JSON.stringify(night);
    localStorage.setItem('night_Mode', night_JSON);

    let night_Check = localStorage.getItem('night_Mode');
    let night_Check_Original = JSON.parse(night_Check);
};
let night_Check = localStorage.getItem('night_Mode');
let night_Check_Original = JSON.parse(night_Check);

if (night_Check_Original == 'night'){
    nightIcon.classList.toggle('light-night');
    lightIcon.classList.toggle('night-light');
    header.classList.toggle('header-nav-night');
    headerLogoImg.classList.toggle('header-logo-image2');

    nav.classList.toggle('header-nav-night')
   
    body.classList.toggle('body-night');
    kontaktBox.classList.toggle('color-white');
    kontaktBox.classList.toggle('header-nav-night');
    kontaktHuquqlarHioyalangan.classList.toggle('color-white')
}
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
}