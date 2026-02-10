document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const response = document.getElementById('response');
    const responseInput = document.getElementById('response-input');
    let noBtnInterval;

    function moveNoBtn() {
        const currentLeft = parseInt(noBtn.style.left || 0);
        const newLeft = currentLeft + 200; // Move 200px to the right
        if (newLeft + noBtn.offsetWidth > window.innerWidth) {
            noBtn.style.left = '0px'; // Reset to left if off screen
        } else {
            noBtn.style.left = newLeft + 'px';
        }
        noBtn.style.position = 'absolute';
    }

    yesBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (noBtnInterval) clearInterval(noBtnInterval);
        responseInput.value = 'yes';
        response.classList.remove('hidden');
        response.innerHTML = 'Ndokudai! 💕 To The Moon And Back!';
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
        response.innerHTML = 'Ouch! But I\'ll keep trying! 😘';
        // Move sideways on mouseenter for annoyance
        noBtn.addEventListener('mouseenter', moveNoBtn);
        // Move sideways on touchstart for mobile annoyance
        noBtn.addEventListener('touchstart', moveNoBtn);
        // Submit the form after a delay to allow annoyance
        setTimeout(() => {
            noBtn.removeEventListener('mouseenter', moveNoBtn);
            noBtn.removeEventListener('touchstart', moveNoBtn);
            noBtn.closest('form').submit();
        }, 10000); // Increased delay to 10 seconds for more annoyance
    });
});
