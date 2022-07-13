/**
 * Общие стили и функционал элементов
 */

import { disableFooterForm } from './utils/disableFooterForm';
import { disableMainLinks } from './utils/disableMainLinks';
import { setFocusOnSearchInput } from './setFocusOnSearchInput';

export const addCommonStyles: () => void = () => {
    setFocusOnSearchInput();
    disableMainLinks();
    disableFooterForm();
};
