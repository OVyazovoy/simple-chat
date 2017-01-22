import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';


class SignUpForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameError: false
        }
    }
    getUserName(){
        return ReactDOM.findDOMNode(this.refs.userName).value;
    }
    componentDidUpdate() {}
    componentDidMount() {}
    submitHandler(e){
        e.preventDefault();
        const userName = this.getUserName();
        console.log(userName);

        if(this.checkField(userName)) {
            this.props.setUserName(userName);
        }
        // send user name method
    }
    checkField(userName){
        if(userName.length == 0){
            this.setState({
                nameError: true
            });
            return false
        }
        return true
    }
    render() {
        const userNameClass = classNames({
            'invalid':this.state.nameError
        });
        return (
            <div
                className="row user--form"
            >
                <form
                    className="col s8 offset-s2"
                    onSubmit={this.submitHandler.bind(this)}
                >
                    <lavbel
                        htmlFor="userName"
                    >
                        Login as:
                    </lavbel>
                    <input
                        className={userNameClass}
                        ref="userName"
                        name="userName"
                        type="text"/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default SignUpForm;
