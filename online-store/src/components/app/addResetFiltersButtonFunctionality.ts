import showCards from './showCards';

export const addResetFiltersButtonFunctionality = () => {
    const ResetFiltersButton = document.querySelector('.resetLocalStorage') as HTMLButtonElement;

    ResetFiltersButton.addEventListener('click', () => {
        localStorage.setItem('typeFilter', JSON.stringify([]));
        localStorage.setItem('purposeFilter', JSON.stringify([]));
        localStorage.setItem('colorFilter', JSON.stringify([]));
        localStorage.setItem('popularFilter', '');

        const initialData = localStorage.getItem('initialData');

        if (initialData) {
            showCards(JSON.parse(initialData));
        }

        const filterCheckboxes = document.querySelectorAll<HTMLInputElement>('.checkbox');

        filterCheckboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });
    });
};
