/**
 * Формирует массив данных для отрисовки, пересекая исходные данные по фильтрам type, purpose, color, popular
 */

import { TData } from '../types';
import { commonItems } from '../utils/commonItems';

export const commonCheckedItems: (data: TData[]) => TData[] = (data) => {
    let tempArray: TData[] = data;

    if (typeFilterArray(data).length) {
        tempArray = commonItems(tempArray, typeFilterArray(data));
    }

    if (purposeFilterArray(data).length) {
        tempArray = commonItems(tempArray, purposeFilterArray(data));
    }

    if (colorFilterArray(data).length) {
        tempArray = commonItems(tempArray, colorFilterArray(data));
    }

    if (popularFilterArray(data).length) {
        tempArray = commonItems(tempArray, popularFilterArray(data));
    }

    return tempArray;
};

/**
 * Формирует массив данных для отображения, фильтруя исходные данные по фильтру type
 */

const typeFilterArray: (data: TData[]) => TData[] = (data) => {
    const typeFilteredData: TData[] = [];

    JSON.parse(localStorage.typeFilter).forEach((type: string) =>
        data.forEach((item) => {
            if (item.type === type) {
                typeFilteredData.push(item);
            }
        })
    );

    return typeFilteredData;
};

/**
 * Формирует массив данных для отображения, фильтруя исходные данные по фильтру purpose
 */

const purposeFilterArray: (data: TData[]) => TData[] = (data) => {
    const purposeFilteredData: TData[] = [];

    JSON.parse(localStorage.purposeFilter).forEach((purpose: string) =>
        data.forEach((item) => {
            if (item.purpose === purpose) {
                purposeFilteredData.push(item);
            }
        })
    );

    return purposeFilteredData;
};

/**
 * Формирует массив данных для отображения, фильтруя исходные данные по фильтру color
 */

const colorFilterArray: (data: TData[]) => TData[] = (data) => {
    const colorFilteredData: TData[] = [];

    JSON.parse(localStorage.colorFilter).forEach((color: string) =>
        data.forEach((item) => {
            if (item.color === color) {
                colorFilteredData.push(item);
            }
        })
    );

    return colorFilteredData;
};

/**
 * Формирует массив данных для отображения, фильтруя исходные данные по фильтру popular
 */

const popularFilterArray: (data: TData[]) => TData[] = (data) => {
    const popularFilteredData: TData[] = [];

    data.forEach((item) => {
        if (item.popular === localStorage.popularFilter) {
            popularFilteredData.push(item);
        }
    });

    return popularFilteredData;
};
