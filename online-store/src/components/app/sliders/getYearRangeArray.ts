/**
 * Формирует массив товаров, соответствующих слайдеру даты
 */

import { TData } from '../types';
import * as noUiSlider from 'nouislider';

export const getYearRangeArray: (sliderYear: noUiSlider.target) => TData[] = (sliderYear) => {
    const initialData = localStorage.getItem('initialData') || '';
    const initialDataArray: TData[] = JSON.parse(initialData);
    const rangeArray: TData[] = [];

    const rangeValues = sliderYear.noUiSlider?.get() || [];
    const rangeValuesString = JSON.stringify(rangeValues);
    const rangeValuesArray = JSON.parse(rangeValuesString);

    initialDataArray.forEach((item) => {
        if (parseInt(item.date) >= rangeValuesArray[0] && parseInt(item.date) <= rangeValuesArray[1]) {
            rangeArray.push(item);
        }
    });

    return rangeArray;
};
