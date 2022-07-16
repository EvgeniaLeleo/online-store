import { consoleFilters } from './utils/consoleFilters';
import { generateActualContent } from './generateActualContent';
import { addCommonStyles } from './visualAndInputs/addCommonStyles';
import { addResetButtonsFunctionality } from './resetFunctionality/addResetButtonsFunctionality';
import { addResetInputButton } from './resetFunctionality/addResetInputButton';
import 'nouislider/dist/nouislider.css';
import './sliders/nouisliderCustom.scss';
import { addSliderPrice } from './sliders/addSliderPrice';
import { addSliderYear } from './sliders/addSliderYear';

export class App {
    start(): void {
        document.addEventListener('DOMContentLoaded', () => {
            addCommonStyles();

            addResetInputButton();
            addResetButtonsFunctionality();
            addSliderPrice();
            addSliderYear();

            consoleFilters();

            generateActualContent();
        });
    }
}
