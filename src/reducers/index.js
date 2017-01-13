import { combineReducers } from 'redux'

const initialGeneralState = {
    history: {
        isFetching: false,
        items: []
    }
};

const general = (state = initialGeneralState, action) => {

    switch (action.type) {
        case 'START_FETCHING_HISTORY':
            return startFetchingHistory(state, action);
        case 'STOP_FETCHING_HISTORY':
            return stopFetchingHistory(state, action);
        case 'LOAD_HISTORY':
            return loadHistory(state, action);
        case 'CLEAR_HISTORY':
            return clearHistory(state, action);
        case 'ADD_MESSAGE':
            return addMessageReducer(state, action);
        default:
            return state;
    }

};

const clearHistory = function (state = initialGeneralState, action){
    let newState = Object.assign({}, state);
    newState.history = {
        isFetching: state.history.isFetching,
        items: []
    };

    return newState;
};
const loadHistory = function (state = initialGeneralState, action){
    let newState = Object.assign({}, state);
    newState.history = {
        isFetching: state.history.isFetching,
        items: []
    };

    action.historyJson.forEach((element) =>
        newState.history.items.push(JSON.parse(element).message)
    );
    
    return newState;
};
const startFetchingHistory = function (state = initialGeneralState, action){
    let newState = Object.assign({}, state);
    newState.history.isFetching = true;
    state.history.items.forEach((element) => newState.history.items.push(element));
    return newState;
};

const stopFetchingHistory = function (state = initialGeneralState, action){
    let newState = Object.assign({}, state);
    newState.history.isFetching = false;
    state.history.items.forEach((element) => newState.history.items.push(element));
    return newState;
};

const addMessageReducer = function (state = initialGeneralState, action){
    let newState = Object.assign({}, state);

    newState.history = {
        isFetching: state.history.isFetching,
        items: state.history.items.map(element => element)
    };

    // state.history.items.forEach((element) => newState.history.items.push(element));
    if(action.message != undefined){
        newState.history.items.push(action.message);
    }

    return newState;
};

const chat = combineReducers({
    general,
});

export default chat;