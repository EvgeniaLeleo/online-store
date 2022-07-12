import showCards from './showCards';
import typeFilter from './typeFilter';
import purposeFilter from './purposeFilter';

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
        }
    };
};

export default requestFunction;
