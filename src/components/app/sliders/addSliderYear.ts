/**
 * Слайдер даты
 */

import * as noUiSlider from 'nouislider';

export const addSliderYear: () => void = () => {
    const initialRangeYear = [2017, 2022];
    const sliderYear = document.querySelector('.slider_year') as noUiSlider.target;

    noUiSlider.create(sliderYear, {
        start: [initialRangeYear[0], initialRangeYear[1]],
        tooltips: true,
        connect: true,
        range: {
            min: initialRangeYear[0],
            max: initialRangeYear[1],
        },
        step: 1,
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
