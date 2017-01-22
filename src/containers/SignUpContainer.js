import { connect } from 'react-redux';
import SignUp from '../components/signup'
import {addUser} from '../actions'

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUserName: (name) => {
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');

            fetch('/setName', {
                headers: headers,
                method: 'post',
                body: JSON.stringify({name})
            }).then( resp => {
                return resp.json();
            }).then( (user) =>  {
                dispatch(addUser(user));
            });
        }
    }
};



const SignUpContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
export default SignUpContainer;
