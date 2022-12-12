import "../styles/globals.css";
import { wrapper } from "../store/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import React, { useEffect } from 'react'


import { defineCustomElements as ionDefineCustomElements } from '@ionic/core/loader';
// /* Core CSS required for Ionic components to work properly */
import '@ionic/core/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/core/css/normalize.css';
import '@ionic/core/css/structure.css';
import '@ionic/core/css/typography.css';


const MyApp = ({ Component, ...pageProps }: AppProps) => {
    const { store, props } = wrapper.useWrappedStore(pageProps);
    useEffect(() => {
        ionDefineCustomElements(window)
    })
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;