const nightIcon = document.querySelector('.dark');
const lightIcon = document.querySelector('.light');

const header = document.getElementById('header');
const headerLogoImg = document.querySelector('.header-logo-image');
const Headermenu = document.querySelector('.menu');

const nav = document.getElementById('nav');

const body = document.getElementById('body');
const bodyMain = document.querySelector('.body__main');

const questionMain = document.querySelectorAll('.card__title');
const questionMainAdditional = document.querySelectorAll('.card__p');
const manbaCard = document.querySelectorAll('.manba__card');
const plusToX = document.querySelectorAll('.card__title i');

const navigationContents = document.querySelectorAll('.navigation-content');
navigationContents[4].classList.add('hello');

for (let i = 0;i < manbaCard.length;i++){
    if (i != 0){
        questionMainAdditional[i].classList.toggle('card__p2');
        manbaCard[i].classList.toggle('manba__card2');
    }
    else{
        plusToX[0].classList.toggle('plus-to-x')
    }
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
    bodyMain.classList.toggle('color-white');
    bodyMain.classList.toggle('header-nav-night');

};
for(let i = 0;i < questionMain.length;i++){
    questionMain[i].addEventListener('click',()=>{
        for (let j = 0;j < questionMainAdditional.length;j++){
            if (j == i){
                questionMainAdditional[j].classList.toggle('card__p2');
                manbaCard[j].classList.toggle('manba__card2');
                plusToX[j].classList.toggle('plus-to-x');
            }
        }
    })
}

lightIcon.onclick = () =>{
    nightIcon.classList.toggle('light-night');
    lightIcon.classList.toggle('night-light');
    header.classList.toggle('header-nav-night');
    headerLogoImg.classList.toggle('header-logo-image2');

    nav.classList.toggle('header-nav-night')
  
    body.classList.toggle('body-night');
    bodyMain.classList.toggle('color-white');
    bodyMain.classList.toggle('header-nav-night')
}
// for(let i = 0;i < questionMain.length;i++){
//     questionMain[i].addEventListener('click',()=>{
//         for (let j = 0;j < questionMainAdditional.length;j++){
//             if (j == i){
//                 questionMainAdditional[j].classList.toggle('card__p2');
//             }
//         }
//     })
// }