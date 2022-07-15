/**
 * Формирует массив товаров, соответствующих варианту из Select
 */

import { TData } from '../types';

export const getSelectedArray: (selectInput: HTMLSelectElement) => TData[] = (selectInput) => {
    const initialData = localStorage.getItem('initialData') || '';
    const initialDataArray: TData[] = JSON.parse(initialData);
    let sortedArray: TData[] = [];

    switch (selectInput.value) {
        case 'year_new-old':
            sortedArray = initialDataArray.sort((a, b) => Number(b.date) - Number(a.date));
            return sortedArray;

        case 'year_old-new':
            sortedArray = initialDataArray.sort((a, b) => Number(a.date) - Number(b.date));
            return sortedArray;

        case 'name_a-z':
            sortedArray = initialDataArray.sort((a, b) => (a.name < b.name ? -1 : 1));
            return sortedArray;

        case 'name_z-a':
            sortedArray = initialDataArray.sort((a, b) => (a.name < b.name ? 1 : -1));
            return sortedArray;

        case 'price_low-high':
            sortedArray = initialDataArray.sort((a, b) => Number(a.price) - Number(b.price));
            return sortedArray;

        case 'price_high-low':
            sortedArray = initialDataArray.sort((a, b) => Number(b.price) - Number(a.price));
            return sortedArray;

        default:
            return sortedArray;
    }
};
