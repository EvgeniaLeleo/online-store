import { consoleFilters } from './utils/consoleFilters';
import { generateActualContent } from './generateActualContent';
import { addCommonStyles } from './addCommonStyles';
import { addResetButtonsFunctionality } from './addResetButtonsFunctionality';

export class App {
    start(): void {
        document.addEventListener('DOMContentLoaded', () => {
            addCommonStyles();
            addResetButtonsFunctionality();

            consoleFilters();

            generateActualContent();
        });
    }
}
