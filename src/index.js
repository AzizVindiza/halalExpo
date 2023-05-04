import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {PersistGate} from "redux-persist/integration/react";
import {persist} from "./redux/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PersistGate loading={null} persistor={persist}>
        <App/>
    </PersistGate>
 );
