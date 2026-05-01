document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    if (noBtn) {
        noBtn.style.position = 'absolute';
        noBtn.addEventListener('mouseenter', moveNoButton);
        noBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            moveNoButton();
        });
    }

    function moveNoButton() {
        const maxX = window.innerWidth - noBtn.offsetWidth - 20;
        const maxY = window.innerHeight - noBtn.offsetHeight - 20;
        if (maxX <= 0 || maxY <= 0) return;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    }

    if (yesBtn) {
        yesBtn.addEventListener('click', () => {
            window.location.href = 'yes.html';
        });
    }
});
