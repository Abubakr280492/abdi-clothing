


import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import {store,persistor} from './redux/store';
 

import './index.css';
import App from './App';

import {PersistGate} from 'redux-persist/integration/react';
//import {persistReducer} from 'redux-persist';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Provider store={store}>
   <BrowserRouter>
    <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
   </BrowserRouter>
</Provider>,

document.getElementById('root'));

