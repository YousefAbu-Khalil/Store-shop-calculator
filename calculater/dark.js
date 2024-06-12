document.addEventListener('DOMContentLoaded', (event) => {

    const currentMode = sessionStorage.getItem('mode');
    if (currentMode) {
        document.body.classList.add(currentMode);
    } else {
        document.body.classList.add('light-mode'); // Default mode
    }
    
    // Toggle mode button event listener
    document.getElementById('toggle-mode').addEventListener('click', () => {
        if (document.body.classList.contains('light-mode')) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            sessionStorage.setItem('mode', 'dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            sessionStorage.setItem('mode', 'light-mode');
        }
    });
});
