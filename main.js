if(scrollY > 0 )
    nav.classList.add('scroll')

function onScroll() {
    if (scrollY > 0) nav.classList.add('scroll')
    else nav.classList.remove('scroll')
}

/* criado uma função chamada onScroll, onde pega a posição do scroll no eixo Y e compara na condição do if. Essa condição serve para dizer à aplicação quando adicionar a class scroll ao html e quando remover, fazendo com que o navigation da página mude suas propriedades de acordo com os eventos

essa função está sendo instanciada no html, na tag body
*/

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1700
}).reveal(`
#home,
#about,
#home img`)

ScrollReveal({
    origin: 'left',
    distance: '30px',
    duration: 700
}).reveal(`
#home .stat,
#services .header-services,
#services .card,
.contacts,
.contact-address,
.contact-email,
.contacts button,
.contacts img`
)

/*  */
