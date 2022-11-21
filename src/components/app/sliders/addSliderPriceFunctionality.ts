/**
 * Функционал слайдера цены
 */

import * as noUiSlider from 'nouislider';

import { showFinalItems } from '../showFinalItems';

export const addSliderPriceFunctionality: () => void = () => {
    const sliderPrice = document.querySelector('.slider_price') as noUiSlider.target;
    const rangePriceArray: string[] = [];

    const sliderValueMin = document.querySelector('.slider__value_min') as HTMLDivElement;
    const sliderValueMax = document.querySelector('.slider__value_max') as HTMLDivElement;

    const sliderValues = [sliderValueMin, sliderValueMax];

    (sliderPrice as noUiSlider.target).noUiSlider?.on('update', function (values, handle) {
        sliderValues[handle].textContent = values[handle].toString();
        rangePriceArray[handle] = values[handle].toString();

        localStorage.setItem('rangePrice', JSON.stringify(rangePriceArray));

        showFinalItems();
    });
};
