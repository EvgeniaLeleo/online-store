/***
 * Запрос данных из файла data.json и вывод их на текущую страницу в карточки
 */

import { TData } from './types';
import { showFinalItems } from './showFinalItems';
import { addFunctionality } from './addFunctionality';

export const requestFunction: () => void = () => {
    const request = new XMLHttpRequest();

    request.open('GET', './static/data.json');

    request.send();

    request.onload = function () {
        if (request.status !== 200) {
            console.error('Не удалось получить данные!');
        } else {
            const data: TData[] = JSON.parse(request.response);

            localStorage.setItem('initialData', JSON.stringify(data));

            addFunctionality();

            showFinalItems();
        }
    };
};
