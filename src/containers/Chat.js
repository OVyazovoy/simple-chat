import { connect } from 'react-redux';
import Chat from  '../components/Chat';
import io from 'socket.io-client';

import {addMessage,clearHistory} from '../actions/index';
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

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => {
            console.log('Chat init');
            socket.on('ADD_MESSAGE', data => {
                console.log('234234234234234');
                console.log(data);
                dispatch(addMessage(JSON.parse(data).message))
            });
            socket.on('CLEAR_HISTORY', data => {
                dispatch(clearHistory())
            });
        }
    }
};



const ChatContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);
export default ChatContainer;
