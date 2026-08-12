// Toggle Dark & Light Mode
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

// Angalia kama mtumiaji alishachagua mode awali
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    let theme = 'dark';
    if (document.body.classList.contains('light-theme')) {
        theme = 'light';
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
    
    // Hifadhi chaguo la mtumiaji kwenye Browser
    localStorage.setItem('theme', theme);
});

// Scroll to Top Button functionality
const topBtn = document.getElementById('topBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});