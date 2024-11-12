function enableDarkMode() {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    document.querySelector('.navbar').classList.remove('light-mode');
    document.querySelector('.navbar').classList.add('dark-mode');
    document.querySelectorAll('button').forEach(button => {
        button.classList.remove('light-mode');
        button.classList.add('dark-mode');
    });
    localStorage.setItem('theme', 'dark');
}

function enableLightMode() {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    document.querySelector('.navbar').classList.remove('dark-mode');
    document.querySelector('.navbar').classList.add('light-mode');
    document.querySelectorAll('button').forEach(button => {
        button.classList.remove('dark-mode');
        button.classList.add('light-mode');
    });
    localStorage.setItem('theme', 'light');
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    enableDarkMode();
} else if (savedTheme === 'light') {
    enableLightMode();
}

document.getElementById('dark-mode-btn').addEventListener('click', enableDarkMode);
document.getElementById('light-mode-btn').addEventListener('click', enableLightMode);
