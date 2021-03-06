let themeFromUser = document.getElementById('theme-style');
let themeFromLocalStorage = localStorage.getItem('theme');

function setColorTheme(fileNameCSS) {
    themeFromUser.href = fileNameCSS;
    localStorage.setItem('theme', fileNameCSS);
}

if (themeFromLocalStorage == null) {
    setColorTheme('default.css');
} else {
    setColorTheme(themeFromLocalStorage)
}