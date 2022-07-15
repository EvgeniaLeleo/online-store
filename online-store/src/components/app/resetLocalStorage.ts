/**
 * Сбрасывает значения полей Local Storage, оставляя сами поля
 */

export const resetLocalStorage: () => void = () => {
    localStorage.setItem('initialData', JSON.stringify([]));
    localStorage.setItem('cartItems', JSON.stringify([]));
    localStorage.setItem('searchQuery', '');
    localStorage.setItem('selectOption', '');
    localStorage.setItem('typeFilter', JSON.stringify([]));
    localStorage.setItem('purposeFilter', JSON.stringify([]));
    localStorage.setItem('colorFilter', JSON.stringify([]));
    localStorage.setItem('popularFilter', '');
};
