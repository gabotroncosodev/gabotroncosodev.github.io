const switchDarkLightMode = document.querySelector('#checkbox-dark-light');

switchDarkLightMode.addEventListener('click', () =>{
    // alert(switchDarkLightMode.checked);
    if(switchDarkLightMode.checked){
        // alert('si');
        document.documentElement.style.setProperty('--bg-primary-color', '#000');
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

const coloursDarkMode = {
    secondarycolor : '#d6720f',
    secondarycolor : '#d6720f',
    primarycolor : '#0095ff',
    whitecolor : '#ffffff',
    graycolor : '#9c9c9c',
    blackcolor : '#000',
    blackonecolor : '#181818',
    blacktwocolor : '#1D1D1D',
    blackthreecolor : '#292929',
    blackfoucolor : '#404040'
}