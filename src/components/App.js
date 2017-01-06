import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Chat from './Chat'

import store from './../store'
class App extends Component {
    constructor(props = {}) {
        super(props)
    }

    render() {
        console.log(store.getState());
        store.dispatch({type: 'ADD_MESSAGE'});

        return (
            <Provider store={store} >
                <Chat />
            </Provider>
        )
    }
}

export default App;