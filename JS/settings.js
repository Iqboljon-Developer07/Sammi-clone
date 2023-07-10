const nightIcon = document.querySelector('.dark');
const lightIcon = document.querySelector('.light');

const header = document.getElementById('header');
const headerLogoImg = document.querySelector('.header-logo-image');
const Headermenu = document.querySelector('.menu');

const nav = document.getElementById('nav');

const body = document.getElementById('body');
const navigationContents = document.querySelectorAll('.navigation-content');

const mainContainer = document.querySelector('.main-container');

const courses = document.querySelectorAll('.settings-container');
const navigations = document.querySelectorAll('.s-c-navigation');

for (let i = 0;i<courses.length;i++){
    navigations[i].addEventListener('click',()=>{
        for (let j = 0; j < courses.length; j++) {
            if(i == j){
                courses[j].classList.add('bor');
                courses[j].classList.remove('yoq');
            }            
            else{
                courses[j].classList.add('yoq');
                courses[j].classList.remove('bor');

            }
        }
    })
}

Headermenu.onclick = () =>{
    nav.classList.toggle('show-hide-nav');
}
nightIcon.onclick = () =>{
    nightIcon.classList.toggle('light-night');
    lightIcon.classList.toggle('night-light');
    header.classList.toggle('header-nav-night');
    headerLogoImg.classList.toggle('header-logo-image2');

    nav.classList.toggle('header-nav-night')
   
    body.classList.toggle('body-night');

    let night = 'night';
    let night_JSON = JSON.stringify(night);
    localStorage.setItem('night_Mode', night_JSON);


    mainContainer.classList.toggle('header-nav-night')
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

    mainContainer.classList.toggle('header-nav-night')
}
lightIcon.onclick = () =>{
    nightIcon.classList.toggle('light-night');
    lightIcon.classList.toggle('night-light');
    header.classList.toggle('header-nav-night');
    headerLogoImg.classList.toggle('header-logo-image2');

    nav.classList.toggle('header-nav-night')
  
    body.classList.toggle('body-night');

    localStorage.removeItem('night_Mode');

    mainContainer.classList.toggle('header-nav-night')
}