import { getYearRangeArray } from '../src/components/app/sliders/getYearRangeArray';
import * as noUiSlider from 'nouislider';

it('should return an array of items corresponding to Year Slider values', () => {
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
            name: 'MENU стол',
            img: './static/table-menu.jpg',
            price: '34000',
            description: 'Для того чтобы трапезничать было приятно, необходим правильный обеденный стол',
            type: 'стол',
            purpose: 'столовая',
            color: 'коричневый',
            quantity: '3',
            date: '2019',
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
        {
            name: 'LUNAR кресло',
            img: './static/armchair-lunar.jpg',
            price: '39000',
            description: 'Прекрасно переносит солнечные лучи, перепады влажности и любые осадки',
            type: 'кресло',
            purpose: 'гостиная',
            color: 'черный',
            quantity: '7',
            date: '2021',
            popular: 'нет',
        },
        {
            name: 'NASTAN шкаф',
            img: './static/wardrobe-nastan.jpg',
            price: '81000',
            description: 'Мебель может быть оснащена разнообразными системами подсветки',
            type: 'шкаф',
            purpose: 'спальня',
            color: 'коричневый',
            quantity: '3',
            date: '2020',
            popular: 'нет',
        },
        {
            name: 'ASKESTA кресло',
            img: './static/armchair-askesta.jpg',
            price: '50000',
            description: 'Высокоэластичный пенополиуретан в «начинке» кресла надежен и долговечен',
            type: 'кресло',
            purpose: 'гостиная',
            color: 'синий',
            quantity: '10',
            date: '2021',
            popular: 'нет',
        },
        {
            name: 'NATRAN кровать',
            img: './static/bed-tatran2.jpg',
            price: '89000',
            description: 'Основание из полированной нержавеющей стали, придает оригинальный парящий эффект',
            type: 'кровать',
            purpose: 'спальня',
            color: 'коричневый',
            quantity: '2',
            date: '2018',
            popular: 'нет',
        },
        {
            name: 'NASTAN диван',
            img: './static/sofa-nastan.jpg',
            price: '79000',
            description: 'Модель отличается простотой линий и форм, отсутствием броского декора',
            type: 'диван',
            purpose: 'гостиная',
            color: 'серый',
            quantity: '2',
            date: '2022',
            popular: 'да',
        },
        {
            name: 'MENAT стол',
            img: './static/table-menu2.jpg',
            price: '30000',
            description: 'Для того чтобы трапезничать было приятно, необходим правильный обеденный стол',
            type: 'стол',
            purpose: 'столовая',
            color: 'коричневый',
            quantity: '7',
            date: '2022',
            popular: 'да',
        },
        {
            name: 'NORMAN стол',
            img: './static/table-norman.jpg',
            price: '40000',
            description: 'Станет прекрасным дополнением для вашего интерьера',
            type: 'стол',
            purpose: 'гостиная',
            color: 'белый',
            quantity: '4',
            date: '2021',
            popular: 'да',
        },
    ];

    localStorage.setItem('initialData', JSON.stringify(data));

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
        start: [2019, 2020],
        tooltips: true,
        connect: true,
        range: {
            min: 2017,
            max: 2020,
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

    const expectedResult = [
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
            name: 'MENU стол',
            img: './static/table-menu.jpg',
            price: '34000',
            description: 'Для того чтобы трапезничать было приятно, необходим правильный обеденный стол',
            type: 'стол',
            purpose: 'столовая',
            color: 'коричневый',
            quantity: '3',
            date: '2019',
            popular: 'да',
        },
        {
            name: 'NASTAN шкаф',
            img: './static/wardrobe-nastan.jpg',
            price: '81000',
            description: 'Мебель может быть оснащена разнообразными системами подсветки',
            type: 'шкаф',
            purpose: 'спальня',
            color: 'коричневый',
            quantity: '3',
            date: '2020',
            popular: 'нет',
        },
    ];

    const result = getYearRangeArray(sliderYear);

    expect(expectedResult).toEqual(result);
});
