// ALL VARIABLE
var headerSection = document.getElementById('header'),
mainSection = document.getElementById('main'),

navToggler = document.getElementById('nav-toggler'),
scrollToggler = document.getElementById('scroll-toggler'),

darkModeToggler = document.getElementById('darkmode-toggler'),
lightModeToggler = document.getElementById('lightmode-toggler'),

colorPlateToggler = document.getElementById('color-plate-toggler'),
colorPlate = document.getElementById('color-plate'),

colorGrade1 = document.getElementById('color-grade-1'),
colorGrade2 = document.getElementById('color-grade-2'),
colorGrade3 = document.getElementById('color-grade-3'),
colorGrade4 = document.getElementById('color-grade-4'),
colorGrade5 = document.getElementById('color-grade-5'),
colorGrade6 = document.getElementById('color-grade-6'),
colorGrade7 = document.getElementById('color-grade-7');





//HIDE OR UNHIDE NAVBAR BY CLICKING
navToggler.onclick =()=>{
    headerSection.classList.toggle('active-header');
    mainSection.classList.toggle('active-header');
}

// SCROLL TO TOP BY CLICKING
scrollToggler.onclick =()=>{
    mainSection.scrollTop=0;
}

// HIDE OR UNHIDE SCROLL TOGGLER WHEN SCROLL TO BOTTOM 30PX OR GREATER
mainSection.onscroll =()=>{
    if(mainSection.scrollTop > 30){
        scrollToggler.classList.add('active-scroll');
    }else{
        scrollToggler.classList.remove('active-scroll');
    }
}

// DARK OR LIGHT MODE BY CLICKING
darkModeToggler.onclick =()=>{
    document.documentElement.setAttribute('data-theme', 'dark');
}
lightModeToggler.onclick =()=>{
    document.documentElement.setAttribute('data-theme', 'light');
}

// COLOR PLATE HIDE OR UNHIDE BY CLICKING
colorPlateToggler.onclick =()=>{
    colorPlate.classList.toggle('active-color-plate');
}

// colorful