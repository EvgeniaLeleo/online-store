/**
 * Формирует массив товаров, соответствующих слайдеру цены
 */

import * as noUiSlider from 'nouislider';

import { TData } from '../types';

export const getPriceRangeArray: (sliderPrice: noUiSlider.target) => TData[] = (sliderPrice) => {
    const initialData = localStorage.getItem('initialData') || '';
    const initialDataArray: TData[] = JSON.parse(initialData);
    const rangeArray: TData[] = [];

    const rangeValues = sliderPrice.noUiSlider?.get() || [];
    const rangeValuesString = JSON.stringify(rangeValues);
    const rangeValuesArray = JSON.parse(rangeValuesString);

    initialDataArray.forEach((item) => {
        if (parseInt(item.price) >= rangeValuesArray[0] && parseInt(item.price) <= rangeValuesArray[1]) {
            rangeArray.push(item);
        }
    });

    return rangeArray;
};
