/**
 * Функционал кнопок сброса
 */

import { addResetFiltersButtonFunctionality } from './addResetFiltersButtonFunctionality';
import { addResetStorageButtonFunctionality } from './addResetStorageButtonFunctionality';

export const addResetButtonsFunctionality: () => void = () => {
    addResetFiltersButtonFunctionality();
    addResetStorageButtonFunctionality();
};
