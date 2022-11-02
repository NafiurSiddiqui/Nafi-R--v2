const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item'); 
const header = document.getElementsByTagName('header')[0];
const menu = document.getElementsByTagName('main')[0];

// console.log(menu);


let showMenu = false;



menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
 
    if(!showMenu) {
        hamburger.classList.add('open'); 
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open')); //this gonna sequentially pull out one item
        showMenu = true;                
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        showMenu = false;

    }
}

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        // if(entry.isIntersecting){
        //     console.log('menu');
        // }
        console.log(entry);

    })
},{
    rootMargin:'200px 0px 0px 0px',
    threshold:0.5
});

observer.observe(nav);