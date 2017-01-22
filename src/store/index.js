import { createStore, applyMiddleware  } from 'redux';
import chat from '../reducers/index';

import createSocketMiddleware from 'redux-ws';
import io from 'socket.io-client';

export default createStore(
    chat,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)