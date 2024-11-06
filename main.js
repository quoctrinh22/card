document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const switchModeButton = document.querySelector('#switch__mode i');
    const darkMode = localStorage.getItem('darkmode');
    if (darkMode === 'enabled') {
        body.classList.add('dark');
        switchModeButton.classList.replace('bi-moon-stars-fill', 'bi-brightness-high-fill');
    }
    document.getElementById('switch__mode').addEventListener('click', () => {
        const isDark = body.classList.toggle('dark');
        switchModeButton.classList.toggle('bi-moon-stars-fill', !isDark);
        switchModeButton.classList.toggle('bi-brightness-high-fill', isDark);
        localStorage.setItem('darkmode', isDark ? 'enabled' : 'disabled');
    });
});
