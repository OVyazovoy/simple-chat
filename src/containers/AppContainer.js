import {connect} from 'react-redux';
import App from '../components/App';
import {loadHistory} from '../actions/index';

const getUser = function(state){
    return state.general.user
};
const mapStateToProps = (state) => {
    return {
        user: getUser(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => {

        }
    }
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;