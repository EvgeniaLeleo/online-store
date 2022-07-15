/**
 * Добавление основного функционала фильтров, сортировки и поиска
 */

import { addColorFilter } from './checkboxes/addColorFilter';
import { addPopularFilter } from './checkboxes/addPopularFilter';
import { addPurposeFilter } from './checkboxes/addPurposeFilter';
import { addTypeFilter } from './checkboxes/addTypeFilter';
import { addSearchInputFunctionality } from './search/addSearchInputFunctionality';
import { addSelectFunctionality } from './select/addSelectFunctionality';

export const addFunctionality = () => {
    addSearchInputFunctionality();
    addSelectFunctionality();

    addTypeFilter();
    addPurposeFilter();
    addColorFilter();
    addPopularFilter();
};
