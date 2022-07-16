/**
 * Слайдер цены
 */

import * as noUiSlider from 'nouislider';

export const addSliderPrice = () => {
    const initialRangePrice = [1000, 100000];
    const sliderPrice = document.querySelector('.slider_price') as noUiSlider.target;

    noUiSlider.create(sliderPrice, {
        start: [initialRangePrice[0], initialRangePrice[1]],
        tooltips: true,
        connect: true,
        range: {
            min: initialRangePrice[0],
            max: initialRangePrice[1],
        },
        step: 1000,
        format: {
            to: function (value) {
                return Math.floor(value);
            },
            from: function (value) {
                return parseInt(value);
            },
        },
    });
};
