/**
 * Генерация окончательного массива, соответствующего всем запросам и фильтрам
 */

import { showCards } from './card/showCards';
import { commonCheckedItems } from './checkboxes/commonCheckedItems';
import { getSearchQueryArray } from './search/getSearchQueryArray';
import { getSelectedArray } from './select/getSelectedArray';
import { commonItems } from './utils/commonItems';

export const showFinalItems: () => void = () => {
    const initialData = localStorage.getItem('initialData') || '';

    const searchInput = document.querySelector('.search-input') as HTMLInputElement;
    const selectInput = document.querySelector('.select') as HTMLSelectElement;

    showCards(
        commonItems(
            getSelectedArray(selectInput),
            commonItems(getSearchQueryArray(searchInput), commonCheckedItems(JSON.parse(initialData)))
        )
    );
};
