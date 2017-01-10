import './../node_modules/materialize-css/sass/materialize.scss';
import './assets/styles/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from 'containers/AppContainer';

import {Provider} from 'react-redux';
import Chat from './store';

ReactDOM.render(
    <Provider store={Chat}>
        <AppContainer />
    </Provider>
    ,
    document.getElementById('root')
);