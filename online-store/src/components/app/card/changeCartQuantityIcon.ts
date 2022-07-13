/**
 * Иконка, показывающая количество товаров в корзине
 */

export const changeCartQuantityIcon: (cartItems: string[]) => void = (cartItems) => {
    const cartItemsQuantity = document.querySelectorAll<HTMLSpanElement>('.cart-items-quantity');

    cartItemsQuantity.forEach((icon) => {
        icon.style.backgroundColor = cartItems.length ? '#426a42' : '#676767';
        icon.textContent = cartItems.length.toString();
    });
};
