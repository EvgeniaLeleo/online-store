/**
 * Сбрасывает значения полей Local Storage, оставляя сами поля
 */

import * as noUiSlider from 'nouislider';

export const resetLocalStorage: () => void = () => {
    localStorage.setItem('initialData', JSON.stringify([]));
    localStorage.setItem('cartItems', JSON.stringify([]));
    localStorage.setItem('searchQuery', '');
    localStorage.setItem('selectOption', '');
    localStorage.setItem('typeFilter', JSON.stringify([]));
    localStorage.setItem('purposeFilter', JSON.stringify([]));
    localStorage.setItem('colorFilter', JSON.stringify([]));
    localStorage.setItem('popularFilter', '');

    const initialRangePrice = [100, 100000];
    localStorage.setItem('rangePrice', JSON.stringify(initialRangePrice));

    const initialRangeYear = [2017, 2022];
    localStorage.setItem('rangeYear', JSON.stringify(initialRangeYear));

    const sliderPrice = document.querySelector('.slider_price') as noUiSlider.target;
    sliderPrice.noUiSlider?.reset();
    const sliderValueMin = document.querySelector('.slider__value_min') as HTMLDivElement;
    sliderValueMin.textContent = initialRangePrice[0].toString();
    const sliderValueMax = document.querySelector('.slider__value_max') as HTMLDivElement;
    sliderValueMax.textContent = initialRangePrice[1].toString();

    const sliderYear = document.querySelector('.slider_year') as noUiSlider.target;
    sliderYear.noUiSlider?.reset();
    const sliderYearMin = document.querySelector('.slider__year_min') as HTMLDivElement;
    sliderYearMin.textContent = initialRangeYear[0].toString();
    const sliderYearMax = document.querySelector('.slider__year_max') as HTMLDivElement;
    sliderYearMax.textContent = initialRangeYear[1].toString();
};
