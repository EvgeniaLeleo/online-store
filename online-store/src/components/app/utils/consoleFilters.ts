/**
 * Вывод в консоль информации о фильтрах-чекбоксах
 */

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

export const consoleFilters = () => {
    console.log(
        `Тип: ${typeLen > 2 ? localStorage.getItem('typeFilter') : 'не выбран'}, назначение: ${
            purposeLen > 2 ? localStorage.getItem('purposeFilter') : 'не выбрано'
        }, цвет: ${colorLen > 2 ? localStorage.getItem('colorFilter') : 'не выбран'}, популярный: ${
            localStorage.getItem('popularFilter') ? 'да' : 'не выбрано'
        }`
    );
};
