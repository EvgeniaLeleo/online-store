import { TData } from '../types';

/**
 * Заполнение карточки товара данными из массива data
 */

const generateCardContent: (data: TData[], container: HTMLDivElement, i: number) => void = (data, container, i) => {
    const img = container.querySelector('.product__img') as HTMLImageElement;

    img.setAttribute('src', data[i].img);
    img.setAttribute('alt', `${data[i].name}: ${data[i].type}`);

    const name = container.querySelector('.product__heading') as HTMLDivElement;
    const price = container.querySelector('.product__price') as HTMLParagraphElement;
    const description = container.querySelector('.product__description') as HTMLSpanElement;
    const purpose = container.querySelector('.product__purpose') as HTMLSpanElement;
    const color = container.querySelector('.product__color') as HTMLSpanElement;
    // const quantity = container.querySelector('.product__quantity') as HTMLSpanElement;
    const date = container.querySelector('.product__date') as HTMLSpanElement;
    const popular = container.querySelector('.product__popular') as HTMLSpanElement;

    name.textContent = data[i].name;
    price.textContent = data[i].price;
    description.textContent = data[i].description;
    purpose.textContent = data[i].purpose;
    color.textContent = data[i].color;
    // quantity.textContent = data[i].quantity;
    date.textContent = data[i].date;
    popular.textContent = data[i].popular;
};

export default generateCardContent;
