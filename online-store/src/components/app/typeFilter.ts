import { checkboxFilters } from './checkboxFilters';
import showData from './showData';
import TData from './types';

const typeFilter = () => {
    const initialDataString = localStorage.getItem('initialData');
    if (!initialDataString) {
        return;
    }
    const initialData: TData[] = JSON.parse(initialDataString);

    const productContent = document.querySelector('.product-content') as HTMLDivElement;
    const checkboxType = document.querySelectorAll<HTMLInputElement>('.checkbox-type');

    const checkboxBed = document.getElementById('bed') as HTMLInputElement;
    const checkboxSofa = document.getElementById('sofa') as HTMLInputElement;
    const checkboxArmchair = document.getElementById('armchair') as HTMLInputElement;
    const checkboxTable = document.getElementById('table') as HTMLInputElement;
    const checkboxWardrobe = document.getElementById('wardrobe') as HTMLInputElement;

    checkboxType.forEach((checkbox) => {
        const tempArray: TData[] = [];
        let bedData: TData[] = [];
        let sofaData: TData[] = [];
        let armchairData: TData[] = [];
        let tableData: TData[] = [];
        let wardrobeData: TData[] = [];

        checkbox.addEventListener('change', () => {
            if (checkboxBed.checked) {
                productContent.innerHTML = '';
                bedData = initialData.filter((item) => item.type === 'кровать');
            } else bedData = [];

            if (checkboxSofa.checked) {
                productContent.innerHTML = '';
                sofaData = initialData.filter((item) => item.type === 'диван');
            } else sofaData = [];

            if (checkboxArmchair.checked) {
                productContent.innerHTML = '';
                armchairData = initialData.filter((item) => item.type === 'кресло');
            } else armchairData = [];

            if (checkboxTable.checked) {
                productContent.innerHTML = '';
                tableData = initialData.filter((item) => item.type === 'стол');
            } else tableData = [];

            if (checkboxWardrobe.checked) {
                productContent.innerHTML = '';
                wardrobeData = initialData.filter((item) => item.type === 'шкаф');
            } else wardrobeData = [];

            const checkedItems = tempArray.concat(bedData, sofaData, armchairData, tableData, wardrobeData);

            localStorage.setItem('typeFilter', JSON.stringify(checkedItems));

            if (checkedItems.length) {
                showData(checkedItems);
            } else checkboxFilters();
        });
    });
};

export default typeFilter;
