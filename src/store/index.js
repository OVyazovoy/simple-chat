function messages(state = [], action) {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return [
                ...state,
                {
                    text: 'fasdfdsa',
                    completed: false
                }
            ];
        default:
            return state
    }
}

import { combineReducers, createStore } from 'redux';

let reducer = combineReducers({ messages });

let store = createStore(reducer);


export default store
