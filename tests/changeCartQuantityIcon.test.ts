import { changeCartQuantityIcon } from '../src/components/app/card/changeCartQuantityIcon';

it('should change the icon text', () => {
    const cartItems = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    const cartItemsQuantity1 = document.createElement('span');
    document.body.appendChild(cartItemsQuantity1);
    cartItemsQuantity1.classList.add('cart-items-quantity');

    const cartItemsQuantity2 = document.createElement('span');
    document.body.appendChild(cartItemsQuantity2);
    cartItemsQuantity2.classList.add('cart-items-quantity');

    changeCartQuantityIcon(cartItems);

    const result = cartItemsQuantity1.textContent;
    const expectedResult = '10';

    expect(expectedResult).toBe(result);
});
