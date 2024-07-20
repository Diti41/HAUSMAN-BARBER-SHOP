let currentSlide = 0;
const slides = document.querySelectorAll('.hero .slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});


// script.js for Nav Bar/////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    const menuBars = document.getElementById('menu-bars');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay');

    menuBars.addEventListener('click', () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });
});

////////////////////////////////////////////////////////////
