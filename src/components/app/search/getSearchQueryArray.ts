/**
 * Формирует массив товаров, соответствующих данным из строки поиска
 */

import { TData } from '../types';

export const getSearchQueryArray: (searchInput: HTMLInputElement) => TData[] = (searchInput) => {
    const searchQuery = searchInput.value;
    const initialData = localStorage.getItem('initialData');

    if (initialData) {
        const initialDataArray: TData[] = JSON.parse(initialData);
        const tempArray: TData[] = [];

        initialDataArray.forEach((item) => {
            if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                tempArray.push(item);
            }
        });

        return tempArray;
    }

    if (searchInput.value === '') {
        const initialData = localStorage.getItem('initialData');

        if (initialData) {
            console.log(JSON.parse(initialData));
            return JSON.parse(initialData);
        }
    }
};
