import { TData } from './types';

/**
 * Блокирует все ссылки на странице
 */
export const disableLinks = () => {
    const links = document.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', (e) => e.preventDefault());
    }
};

/**
 * Блокирует все ссылки на странице, кроме copyright и RS Logo
 */
export const disableMainLinks = () => {
    const top = document.querySelector('.top_catalog') as HTMLDivElement;
    const filters = document.querySelector('.filters') as HTMLDivElement;
    const footerMainInformation = document.querySelector('.footer__main-information') as HTMLDivElement;

    const linksTop = top.getElementsByTagName('a');
    const linksFilters = filters.getElementsByTagName('a');
    const linksFooter = footerMainInformation.getElementsByTagName('a');

    for (let i = 0; i < linksTop.length; i++) {
        linksTop[i].addEventListener('click', (e) => e.preventDefault());
    }

    for (let i = 0; i < linksFilters.length; i++) {
        linksFilters[i].addEventListener('click', (e) => e.preventDefault());
    }

    for (let i = 0; i < linksFooter.length; i++) {
        linksFooter[i].addEventListener('click', (e) => e.preventDefault());
    }
};

/**
 * Блокирует отправку формы в футере
 */
export const disableFooterForm = () => {
    const footerForm = document.querySelector('.footer__form') as HTMLFormElement;

    footerForm?.addEventListener('submit', (e) => e.preventDefault());
};

/**
 * Находит общие элементы в двух массивах
 */
export const commonValues: <T>(array1: T[], array2: T[]) => T[] = (array1, array2) =>
    [...new Set(array1)].filter((item) => array2.includes(item));

/**
 * Находит общие товары (name) в двух массивах TData[]
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
