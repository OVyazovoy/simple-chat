import { connect } from 'react-redux';
import Chat from  '../components/Chat';
import io from 'socket.io-client';

import {
    addMessage,clearHistory, loadUsers,
    startFetching, stopFetching
} from '../actions/index';
const testStore = function (state) {
    return state.history
};

const createSocket = function () {
    return io.connect('http://localhost:3000/')
};

const socket = createSocket();


const mapStateToProps = (state) => {
    return {
        history: testStore(state),
        socket: socket
    }
};
const fetchUsers = (dispatch) => {
    dispatch(startFetching('users'));
    fetch('/users').then(resp => resp.json())
        .then(users => {
            dispatch(loadUsers(users))
        });
    dispatch(stopFetching('users'))
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
            console.log('Chat init');
            socket.on('ADD_MESSAGE', data => {
                const ownData = JSON.parse(data)
                dispatch(addMessage(ownData))
            });
            socket.on('CLEAR_HISTORY', data => {
                dispatch(clearHistory())
            });
            fetchUsers(dispatch)
        }
    }
};



const ChatContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);
export default ChatContainer;
