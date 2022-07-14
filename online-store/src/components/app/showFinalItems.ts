/**
 * Генерация окончательного массива, соответствующего всем запросам и фильтрам
 */

import { showCards } from './card/showCards';
import { commonCheckedItems } from './filters/commonCheckedItems';
import { getSearchQueryArray } from './getSearchQueryArray';
import { commonItems } from './utils/commonItems';

export const showFinalItems = () => {
    const initialData = localStorage.getItem('initialData');

    if (initialData) {
        const searchInput = document.querySelector('.search-input') as HTMLInputElement;
        showCards(commonItems(getSearchQueryArray(searchInput), commonCheckedItems(JSON.parse(initialData))));
    }
};
