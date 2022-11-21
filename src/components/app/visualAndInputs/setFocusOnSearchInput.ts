/**
 * Устанавливает фокус на поле поиска
 */

export const setFocusOnSearchInput: () => void = () => {
    const searchInput = document.querySelector('.search-input') as HTMLInputElement;
    searchInput.focus();
};
