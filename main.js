// MENU NA STRONIE GŁOWNEJ
const me = document.querySelector('div.container1 div.me')
const tech = document.querySelector('div.container1 div.tech')
const hobby = document.querySelector('div.container1 div.hobby')
const portfolio = document.querySelector('div.container1 div.portfolio')
const kontakt = document.querySelector('div.container1 div.kontakt')
const slajder = document.querySelector('section.slajder')
const divContainter1 = document.querySelector('div.container1')
const meSection = document.querySelector('section.meSection')
const techSection = document.querySelector('section.techSection')
const hobbySection = document.querySelector('section.hobbySection')
const portfolioSection = document.querySelector('section.portfolioSection')
const kontaktSection = document.querySelector('section.kontaktSection')
let flag = false



window.addEventListener('mouseover', function (event) {
    let idTarget = event.target.id
    if (idTarget === 'me') {
        divContainter1.classList.add('addMe')
    } else {
        divContainter1.classList.remove('addMe')
    }
    if (idTarget === 'tech') {
        divContainter1.classList.add('addTech')
    } else {
        divContainter1.classList.remove('addTech')
    }
    if (idTarget === 'hobby') {
        divContainter1.classList.add('addHobby')
    } else {
        divContainter1.classList.remove('addHobby')
    }
    if (idTarget === 'portfolio') {
        divContainter1.classList.add('addPortfolio')
    } else {
        divContainter1.classList.remove('addPortfolio')
    }
    if (idTarget === 'kontakt') {
        divContainter1.classList.add('addKontakt')
    } else {
        divContainter1.classList.remove('addKontakt')
    }
})

window.addEventListener('click', function (event) {
    let idTarget = event.target.id
    if (idTarget === 'me') {
        divContainter1.style.opacity = '0'
        slajder.style.backgroundImage = 'url(zdj/slajder/omnie.jpg)'
        window.setTimeout(() => {
            scrollTo(0, meSection.offsetTop)
        }, 400);
    }
    if (idTarget === 'tech') {
        divContainter1.style.opacity = '0'
        slajder.style.backgroundImage = 'url(zdj/slajder/technologie.jpg)'
        window.setTimeout(() => {
            scrollTo(0, techSection.offsetTop)
        }, 400);
    }
    if (idTarget === 'hobby') {
        divContainter1.style.opacity = '0'
        slajder.style.backgroundImage = 'url(zdj/slajder/shobby.jpg)'
        window.setTimeout(() => {
            scrollTo(0, hobbySection.offsetTop)
        }, 400);
    }
    if (idTarget === 'portfolio') {
        divContainter1.style.opacity = '0'
        slajder.style.backgroundImage = 'url(zdj/slajder/sportfolio.jpg)'
        window.setTimeout(() => {
            scrollTo(0, portfolioSection.offsetTop)
        }, 400);
    }
    if (idTarget === 'kontakt') {
        divContainter1.style.opacity = '0'
        slajder.style.backgroundImage = 'url(zdj/slajder/skontakt.jpg)'
        window.setTimeout(() => {
            scrollTo(0, kontaktSection.offsetTop)
        }, 400);
    }
    if (idTarget === 'section') {
        slajder.style.backgroundImage = 'url(zdj/slajder/TłoSlajder.jpg)'
    }
})

document.querySelector('div.ikonaMenu').addEventListener('click', () => {
    window.setTimeout(() => {
        document.querySelector('div.back').style.opacity = '0'
        document.querySelector('.divMe2 img').style.opacity = '0'
        document.querySelector('section.techSection h1').style.opacity = '0'
        document.querySelector('.swiper2').style.opacity = '0'
        document.querySelector('h1.hobby').style.opacity = '0'
        document.querySelector('.swiper1').style.opacity = '0'
        document.querySelector('div.kontaktContainer').style.opacity = '0'
        document.querySelector('.swiper3').style.opacity = '0'
        document.querySelector('.portfolioSection h1').style.opacity = '0'
        window.setTimeout(() => {
            scrollTo(0, 0)
        }, 200);
    }, 400)
})

