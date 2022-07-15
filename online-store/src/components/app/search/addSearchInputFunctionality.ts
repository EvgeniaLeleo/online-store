/**
 * Функционал Поиска
 */

import { getSearchQueryArray } from './getSearchQueryArray';
import { showFinalItems } from '../showFinalItems';

export const addSearchInputFunctionality: () => void = () => {
    const searchInput = document.querySelector('.search-input') as HTMLInputElement;
    getSearchQueryArray(searchInput);

    searchInput.addEventListener('input', () => {
        const searchQuery = searchInput.value;
        localStorage.setItem('searchQuery', searchQuery);

        getSearchQueryArray(searchInput);

        showFinalItems();
    });
};
