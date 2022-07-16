/**
 * Всплывающее уведомление о превышении количества товаров в корзине
 */

export const notification: () => void = () => {
    const screenOverlay = document.createElement('div');
    screenOverlay.classList.add('screen-overlay');
    screenOverlay.style.opacity = '1';
    document.body.appendChild(screenOverlay);

    const notificationWindow = document.createElement('div');
    notificationWindow.classList.add('notification-window');
    notificationWindow.style.opacity = '1';
    notificationWindow.innerText = 'Извините, нельзя добавить в корзину более 10 товаров';
    document.body.appendChild(notificationWindow);

    const closeButton = document.createElement('div');
    closeButton.classList.add('close-button');
    closeButton.innerText = '✖';
    notificationWindow.appendChild(closeButton);

    screenOverlay.addEventListener('click', () => {
        document.body.removeChild(screenOverlay);
        document.body.removeChild(notificationWindow);
    });

    closeButton.addEventListener('click', () => {
        document.body.removeChild(screenOverlay);
        document.body.removeChild(notificationWindow);
    });
};
