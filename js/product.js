const productsShow = "http://localhost:3000/productInfo"
const blog = document.querySelector('.info__product__conatiner');

const hetInfoProduct = async () => {
    try {
        const res = await fetch(productsShow)
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error);
    }
}
const productsShowInfo = async () => {
    const data = await hetInfoProduct()
    blog.innerHTML = data.map((item) => {
        return `
        <div class="info__product__top">
                    <img src="${item.img}" alt="" class="info__product__img">
                </div>
                <div class="info__product__bottom">
                    <h3 class="info__product__bottom__title">${item.title}</h3>
                    <p class="info__product__bottom__txt">${item.txt}</p>
                    <div class="prises">
                    <span class="info__product__bottom__price">${item.prise}</span>
                    <p class="info__product__bottom__old">${item.oldPrice}</p>
                    <p class="info__product__bottom__sale">${item.sale}</p>
                    </div>
                    <div class="info__product__bottom__btn">
                        <div class="info__product__bottom__btn__top">
                            <h2 class="info__product__bottom__btn__top_size">Select Size</h2>
                            <p class="info__product__bottom__btn__top_guide">Size Guide</p>
                        </div>
                    </div>
                </div>
        `
    }).join("")
}
productsShowInfo()