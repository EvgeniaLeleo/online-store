/**
 * Выводит карточки товара, соответствующие данным LocalStorage, а при их отсутствии делает запрос и выводит новые данные
 */

import { checkCheckboxesFromLocalStorage } from './visualAndInputs/checkCheckboxesFromLocalStorage';
import { requestFunction } from './requestFunction';
import { resetLocalStorage } from './resetLocalStorage';
import { showCartItemsQuantity } from './visualAndInputs/showCartItemsQuantity';
import { showFinalItems } from './showFinalItems';
import { addFunctionality } from './addFunctionality';
import * as noUiSlider from 'nouislider';

export const generateActualContent: () => void = () => {
    const initialData = localStorage.getItem('initialData');
    const typeFilterData = localStorage.getItem('typeFilter') || '[]';
    const purposeFilterData = localStorage.getItem('purposeFilter') || '[]';
    const colorFilterData = localStorage.getItem('colorFilter') || '[]';
    const popularFilterData = localStorage.getItem('popularFilter') || '';
    const rangePriceData = localStorage.getItem('rangePrice') || '[]';
    const rangeYearData = localStorage.getItem('rangeYear') || '[]';
    const cartItemsData = localStorage.getItem('cartItems') || '';
    const searchQuery = localStorage.getItem('searchQuery') || '';
    const selectOption = localStorage.getItem('selectOption') || '';

    const typeFilterArray: string[] = JSON.parse(typeFilterData);
    const purposeFilterArray: string[] = JSON.parse(purposeFilterData);
    const colorFilterArray: string[] = JSON.parse(colorFilterData);
    const rangePriceArray: string[] = JSON.parse(rangePriceData);
    const rangeYearArray: string[] = JSON.parse(rangeYearData);

    if (
        initialData &&
        (typeFilterArray.length ||
            purposeFilterArray.length ||
            colorFilterArray.length ||
            rangePriceArray.length ||
            rangeYearArray.length ||
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

        const sliderPrice = document.querySelector('.slider_price') as noUiSlider.target;
        sliderPrice.noUiSlider?.set([rangePriceArray[0], rangePriceArray[1]]);

        const sliderValueMin = document.querySelector('.slider__value_min') as HTMLDivElement;
        sliderValueMin.textContent = rangePriceArray[0];

        const sliderValueMax = document.querySelector('.slider__value_max') as HTMLDivElement;
        sliderValueMax.textContent = rangePriceArray[1];

        const sliderYear = document.querySelector('.slider_year') as noUiSlider.target;
        sliderYear.noUiSlider?.set([rangeYearArray[0], rangeYearArray[1]]);

        const sliderYearMin = document.querySelector('.slider__year_min') as HTMLDivElement;
        sliderYearMin.textContent = rangeYearArray[0];

        const sliderYearMax = document.querySelector('.slider__year_max') as HTMLDivElement;
        sliderYearMax.textContent = rangeYearArray[1];

        showFinalItems();
    } else {
        resetLocalStorage();
        requestFunction();
    }
};
