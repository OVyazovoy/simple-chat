import { connect } from 'react-redux';
import ChatList from  '../components/ChatList';
import { addNew, loadHistory,
    startFetching, stopFetching,
    clearHistory, addUser
} from '../actions'

let socket;

const getHistory = function (state) {
    return state.general.history
};
const getUser = function (state) {
    return state.general.user
};
const mapStateToProps = (state,ownProps) => {
    socket = ownProps.socket;
    return {
        history: getHistory(state),
        socket: ownProps.socket,
        user: getUser(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearHistory: () => {
            dispatch(startFetching('history'));
            fetch('/clear/history').
            then( resp => {
                return resp.json();
            }).then(() => {
                dispatch(clearHistory());
                dispatch(stopFetching('history'))
            })
        },
        addToHistory: (text, user) => {
            socket.emit('ADD_MESSAGE',JSON.stringify(
                {
                    'message': {text},
                    user
                }
            ));
        },
        onLoad: () => {
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');

            dispatch(startFetching('history'));
            fetch('/history'). then( resp => {
                return resp.json();
            }).then(history => {
                dispatch(loadHistory(history));
                dispatch(stopFetching('history'))
            })
        },
        setUserName: (name) => {
            console.log(name);
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');

            fetch('/setName', {
                headers: headers,
                method: 'post',
                body: JSON.stringify({name})
            }).then( resp => {
                return resp.json();
            }).then( (user) =>  {
                console.log('user',user)
                dispatch(addUser(user));
            });
        }
    }
};

const ChatListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatList);

export default ChatListContainer;
