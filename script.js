document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const response = document.getElementById('response');

    yesBtn.addEventListener('click', function() {
        response.classList.remove('hidden');
        response.innerHTML = 'Yay! You said yes! 💕 I love you so much!';
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
    });

    noBtn.addEventListener('click', function() {
        response.classList.remove('hidden');
        response.innerHTML = 'Oh no! But I\'ll keep trying! 😘';
        // Make the no button move away on hover
        noBtn.addEventListener('mouseover', function() {
            const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
            const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
            noBtn.style.position = 'absolute';
            noBtn.style.left = x + 'px';
            noBtn.style.top = y + 'px';
        });
    });
});
