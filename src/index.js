import React from 'react';
import { render } from 'react-dom';
import App from './App';
import "./index.css";
import { initialState, reducer } from './state/reducer';
import { StateProvider } from './state/stateProvider';


render(
    <StateProvider reducer={reducer} initialState={initialState}>
        <App />
    </StateProvider>
    ,document.getElementById('root'));


