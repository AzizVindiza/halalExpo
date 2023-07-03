import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {PersistGate} from "redux-persist/integration/react";
import store, {persist} from "./redux/store";
import Context from "./Context";
import {Provider} from "react-redux";
import './i18n'
import Loader from "./components/Registration/Loading/Loader";


const root = ReactDOM.createRoot(document.getElementById('root'));

let fullfilled = false;
let promise = null;

const useTimeout = (ms) => {
    if (!fullfilled) {
        throw promise = new Promise((res) => {
            setTimeout(() => {
                fullfilled = true;
                res();
            }, ms);
        });
    }
};

const Main = () => {
    useTimeout(4000);
};
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persist}>
            <Context>
                <Suspense fallback={<Loader/>}>
                    <Main>
                        <App/>
                    </Main>
                    <App/>
                </Suspense>
            </Context>
        </PersistGate>
    </Provider>
);
