import showData from './showData';
import TData from './types';

export const checkboxFilters = () => {
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
        localStorage.setItem('typeFilter', initialDataString);
        localStorage.setItem('purposeFilter', initialDataString);
        showData(initialData);
    }
};
