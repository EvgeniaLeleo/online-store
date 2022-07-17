import { commonItems } from '../src/components/app/utils/commonItems';

describe('commonItems()', () => {
    it('should find array of common items of two arrays', () => {
        const arr1 = [
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
        const arr2 = [
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

        const expectedResult = [
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
        ];

        const result = commonItems(arr1, arr2);

        expect(expectedResult).toEqual(result);
    });
});
