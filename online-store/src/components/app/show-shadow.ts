const showShadow = () => {
    const productCards = document.querySelectorAll<HTMLDivElement>('.product');

    productCards.forEach((productCard) => {
        const currentShadow = productCard.querySelector('.shadow') as HTMLDivElement;

        productCard.addEventListener('mouseover', () => {
            currentShadow.style.opacity = '1';
        });

        productCard.addEventListener('mouseout', () => {
            currentShadow.style.opacity = '0';
        });

        if (productCard.classList.contains('product__cart')) {
            currentShadow.textContent = 'Удалить из корзины';
        } else {
            currentShadow.textContent = 'Добавить в корзину';
        }
    });
};

export default showShadow;
