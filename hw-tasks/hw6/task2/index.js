window.addEventListener('scroll', function (e) {
    var $parallax = document.getElementById('parallax');
    var posY = window.scrollY * -0.5;
    $parallax.style.backgroundPosition = '0px '+posY+'px';
});