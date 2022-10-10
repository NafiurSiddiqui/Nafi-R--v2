const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");
//now we create a var that prevent menu from showing up
let showMenu = false;
//then  add an event listener
menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
    //if show menu is false or not shown
    if (!showMenu) {
        hamburger.classList.add("open"); //classList is a class added to any element and also returns the class of the element
        nav.classList.add("open");
        menuNav.classList.add("open");
        navItems.forEach((item)=>item.classList.add("open")); //this gonna pull one item out each time
        showMenu = true; //here we created a class name open
    } else {
        hamburger.classList.remove("open");
        nav.classList.remove("open");
        menuNav.classList.remove("open");
        navItems.forEach((item)=>item.classList.remove("open"));
        showMenu = false;
    }
}

//# sourceMappingURL=contact.72be8890.js.map
