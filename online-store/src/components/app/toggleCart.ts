const toggleCart = () => {
    const productCards = document.querySelectorAll<HTMLDivElement>('.product');

    productCards.forEach((productCard) => {
        const currentShadow = productCard.querySelector('.shadow') as HTMLDivElement;
        const productInCart = productCard.querySelector('.product__in-cart') as HTMLDivElement;

        productCard.addEventListener('click', () => {
            productCard.classList.toggle('product__cart');

            if (productCard.classList.contains('product__cart')) {
                currentShadow.textContent = 'Удалить из корзины';
                productInCart.style.opacity = '1';
            } else {
                currentShadow.textContent = 'Добавить в корзину';
                productInCart.style.opacity = '0';
            }
        });
    });
};

export default toggleCart;
