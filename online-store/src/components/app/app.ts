import { consoleFilters } from './utils/consoleFilters';
import { generateActualContent } from './generateActualContent';
import { addCommonStyles } from './addCommonStyles';
import { addResetButtonsFunctionality } from './addResetButtonsFunctionality';
import { addSearchInputFunctionality } from './search';

export class App {
    start(): void {
        document.addEventListener('DOMContentLoaded', () => {
            addCommonStyles();
            addResetButtonsFunctionality();
            addSearchInputFunctionality();

            consoleFilters();

            generateActualContent();
        });
    }
}
