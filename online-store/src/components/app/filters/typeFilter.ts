import { showCards } from '../card/showCards';
import { commonCheckedItems } from '../commonCheckedItems';
import { consoleFilters } from '../utils/consoleFilters';

/**
 * Добавляет в localStorage.typeFilter выбранные чекбоксами имена товаров
 */

const typeFilter: () => void = () => {
    const checkboxType = document.querySelectorAll<HTMLInputElement>('.checkbox-type');

    const checkboxBed = document.getElementById('bed') as HTMLInputElement;
    const checkboxSofa = document.getElementById('sofa') as HTMLInputElement;
    const checkboxArmchair = document.getElementById('armchair') as HTMLInputElement;
    const checkboxTable = document.getElementById('table') as HTMLInputElement;
    const checkboxWardrobe = document.getElementById('wardrobe') as HTMLInputElement;

    checkboxType.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
            const newTypeFilter = [];

            if (checkboxBed.checked) {
                newTypeFilter.push('кровать');
            }

            if (checkboxSofa.checked) {
                newTypeFilter.push('диван');
            }

            if (checkboxArmchair.checked) {
                newTypeFilter.push('кресло');
            }

            if (checkboxTable.checked) {
                newTypeFilter.push('стол');
            }

            if (checkboxWardrobe.checked) {
                newTypeFilter.push('шкаф');
            }

            localStorage.setItem('typeFilter', JSON.stringify(newTypeFilter));

            const initialData = localStorage.getItem('initialData');

            if (initialData) {
                showCards(commonCheckedItems(JSON.parse(initialData)));
            }

            consoleFilters();
        });
    });
};

export default typeFilter;
