import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {PersistGate} from "redux-persist/integration/react";
import store, {persist} from "./redux/store";
import Context from "./Context";
import {Provider} from "react-redux";
import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persist}>
            <Context>
                <Suspense fallback={<div>Loading</div>}>
                    <App/>
                </Suspense>
            </Context>
        </PersistGate>
    </Provider>
);
