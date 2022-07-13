import showCards from './showCards';
import typeFilter from './filters/typeFilter';
import purposeFilter from './filters/purposeFilter';
import colorFilter from './filters/colorFilter';
import popularFilter from './filters/popularFilter';

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

            showCards(data);

            typeFilter();
            purposeFilter();
            colorFilter();
            popularFilter();
        }
    };
};

export default requestFunction;