window.addEventListener('scroll', () => {
    if (window.scrollY > meSection.offsetTop / 5) {
        document.querySelector('div.ikonaMenu i ').style.opacity = "100%"
    } else {
        document.querySelector('div.ikonaMenu i ').style.opacity = "0"
        window.setTimeout(() => {
            slajder.style.backgroundImage = 'url(zdj/slajder/TłoSlajder.jpg)'
        }, 400);
    }
    if (window.scrollY > meSection.offsetTop - 99) {
        divContainter1.style.opacity = '0'
    } else if (window.scrollY < meSection.offsetTop - 100) {
        window.setTimeout(() => {
            divContainter1.style.opacity = '100%'
        }, 800);
    }
    // pojawianie sie sekcji ME
    if (window.scrollY > meSection.offsetTop / 2) {
        document.querySelector('div.back').style.opacity = '100%'
        document.querySelector('.divMe2 img').style.opacity = '100%'
    } else {
        document.querySelector('div.back').style.opacity = '0'
        document.querySelector('.divMe2 img').style.opacity = '0'
    }
    // pojawianie sie siekcji TECH
    if (window.scrollY > techSection.offsetTop - 200) {
        document.querySelector('section.techSection h1').style.opacity = '100%'
        document.querySelector('.swiper2').style.opacity = '100%'
    } else if (window.scrollY < techSection.offsetTop - 200) {
        document.querySelector('section.techSection h1').style.opacity = '0'
        document.querySelector('.swiper2').style.opacity = '0'
    }
    // pojawianie sie sekcji hobby
    if (window.scrollY > hobbySection.offsetTop - 200) {
        document.querySelector('h1.hobby').style.opacity = '100%'
        document.querySelector('.swiper1').style.opacity = '100%'
    } else if (window.scrollY < hobbySection.offsetTop - 200) {
        document.querySelector('h1.hobby').style.opacity = '0'
        document.querySelector('.swiper1').style.opacity = '0'
    }
    // pojawienie sie seksji portfolio
    if (window.scrollY > portfolioSection.offsetTop - 200) {
        document.querySelector('.swiper3').style.opacity = '100%'
        document.querySelector('.portfolioSection h1').style.opacity = '100%'
    } else if (window.scrollY < portfolioSection.offsetTop - 200) {
        document.querySelector('.swiper3').style.opacity = '0'
        document.querySelector('.portfolioSection h1').style.opacity = '0'
    }
    // pojawienie sie sekcji konatkt
    if (window.scrollY > kontaktSection.offsetTop - 200) {
        document.querySelector('div.kontaktContainer').style.opacity = '100%'
    } else if (window.scrollY < kontaktSection.offsetTop - 200) {
        document.querySelector('div.kontaktContainer').style.opacity = '0'
    }
    // zmianka tła w menu gdy scrolujemy - omijamy efekt przeskoku gdy po nacisnieciu strzałki (UP) funkcja scroluje na na góre strony
    if (window.scrollY > meSection.offsetTop - 200) {
        slajder.style.backgroundImage = 'url(zdj/slajder/omnie.jpg)'
    }
    if (window.scrollY > techSection.offsetTop - 200) {
        slajder.style.backgroundImage = 'url(zdj/slajder/technologie.jpg)'
    }
    if (window.scrollY > hobbySection.offsetTop - 200) {
        slajder.style.backgroundImage = 'url(zdj/slajder/shobby.jpg)'
    }
    if (window.scrollY > portfolioSection.offsetTop - 200) {
        slajder.style.backgroundImage = 'url(zdj/slajder/sportfolio.jpg)'
    }
    if (window.scrollY > kontaktSection.offsetTop - 200) {
        slajder.style.backgroundImage = 'url(zdj/slajder/skontakt.jpg)'
    }
})


// SLAJDERY
var swiper = new Swiper('.swiper1', {
    pagination: {
        el: '.swiper-pagination1',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    grabCursor: true,
});

var swiper2 = new Swiper('.swiper2', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination2',
    },
    loop: true,
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
});

var swiper = new Swiper('.swiper3', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
        shadow: false,
        slideShadows: false,
        shadowOffset: 40,
        shadowScale: 0.94,
    },
    pagination: {
        el: '.swiper-pagination',
        type: "bullets",
        clickable: true,
    },
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
});