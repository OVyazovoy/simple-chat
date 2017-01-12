import React, {Component} from 'react';
import ChatContainer from '../containers/Chat';

class App extends Component {
    constructor(props = {}) {
        super(props);
        // this.props.onLoad()
        // window.setInterval(() => this.props.onLoad(), 20000)
    }

    render() {
        return (
            <ChatContainer />
        )
    }
}

export default App;