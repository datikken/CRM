require('./bootstrap');

import React from 'react';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

import { store } from './Store'
import { Provider } from 'react-redux'

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props }) {

        return render(
            <Provider store={store}>
                <App {...props} />
            </Provider>, el);
    },
});

InertiaProgress.init({ color: '#4B5563' });
