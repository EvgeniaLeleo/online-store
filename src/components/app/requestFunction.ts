/***
 * Запрос данных из файла data.json и вывод их на текущую страницу в карточки
 */

import { showFinalItems } from './showFinalItems';
import { addFunctionality } from './addFunctionality';

export const requestFunction: () => void = async () => {
    const request = await fetch('./static/data.json');

    if (request.ok) {
        const json = await request.json();

        localStorage.setItem('initialData', JSON.stringify(json));

        addFunctionality();

        showFinalItems();
    } else {
        console.error('Не удалось получить данные!');
    }
};
