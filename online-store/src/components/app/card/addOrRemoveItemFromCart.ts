/**
 * Добавляет/удаляет продукт из корзины при клике на карточку
 */

import { consoleFilters } from '../utils/consoleFilters';
import { changeCartQuantityIcon } from './changeCartQuantityIcon';

export const addOrRemoveItemFromCart: (productCard: HTMLDivElement) => void = (productCard) => {
    productCard.addEventListener('click', () => {
        const currentCartItems = localStorage.getItem('cartItems') as string;
        const currentCartItemsArray: string[] = JSON.parse(currentCartItems);

        const productHeading = productCard.querySelector('.product__heading') as HTMLHeadingElement;
        const itemName = productHeading.textContent as string;
        const currentShadow = productCard.querySelector('.shadow') as HTMLDivElement;

        if (!currentCartItemsArray.includes(itemName) && currentCartItemsArray.length < 3) {
            currentCartItemsArray.push(itemName);
            productCard.classList.add('product__cart');
            currentShadow.textContent = 'Удалить из корзины';
        } else if (currentCartItemsArray.includes(itemName)) {
            currentCartItemsArray.splice(currentCartItemsArray.indexOf(itemName), 1);
            productCard.classList.remove('product__cart');
            currentShadow.textContent = 'Добавить в корзину';
        } else {
            alert('Извините, все слоты заполнены');
        }

        localStorage.setItem('cartItems', JSON.stringify(currentCartItemsArray));

        changeCartQuantityIcon(currentCartItemsArray);

        consoleFilters();
    });
};
