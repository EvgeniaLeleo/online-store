/**
 * Вывод количества товаров в корзине
 */

export const showCartItemsQuantity: () => void = () => {
    const cartItemsQuantity = document.querySelectorAll<HTMLSpanElement>('.cart-items-quantity');
    const currentCartItems = localStorage.getItem('cartItems') as string;
    const currentCartItemsArray = JSON.parse(currentCartItems);

    cartItemsQuantity.forEach((icon) => {
        icon.style.backgroundColor = currentCartItemsArray.length ? '#426a42' : '#676767';
        icon.textContent = currentCartItemsArray.length;
    });
};
