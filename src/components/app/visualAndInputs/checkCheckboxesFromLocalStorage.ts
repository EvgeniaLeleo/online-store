/**
 * Чекбоксы из localstorage отмечаются заново после сброса настроек
 */

export const checkCheckboxesFromLocalStorage: (
    typeFilterArray: string[],
    purposeFilterArray: string[],
    colorFilterArray: string[],
    popularFilterData: string | null
) => void = (typeFilterArray, purposeFilterArray, colorFilterArray, popularFilterData) => {
    const filterCheckboxes = document.querySelectorAll<HTMLInputElement>('.checkbox');

    filterCheckboxes.forEach((checkbox) => {
        typeFilterArray.forEach((type) => {
            if (checkbox.value === type) checkbox.checked = true;
        });
        purposeFilterArray.forEach((purpose) => {
            if (checkbox.value === purpose) checkbox.checked = true;
        });
        colorFilterArray.forEach((color) => {
            if (checkbox.value === color) checkbox.checked = true;
        });
    });

    const checkboxPopular = document.querySelector('.checkbox-popular') as HTMLInputElement;

    if (popularFilterData) {
        checkboxPopular.checked = true;
    }
};
