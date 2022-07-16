/**
 * Добавляет в localStorage.popularFilter отмеченный чекбоксы
 */

import { showFinalItems } from '../showFinalItems';

export const addPopularFilter: () => void = () => {
    const checkboxPopular = document.querySelector('.checkbox-popular') as HTMLInputElement;

    checkboxPopular.addEventListener('change', () => {
        let newPopularFilter = '';

        if (checkboxPopular.checked) {
            newPopularFilter = 'да';
        } else {
            newPopularFilter = '';
        }

        checkboxPopular.value = newPopularFilter;

        localStorage.setItem('popularFilter', newPopularFilter);

        showFinalItems();
    });
};
