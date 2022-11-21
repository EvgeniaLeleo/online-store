import { generateActualContent } from '../src/components/app/generateActualContent';
import * as noUiSlider from 'nouislider';

it('should not call showFinalItems() function if localStorage.initialData=""', () => {
    localStorage.setItem('initialData', '');

    const showFinalItems = jest.fn();

    const searchInput = document.createElement('input');
    document.body.appendChild(searchInput);
    searchInput.classList.add('search-input');

    const select = document.createElement('select');
    document.body.appendChild(select);
    select.classList.add('select');

    const sliderPrice = document.createElement('div');
    sliderPrice.classList.add('slider_price');
    document.body.appendChild(sliderPrice);

    const sliderValueMin = document.createElement('div');
    sliderValueMin.classList.add('slider__value_min');
    document.body.appendChild(sliderValueMin);

    const sliderValueMax = document.createElement('div');
    sliderValueMax.classList.add('slider__value_max');
    document.body.appendChild(sliderValueMax);

    noUiSlider.create(sliderPrice, {
        start: [0, 1],
        tooltips: true,
        connect: true,
        range: {
            min: 0,
            max: 1,
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

    const sliderYear = document.createElement('div');
    sliderYear.classList.add('slider_year');
    document.body.appendChild(sliderYear);

    const sliderYearMin = document.createElement('div');
    sliderYearMin.classList.add('slider__year_min');
    document.body.appendChild(sliderYearMin);

    const sliderYearMax = document.createElement('div');
    sliderYearMax.classList.add('slider__year_max');
    document.body.appendChild(sliderYearMax);

    noUiSlider.create(sliderYear, {
        start: [0, 1],
        tooltips: true,
        connect: true,
        range: {
            min: 0,
            max: 1,
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

    generateActualContent();
    expect(showFinalItems).not.toHaveBeenCalled();
});
