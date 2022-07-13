import { TData } from '../types';

/**
 * Находит общие элементы в двух массивах
 */
export const commonValues: <T>(array1: T[], array2: T[]) => T[] = (array1, array2) =>
    [...new Set(array1)].filter((item) => array2.includes(item));

/**
 * Находит общие товары (по ключу 'name') в двух массивах TData[]
 */
export const commonItems: (array1: TData[], array2: TData[]) => TData[] = (array1, array2) => {
    const commonItemsArray: TData[] = [];

    array1.forEach((item) => {
        array2.forEach((item2) => {
            if (item.name === item2.name) {
                commonItemsArray.push(item);
            }
        });
    });

    return commonItemsArray;
};
