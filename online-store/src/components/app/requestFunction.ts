import showData from './showData';
import radio from './radio';
import { app } from './app';

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

            showData(data);
            for (let i = 0; i < data.length; i++) {
                app.currentCardsData[i] = data[i];
                app.initialData[i] = data[i];
            }
            radio();
        }
    };
};

export default requestFunction;
