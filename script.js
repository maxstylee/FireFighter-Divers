const toggleBtn = document.getElementById("toggletheme");
const lightTheme = document.querySelector(".moon-icon-wrapper");
const darkTheme = document.querySelector(".sun-icon-wrapper");
const lightLogo = document.querySelector(".light-logo");
const darkLogo = document.querySelector(".dark-logo");
const lightIcon = document.querySelector(".light-icon");
const darkIcon = document.querySelector(".dark-icon");

// here start for menu
const clickableMenu = document.getElementById("header-btn-wrapper")
const Menu = document.querySelector(".menu-btn");
const MenuCloseBtn = document.querySelector(".menu-close-btn");
const DarkMenu = document.querySelector(".dark-menu-btn");
const DarkMenuCloseBtn = document.querySelector(".dark-menu-close-btn");


function applyTheme(theme) {
    const isDark = theme === "dark";

    document.body.classList.toggle("body-dark-mode", isDark);
    const allSwitches = document.querySelectorAll(".switch-theme");
    allSwitches.forEach(el => {
        el.classList.toggle("active", isDark);
    });

    darkTheme.style.display = isDark ? "block" : "none";
    if (lightTheme) lightTheme.style.display = isDark ? "none" : "block";
    if (darkLogo) darkLogo.style.display = isDark ? "block" : "none";
    if (lightLogo) lightLogo.style.display = isDark ? "none" : "block";
    if (darkIcon) darkIcon.style.display = isDark ? "block" : "none";
    if (lightIcon) lightIcon.style.display = isDark ? "none" : "block";
}

const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme === "dark" ? "dark" : "light");

toggleBtn?.addEventListener("click", function () {
    const isDark = document.body.classList.contains("body-dark-mode");
    const newTheme = isDark ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});

const menuList = document.getElementById("menu-list-wrapper")
const navMenu = document.getElementById("header-nav-menu")
const headerAction = document.getElementById("header-action-wrapper")

clickableMenu.addEventListener("click", () => {
    clickableMenu.classList.toggle("active");
    menuList.classList.toggle("active");
    navMenu.classList.toggle("active"); 
    headerAction.classList.toggle("active"); 

});

