// import { IData } from '../../types/types';
// import AppController from '../controller/controller';
// import { AppView } from '../view/appView';

import requestFunction from './request-function';
import TData from './types';

type TApp = { currentCardsData: TData[] };

export const app: TApp = { currentCardsData: [] };
export const productContent = document.querySelectorAll<HTMLDivElement>('.product');

class App {
    start() {
        document.addEventListener('DOMContentLoaded', () => {
            requestFunction();
        });
    }
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