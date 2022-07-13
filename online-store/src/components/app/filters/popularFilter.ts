import { showCards } from '../card/showCards';
import { commonCheckedItems } from './commonCheckedItems';
import { consoleFilters } from '../utils/consoleFilters';

/**
 * Добавляет в localStorage.popularFilter отмеченный чекбоксы
 */

const popularFilter: () => void = () => {
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

        const initialData = localStorage.getItem('initialData');

        if (initialData) {
            showCards(commonCheckedItems(JSON.parse(initialData)));
        }

        consoleFilters();
    });
};

export default popularFilter;
