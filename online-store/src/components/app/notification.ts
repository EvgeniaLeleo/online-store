/**
 * Всплывающее уведомление о превышении количества товаров в корзине
 */

export class AlertWindow {
    message: string;
    notificationWindow = document.createElement('div');
    screenOverlay = document.createElement('div');

    constructor(maxCart: number) {
        this.message = `Извините, нельзя добавить в корзину более ${maxCart} товаров`;
    }

    private showOverlay(): void {
        this.screenOverlay.classList.add('screen-overlay');
        this.screenOverlay.style.opacity = '1';
        document.body.appendChild(this.screenOverlay);

        this.screenOverlay.addEventListener('click', () => {
            document.body.removeChild(this.screenOverlay);
            document.body.removeChild(this.notificationWindow);
        });
    }

    private addCloseButton(): void {
        const closeButton = document.createElement('div');
        closeButton.classList.add('close-button');
        closeButton.innerText = '✖';
        this.notificationWindow.appendChild(closeButton);

        closeButton.addEventListener('click', () => {
            document.body.removeChild(this.screenOverlay);
            document.body.removeChild(this.notificationWindow);
        });
    }

    public show(): void {
        this.notificationWindow.classList.add('notification-window');
        this.notificationWindow.style.opacity = '1';
        this.notificationWindow.innerText = this.message;
        document.body.appendChild(this.notificationWindow);
        this.addCloseButton();
        this.showOverlay();
    }
}
