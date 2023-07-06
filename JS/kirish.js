const nightIcon = document.querySelector('.dark');
const lightIcon = document.querySelector('.light');

const header = document.getElementById('header');
const headerLogoImg = document.querySelector('.header-logo-image');
const Headermenu = document.querySelector('.menu');

const nav = document.getElementById('nav');

const body = document.getElementById('body');

const navigationContents = document.querySelectorAll('.navigation-content');

let users = {};

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

    localStorage.removeItem('night_Mode');
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

const form1 = document.querySelector('.sign-container-form');
const form2 = document.querySelector('.sign-container-form2');

const formInput1 = document.querySelector('.form-input1');
const formInput2 = document.querySelector('.form-input2');

const formWarningText = document.querySelectorAll('.warning')

form1.addEventListener('submit', (i)=>{
    i.preventDefault();
    if (formInput1.value ==''){
        formInput1.classList.add('form-input1-1');
        formWarningText[0].classList.add('bor');
    }
    else{
        formInput1.classList.remove('form-input1-1');
        formWarningText[0].classList.remove('bor');
    }
    if (formInput2.value ==''){
        formInput2.classList.add('form-input2-2');
        formWarningText[1].classList.add('bor');
    }
    else{
        formInput2.classList.remove('form-input2-2');
        formWarningText[1].classList.remove('bor');
    }
});

const form2Input1 = document.querySelector('.form2-input1');
const form2Input2 = document.querySelector('.form2-input2');
const form2Input3 = document.querySelector('.form2-input3');

const form2WarningText = document.querySelectorAll('.form2-warning-text2-2')

const containerText = document.querySelector('.container-texts');
let userCount = 0
form2WarningText[0].classList.add('yoq');
form2.addEventListener('submit',(i)=>{
    i.preventDefault();
    if(form2Input1.value == ''){
        form2Input1.classList.add('form-input1-1');
        form2WarningText[0].classList.add('bor');
    }
    else{
        form2Input1.classList.remove('form-input1-1');
        form2WarningText[0].classList.remove('bor');
    }
    if(form2Input2.value == ''){
        form2Input2.classList.add('form-input1-1');
        form2WarningText[1].classList.add('bor');
        containerText.classList.add('bor')
    }
    else{
        form2Input2.classList.remove('form-input1-1');
        form2WarningText[1].classList.remove('bor');
        containerText.classList.remove('bor')
    }
    if(form2Input3.value == ''){
        form2Input3.classList.add('form-input1-1');
        form2WarningText[2].classList.add('bor');
        containerText.classList.add('bor')
    }
    else{
        form2Input3.classList.remove('form-input1-1');
        form2WarningText[2].classList.remove('bor');
        containerText.classList.remove('bor')
    }


    userCount++;
    users[`users${userCount}`] = 'hello';
    console.log(users);
})