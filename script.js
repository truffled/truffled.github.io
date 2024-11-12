const darkModeButton = document.getElementById("dark-mode-btn");
const lightModeButton = document.getElementById("light-mode-btn");
const blueModeButton = document.getElementById("blue-mode-btn");

function setTheme(theme) {
    document.body.classList.remove("dark-mode", "light-mode", "blue-mode");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
    updateButtonStyles(theme);
}

function updateButtonStyles(theme) {
    if (theme === "dark-mode") {
        darkModeButton.classList.add("dark-button");
        lightModeButton.classList.remove("light-button");
        blueModeButton.classList.remove("blue-button");
    } else if (theme === "light-mode") {
        lightModeButton.classList.add("light-button");
        darkModeButton.classList.remove("dark-button");
        blueModeButton.classList.remove("blue-button");
    } else if (theme === "blue-mode") {
        blueModeButton.classList.add("blue-button");
        darkModeButton.classList.remove("dark-button");
        lightModeButton.classList.remove("light-button");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme("dark-mode");
    }

    darkModeButton.addEventListener("click", () => setTheme("dark-mode"));
    lightModeButton.addEventListener("click", () => setTheme("light-mode"));
    blueModeButton.addEventListener("click", () => setTheme("blue-mode"));
});
