/**
 * Сбрасывает значения полей Local Storage, оставляя сами поля
 */

export const resetLocalStorage = () => {
    localStorage.setItem('initialData', JSON.stringify([]));
    localStorage.setItem('typeFilter', JSON.stringify([]));
    localStorage.setItem('purposeFilter', JSON.stringify([]));
    localStorage.setItem('colorFilter', JSON.stringify([]));
    localStorage.setItem('popularFilter', '');
    localStorage.setItem('cartItems', JSON.stringify([]));
};
