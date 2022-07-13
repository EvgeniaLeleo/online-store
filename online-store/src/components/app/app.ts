import { addResetFiltersButtonFunctionality } from './addResetFiltersButtonFunctionality';
import { requestFunction } from './requestFunction';
import { showCards } from './card/showCards';
import { showCardsIfCheckboxNotChecked } from './showCardsIfCheckboxNotChecked';
import { commonCheckedItems } from './filters/commonCheckedItems';
import typeFilter from './filters/typeFilter';
import { disableMainLinks } from './utils/disableMainLinks';
import purposeFilter from './filters/purposeFilter';
import colorFilter from './filters/colorFilter';
import { checkCheckboxesFromLocalStorage } from './checkCheckboxesFromLocalStorage';
import popularFilter from './filters/popularFilter';
import { disableFooterForm } from './utils/disableFooterForm';
import { consoleFilters } from './utils/consoleFilters';
import { showCartItemsQuantity } from './showCartItemsQuantity';
import { addResetStorageButtonFunctionality } from './addResetStorageButtonFunctionality';
import { resetLocalStorage } from './resetLocalStorage';

export class App {
    start(): void {
        document.addEventListener('DOMContentLoaded', () => {
            const searchInput = document.querySelector('.search-input') as HTMLInputElement;
            searchInput.focus();

            disableMainLinks();
            disableFooterForm();
            addResetFiltersButtonFunctionality();
            addResetStorageButtonFunctionality();

            consoleFilters();

            // проверка, есть ли что-то в localStorage
            const initialData = localStorage.getItem('initialData');
            const typeFilterData = localStorage.getItem('typeFilter');
            const purposeFilterData = localStorage.getItem('purposeFilter');
            const colorFilterData = localStorage.getItem('colorFilter');
            const popularFilterData = localStorage.getItem('popularFilter');
            const cartItemsData = localStorage.getItem('cartItems');

            let typeFilterArray: string[] = [];
            let typeFilterLen;
            let purposeFilterArray: string[] = [];
            let purposeFilterLen;
            let colorFilterArray: string[] = [];
            let colorFilterLen;

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

            if (
                initialData &&
                (typeFilterLen || purposeFilterLen || colorFilterLen || popularFilterData || cartItemsData)
            ) {
                if (initialData) {
                    showCards(commonCheckedItems(JSON.parse(initialData)));

                    typeFilter();
                    purposeFilter();
                    colorFilter();
                    popularFilter();

                    checkCheckboxesFromLocalStorage(
                        typeFilterArray,
                        purposeFilterArray,
                        colorFilterArray,
                        popularFilterData
                    );
                    //если ничего не отмечено, показывается все
                    showCardsIfCheckboxNotChecked();
                    showCartItemsQuantity();
                }
            } else {
                resetLocalStorage();
                requestFunction();
            }
        });
    }
}
