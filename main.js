const menuIcon = document.querySelector(".mobileNav")
const mobileMenu = document.querySelector(".mobileMenu")
const body = document.querySelector("body")
const sections = document.querySelectorAll("section")
const cross =  document.querySelector(".cross")
const links = document.querySelectorAll(".mobileListMenu li a")
const header = document.querySelector("header")

links.forEach(link => {
    link.addEventListener('click', () => {
        link.classList.toggle('there')
    })
})

menuIcon.addEventListener('click', () => {
    mobileMenu.classList.remove("inactive")
    mobileMenu.classList.remove("hidden")
    mobileMenu.classList.add("active")
    header.style.opacity = 0.5;
    sections.forEach(section => {
        section.style.opacity = 0.5
    })
})

cross.addEventListener('click', () => {
    mobileMenu.classList.remove("active")
    mobileMenu.classList.add("inactive")
    setTimeout(function() {
        mobileMenu.classList.add("hidden")
    }, 300);
    header.style.opacity = 1;
    sections.forEach(section => {
        section.style.opacity = 1
    })
})
