/**
 * Вывод в консоль информации о фильтрах-чекбоксах и содержимого корзины
 */

export const consoleFilters: () => void = () => {
    const typeFilter = localStorage.getItem('typeFilter') || '[]';
    const typeLen = typeFilter.length;

    const purposeFilter = localStorage.getItem('purposeFilter') || '[]';
    const purposeLen = purposeFilter.length;

    const colorFilter = localStorage.getItem('colorFilter') || '[]';
    const colorLen = colorFilter.length;

    const cartItems = localStorage.getItem('cartItems') || '[]';
    const cartLen = cartItems.length;

    const rangePrice = localStorage.getItem('rangePrice') || '[]';
    const rangePriceArray = JSON.parse(rangePrice);

    console.log(
        `Тип: ${typeLen > 2 ? localStorage.getItem('typeFilter') : 'не выбран'},\nназначение: ${
            purposeLen > 2 ? localStorage.getItem('purposeFilter') : 'не выбрано'
        },\nцвет: ${colorLen > 2 ? localStorage.getItem('colorFilter') : 'не выбран'},\nпопулярное: ${
            localStorage.getItem('popularFilter') ? 'да' : 'не выбрано'
        },\nцена: ${
            rangePriceArray[0] !== '100' || rangePriceArray[1] !== '100000'
                ? `${rangePriceArray[0]} - ${rangePriceArray[1]}`
                : 'не задана'
        }\n\nПоиск: ${
            localStorage.getItem('searchQuery') ? localStorage.getItem('searchQuery') : 'не задан'
        }\nКорзина: ${cartLen > 2 ? localStorage.getItem('cartItems') : 'пуста'}`
    );
};

//  ${rangePrice? `${rangePriceArray[0]} - ${rangePriceArray[1]}`:'не задана'}
