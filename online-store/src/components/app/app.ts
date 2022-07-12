import { addResetFiltersButtonFunctionality } from './addResetFiltersButtonFunctionality';
import requestFunction from './requestFunction';
import showCards from './showCards';
import { showCardsIfCheckboxNotChecked } from './showCardsIfCheckboxNotChecked';
import { commonCheckedItems } from './commonCheckedItems';
import typeFilter from './typeFilter';
import { disableLinks } from './utils';
import purposeFilter from './purposeFilter';

export const productContent = document.querySelectorAll<HTMLDivElement>('.product');

export class App {
    start() {
        document.addEventListener('DOMContentLoaded', () => {
            disableLinks();
            addResetFiltersButtonFunctionality();

            // проверка, есть ли что-то в localStorage
            const initialData = localStorage.getItem('initialData');
            const typeFilterData = localStorage.getItem('typeFilter');
            const purposeFilterData = localStorage.getItem('purposeFilter');
            const colorFilterData = localStorage.getItem('colorFilter');
            const popularFilterData = localStorage.getItem('popularFilter');

            let typeFilterArray: string[],
                typeFilterLen,
                purposeFilterArray: string[],
                purposeFilterLen,
                colorFilterLen;

            if (typeFilterData) {
                typeFilterArray = JSON.parse(typeFilterData);
                typeFilterLen = typeFilterArray.length;
            }
            if (purposeFilterData) {
                purposeFilterArray = JSON.parse(purposeFilterData);
                purposeFilterLen = purposeFilterArray.length;
            }
            if (colorFilterData) {
                colorFilterLen = JSON.parse(colorFilterData).length;
            }

            if (initialData && (typeFilterLen || purposeFilterLen || colorFilterLen || popularFilterData)) {
                if (initialData) {
                    showCards(commonCheckedItems(JSON.parse(initialData)));
                    typeFilter();
                    purposeFilter();

                    const filterCheckboxes = document.querySelectorAll<HTMLInputElement>('.checkbox');

                    // ранее отмеченные чекбоксы отмечаются заново
                    filterCheckboxes.forEach((checkbox) => {
                        typeFilterArray.forEach((type) => {
                            if (checkbox.value === type) checkbox.checked = true;
                        });
                        purposeFilterArray.forEach((purpose) => {
                            if (checkbox.value === purpose) checkbox.checked = true;
                        });
                    });

                    showCardsIfCheckboxNotChecked();
                }
            } else {
                localStorage.setItem('initialData', JSON.stringify([]));
                localStorage.setItem('typeFilter', JSON.stringify([]));
                localStorage.setItem('purposeFilter', JSON.stringify([]));
                localStorage.setItem('colorFilter', JSON.stringify([]));
                localStorage.setItem('popularFilter', '');

                requestFunction();
            }
        });
    }

    // import { IData } from '../../types/types';
    // import AppController from '../controller/controller';
    // import { AppView } from '../view/appView';

    // controller: AppController;
    // view: AppView;

    // constructor() {
    //     this.controller = new AppController();
    //     this.view = new AppView();
    // }

    // public start(): void {
    //     const sources = document.querySelector('.sources') as HTMLDivElement;
    //     sources.addEventListener('click', (e: Event) =>
    //         this.controller.getNews(e, (data: IData) => this.view.drawNews(data))
    //     );
    //     this.controller.getSources((data) => this.view.drawSources(data));
    // }
}
