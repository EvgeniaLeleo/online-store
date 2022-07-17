import { getSelectedArray } from '../src/components/app/select/getSelectedArray';

describe('getSelectedArray()', () => {
    it('should return an array of items corresponding to Select option (name A-Z)', () => {
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
                description:
                    'Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань',
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

        const select = document.createElement('select');
        const option = document.createElement('option');
        select.appendChild(option);
        option.value = 'name_a-z';
        select.options[0].selected = true;

        console.log('val', select.value);

        const expectedResult = [
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
                description:
                    'Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань',
                type: 'кресло',
                purpose: 'гостиная',
                color: 'желтый',
                quantity: '10',
                date: '2020',
                popular: 'да',
            },
        ];

        const result = getSelectedArray(select);

        expect(expectedResult).toEqual(result);
    });
});
