import { connect } from 'react-redux';
import ChatList from  '../components/ChatList';
import { addNew } from '../actions'

const getHistory = function (state) {
    return state.general.history
};

const mapStateToProps = (state) => {
    return {
        history: getHistory(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToHistory: (text) => {
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');

            fetch('/test', {
                headers: headers,
                method: 'post',
                body: JSON.stringify({ 'message': {text} })
            }).
                then( resp => {
                return resp.json();
            }).
                then( (message) =>  {
                console.log(message);
                dispatch(addNew(message))
            });
                // catch( () => alert('error') );
        }
    }
};

const ChatListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatList);

export default ChatListContainer;
