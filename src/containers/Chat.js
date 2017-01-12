import { connect } from 'react-redux';
import Chat from  '../components/Chat';
import io from 'socket.io-client';

import {addMessage} from '../actions/index';
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
            console.log('chat init');
            socket.on('ADD_MESSAGE', data => {
                console.log(data,'zxczxc');
                dispatch(addMessage(JSON.parse(data).message))

            });
        }
    }
};



const ChatContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);
export default ChatContainer;
