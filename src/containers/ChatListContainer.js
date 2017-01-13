import { connect } from 'react-redux';
import ChatList from  '../components/ChatList';
import { addNew, loadHistory,
    startFetchHistory, stopFetchHistory,
    clearHistory
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
            dispatch(startFetchHistory());
            fetch('/history').
                then( resp => {
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
