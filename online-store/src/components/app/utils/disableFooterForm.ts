/**
 * Блокирует отправку формы в футере
 */
export const disableFooterForm = () => {
    const footerForm = document.querySelector('.footer__form') as HTMLFormElement;

    footerForm?.addEventListener('submit', (e) => e.preventDefault());
};
