/**
 * Функционал слайдера цены
 */

import * as noUiSlider from 'nouislider';

import { showFinalItems } from '../showFinalItems';

export const addSliderYearFunctionality: () => void = () => {
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
