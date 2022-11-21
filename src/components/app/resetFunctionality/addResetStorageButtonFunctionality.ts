/**
 * Добавление функциональности кнопки сброса Local Storage
 */

import { requestFunction } from '../requestFunction';
import { resetLocalStorage } from '../resetLocalStorage';
import { showCartItemsQuantity } from '../visualAndInputs/showCartItemsQuantity';

export const addResetStorageButtonFunctionality: () => void = () => {
    const ResetLocalStorageButton = document.querySelector('.resetLocalStorage') as HTMLButtonElement;
    ResetLocalStorageButton.addEventListener('click', () => {
        resetLocalStorage();

        const filterCheckboxes = document.querySelectorAll<HTMLInputElement>('.checkbox');
        filterCheckboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });

        const searchInput = document.querySelector('.search-input') as HTMLInputElement;
        searchInput.focus();
        searchInput.value = '';

        showCartItemsQuantity();

        requestFunction();
    });
};
