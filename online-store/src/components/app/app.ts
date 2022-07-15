import { consoleFilters } from './utils/consoleFilters';
import { generateActualContent } from './generateActualContent';
import { addCommonStyles } from './visualAndInputs/addCommonStyles';
import { addResetButtonsFunctionality } from './resetFunctionality/addResetButtonsFunctionality';
import { addResetInputButton } from './resetFunctionality/addResetInputButton';

export class App {
    start(): void {
        document.addEventListener('DOMContentLoaded', () => {
            addCommonStyles();

            addResetInputButton();
            addResetButtonsFunctionality();

            consoleFilters();

            generateActualContent();
        });
    }
}
