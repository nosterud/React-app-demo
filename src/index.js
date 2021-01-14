import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { applyPolyfills, defineCustomElements } from 'eds-button/loader';
import { defineCustomElements as defineCustomElements2 } from 'eds-top-bar/loader';
import { defineCustomElements as defineCustomElements3 } from 'eds-textfield/loader';
import { defineCustomElements as defineCustomElements4 } from 'eds-card/loader';
import { defineCustomElements as defineCustomElements5 } from 'eds-menu/loader';
import { defineCustomElements as defineCustomElements6 } from 'eds-sidesheet/loader';
import { defineCustomElements as defineCustomElements7 } from 'eds-typography/loader';
import { defineCustomElements as defineCustomElements8 } from 'eds-icon/loader';
import { defineCustomElements as defineCustomElements9 } from 'eds-tabs/loader';
import { defineCustomElements as defineCustomElements10 } from 'eds-pagination/loader';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

applyPolyfills().then(() => {
  defineCustomElements();
  defineCustomElements2();
  defineCustomElements3();
  defineCustomElements4();
  defineCustomElements5();
  defineCustomElements6();
  defineCustomElements7();
  defineCustomElements8();
  defineCustomElements9();
  defineCustomElements10();
});

reportWebVitals();
