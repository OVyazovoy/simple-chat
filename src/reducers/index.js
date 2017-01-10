import { combineReducers } from 'redux'

const initialGeneralState = {
    history: []
};

const general = (state = initialGeneralState, action) => {

    switch (action.type) {
        case 'LOAD_HISTORY':
            return loadHistory(state, action);
        case 'ADD_NEW_MESSAGE':
            return addMessageReducer(state, action);
        default:
            return state;
    }

};

const loadHistory = function (state = initialGeneralState, action){
    let newState = Object.assign({}, state);
    newState.history = [];
    newState.history = action.historyJson;

    return newState;
};

const addMessageReducer = function (state = initialGeneralState, action){
    let newState = Object.assign({}, state);

    newState.history = [];

    state.history.forEach((element) => newState.history.push(element));


    newState.history.push(action.message);

    return newState;
};

const chat = combineReducers({
    general,
});

export default chat;