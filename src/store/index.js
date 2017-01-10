import { createStore } from 'redux';
import chat from '../reducers/index';


export default createStore(chat, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

