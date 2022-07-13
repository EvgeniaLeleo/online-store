import { showCards } from './card/showCards';
import { TData } from './types';

/**
 * Проверка чекбоксов на checked и вывод начальных данных в случае false
 */

export const showCardsIfCheckboxNotChecked = () => {
    const initialDataString = localStorage.getItem('initialData');

    if (!initialDataString) {
        return;
    }

    const initialData: TData[] = JSON.parse(initialDataString);

    const filterCheckboxes = document.querySelectorAll<HTMLInputElement>('.checkbox');

    let checkedExists = false;

    filterCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            checkedExists = true;
            return;
        }
    });

    if (!checkedExists) {
        localStorage.setItem('typeFilter', JSON.stringify([]));
        localStorage.setItem('purposeFilter', JSON.stringify([]));
        localStorage.setItem('colorFilter', JSON.stringify([]));
        localStorage.setItem('popularFilter', '');
        showCards(initialData);
    }
};
