import showCards from '../showCards';
import { commonCheckedItems } from '../commonCheckedItems';

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

        console.log('local', localStorage.getItem('popularFilter'));

        const initialData = localStorage.getItem('initialData');

        if (initialData) {
            showCards(commonCheckedItems(JSON.parse(initialData)));
        }
    });
};

export default popularFilter;
