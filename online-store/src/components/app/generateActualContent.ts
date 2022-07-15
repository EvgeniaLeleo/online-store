/**
 * Выводит карточки товара, соответствующие данным LocalStorage, а при их отсутствии делает запрос и выводит новые данные
 */

import { checkCheckboxesFromLocalStorage } from './visualAndInputs/checkCheckboxesFromLocalStorage';
import { requestFunction } from './requestFunction';
import { resetLocalStorage } from './resetLocalStorage';
import { showCartItemsQuantity } from './visualAndInputs/showCartItemsQuantity';
import { showFinalItems } from './showFinalItems';
import { addFunctionality } from './addFunctionality';

export const generateActualContent: () => void = () => {
    const initialData = localStorage.getItem('initialData');
    const typeFilterData = localStorage.getItem('typeFilter') || '';
    const purposeFilterData = localStorage.getItem('purposeFilter') || '';
    const colorFilterData = localStorage.getItem('colorFilter') || '';
    const popularFilterData = localStorage.getItem('popularFilter') || '';
    const cartItemsData = localStorage.getItem('cartItems') || '';
    const searchQuery = localStorage.getItem('searchQuery') || '';
    const selectOption = localStorage.getItem('selectOption') || '';

    const typeFilterArray: string[] = JSON.parse(typeFilterData);
    const purposeFilterArray: string[] = JSON.parse(purposeFilterData);
    const colorFilterArray: string[] = JSON.parse(colorFilterData);

    if (
        initialData &&
        (typeFilterArray.length ||
            purposeFilterArray.length ||
            colorFilterArray.length ||
            popularFilterData ||
            cartItemsData ||
            searchQuery ||
            selectOption)
    ) {
        addFunctionality();

        showCartItemsQuantity();

        const searchInput = document.querySelector('.search-input') as HTMLInputElement;
        searchInput.value = searchQuery || '';

        const select = document.querySelector('.select') as HTMLSelectElement;
        select.value = selectOption || 'year_new-old';

        checkCheckboxesFromLocalStorage(typeFilterArray, purposeFilterArray, colorFilterArray, popularFilterData);

        showFinalItems();
    } else {
        resetLocalStorage();
        requestFunction();
    }
};
