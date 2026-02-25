
const toggleBtn = document.getElementById("toggletheme");
const darkClasses = document.querySelector(".switch-theme");
const lightTheme = document.querySelector(".moon-icon-wrapper");
const darkTheme = document.querySelector(".sun-icon-wrapper");
const lightLogo = document.querySelector(".light-logo");
const darkLogo = document.querySelector(".dark-logo");
darkTheme.style.display = "none";
darkLogo.style.display = "none";

toggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("body-dark-mode");

    const isActive = darkClasses.classList.toggle("active");

    if (isActive) {
        darkTheme.style.display = "block";
        lightTheme.style.display = "none";
        darkLogo.style.display = "block";
        lightLogo.style.display = "none";
    } else {
        darkTheme.style.display = "none";
        lightTheme.style.display = "block";
        darkLogo.style.display = "none";
        lightLogo.style.display = "block";
    }
});