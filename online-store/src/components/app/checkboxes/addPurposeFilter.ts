import { consoleFilters } from '../utils/consoleFilters';
import { showFinalItems } from '../showFinalItems';

/**
 * Добавляет в localStorage.purposeFilter выбранные чекбоксы
 */

export const addPurposeFilter: () => void = () => {
    const checkboxPurpose = document.querySelectorAll<HTMLInputElement>('.checkbox-purpose');

    const checkboxBedroom = document.getElementById('bedroom') as HTMLInputElement;
    const checkboxLivingroom = document.getElementById('livingroom') as HTMLInputElement;
    const checkboxDinigroom = document.getElementById('diningroom') as HTMLInputElement;

    checkboxPurpose.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            const newPurposeFilter = [];

            if (checkboxBedroom.checked) {
                newPurposeFilter.push('спальня');
            }

            if (checkboxLivingroom.checked) {
                newPurposeFilter.push('гостиная');
            }

            if (checkboxDinigroom.checked) {
                newPurposeFilter.push('столовая');
            }

            localStorage.setItem('purposeFilter', JSON.stringify(newPurposeFilter));

            showFinalItems();

            consoleFilters();
        });
    });
};
