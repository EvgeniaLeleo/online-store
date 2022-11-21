import { generateActualContent } from './generateActualContent';
import { addCommonStyles } from './visualAndInputs/addCommonStyles';
import { addResetButtonsFunctionality } from './resetFunctionality/addResetButtonsFunctionality';
import { addResetInputButton } from './resetFunctionality/addResetInputButton';
import { addSliderPrice } from './sliders/addSliderPrice';
import { addSliderYear } from './sliders/addSliderYear';

import './sliders/nouisliderCustom.scss';
import 'nouislider/dist/nouislider.css';

export class App {
    start(): void {
        document.addEventListener('DOMContentLoaded', () => {
            addCommonStyles();

            addResetInputButton();
            addResetButtonsFunctionality();
            addSliderPrice();
            addSliderYear();

            generateActualContent();
        });
    }
}
