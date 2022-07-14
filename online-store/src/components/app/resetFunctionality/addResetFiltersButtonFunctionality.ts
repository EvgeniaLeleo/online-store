/**
 * Добавление функциональности кнопки сброса фильтров
 */

import { showFinalItems } from '../showFinalItems';
import { consoleFilters } from '../utils/consoleFilters';

export const addResetFiltersButtonFunctionality: () => void = () => {
    const ResetFiltersButton = document.querySelector('.resetFilters') as HTMLButtonElement;

    ResetFiltersButton.addEventListener('click', () => {
        localStorage.setItem('typeFilter', JSON.stringify([]));
        localStorage.setItem('purposeFilter', JSON.stringify([]));
        localStorage.setItem('colorFilter', JSON.stringify([]));
        localStorage.setItem('popularFilter', '');

        const filterCheckboxes = document.querySelectorAll<HTMLInputElement>('.checkbox');
        filterCheckboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });

        const searchInput = document.querySelector('.search-input') as HTMLInputElement;
        searchInput.focus();

        showFinalItems();

        consoleFilters();
    });
};
