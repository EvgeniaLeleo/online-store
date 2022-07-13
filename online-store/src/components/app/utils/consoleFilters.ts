/**
 * Вывод в консоль информации о фильтрах-чекбоксах и содержимое корзины
 */

export const consoleFilters: () => void = () => {
    const typeFilter = localStorage.getItem('typeFilter');
    let typeLen = 0;
    if (typeFilter) {
        typeLen = typeFilter.length;
    }

    const purposeFilter = localStorage.getItem('purposeFilter');
    let purposeLen = 0;
    if (purposeFilter) {
        purposeLen = purposeFilter.length;
    }

    const colorFilter = localStorage.getItem('colorFilter');
    let colorLen = 0;
    if (colorFilter) {
        colorLen = colorFilter.length;
    }

    const cartItems = localStorage.getItem('cartItems');
    let cartLen = 0;
    if (cartItems) {
        cartLen = cartItems.length;
    }

    console.log(
        `Тип: ${typeLen > 2 ? localStorage.getItem('typeFilter') : 'не выбран'},\nназначение: ${
            purposeLen > 2 ? localStorage.getItem('purposeFilter') : 'не выбрано'
        },\nцвет: ${colorLen > 2 ? localStorage.getItem('colorFilter') : 'не выбран'}\nпопулярное: ${
            localStorage.getItem('popularFilter') ? 'да' : 'не выбрано'
        },\nКорзина: ${cartLen > 2 ? localStorage.getItem('cartItems') : 'пуста'}`
    );
};
