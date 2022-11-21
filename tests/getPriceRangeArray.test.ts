import { getPriceRangeArray } from '../src/components/app/sliders/getPriceRangeArray';
import * as noUiSlider from 'nouislider';

it('should return an array of items corresponding to Price Slider values', () => {
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
        {
            name: 'VILORA кресло',
            img: './static/armchair-vilora.jpg',
            price: '21000',
            description: 'Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань',
            type: 'кресло',
            purpose: 'гостиная',
            color: 'желтый',
            quantity: '10',
            date: '2020',
            popular: 'да',
        },
        {
            name: 'ASKESTA диван',
            img: './static/sofa-askesta.jpg',
            price: '68000',
            description: 'Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать',
            type: 'диван',
            purpose: 'гостиная',
            color: 'серый',
            quantity: '5',
            date: '2021',
            popular: 'да',
        },
    ];

    localStorage.setItem('initialData', JSON.stringify(data));

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
        start: [21000, 70000],
        tooltips: true,
        connect: true,
        range: {
            min: 1000,
            max: 100000,
        },
        step: 1000,
        format: {
            to: function (value) {
                return Math.floor(value);
            },
            from: function (value) {
                return parseInt(value);
            },
        },
    });

    const expectedResult = [
        {
            name: 'VILORA кресло',
            img: './static/armchair-vilora.jpg',
            price: '21000',
            description: 'Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань',
            type: 'кресло',
            purpose: 'гостиная',
            color: 'желтый',
            quantity: '10',
            date: '2020',
            popular: 'да',
        },
        {
            name: 'ASKESTA диван',
            img: './static/sofa-askesta.jpg',
            price: '68000',
            description: 'Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать',
            type: 'диван',
            purpose: 'гостиная',
            color: 'серый',
            quantity: '5',
            date: '2021',
            popular: 'да',
        },
    ];

    const result = getPriceRangeArray(sliderPrice);

    expect(expectedResult).toEqual(result);
});
