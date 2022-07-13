/**
 * Отмечает карточки товаров, находящихся в корзине
 */

export const showCardsOfProductsInCart = () => {
    const productCards = document.querySelectorAll<HTMLDivElement>('.product');
    const currentCartItems = localStorage.getItem('cartItems') as string;
    const currentCartItemsArray = JSON.parse(currentCartItems);

    productCards.forEach((productCard) => {
        const productHeading = productCard.querySelector('.product__heading') as HTMLDivElement;
        const itemName = productHeading.textContent;

        if (currentCartItemsArray.includes(itemName)) {
            productCard.classList.add('product__cart');
        }
    });
};
