const btnEn = document.querySelector('.header__top_btn');
const btnUsd = document.querySelector('.header__top_usd');
const headerLang = document.querySelector('.header__lang');
const headerUsd = document.querySelector('.header__usd');
const headerAdmin = document.querySelector('.header__admin');
const adminPanel = document.querySelector('.admin__panel');
const headerClose = document.querySelector('.header__close');
const menuIcon = document.querySelector('.menu__icon');
const menuOpen = document.querySelector('.menu__open');
const closeBtn = document.querySelector('.close__btn');

menuIcon.addEventListener("click", () => {
    menuOpen.classList.add("menuActive")
})
closeBtn.addEventListener("click", ()=>{
    menuOpen.classList.remove("menuActive")
})
btnEn.addEventListener("click", () => {
    headerLang.classList.toggle("activeBtn")
})
btnUsd.addEventListener("click", () => {
    headerUsd.classList.toggle("activeBtn")
})
headerAdmin.addEventListener("click", () => {
    adminPanel.classList.add("admin__panelActive")
})
headerClose.addEventListener("click", () => {
    adminPanel.classList.remove("admin__panelActive")
})