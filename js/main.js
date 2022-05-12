const manuBtn = document.querySelector('.menu-btn')
const hamburger = document.querySelector('.menu-btn_burger')
const nav = document.querySelector('.nav')
const menuNav = document.querySelector('.menu-nav')
const navItems = document.querySelectorAll('.menu-nav-item')
let year = document.querySelector('#year')
let swap = document.querySelector('#swapping-places')



let showMenu = false

manuBtn.addEventListener('click', toggleMenu)


function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open')
        nav.classList.add('open')
        menuNav.classList.add('open')
        navItems.forEach(item => item.classList.add('open'))

        showMenu = true
    } else{
        hamburger.classList.remove('open')
        nav.classList.remove('open')
        menuNav.classList.remove('open')
        navItems.forEach(item => item.classList.remove('open'))

        showMenu = false
    }
}


onload = () => {year.innerHTML = new Date().getFullYear()}