import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";

import store from './store';
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

//Engloba a aplicação com o Provider da biblioteca react-redux, assim teremos acesso ao estado global em toda a aplicação.
