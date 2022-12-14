/**
 * Заполнение карточки товара данными из массива data
 */

import { TData } from '../types';

const generateCardContent: (data: TData[], container: HTMLDivElement, i: number) => void = (data, container, i) => {
    const img = container.querySelector('.product__img') as HTMLImageElement;

    img.setAttribute('src', data[i].img);
    img.setAttribute('alt', `${data[i].name}: ${data[i].type}`);

    const name = container.querySelector('.product__heading') as HTMLDivElement;
    const price = container.querySelector('.product__price') as HTMLParagraphElement;
    const description = container.querySelector('.product__description') as HTMLSpanElement;
    const purpose = container.querySelector('.product__purpose') as HTMLSpanElement;
    const color = container.querySelector('.product__color') as HTMLSpanElement;
    const date = container.querySelector('.product__date') as HTMLSpanElement;
    const popular = container.querySelector('.product__popular') as HTMLSpanElement;

    name.textContent = data[i].name;
    const formattedPrice = data[i].price.split('');
    formattedPrice.splice(-3, 0, ' ');
    price.textContent = formattedPrice.join('');
    description.textContent = data[i].description;
    purpose.textContent = data[i].purpose;
    color.textContent = data[i].color;
    date.textContent = data[i].date;
    popular.textContent = data[i].popular;
};

export default generateCardContent;
