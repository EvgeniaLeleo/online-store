export const disableLinks = () => {
    const links = document.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', (e) => e.preventDefault());
    }
};
