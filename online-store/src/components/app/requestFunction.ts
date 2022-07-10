import { checkboxFilters } from './checkboxFilters';
import purposeFilter from './purposeFilter';
import showData from './showData';
import typeFilter from './typeFilter';

/***
 * Запрос данных из файла data.json и вывод их на текущую страницу в карточки
 */

const requestFunction = () => {
    const request = new XMLHttpRequest();

    request.open('GET', './static/data.json');

    request.send();

    request.onload = function () {
        if (request.status !== 200) {
            console.error('Не удалось получить данные!');
        } else {
            const data = JSON.parse(request.response);

            localStorage.setItem('initialData', JSON.stringify(data));

            typeFilter();
            purposeFilter();
            checkboxFilters();

            showData(data);

            // const typeFilterData = localStorage.getItem('typeFilter');

            // if (typeFilterData) {
            //     showData(JSON.parse(typeFilterData));
            // } else {
            //     showData(data);
            // }
        }
    };
};

export default requestFunction;
