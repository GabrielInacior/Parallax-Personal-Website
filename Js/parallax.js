let stars = document.getElementById('stars');
let bolona = document.getElementById('bolona');
let montains_behind = document.getElementById('montainsbehind');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let montainsfront = document.getElementById('montains');
let nave = document.getElementById('nave');
let planeta1 = document.getElementById('planeta1');
let planeta2 = document.getElementById('planeta2');

window.addEventListener('scroll', function () {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    bolona.style.top = value * 0.4 + 'px';
    montains_behind.style.top = value * 0.2 + 'px';
    montains.style.top = value * 0 + 'px';
    text.style.marginBottom = value * 3.5 + 'px';
    btn.style.marginBottom = value * 3.5 + 'px';
    nave.style.marginLeft = value * 1.6 + 'px';
    planeta1.style.marginLeft = value * 0.5 + 'px';
    planeta2.style.marginRight = value * 0.5 + 'px';


})
