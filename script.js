document.addEventListener('DOMContentLoaded', function() {
    // Preload the image for faster display on yes click
    const img = new Image();
    img.src = 'storage/mrs c.jpg';

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

    // Add listeners for annoyance on hover and touch
    noBtn.addEventListener('mouseenter', moveNoBtn);
    noBtn.addEventListener('touchstart', moveNoBtn);

    yesBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (noBtnInterval) clearInterval(noBtnInterval);
        responseInput.value = 'yes';
        response.classList.remove('hidden');
        response.innerHTML = 'Ndokudai! 💕 To The Moon And Back!';
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
        // Show the love image
        const loveImage = document.getElementById('love-image');
        loveImage.classList.remove('hidden');
        // Submit the form after a short delay to show the message
        setTimeout(() => {
            yesBtn.closest('form').submit();
        }, 2000);
    });

    noBtn.addEventListener('click', function(event) {
        event.preventDefault();
        // Move on click for annoyance
        moveNoBtn();
        // Move sideways on mouseenter for annoyance
        noBtn.addEventListener('mouseenter', moveNoBtn);
        // Move sideways on touchstart for mobile annoyance
        noBtn.addEventListener('touchstart', moveNoBtn);
        // Keep moving annoyingly, no submission
    });
});
