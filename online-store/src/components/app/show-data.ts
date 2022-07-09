import generateCardContent from './generate-card-content';
import TData from './types';
import { app } from './app';
import showShadow from './show-shadow';

/***
 * Добавление карточек на страницу
 */

const showData = (data: TData[]) => {
    for (let i = 0; i < data.length; i++) {
        const productCard = document.createElement('div') as HTMLDivElement;
        productCard.classList.add('product');
        // productCard.classList.add('product__cart');

        const productInfo = document.createElement('div') as HTMLDivElement;
        productInfo.classList.add('product__info');

        const productImgContainer = document.createElement('div') as HTMLDivElement;
        productImgContainer.classList.add('product__img_container');

        const productImg = document.createElement('img') as HTMLImageElement;
        productImg.classList.add('product__img');

        const productHeading = document.createElement('h3') as HTMLHeadingElement;
        productHeading.classList.add('product__heading');

        const productPrice = document.createElement('p') as HTMLParagraphElement;
        productPrice.classList.add('product__price');

        const productDetails = document.createElement('div') as HTMLDivElement;
        productDetails.classList.add('product__details');

        const productDetailsList = document.createElement('ul') as HTMLUListElement;
        productDetailsList.classList.add('product__details_list');

        for (let j = 0; j < 7; j++) {
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
        productInfo.appendChild(productPrice);

        const productDetailsNode = productCard.getElementsByTagName('li');

        productDetails.appendChild(productDetailsList);
        productDetailsNode[0].textContent = 'Тип: ';
        productDetailsNode[0].appendChild(productType);
        productDetailsNode[1].textContent = 'Назначение: ';
        productDetailsNode[1].appendChild(productPurpose);
        productDetailsNode[2].textContent = 'Цвет: ';
        productDetailsNode[2].appendChild(productColor);
        productDetailsNode[3].textContent = 'Год выхода: ';
        productDetailsNode[3].appendChild(productDate);
        productDetailsNode[4].textContent = 'Количество: ';
        productDetailsNode[4].appendChild(productQuantity);
        productDetailsNode[5].textContent = 'Популярное: ';
        productDetailsNode[5].appendChild(productPopular);
        productDetailsNode[6].appendChild(productDescription);

        const shadow = document.createElement('div') as HTMLDivElement;
        shadow.classList.add('shadow');
        shadow.textContent = 'Добавить товар в корзину';
        productCard.appendChild(shadow);

        const productContent = document.querySelector('.product-content') as HTMLDivElement;
        productContent.appendChild(productCard);

        generateCardContent(data, productCard, i);
    }

    // запись текущих данных в глобальный объект
    for (let i = 0; i < data.length; i++) {
        app.currentCardsData[i] = data[i];
    }

    showShadow();

    // arrowSlider(data); //добавляем функционал слайдеру
};

export default showData;
