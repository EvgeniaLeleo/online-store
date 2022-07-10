import { app } from './app';
import showData from './showData';
import TData from './types';

const radio = () => {
    const productContent = document.querySelector('.product-content') as HTMLDivElement;
    const checkboxType = document.querySelectorAll<HTMLInputElement>('.checkbox-type');

    const checkboxBed = document.getElementById('bed') as HTMLInputElement;
    const checkboxSofa = document.getElementById('sofa') as HTMLInputElement;
    const checkboxArmchair = document.getElementById('armchair') as HTMLInputElement;

    checkboxType.forEach((checkbox) => {
        const tempArray: TData[] = [];
        let bedData: TData[] = [];
        let sofaData: TData[] = [];
        let armchairData: TData[] = [];

        checkbox.addEventListener('change', () => {
            productContent.innerHTML = '';

            if (checkboxBed.checked) {
                productContent.innerHTML = '';
                bedData = app.initialData.filter((item) => item.type === 'кровать');
            } else bedData = [];
            if (checkboxSofa.checked) {
                productContent.innerHTML = '';
                sofaData = app.initialData.filter((item) => item.type === 'диван');
            } else sofaData = [];
            if (checkboxArmchair.checked) {
                productContent.innerHTML = '';
                armchairData = app.initialData.filter((item) => item.type === 'кресло');
            } else armchairData = [];

            const checkedItems = tempArray.concat(bedData, sofaData, armchairData);
            showData(checkedItems);

            if (!checkboxBed.checked && !checkboxSofa.checked && !checkboxArmchair.checked) {
                showData(app.initialData);
            }
        });
    });
};

export default radio;
