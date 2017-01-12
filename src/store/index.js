import { createStore, applyMiddleware  } from 'redux';
import chat from '../reducers/index';

import createSocketMiddleware from 'redux-ws';
import io from 'socket.io-client';

const socketMiddleware = createSocketMiddleware(io('http://localhost:3000/'));

// export default applyMiddleware(socketMiddleware)(createStore)(
//     chat
//     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );
export default createStore(
    chat,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

function subscribeToUpdates() {
    console.log(arguments);
    return ({ socket, dispatch }) => {
        socket.on('test', dispatch(reactToUpdate()));
    };
}

// Regular Redux action creator...
function reactToUpdate() {}