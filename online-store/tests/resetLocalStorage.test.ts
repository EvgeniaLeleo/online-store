import { resetLocalStorage } from '../src/components/app/resetLocalStorage';
import * as noUiSlider from 'nouislider';

it('should reset localStorage.initialData', () => {
    const data = [
        {
            name: 'RONALD диван',
            img: './static/sofa-ronald.jpg',
            price: '90000',
            description: 'Модель отличается простотой линий и форм, отсутствием броского декора',
            type: 'диван',
            purpose: 'гостиная',
            color: 'белый',
            quantity: '3',
            date: '2017',
            popular: 'да',
        },
        {
            name: 'TATRAN кровать',
            img: './static/bed-tatran.jpg',
            price: '80000',
            description: 'Основание из полированной нержавеющей стали, придает оригинальный парящий эффект',
            type: 'кровать',
            purpose: 'спальня',
            color: 'коричневый',
            quantity: '2',
            date: '2019',
            popular: 'да',
        },
    ];

    localStorage.setItem('initialData', JSON.stringify([data]));

    const sliderPrice = document.createElement('div');
    sliderPrice.classList.add('slider_price');
    document.body.appendChild(sliderPrice);

    const sliderValueMin = document.createElement('div');
    sliderValueMin.classList.add('slider__value_min');
    document.body.appendChild(sliderValueMin);

    const sliderValueMax = document.createElement('div');
    sliderValueMax.classList.add('slider__value_max');
    document.body.appendChild(sliderValueMax);

    noUiSlider.create(sliderPrice, {
        start: [0, 1],
        tooltips: true,
        connect: true,
        range: {
            min: 0,
            max: 1,
        },
        step: 1,
        format: {
            to: function (value) {
                return Math.floor(value);
            },
            from: function (value) {
                return parseInt(value);
            },
        },
    });

    const sliderYear = document.createElement('div');
    sliderYear.classList.add('slider_year');
    document.body.appendChild(sliderYear);

    const sliderYearMin = document.createElement('div');
    sliderYearMin.classList.add('slider__year_min');
    document.body.appendChild(sliderYearMin);

    const sliderYearMax = document.createElement('div');
    sliderYearMax.classList.add('slider__year_max');
    document.body.appendChild(sliderYearMax);

    noUiSlider.create(sliderYear, {
        start: [0, 1],
        tooltips: true,
        connect: true,
        range: {
            min: 0,
            max: 1,
        },
        step: 1,
        format: {
            to: function (value) {
                return Math.floor(value);
            },
            from: function (value) {
                return parseInt(value);
            },
        },
    });

    resetLocalStorage();

    const expectedResult = JSON.stringify([]);
    const result = localStorage.getItem('initialData');

    expect(expectedResult).toBe(result);
});
