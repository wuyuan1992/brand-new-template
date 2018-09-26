import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './index.scss';
import AppRouter from './route/Router';

ReactDOM.render(<AppRouter />, document.getElementById('app-root'));
registerServiceWorker();
