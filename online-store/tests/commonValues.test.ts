import { commonValues } from '../src/components/app/utils/commonItems';

describe('commonValues()', () => {
    it('should return an array of common items of two arrays', () => {
        const arr1 = ['диван', 'стол', 'кровать', 'кресло', 'диван'];
        const arr2 = ['стул', 'шкаф', 'диван', 'кровать', 'кресло'];

        const expectedResult = ['диван', 'кровать', 'кресло'];

        const result = commonValues(arr1, arr2);

        expect(expectedResult).toEqual(result);
    });
});
