import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Chat from './Chat'

class App extends Component {
    constructor(props = {}) {
        super(props)
    }

    render() {
        return (
            <Provider store={createStore(()=>{})} >
                <Chat />
            </Provider>
        )
    }
}

export default App;