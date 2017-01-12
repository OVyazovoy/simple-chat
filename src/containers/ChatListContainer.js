import { connect } from 'react-redux';
import ChatList from  '../components/ChatList';
import { addNew, loadHistory} from '../actions'

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
        addToHistory: (text) => {
            socket.emit('ADD_MESSAGE',JSON.stringify({ 'message': {text} }));

            // var headers = new Headers();
            // headers.set('Content-Type', 'application/json');
            //
            // fetch('/test', {
            //     headers: headers,
            //     method: 'post',
            //     body: JSON.stringify({ 'message': {text} })
            // }).
            //     then( resp => {
            //     return resp.json();
            // }).
            //     then( (message) =>  {
            //     console.log(message);
            //     dispatch(addNew(message))
            // });
            // catch( () => alert('error') );
        },
        onLoad: () => {
            // fetch('/history').
            //     then( resp => {
            //     return resp.json();
            // }).then(history => {
            //     dispatch(loadHistory(history))
            // })
        },
    }
};

const ChatListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatList);

export default ChatListContainer;
