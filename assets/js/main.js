const switchDarkLightMode = document.querySelector('#checkbox-dark-light');
const btnOpenMenuMobile = document.querySelector('#icon-menu-mobile');
const btnCloseMenuMobile = document.querySelector('#box-btn-close-menu');

const btnHomeMenuMobile = document.querySelector('#btnHomeMenuMobile');
const btnAboutMeMenuMobile = document.querySelector('#btnAboutMeMenuMobile');
const btnPortfolioMenuMobile = document.querySelector('#btnPortfolioMenuMobile');
const btnContactMenuMobile = document.querySelector('#btnContactMenuMobile');



CloseMenu(btnCloseMenuMobile);
CloseMenu(btnHomeMenuMobile);
CloseMenu(btnAboutMeMenuMobile);
CloseMenu(btnPortfolioMenuMobile);
CloseMenu(btnContactMenuMobile);

btnOpenMenuMobile.addEventListener('click' , ()=>{
    document.querySelector('.menu-mobile').classList.add('active');
});

function CloseMenu(btn){
    btn.addEventListener('click' , ()=>{
        document.querySelector('.menu-mobile').classList.remove('active');
    })
}



switchDarkLightMode.addEventListener('click', () =>{

    /*!
    ACLARACIÓN 
    NO es el script más optimizado, pero es por tiempo, 
    pronto haré un codigo más limpio
    */
    if(switchDarkLightMode.checked){
        /**LIGHT */
        document.documentElement.style.setProperty('--bg-primary-color', '#0095ff');
        document.documentElement.style.setProperty('--bg-secondary-color', '#d6720f');
        document.documentElement.style.setProperty('--bg-white-color', '#000000');
        document.documentElement.style.setProperty('--bg-gray-color', '#7d7d7d');
        document.documentElement.style.setProperty('--bg-black-color', '#ffffff');
        document.documentElement.style.setProperty('--bg-black-one-color', '#e6e6e6');
        document.documentElement.style.setProperty('--bg-black-two-color', '#ebebeb');
        document.documentElement.style.setProperty('--bg-black-three-color', '#d2d2d2');
        document.documentElement.style.setProperty('--bg-black-four-color', '#b0b0b0');
    }else{        
        /**Black */
        document.documentElement.style.setProperty('--bg-primary-color', '#0095ff');
        document.documentElement.style.setProperty('--bg-secondary-color', '#d6720f');
        document.documentElement.style.setProperty('--bg-white-color', '#ffffff');
        document.documentElement.style.setProperty('--bg-gray-color', '#9c9c9c');
        document.documentElement.style.setProperty('--bg-black-color', '#000');
        document.documentElement.style.setProperty('--bg-black-one-color', '#181818');
        document.documentElement.style.setProperty('--bg-black-two-color', '#1D1D1D');
        document.documentElement.style.setProperty('--bg-black-three-color', '#292929');
        document.documentElement.style.setProperty('--bg-black-four-color', '#404040');
    }
});

// :root {
//     --bg-primary-color:#0095ff;
//     --bg-secondary-color:#d6720f;
//     --bg-white-color:#ffffff;
//     --bg-gray-color:#9c9c9c;
//     --bg-black-color:#000;
//     --bg-black-one-color:#181818;
//     --bg-black-two-color:#1D1D1D;
//     --bg-black-three-color:#292929;
//     --bg-black-four-color:#404040;
//   }

// const coloursDarkMode = {
//     secondarycolor : '#d6720f',
//     secondarycolor : '#d6720f',
//     primarycolor : '#0095ff',
//     whitecolor : '#ffffff',
//     graycolor : '#9c9c9c',
//     blackcolor : '#000',
//     blackonecolor : '#181818',
//     blacktwocolor : '#1D1D1D',
//     blackthreecolor : '#292929',
//     blackfoucolor : '#404040'
// }