import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './store/Store';
import { Provider } from 'react-redux';
import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

reportWebVitals();
