import { checkboxFilters } from './checkboxFilters';
import showData from './showData';
import TData from './types';

const purposeFilter = () => {
    const initialDataString = localStorage.getItem('initialData');
    if (!initialDataString) {
        return;
    }

    const initialData: TData[] = JSON.parse(initialDataString);

    const productContent = document.querySelector('.product-content') as HTMLDivElement;
    const checkboxPurpose = document.querySelectorAll<HTMLInputElement>('.checkbox-purpose');

    const checkboxBedroom = document.getElementById('bedroom') as HTMLInputElement;
    const checkboxLivingroom = document.getElementById('livingroom') as HTMLInputElement;
    const checkboxDinigroom = document.getElementById('diningroom') as HTMLInputElement;

    checkboxPurpose.forEach((checkbox) => {
        const tempArray: TData[] = [];
        let bedroomData: TData[] = [];
        let livingroomData: TData[] = [];
        let diningroomData: TData[] = [];

        checkbox.addEventListener('change', () => {
            if (checkboxBedroom.checked) {
                productContent.innerHTML = '';
                bedroomData = initialData.filter((item) => item.purpose === 'спальня');
            } else bedroomData = [];

            if (checkboxLivingroom.checked) {
                productContent.innerHTML = '';
                livingroomData = initialData.filter((item) => item.purpose === 'гостиная');
            } else livingroomData = [];

            if (checkboxDinigroom.checked) {
                productContent.innerHTML = '';
                diningroomData = initialData.filter((item) => item.purpose === 'столовая');
            } else diningroomData = [];

            const checkedItems = tempArray.concat(bedroomData, livingroomData, diningroomData);

            localStorage.setItem('purposeFilter', JSON.stringify(checkedItems));

            if (checkedItems.length) {
                showData(checkedItems);
            } else checkboxFilters();
        });
    });
};

export default purposeFilter;
