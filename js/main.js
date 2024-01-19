import { getAllCategory, getSingleCategory } from "./service.js";

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
const bestButton = document.querySelector('.best__buttom');
const bestCards = document.querySelector('.best__cards');
const small__cards = document.querySelector('.small__cards');
const search__icon = document.querySelector('.search__icon');
const search = document.querySelector('.search');
const search__back = document.querySelector('.search__back');
const serach__inp = document.querySelector('.serach__inp');
const content__tab = document.querySelector('.content__tab');
const shop = document.querySelector('.shop');
const header__shop = document.querySelector('.header__shop');
const close__svg = document.querySelector('.close__svg');
const small__btn = document.querySelector('.small__btn ');

let arrData = []

const renderCategory = async (id) => {
    const button = document.querySelectorAll('.best__buttom > button');
    for (const i of button) {
        i.classList.remove("active__color")
    };
    button.forEach((item) => {
        if (item.dataset.id == id) {
            item.classList.add("active__color")
        }
    });


    const data = await getSingleCategory(id);
    arrData = [...data.products]
    localStorage.setItem('selectedCategory', id)

    bestCards.innerHTML = data?.products?.map((item) => {
        return `
        <div class="best__card">
        <a href="http://127.0.0.1:5500/info.html?id=${item.id}" class="best__card__top">
            <img src="${item.img}" alt="" class="best__card__img">
        </a>
        <div class="best__card__bottom">
            <h5 class="best__card__title">${item.title}</h5>
            <button class="stars__btns"><img src="./img/stars.svg" alt=""></button>
            <div class="best__price">
                <p class="best__price__txt">${item.prise}</p>
                <span class="best__price__old">${item.oldPrice}</span>
                <p class="best__price__sale ">${item.sale}</p>
            </div>
            <button class="best__card__btn" data-add="${item.id}">Buy</button>
        </div>
        </div>
        `
    }).join("")
}
const smallCrdsRender = async (id) => {
    const data = await getSingleCategory(id)
    small__cards.innerHTML = data?.products?.map((item) => {
        return `<a class="best__card" href="http://127.0.0.1:5500/info.html?id=${item.id}" data-id="${item.id}>
        <div  class="best__card__top" ">
            <img src="${item.img}" alt="" class="best__card__img">
        </div>
        <div class="best__card__bottom">
            <h5 class="best__card__title">${item.title}</h5>
            <button class="stars__btns"><img src="./img/stars.svg" alt=""></button>
            <div class="best__price">
                <p class="best__price__txt">${item.prise}</p>
                <span class="best__price__old">${item.oldPrice}</span>
                <p class="best__price__sale ">${item.sale}</p>
                </div>
            <button class="best__card__btn" data-add="${item.id}">${item.add}</button>
        </div>
        </a>`
    }).join("")
    close__svg.addEventListener("click", () => {
        shop.classList.remove("shopActive")
    })
    bestCards.addEventListener("click", async (e) => {
        const productID = e.target.dataset.add;
        const categoryID = e.target.dataset.category;
        console.log(categoryID);
        if (productID && categoryID) {
            const data = await getSingleCategory(id);
            console.log(data);
        }
        shopRender()
    })
}
const storedCategory = localStorage.getItem('selectedCategory');
if (storedCategory) {
    renderCategory(storedCategory);
    smallCrdsRender(storedCategory);
}


(async () => {
    const data = await getAllCategory()
    bestButton.innerHTML = data.map((item) => (
        `
        <button class="best__btn" data-id="${item.id}">${item.category}</button>
        `
    )).join("")
    renderCategory(data[0]?.id)
    smallCrdsRender(data[0]?.id)
})();

bestButton.addEventListener("click", (e) => {
    if (e.target.dataset.id) {
        renderCategory(e.target.dataset.id)
    }
})



$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});

bestCards.addEventListener("click", (e) => {
    const url = "http://127.0.0.1:5500/info.html?";
    let id;
    if (e.target.className == "el") {
        id = e.target.id
    }
    const params = new URLSearchParams({ id })
})
search__icon.addEventListener("click", () => {
    search.classList.add("searchactive")
})

header__shop.addEventListener("click", () => {
    shop.classList.add("shopActive")
})
small__btn.addEventListener("click", () => {
    shop.classList.add("shopActive")
})

serach__inp.addEventListener("keydown", (e) => {
    content__tab.innerHTML = arrData.filter(
        (item) =>
            item.title.toLowerCase().includes(e.target.value.toLowerCase())).map((item) => `<div class="item__card">
        <img src="${item.img}" alt="" class="item__img">
        <p class="best__card__title">${item.title}</p>
    </div>`).join("")
    if (!e.target.value) {
        content__tab.style.display = "flex";
    }
})



search__back.addEventListener("click", () => {
    search.classList.remove("searchactive")
})
menuIcon.addEventListener("click", () => {
    menuOpen.classList.add("menuActive")
})
closeBtn.addEventListener("click", () => {
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