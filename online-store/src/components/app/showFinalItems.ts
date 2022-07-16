/**
 * Генерация окончательного массива, соответствующего всем запросам и фильтрам
 */

import { showCards } from './card/showCards';
import { commonCheckedItems } from './checkboxes/commonCheckedItems';
import { getSearchQueryArray } from './search/getSearchQueryArray';
import { getSelectedArray } from './select/getSelectedArray';
import { commonItems } from './utils/commonItems';
import * as noUiSlider from 'nouislider';
import { getPriceRangeArray } from './sliders/getPriceRangeArray';
import { getYearRangeArray } from './sliders/getYearRangeArray';

export const showFinalItems: () => void = () => {
    const initialData = localStorage.getItem('initialData') || '';

    const searchInput = document.querySelector('.search-input') as HTMLInputElement;
    const selectInput = document.querySelector('.select') as HTMLSelectElement;
    const sliderPrice = document.querySelector('.slider_price') as noUiSlider.target;
    const sliderYear = document.querySelector('.slider_year') as noUiSlider.target;

    showCards(
        commonItems(
            getSelectedArray(selectInput),
            commonItems(
                getYearRangeArray(sliderYear),
                commonItems(
                    getPriceRangeArray(sliderPrice),
                    commonItems(getSearchQueryArray(searchInput), commonCheckedItems(JSON.parse(initialData)))
                )
            )
        )
    );
};
