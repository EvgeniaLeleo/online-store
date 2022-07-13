/***
 * Добавление карточек на страницу (структура и функционал)
 */

import generateCardContent from './generateCardContent';
import { TData } from '../types';
import { displayAddRemoveFromCart } from './displayAddRemoveFromCart';
import { showCardsOfProductsInCart } from './showCardsOfProductsInCart';
import { addOrRemoveItemFromCart } from './addOrRemoveItemFromCart';

export const showCards: (data: TData[]) => void = (data) => {
    const productContent = document.querySelector('.product-content') as HTMLDivElement;
    productContent.innerHTML = '';

    if (data.length === 0) {
        productContent.innerHTML = '<span class="no-items-text">Извините, по Вашему запросу ничего не найдено</span>';
        return;
    }

    for (let i = 0; i < data.length; i++) {
        const productCard = document.createElement('div') as HTMLDivElement;
        productCard.classList.add('product');

        const productInfo = document.createElement('div') as HTMLDivElement;
        productInfo.classList.add('product__info');

        const productImgContainer = document.createElement('div') as HTMLDivElement;
        productImgContainer.classList.add('product__img_container');

        const productImg = document.createElement('img') as HTMLImageElement;
        productImg.classList.add('product__img');

        const productHeading = document.createElement('h3') as HTMLHeadingElement;
        productHeading.classList.add('product__heading');

        const productPriceContainer = document.createElement('div') as HTMLDivElement;
        productPriceContainer.classList.add('product__price-container');

        const productPrice = document.createElement('p') as HTMLParagraphElement;
        productPrice.classList.add('product__price');

        const productInCartIcon = document.createElement('div') as HTMLDivElement;
        productInCartIcon.classList.add('product__in-cart');
        productInCartIcon.textContent = 'В корзине';

        const productDetails = document.createElement('div') as HTMLDivElement;
        productDetails.classList.add('product__details');

        const productDetailsList = document.createElement('ul') as HTMLUListElement;
        productDetailsList.classList.add('product__details_list');

        for (let j = 0; j < 5; j++) {
            const productDetail = document.createElement('li') as HTMLLIElement;
            productDetailsList.appendChild(productDetail);
        }

        const productType = document.createElement('span') as HTMLSpanElement;
        productType.classList.add('product__type');

        const productPurpose = document.createElement('span') as HTMLSpanElement;
        productPurpose.classList.add('product__purpose');

        const productColor = document.createElement('span') as HTMLSpanElement;
        productColor.classList.add('product__color');

        const productDate = document.createElement('span') as HTMLSpanElement;
        productDate.classList.add('product__date');

        const productQuantity = document.createElement('span') as HTMLSpanElement;
        productQuantity.classList.add('product__quantity');

        const productPopular = document.createElement('span') as HTMLSpanElement;
        productPopular.classList.add('product__popular');

        const productDescription = document.createElement('span') as HTMLSpanElement;
        productDescription.classList.add('product__description');

        productCard.appendChild(productInfo);
        productCard.appendChild(productDetails);

        productInfo.appendChild(productImgContainer);
        productImgContainer.appendChild(productImg);
        productInfo.appendChild(productHeading);
        productInfo.appendChild(productPriceContainer);
        productPriceContainer.appendChild(productPrice);
        productPriceContainer.appendChild(productInCartIcon);

        const productDetailsNode = productCard.getElementsByTagName('li');

        productDetails.appendChild(productDetailsList);
        productDetailsNode[0].textContent = 'Назначение: ';
        productDetailsNode[0].appendChild(productPurpose);
        productDetailsNode[1].textContent = 'Цвет: ';
        productDetailsNode[1].appendChild(productColor);
        productDetailsNode[2].textContent = 'Год выхода: ';
        productDetailsNode[2].appendChild(productDate);
        // productDetailsNode[4].textContent = 'Количество: ';
        // productDetailsNode[4].appendChild(productQuantity);
        productDetailsNode[3].textContent = 'Популярное: ';
        productDetailsNode[3].appendChild(productPopular);
        productDetailsNode[4].appendChild(productDescription);

        const shadow = document.createElement('div') as HTMLDivElement;
        shadow.classList.add('shadow');
        shadow.textContent = 'Добавить товар в корзину';
        productCard.appendChild(shadow);

        productContent.appendChild(productCard);

        generateCardContent(data, productCard, i);

        addOrRemoveItemFromCart(productCard);
        displayAddRemoveFromCart(productCard);
    }

    showCardsOfProductsInCart();
};
