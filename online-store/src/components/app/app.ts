import { checkboxFilters } from './checkboxFilters';
import purposeFilter from './purposeFilter';
import requestFunction from './requestFunction';
import showData from './showData';
import typeFilter from './typeFilter';
import { disableLinks } from './utils';

export const productContent = document.querySelectorAll<HTMLDivElement>('.product');

class App {
    start() {
        document.addEventListener('DOMContentLoaded', () => {
            disableLinks();

            const resetStorageButton = document.querySelector('.resetLocalStorage') as HTMLButtonElement;
            resetStorageButton.addEventListener('click', () => {
                localStorage.setItem('typeFilter', '');
                requestFunction();
            });

            const typeFilterData = localStorage.getItem('typeFilter');

            if (typeFilterData) {
                typeFilter();
                purposeFilter();
                checkboxFilters();

                showData(JSON.parse(typeFilterData));
            } else {
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

export default App;
