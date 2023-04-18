var typed = new Typed('.multiple-text', {
    strings: ["Desenvolvedor", "Estudante"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

var menu = document.querySelector('#menu-icon');
var navbar = document.querySelector('#navbar')

menu.onclick = function(){
    menu.classList.toggle('on');
    navbar.classList.toggle('on');
}