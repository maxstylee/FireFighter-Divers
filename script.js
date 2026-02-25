const toggleBtn = document.getElementById("toggletheme");
const darkClasses = document.querySelector(".switch-theme");
const lightTheme = document.querySelector(".moon-icon-wrapper");
const darkTheme = document.querySelector(".sun-icon-wrapper");
const lightLogo = document.querySelector(".light-logo");
const darkLogo = document.querySelector(".dark-logo");

function applyTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("body-dark-mode");
        darkClasses.classList.add("active");
        darkTheme.style.display = "block";
        lightTheme.style.display = "none";
        darkLogo.style.display = "block";
        lightLogo.style.display = "none";
    } else {
        document.body.classList.remove("body-dark-mode");
        darkClasses.classList.remove("active");
        darkTheme.style.display = "none";
        lightTheme.style.display = "block";
        darkLogo.style.display = "none";
        lightLogo.style.display = "block";
    }
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    applyTheme(savedTheme);
} else {
    darkTheme.style.display = "none";
    darkLogo.style.display = "none";
}
toggleBtn.addEventListener("click", function () {
    const isNowDark = document.body.classList.toggle("body-dark-mode");
    darkClasses.classList.toggle("active");

    if (isNowDark) {
        applyTheme("dark");
        localStorage.setItem("theme", "dark");
    } else {
        applyTheme("light");
        localStorage.setItem("theme", "light");
    }
});