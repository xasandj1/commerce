const productsShow = "http://localhost:3000/productInfo"
const blog = document.querySelector('.info__product__conatiner');
let params = new URLSearchParams(document.location.search)
const id = params.get("id")
const siteUrl = "http://localhost:3000/productInfo"
const getInfoProduct = async () => {
    try {
        const res = await fetch(`${siteUrl}/${id}`)
        const data = await res.json()
        blog.innerHTML = `
        <div class="info__product__top">
        <img src="${data.img}" alt="" class="info__product__img">
    </div>
    <div class="info__product__bottom">
        <h3 class="info__product__bottom__title">${data.title}</h3>
        <p class="info__product__bottom__txt">${data.txt}</p>
        <div class="prises">
        <span class="info__product__bottom__price">${data.prise}</span>
        <p class="info__product__bottom__old">${data.oldPrice}</p>
        <p class="info__product__bottom__sale">${data.sale}</p>
        </div>
        <div class="info__product__bottom__btn">
            <div class="info__product__bottom__btn__top">
                <h2 class="info__product__bottom__btn__top_size">Select Size</h2>
                <p class="info__product__bottom__btn__top_guide">Size Guide</p>
            </div>
        </div>
    </div>
        `
    } catch (error) {
        console.log(error);
    }
}
getInfoProduct()