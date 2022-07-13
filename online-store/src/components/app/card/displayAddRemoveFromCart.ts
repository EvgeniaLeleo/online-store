/**
 * Добавление/удаление метки "В корзине" при клике по карточке и появление overlay при наведении курсора на карточку товара
 */

export const displayAddRemoveFromCart = (productCard: HTMLDivElement) => {
    const currentShadow = productCard.querySelector('.shadow') as HTMLDivElement;

    productCard.addEventListener('mouseover', () => {
        currentShadow.style.opacity = '1';
    });

    productCard.addEventListener('mouseout', () => {
        currentShadow.style.opacity = '0';
    });
};
