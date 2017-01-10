import { connect } from 'react-redux';
import Chat from  '../components/Chat';

const testStore = function (state) {
    return state.history
};


const mapStateToProps = (state) => {
    return {
        history: testStore(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {}
    }
};



const ChatContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);
export default ChatContainer;
