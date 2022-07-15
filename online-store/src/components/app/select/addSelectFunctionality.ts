/**
 * Функционал Select
 */

import { getSelectedArray } from './getSelectedArray';
import { showFinalItems } from '../showFinalItems';

export const addSelectFunctionality: () => void = () => {
    const select = document.querySelector('.select') as HTMLSelectElement;
    select.value = 'year_new-old';
    getSelectedArray(select);

    select.addEventListener('input', () => {
        const selectOption = select.value;
        localStorage.setItem('selectOption', selectOption);

        getSelectedArray(select);

        showFinalItems();
    });
};
