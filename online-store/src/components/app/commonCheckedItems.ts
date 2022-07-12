import { TData } from './types';
import { commonItems } from './utils';

/**
 * Формирует массив данных для отображения, пересекая исходные данные по фильтрам type, purpose, color, popular
 */

 export const commonCheckedItems: (data: TData[]) => TData[] = (data: TData[]) => {
    let tempArray: TData[] = [];

    const initialData = localStorage.getItem('initialData');

    if (initialData) {
        tempArray = JSON.parse(initialData);
    }

    if (typeFilterArray(data).length !== 0) {
        tempArray = commonItems(tempArray, typeFilterArray(data));
    }

    if (purposeFilterArray(data).length !== 0) {
        tempArray = commonItems(tempArray, purposeFilterArray(data));
    }

    if (colorFilterArray(data).length !== 0) {
        tempArray = commonItems(tempArray, colorFilterArray(data));
    }

    if (popularFilterArray(data).length !== 0) {
        tempArray = commonItems(tempArray, popularFilterArray(data));
    }

    return tempArray;
};


/**
 * Формирует массив данных для отображения, фильтруя исходные данные по фильтру type
 */

const typeFilterArray = (data: TData[]) => {
    const typeFilteredData: TData[] = [];

    JSON.parse(localStorage.typeFilter).forEach((type: string) =>
        data.forEach((item) => {
            if (item.type === type) {
                typeFilteredData.push(item);
            }
        })
    );

    // console.log(typeFilteredData);

    return typeFilteredData;
};

/**
 * Формирует массив данных для отображения, фильтруя исходные данные по фильтру purpose
 */

const purposeFilterArray = (data: TData[]) => {
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

const colorFilterArray = (data: TData[]) => {
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

const popularFilterArray = (data: TData[]) => {
    const popularFilteredData: TData[] = [];

    data.forEach((item) => {
        if (item.popular === localStorage.popularFilter) {
            popularFilteredData.push(item);
        }
    });

    return popularFilteredData;
};

