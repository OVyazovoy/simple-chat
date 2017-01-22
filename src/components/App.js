import React, {Component} from 'react';
import ChatContainer from '../containers/Chat';
import SignUpForm from '../containers/SignUpContainer'
class App extends Component {
    constructor(props = {}) {
        super(props);
        // this.props.onLoad()
        // window.setInterval(() => this.props.onLoad(), 20000)
    }

    render() {
        const user = this.props.user;
        return (
            <div>
                <ChatContainer />
                {user.name ? null : <SignUpForm/>}
            </div>
        )
    }
}

export default App;