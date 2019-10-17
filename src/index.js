import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
/*
'persist': save the store information so it can be recovered in other moment
'rehydrate': recover the information stored so it can be upated in the redux.
Add a special Component from redux-persist called 'PersistGate'. 
This component will make sure that the store is rehydrated before react can access to it.
*/
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './App';

import {store, persistor} from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    
    document.getElementById('root')
);

