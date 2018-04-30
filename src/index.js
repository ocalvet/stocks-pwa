import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import createStore from './store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={createStore()}>
<BrowserRouter>
  <App />
</BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
