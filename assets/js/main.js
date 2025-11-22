/*=============== SHOW MENU ===============*/
const menu__toggle = document.querySelector("#menu__toggle");
const mobile__menu = document.querySelector(".mobile__menu");
const body = document.body;

if (menu__toggle && mobile__menu) {
  menu__toggle.addEventListener("click", () => {
    mobile__menu.classList.toggle("open");
    menu__toggle.classList.toggle("open");
    body.classList.toggle("menu-open");
  });
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".mobile__menu .header__menu__link");

function closeMenu() {
  if (mobile__menu && menu__toggle) {
    mobile__menu.classList.remove("open");
    menu__toggle.classList.remove("open");
    body.classList.remove("menu-open");
  }
}

if (navLinks.length > 0) {
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      closeMenu();
      
      // Smooth scroll to section
      const href = link.getAttribute("href");
      if (href.startsWith("#")) {
        const targetSection = document.querySelector(href);
        if (targetSection) {
          e.preventDefault();
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  });
}

/*=============== ADD SHADOW HEADER ===============*/
const header = document.querySelector("#header");

function scrollHeader() {
  if (window.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 500,
    delay: 300,
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
// Header animations
sr.reveal(".header__nav__menu", { origin: 'right', distance: '80px', delay: 300, duration: 1000 })
sr.reveal(".header__logo", { origin: 'left', distance: '80px', delay: 300, duration: 1000 })

// Home section animations
sr.reveal(".home__content", { origin: 'left', distance: '80px', delay: 600, duration: 1500 })
sr.reveal(".home-dish", { origin: 'bottom', distance: '80px', delay: 700, duration: 2500 })
sr.reveal(".home-burger", { origin: 'top', distance: '100px', delay: 700, duration: 2000 })

// Home decorative elements
sr.reveal(".home-lettuce-1", { origin: 'top', distance: '120px', delay: 1000, duration: 2500 })
sr.reveal(".home-lettuce-2", { origin: 'top', distance: '120px', delay: 800, duration: 2500 })
sr.reveal(".home-potato-1", { origin: 'top', distance: '120px', delay: 1000, duration: 2500 })
sr.reveal(".home-potato-2", { origin: 'top', distance: '120px', delay: 800, duration: 2500 })
sr.reveal(".home-tomato-1", { origin: 'top', distance: '120px', delay: 1000, duration: 2500 })
sr.reveal(".home-tomato-2", { origin: 'top', distance: '120px', delay: 800, duration: 2500 })

// Section titles
sr.reveal(".section__title", { origin: 'top', distance: '120px', delay: 400, duration: 2000 })

// Recipe section
sr.reveal(".recipe__image", { origin: 'left', distance: '120px', delay: 1000, duration: 2000 })
sr.reveal(".recipe__content", { origin: 'right', distance: '120px', delay: 1000, duration: 2000 })

// Popular section
sr.reveal(".popular__card", { origin: 'top', distance: '120px', delay: 1000, duration: 2000 })

// Delivery section
sr.reveal(".delivery__content", { origin: 'right', distance: '120px', delay: 1000, duration: 2000 })
sr.reveal(".delivery__img__wrapper", { origin: 'left', distance: '120px', delay: 1000, duration: 2000 })

// Contact section
sr.reveal(".contact__img", { origin: 'left', distance: '120px', delay: 600, duration: 2000 })
sr.reveal(".contact__info", { origin: 'bottom', distance: '120px', delay: 600, duration: 2000 })

// Footer
sr.reveal(".footer__container", { origin: 'bottom', distance: '120px', delay: 600, duration: 2000 })

