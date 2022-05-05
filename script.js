// String (textos)
// Number (número)


function onScroll(){
    if(scrollY > 0 ){
        navagation.classList.add('scroll')
    } else {
        navagation.classList.remove('scroll')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}


/*Creating an object in JS*/

/*Scroll Reveal library*/
ScrollReveal().reveal('#home');