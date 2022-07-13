/**
 * Вывод в консоль информации о фильтрах-чекбоксах
 */

export const consoleFilters = () => {
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

    console.log(
        `Тип: ${typeLen > 2 ? localStorage.getItem('typeFilter') : 'не выбран'},\nназначение: ${
            purposeLen > 2 ? localStorage.getItem('purposeFilter') : 'не выбрано'
        },\nцвет: ${colorLen > 2 ? localStorage.getItem('colorFilter') : 'не выбран'}\nпопулярный: ${
            localStorage.getItem('popularFilter') ? 'да' : 'не выбрано'
        }`
    );
};
