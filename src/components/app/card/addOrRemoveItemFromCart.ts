/**
 * Добавляет/удаляет продукт из корзины при клике на карточку
 */

import { AlertWindow } from '../AlertWindow';
import { changeCartQuantityIcon } from './changeCartQuantityIcon';

export const addOrRemoveItemFromCart: (productCard: HTMLDivElement) => void = (productCard) => {
    const maxCart = 10;

    productCard.addEventListener('click', () => {
        const currentCartItems = localStorage.getItem('cartItems') as string;
        const currentCartItemsArray: string[] = JSON.parse(currentCartItems);

        const productHeading = productCard.querySelector('.product__heading') as HTMLHeadingElement;
        const itemName = productHeading.textContent as string;
        const currentShadow = productCard.querySelector('.shadow') as HTMLDivElement;

        if (!currentCartItemsArray.includes(itemName) && currentCartItemsArray.length < maxCart) {
            currentCartItemsArray.push(itemName);
            productCard.classList.add('product__cart');
            currentShadow.textContent = 'Удалить из корзины';
        } else if (currentCartItemsArray.includes(itemName)) {
            currentCartItemsArray.splice(currentCartItemsArray.indexOf(itemName), 1);
            productCard.classList.remove('product__cart');
            currentShadow.textContent = 'Добавить в корзину';
        } else {
            const alertWindow = new AlertWindow(maxCart);
            alertWindow.show();
        }

        localStorage.setItem('cartItems', JSON.stringify(currentCartItemsArray));

        changeCartQuantityIcon(currentCartItemsArray);
    });
};
