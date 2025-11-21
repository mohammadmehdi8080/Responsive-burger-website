/*=============== SHOW MENU ===============*/
const menu__toggle = document.querySelector("#menu__toggle")
const mobile__menu = document.querySelector(".mobile__menu")
const body = document.querySelector("body")
let flag = false
menu__toggle.addEventListener("click" , ()=>{
    mobile__menu.classList.toggle("open")
    menu__toggle.classList.toggle("open")
    body.classList.toggle("overFlow")
})

/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ADD SHADOW HEADER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 500,
    delay: 300,
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
sr.reveal(".header__nav__menu",{ origin: 'right', distance: '80px', delay: 300, duration: 1000 })
sr.reveal(".header__logo" , { origin: 'left', distance: '80px', delay: 300, duration: 1000 })
sr.reveal(".home__content" , { origin: 'left', distance: '80px', delay: 600, duration: 1500 })
sr.reveal(".home-dish" , { origin: 'bottom', distance: '80px', delay: 700, duration: 2500 })
sr.reveal(".home-burger" , { origin: 'top', distance: '100px', delay: 700, duration: 2000 })
sr.reveal(".home-lettuce-1" , { origin: 'top', distance: '120px', delay: 1000, duration: 2500 })
sr.reveal(".home-lettuce-2" , { origin: 'top', distance: '120px', delay: 800, duration: 2500 })
sr.reveal(".home-potato-1" , { origin: 'top', distance: '120px', delay: 1000, duration: 2500 })
sr.reveal(".home-potato-2" , { origin: 'top', distance: '120px', delay: 800, duration: 2500 })
sr.reveal(".home-tomato-1" , { origin: 'top', distance: '120px', delay: 1000, duration: 2500 })
sr.reveal(".home-tomato-2" , { origin: 'top', distance: '120px', delay: 800, duration: 2500 })
sr.reveal(".section__title" , { origin: 'top', distance: '120px', delay: 400, duration: 2000 })
sr.reveal(".recipe__image" , { origin: 'left', distance: '120px', delay: 1000, duration: 2000 })
sr.reveal(".recipe__content" , { origin: 'right', distance: '120px', delay: 1000, duration: 2000 })
sr.reveal(".popular__card" , { origin: 'top', distance: '120px', delay: 1000, duration: 2000 })
sr.reveal(".delivery__content" , { origin: 'right', distance: '120px', delay: 1000, duration: 2000 })
sr.reveal(".delivery__img__wrapper" , { origin: 'left', distance: '120px', delay: 1000, duration: 2000 })
sr.reveal(".contact__img" , { origin: 'left', distance: '120px', delay: 600, duration: 2000 })
sr.reveal(".contact__info" , { origin: 'bottom', distance: '120px', delay: 600, duration: 2000 })
sr.reveal(".footer__container" , { origin: 'bottom', distance: '120px', delay: 600, duration: 2000 })

