import { addResetFiltersButtonFunctionality } from './addResetFiltersButtonFunctionality';
import requestFunction from './requestFunction';
import showCards from './showCards';
import { showCardsIfCheckboxNotChecked } from './showCardsIfCheckboxNotChecked';
import { commonCheckedItems } from './commonCheckedItems';
import typeFilter from './filters/typeFilter';
import { disableMainLinks } from './utils/disableMainLinks';
import purposeFilter from './filters/purposeFilter';
import colorFilter from './filters/colorFilter';
import { checkCheckboxesFromLocalStorage } from './checkCheckboxesFromLocalStorage';
import popularFilter from './filters/popularFilter';
import { disableFooterForm } from './utils/disableFooterForm';

export const productContent = document.querySelectorAll<HTMLDivElement>('.product');

export class App {
    start() {
        document.addEventListener('DOMContentLoaded', () => {
            disableMainLinks();
            disableFooterForm();
            addResetFiltersButtonFunctionality();

            // проверка, есть ли что-то в localStorage
            const initialData = localStorage.getItem('initialData');
            const typeFilterData = localStorage.getItem('typeFilter');
            const purposeFilterData = localStorage.getItem('purposeFilter');
            const colorFilterData = localStorage.getItem('colorFilter');
            const popularFilterData = localStorage.getItem('popularFilter');

            let typeFilterArray: string[] = [],
                typeFilterLen,
                purposeFilterArray: string[] = [],
                purposeFilterLen,
                colorFilterArray: string[] = [],
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
                colorFilterArray = JSON.parse(colorFilterData);
                colorFilterLen = colorFilterArray.length;
            }

            if (initialData && (typeFilterLen || purposeFilterLen || colorFilterLen || popularFilterData)) {
                if (initialData) {
                    showCards(commonCheckedItems(JSON.parse(initialData)));
                    typeFilter();
                    purposeFilter();
                    colorFilter();
                    popularFilter();

                    // чекбоксы из localstorage отмечаются заново
                    checkCheckboxesFromLocalStorage(
                        typeFilterArray,
                        purposeFilterArray,
                        colorFilterArray,
                        popularFilterData
                    );

                    //если ничего не отмечено, показывается все
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
