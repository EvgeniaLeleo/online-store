/**
 * Добавление функциональности кнопки сброса фильтров
 */

import { showCards } from './card/showCards';
import { consoleFilters } from './utils/consoleFilters';

export const addResetFiltersButtonFunctionality: () => void = () => {
    const ResetFiltersButton = document.querySelector('.resetFilters') as HTMLButtonElement;

    ResetFiltersButton.addEventListener('click', () => {
        localStorage.setItem('typeFilter', JSON.stringify([]));
        localStorage.setItem('purposeFilter', JSON.stringify([]));
        localStorage.setItem('colorFilter', JSON.stringify([]));
        localStorage.setItem('popularFilter', '');

        const initialData = localStorage.getItem('initialData');

        if (initialData) {
            showCards(JSON.parse(initialData));
        }

        const filterCheckboxes = document.querySelectorAll<HTMLInputElement>('.checkbox');

        filterCheckboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });

        const searchInput = document.querySelector('.search-input') as HTMLInputElement;
        searchInput.focus();

        consoleFilters();
    });
};
