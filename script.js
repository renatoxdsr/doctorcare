// String (textos)
// Number (número)

window.addEventListener('scroll', onScroll)
onScroll()

function onScroll(){
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    activateMenuatCurrentSection(home)
    activateMenuatCurrentSection(services)
    activateMenuatCurrentSection(about)
    activateMenuatCurrentSection(contact)
    /* activateMenuatCurrentSection(depoimentos) */
}

function activateMenuatCurrentSection(section){
    const targetLine = scrollY + innerHeight / 2


    //verificar se a seção passou da linha
    //quais dados necessitarei?
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachorPassedTargetLine = targetLine >=sectionTop 

    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
    

    //limites das seção

    const sectionBounderies = sectionTopReachorPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttibute('id')
    const menuElement = document.querySelector(`.menu a [href*=${sectionId}]`)
    menuElement.classList.remove('active')
   
    if(sectionBounderies){
            menuElement.classList.add('active')
    }
}

function showNavOnScroll(){
    if(scrollY > 0 ){
        navigation.classList.add('scroll')
    }else{
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll(){
    if(scrollY > 450 ){
        backToTopButton.classList.add('show')
    }else{
        backToTopButton.classList.remove('show')
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
ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,


}).reveal(`#home, 
#home img, 
#home .stats, 
#services, 
#services header,
#services .card,
#about,
#about header,
#about .content`);


function sayMyName(name){
    console.log(name)
}

sayMyName('DESTENYchild')