document.getElementById('toggleBtn').addEventListener('click', function() {
    var navbar = document.getElementById('leftNavbar');
    var content = document.querySelector('.content');
    
    if (navbar.style.left === '0px') {
        navbar.style.left = '-250px';
        content.style.marginLeft = '0';
    } else {
        navbar.style.left = '0';
        content.style.marginLeft = '250px';
    }
});
