/**
 * Выводит карточки товара, соответствующие данным LocalStorage, а при их отсутствии делает запрос и выводит новые данные
 */

import { addSearchInputFunctionality } from './addSearchInputFunctionality';
import { checkCheckboxesFromLocalStorage } from './checkCheckboxesFromLocalStorage';
import colorFilter from './filters/colorFilter';
import { popularFilter } from './filters/popularFilter';
import purposeFilter from './filters/purposeFilter';
import typeFilter from './filters/typeFilter';
import { requestFunction } from './requestFunction';
import { resetLocalStorage } from './resetLocalStorage';
import { showCartItemsQuantity } from './showCartItemsQuantity';
import { showFinalItems } from './showFinalItems';

export const generateActualContent: () => void = () => {
    // проверка наличия данных в Local Storage
    const initialData = localStorage.getItem('initialData');
    const typeFilterData = localStorage.getItem('typeFilter');
    const purposeFilterData = localStorage.getItem('purposeFilter');
    const colorFilterData = localStorage.getItem('colorFilter');
    const popularFilterData = localStorage.getItem('popularFilter');
    const cartItemsData = localStorage.getItem('cartItems');
    const searchQuery = localStorage.getItem('searchQuery');

    let typeFilterArray: string[] = [];
    let typeFilterLen;
    let purposeFilterArray: string[] = [];
    let purposeFilterLen;
    let colorFilterArray: string[] = [];
    let colorFilterLen;

    if (typeFilterData) {
        typeFilterArray = JSON.parse(typeFilterData);
        typeFilterLen = typeFilterArray.length;
    }
    if (purposeFilterData) {
        purposeFilterArray = JSON.parse(purposeFilterData);
        purposeFilterLen = purposeFilterArray.length;
    }
    if (colorFilterData) {
        colorFilterArray = JSON.parse(colorFilterData);
        colorFilterLen = colorFilterArray.length;
    }

    if (
        initialData &&
        (typeFilterLen || purposeFilterLen || colorFilterLen || popularFilterData || cartItemsData || searchQuery)
    ) {
        const searchInput = document.querySelector('.search-input') as HTMLInputElement;
        addSearchInputFunctionality();

        typeFilter();
        purposeFilter();
        colorFilter();
        popularFilter();

        showCartItemsQuantity();

        searchInput.value = searchQuery || '';
        checkCheckboxesFromLocalStorage(typeFilterArray, purposeFilterArray, colorFilterArray, popularFilterData);
        //если ничего не отмечено, показывается все карточки
        // showCardsIfCheckboxNotChecked();
        showFinalItems();
    } else {
        resetLocalStorage();
        requestFunction();
    }
};
