/**
 * Кнопка сброса поля Поиска
 */

import { showFinalItems } from '../showFinalItems';
import { consoleFilters } from '../utils/consoleFilters';

export const addResetInputButton: () => void = () => {
    const searchInput = document.querySelector('.search-input') as HTMLInputElement;
    const searchInputContainer = document.querySelector('.search-input-container') as HTMLInputElement;
    const resetInputButton = document.createElement('div');

    resetInputButton.classList.add('reset-input-button');
    resetInputButton.innerText = '✖';
    searchInputContainer.appendChild(resetInputButton);

    resetInputButton.addEventListener('click', () => {
        searchInput.value = '';
        searchInput.focus();
        localStorage.setItem('searchQuery', '');

        showFinalItems();

        consoleFilters();
    });
};
