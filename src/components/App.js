import React, {Component} from 'react';
import Chat from './Chat'

class App extends Component {
    constructor(props = {}) {
        super(props)
    }

    render() {
        return (
           <Chat />
        )
    }
}

export default App;