/**
 * Добавление функциональности кнопки сброса Local Storage
 */

import { requestFunction } from './requestFunction';
import { resetLocalStorage } from './resetLocalStorage';
import { showCartItemsQuantity } from './showCartItemsQuantity';
import { consoleFilters } from './utils/consoleFilters';

export const addResetStorageButtonFunctionality: () => void = () => {
    const ResetLocalStorageButton = document.querySelector('.resetLocalStorage') as HTMLButtonElement;
    ResetLocalStorageButton.addEventListener('click', () => {
        resetLocalStorage();
        requestFunction();

        const filterCheckboxes = document.querySelectorAll<HTMLInputElement>('.checkbox');

        filterCheckboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });

        const searchInput = document.querySelector('.search-input') as HTMLInputElement;
        searchInput.focus();

        showCartItemsQuantity();

        consoleFilters();
    });
};

/**
 * Добавление функциональности кнопки сброса Local Storage (кроме initial data)
 */

// import { showCards } from './card/showCards';
// import { showCartItemsQuantity } from './showCartItemsQuantity';
// import { consoleFilters } from './utils/consoleFilters';

// export const addResetStorageButtonFunctionality = () => {
//     const ResetLocalStorageButton = document.querySelector('.resetLocalStorage') as HTMLButtonElement;
//     ResetLocalStorageButton.addEventListener('click', () => {
//         localStorage.setItem('typeFilter', JSON.stringify([]));
//         localStorage.setItem('purposeFilter', JSON.stringify([]));
//         localStorage.setItem('colorFilter', JSON.stringify([]));
//         localStorage.setItem('popularFilter', '');
//         localStorage.setItem('cartItems', JSON.stringify([]));

//         const initialData = localStorage.getItem('initialData');

//         if (initialData) {
//             showCards(JSON.parse(initialData));
//         }

//         const filterCheckboxes = document.querySelectorAll<HTMLInputElement>('.checkbox');

//         filterCheckboxes.forEach((checkbox) => {
//             checkbox.checked = false;
//         });

//         showCartItemsQuantity();

//         consoleFilters();
//     });
// };
