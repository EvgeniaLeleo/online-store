import { consoleFilters } from './utils/consoleFilters';
import { generateActualContent } from './generateActualContent';
import { addCommonStyles } from './addCommonStyles';
import { addResetButtonsFunctionality } from './resetFunctionality/addResetButtonsFunctionality';
import { addResetInputButton } from './resetFunctionality/addResetInputButton';

export class App {
    start(): void {
        document.addEventListener('DOMContentLoaded', () => {
            addCommonStyles();
            addResetButtonsFunctionality();
            addResetInputButton();

            consoleFilters();

            generateActualContent();
        });
    }
}
