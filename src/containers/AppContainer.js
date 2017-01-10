import {connect} from 'react-redux';
import App from '../components/App';
import {loadHistory} from '../actions/index';

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: () => {
            return fetch('/history').
                then( resp => resp.json() ).
                then( history => {
                    dispatch(loadHistory(history));
                });
        }
    }
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;