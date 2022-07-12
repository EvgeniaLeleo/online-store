import showCards from './showCards';
import { commonCheckedItems } from './commonCheckedItems';
import { showCardsIfCheckboxNotChecked } from './showCardsIfCheckboxNotChecked';

/**
 * Добавляет в localStorage.typeFilter выбранные чекбоксы
 */

const purposeFilter: () => void = () => {
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

            const initialData = localStorage.getItem('initialData');

            if (initialData) {
                showCards(commonCheckedItems(JSON.parse(initialData)));
            }

            // showCardsIfCheckboxNotChecked();
        });
    });
};

export default purposeFilter;
