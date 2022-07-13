/**
 * Блокирует все ссылки на странице, кроме copyright и RS Logo
 */
export const disableMainLinks: () => void = () => {
    const top = document.querySelector('.top_catalog') as HTMLDivElement;
    const filters = document.querySelector('.filters') as HTMLDivElement;
    const footerMainInformation = document.querySelector('.footer__main-information') as HTMLDivElement;

    const linksTop = top.getElementsByTagName('a');
    const linksFilters = filters.getElementsByTagName('a');
    const linksFooter = footerMainInformation.getElementsByTagName('a');

    for (let i = 0; i < linksTop.length; i++) {
        linksTop[i].addEventListener('click', (e) => e.preventDefault());
    }

    for (let i = 0; i < linksFilters.length; i++) {
        linksFilters[i].addEventListener('click', (e) => e.preventDefault());
    }

    for (let i = 0; i < linksFooter.length; i++) {
        linksFooter[i].addEventListener('click', (e) => e.preventDefault());
    }
};

/**
 * Блокирует все ссылки на странице
 */
export const disableLinks: () => void = () => {
    const links = document.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', (e) => e.preventDefault());
    }
};
