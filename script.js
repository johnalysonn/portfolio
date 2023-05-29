// typed effect 
var typed = new Typed('.multiple-text', {
    strings: ["Web Developer", "Student"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// menu
var menu = document.querySelector('#menu-icon');
var navbar = document.querySelector('#navbar');

// load
var loading = document.querySelector('#load');
var content = document.querySelector("#main");
var body = document.body;

// elements
const elements = document.querySelectorAll(".element-animation");

// filter of projects
menu.onclick = function(){
    menu.classList.toggle('on');
    navbar.classList.toggle('on');
}

const listAll = document.querySelectorAll("#projects-armazenamento ul li.main-list");
const buttonAllModel = document.querySelectorAll("#projects-models ul li");
const buttonAll = document.querySelectorAll("#projects-models .all");


function removeClick(index){
    buttonAllModel.forEach((item) => {
        item.classList.remove('ativo');
    })
    buttonAllModel[index].classList.add('ativo');
}
buttonAllModel.forEach((event, index)=>(
    event.addEventListener('click', ()=>{
        removeClick(index);
    })
));


buttonAllModel.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButton = e.target;
        if(currentButton.classList.contains('all')){
            showList(listAll);
        }
        if(currentButton.classList.contains('systems')){
            showList(listAll, 'systems');
        }
        if(currentButton.classList.contains('websites')){
            showList(listAll, 'websites');

        }
        if(currentButton.classList.contains('landingpages')){
            showList(listAll, 'landingpages');

        }
    })
})

function showList(list, button = 'all'){
    list.forEach((item)=>{
        item.classList.remove('ativo');
    })
    if (button == 'systems') {
        list[0].classList.add('ativo');
        list[1].classList.add('ativo');
    } 
    if (button == 'websites') {
        list[2].classList.add('ativo');
        list[3].classList.add('ativo');
    }
    if (button == 'all'){
        list[0].classList.add('ativo');
        list[1].classList.add('ativo');
        list[2].classList.add('ativo');
        list[3].classList.add('ativo');
    }
    if (button == 'landingpages'){
        list[3].classList.add('ativo');
    }
}

// function of loading

body.onload = setTimeout(function(){
    const html = document.querySelector('html');
    const element_animation = document.querySelectorAll('.element-animation');
    
    innerDelayAnimation(elements);

    loading.style.display = "none";
    html.style.overflowY = "scroll";

    
}, 3000) 

function innerDelayAnimation(elements){
    elements.forEach(element =>
        element.classList.add('delayAnimation')
    );
}
