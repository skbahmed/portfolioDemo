// ALL VARIABLE
var headerSection = document.getElementById('header'),
mainSection = document.getElementById('main'),

navToggler = document.getElementById('nav-toggler'),
scrollToggler = document.getElementById('scroll-toggler'),

darkModeToggler = document.getElementById('darkmode-toggler'),
lightModeToggler = document.getElementById('lightmode-toggler'),

colorPlateToggler = document.getElementById('color-plate-toggler'),
colorPlate = document.getElementById('color-plate'),

colorGradeThemes = document.querySelectorAll('.color-grade-theme'),
colorGradeChangers = document.querySelectorAll('.color-grade-changer');





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

// THEME CHANGING
colorGradeChangers.forEach((colorGradeChanger) =>{
    colorGradeChanger.onclick =()=>{
        colorGradeThemes.forEach((colorGradeTheme) => {
            var themeTitle = colorGradeTheme.getAttribute('title'),
            themeChangerTitle = colorGradeChanger.getAttribute('title');
    
            if(themeTitle == themeChangerTitle){
                colorGradeTheme.removeAttribute('disabled');
            }else{
                colorGradeTheme.setAttribute('disabled', 'true');
            }
        })
    }
})