const nightIcon = document.querySelector('.dark');
const lightIcon = document.querySelector('.light');

const header = document.getElementById('header');
const headerLogoImg = document.querySelector('.header-logo-image');
const Headermenu = document.querySelector('.menu');

const nav = document.getElementById('nav');

const body = document.getElementById('body');

const navigationContents = document.querySelectorAll('.navigation-content');
for(let i = 0;i < navigationContents.length; i++){
    navigationContents[i].classList.remove('active')
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
    body.classList.toggle('header-nav-night');
};

lightIcon.onclick = () =>{
    nightIcon.classList.toggle('light-night');
    lightIcon.classList.toggle('night-light');
    header.classList.toggle('header-nav-night');
    headerLogoImg.classList.toggle('header-logo-image2');

    nav.classList.toggle('header-nav-night')
  
    body.classList.toggle('body-night');
    body.classList.toggle('header-nav-night');
};

const form_swritcher = document.querySelector('.form-switcher');
const form_swritcher2 = document.querySelector('.form-switcher2');

const signForm = document.querySelector('.sign-container-form');
const signForm2 = document.querySelector('.sign-container-form2');

form_swritcher.onclick = () =>{
    signForm.classList.remove('bor');
    signForm.classList.add('yoq');
    signForm2.classList.remove('yoq');
    signForm2.classList.add('bor');
}
form_swritcher2.onclick = () =>{
    signForm2.classList.remove('bor');
    signForm2.classList.add('yoq');
    signForm.classList.remove('yoq');
    signForm.classList.add('bor');
}