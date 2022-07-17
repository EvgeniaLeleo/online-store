/**
 * Добавление основного функционала фильтров, сортировки и поиска, содержимое корзины
 */

import { addColorFilter } from './checkboxes/addColorFilter';
import { addPopularFilter } from './checkboxes/addPopularFilter';
import { addPurposeFilter } from './checkboxes/addPurposeFilter';
import { addTypeFilter } from './checkboxes/addTypeFilter';
import { addSearchInputFunctionality } from './search/addSearchInputFunctionality';
import { addSelectFunctionality } from './select/addSelectFunctionality';
import { addSliderPriceFunctionality } from './sliders/addSliderPriceFunctionality';
import { addSliderYearFunctionality } from './sliders/addSliderYearFunctionality';
import { showCartContent } from './visualAndInputs/showCartContent';

export const addFunctionality: () => void = () => {
    addSearchInputFunctionality();
    addSelectFunctionality();
    addSliderPriceFunctionality();
    addSliderYearFunctionality();

    addTypeFilter();
    addPurposeFilter();
    addColorFilter();
    addPopularFilter();

    showCartContent();
};
