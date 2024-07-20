// script.js for Nav Bar/////////////////////////////////
document.getElementById('menu-bars').addEventListener('click', function() {
    document.getElementById('sidebar').style.right = '0';
    document.getElementById('overlay').style.display = 'block';
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('sidebar').style.right = '-300px';
    document.getElementById('overlay').style.display = 'none';
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('sidebar').style.right = '-300px';
    document.getElementById('overlay').style.display = 'none';
});