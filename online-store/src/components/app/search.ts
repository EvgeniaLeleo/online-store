/**
 * Функционал Поиска
 */

export const addSearchInputFunctionality = () => {
    const searchInputContainer = document.querySelector('.search-input-container') as HTMLInputElement;
    const searchInput = document.querySelector('.search-input') as HTMLInputElement;
    searchInput.addEventListener('input', () => {
        console.log(searchInput.value);
    });

    const resetInputButton = document.createElement('div');
    resetInputButton.classList.add('reset-input-button');
    resetInputButton.innerText = '✖';
    searchInputContainer.appendChild(resetInputButton);

    resetInputButton.addEventListener('click', () => {
        searchInput.value = '';
        searchInput.focus();
    });
};
