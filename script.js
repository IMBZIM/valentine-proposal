document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const response = document.getElementById('response');
    const responseInput = document.getElementById('response-input');

    yesBtn.addEventListener('click', function(event) {
        event.preventDefault();
        responseInput.value = 'yes';
        response.classList.remove('hidden');
        response.innerHTML = 'Yay! You said yes! 💕 I love you so much!';
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
        // Submit the form after a short delay to show the message
        setTimeout(() => {
            yesBtn.closest('form').submit();
        }, 2000);
    });

    noBtn.addEventListener('click', function(event) {
        event.preventDefault();
        responseInput.value = 'no';
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
        // Submit the form after a short delay
        setTimeout(() => {
            noBtn.closest('form').submit();
        }, 2000);
    });
});
