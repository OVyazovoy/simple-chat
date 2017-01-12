import {connect} from 'react-redux';
import App from '../components/App';
import {loadHistory} from '../actions/index';

const mapStateToProps = (state) => {
    return {}
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