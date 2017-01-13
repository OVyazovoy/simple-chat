import { connect } from 'react-redux';
import ChatList from  '../components/ChatList';
import { addNew, loadHistory,
    startFetchHistory, stopFetchHistory,
    clearHistory, addUser
} from '../actions'

let socket;

const getHistory = function (state) {
    return state.general.history
};

const mapStateToProps = (state,ownProps) => {
    socket = ownProps.socket;
    return {
        history: getHistory(state),
        socket: ownProps.socket
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearHistory: () => {
            dispatch(startFetchHistory());
            fetch('/clear/history').
            then( resp => {
                return resp.json();
            }).then(() => {
                dispatch(clearHistory());
                dispatch(stopFetchHistory())
            })
        },
        addToHistory: (text) => {
            socket.emit('ADD_MESSAGE',JSON.stringify({ 'message': {text} }));
        },
        onLoad: () => {
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');

            fetch('/setName', {
                headers: headers,
                method: 'post',
                body: JSON.stringify({'name': 'test'})
            }).then( resp => {
                return resp.json();
            }).then( (user) =>  {
                console.log('user',user)
                dispatch(addUser(user));
            });

            dispatch(startFetchHistory());
            fetch('/history'). then( resp => {
                return resp.json();
            }).then(history => {
                dispatch(loadHistory(history));
                dispatch(stopFetchHistory())
            })
        },
    }
};

const ChatListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatList);

export default ChatListContainer;
