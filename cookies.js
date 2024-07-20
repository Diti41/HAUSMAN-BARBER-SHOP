document.addEventListener("DOMContentLoaded", () => {
    const cookiePopup = document.getElementById('cookie-popup');
    const acceptButton = document.getElementById('accept-cookies');
    const rejectButton = document.getElementById('reject-cookies');

    const cookieAccepted = localStorage.getItem('cookieAccepted');

    if (!cookieAccepted) {
        cookiePopup.style.display = 'block';
    }

    acceptButton.addEventListener('click', () => {
        localStorage.setItem('cookieAccepted', 'true');
        cookiePopup.style.display = 'none';
        console.log('Cookies accepted - send this info to the server');
        // Simulate sending acceptance to the server
        // Replace this with actual server call
        fetch('/save-cookie-consent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ accepted: true }),
        }).then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    });

    rejectButton.addEventListener('click', () => {
        cookiePopup.style.display = 'none';
        console.log('Cookies rejected');
    });
});
