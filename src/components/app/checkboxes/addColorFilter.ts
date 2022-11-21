/**
 * Добавляет в localStorage.colorFilter выбранные чекбоксы
 */

import { showFinalItems } from '../showFinalItems';

export const addColorFilter: () => void = () => {
    const checkboxColor = document.querySelectorAll<HTMLInputElement>('.checkbox-color');

    const checkboxWhite = document.getElementById('white') as HTMLInputElement;
    const checkboxYellow = document.getElementById('yellow') as HTMLInputElement;
    const checkboxBrown = document.getElementById('brown') as HTMLInputElement;
    const checkboxBlack = document.getElementById('black') as HTMLInputElement;
    const checkboxBlue = document.getElementById('blue') as HTMLInputElement;
    const checkboxGrey = document.getElementById('grey') as HTMLInputElement;

    checkboxColor.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            const newColorFilter = [];

            if (checkboxWhite.checked) {
                newColorFilter.push('белый');
            }

            if (checkboxYellow.checked) {
                newColorFilter.push('желтый');
            }

            if (checkboxBrown.checked) {
                newColorFilter.push('коричневый');
            }

            if (checkboxBlack.checked) {
                newColorFilter.push('черный');
            }

            if (checkboxBlue.checked) {
                newColorFilter.push('синий');
            }

            if (checkboxGrey.checked) {
                newColorFilter.push('серый');
            }

            localStorage.setItem('colorFilter', JSON.stringify(newColorFilter));

            showFinalItems();
        });
    });
};
