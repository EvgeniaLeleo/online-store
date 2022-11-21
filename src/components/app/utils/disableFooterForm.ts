/**
 * Блокирует отправку формы в футере
 */

export const disableFooterForm: () => void = () => {
    const footerForm = document.querySelector('.footer__form') as HTMLFormElement;

    footerForm?.addEventListener('submit', (e) => e.preventDefault());
};
