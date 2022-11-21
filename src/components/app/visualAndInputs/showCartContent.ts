/**
 * Показывает/прячет содержимое корзины
 */

export const showCartContent: () => void = () => {
    const menu = document.querySelector('.menu') as HTMLSpanElement;
    const cartContent = document.createElement('div');
    cartContent.classList.add('cart-content');
    menu.appendChild(cartContent);

    const menuLinkCart = document.querySelector('.menu__link_cart') as HTMLSpanElement;
    const cartContentIcon = document.querySelector('.cart-items-quantity') as HTMLSpanElement;

    const showItems: () => void = () => {
        const currentCartItems = localStorage.getItem('cartItems') as string;
        const currentCartItemsArray: string[] = JSON.parse(currentCartItems);

        if (currentCartItemsArray.length === 0) {
            cartContent.textContent = 'Корзина пуста';
        } else {
            for (let i = 0; i < currentCartItemsArray.length; i++) {
                const cartItem = document.createElement('p');
                cartItem.textContent = `${i + 1}. ${currentCartItemsArray[i]}`;
                cartContent.appendChild(cartItem);
            }
        }
        cartContent.style.opacity = '1';
    };

    const hideItems: () => void = () => {
        cartContent.style.opacity = '0';
        cartContent.innerHTML = '';
    };

    menuLinkCart.addEventListener('mouseover', showItems);
    cartContentIcon.addEventListener('mouseover', showItems);

    cartContentIcon.addEventListener('mouseout', hideItems);
    menuLinkCart.addEventListener('mouseout', hideItems);
};
