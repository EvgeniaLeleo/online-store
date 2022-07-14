/***
 * Запрос данных из файла data.json и вывод их на текущую страницу в карточки
 */

import { showCards } from './card/showCards';
import typeFilter from './filters/typeFilter';
import purposeFilter from './filters/purposeFilter';
import colorFilter from './filters/colorFilter';
import { popularFilter } from './filters/popularFilter';
import { addSearchInputFunctionality } from './addSearchInputFunctionality';

export const requestFunction: () => void = () => {
    const request = new XMLHttpRequest();

    request.open('GET', './static/data.json');

    request.send();

    request.onload = function () {
        if (request.status !== 200) {
            console.error('Не удалось получить данные!');
        } else {
            const data = JSON.parse(request.response);

            localStorage.setItem('initialData', JSON.stringify(data));

            showCards(data);

            addSearchInputFunctionality();
            typeFilter();
            purposeFilter();
            colorFilter();
            popularFilter();
        }
    };
};
