const toggleCart = () => {
    const productCards = document.querySelectorAll<HTMLDivElement>('.product');

    productCards.forEach((productCard) => {
        const currentShadow = productCard.querySelector('.shadow') as HTMLDivElement;

        productCard.addEventListener('click', () => {
            productCard.classList.toggle('product__cart');

            if (productCard.classList.contains('product__cart')) {
                currentShadow.textContent = 'Удалить из корзины';
            } else {
                currentShadow.textContent = 'Добавить в корзину';
            }
        });
    });
};

export default toggleCart;
