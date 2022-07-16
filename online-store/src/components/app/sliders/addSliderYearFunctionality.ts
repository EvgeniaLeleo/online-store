/**
 * Функционал слайдера цены
 */

import { showFinalItems } from '../showFinalItems';
import * as noUiSlider from 'nouislider';

export const addSliderYearFunctionality = () => {
    const sliderYear = document.querySelector('.slider_year') as noUiSlider.target;
    const rangeYearArray: string[] = [];

    const sliderYearMin = document.querySelector('.slider__year_min') as HTMLDivElement;
    const sliderYearMax = document.querySelector('.slider__year_max') as HTMLDivElement;

    const sliderValues = [sliderYearMin, sliderYearMax];

    (sliderYear as noUiSlider.target).noUiSlider?.on('update', function (values, handle) {
        sliderValues[handle].textContent = values[handle].toString();
        rangeYearArray[handle] = values[handle].toString();

        localStorage.setItem('rangeYear', JSON.stringify(rangeYearArray));

        showFinalItems();
    });
};
