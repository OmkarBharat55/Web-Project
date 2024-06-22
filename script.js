document.getElementById('mobile-menu-icon').addEventListener('click', function() {
    var nav = document.getElementById('nav');
    nav.style.right = '0';
});

document.getElementById('close-menu-icon').addEventListener('click', function() {
    var nav = document.getElementById('nav');
    nav.style.right = '-100%';
});
