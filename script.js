document.getElementById('theme-toggle').addEventListener('click', function () {
    const body = document.body;
    body.classList.toggle('dark-theme');
    
    // Toggle colors for dark theme
    if (body.classList.contains('dark-theme')) {
        this.textContent = 'Light Mode'; // Change button text
    } else {
        this.textContent = 'Dark Mode'; // Change button text
    }
});