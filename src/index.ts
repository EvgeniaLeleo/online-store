import { App } from './components/app/app';
import { consoleCrossCheck } from './components/app/utils/consoleCrossCheck';

import './global.scss';

const app: App = new App();
consoleCrossCheck();
app.start();
