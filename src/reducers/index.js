import {combineReducers} from 'redux'
import initialGeneralState from '../store/initialGeneralState'


const general = (state = initialGeneralState, action) => {

    switch (action.type) {
        case 'START_FETCHING':
            return startFetching(state, action);
        case 'STOP_FETCHING':
            return stopFetching(state, action);
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
        case 'ADD_USER':
            return addUser(state, action);
        case 'LOAD_USERS':
            return loadUsers(state, action);
        default:
            return state;
    }

};
const startFetching = function (state = initialGeneralState, action) {
    let newState = Object.assign({}, state);
    newState[action.state] = Object.assign({}, state[action.state]);
    newState[action.state].isFetching = true;
    return newState;
};
const stopFetching = function (state = initialGeneralState, action) {
    let newState = Object.assign({}, state);
    newState[action.state] = Object.assign({}, state[action.state]);
    newState[action.state].isFetching = false;
    return newState;
};
const loadUsers = function (state = initialGeneralState, action) {
    let newState = Object.assign({}, state),
        findMe = false;//todo i dont like it
    newState.users = {
        isFetching: state.users.isFetching,
        items:  [...action.users]
    };
    action.users.forEach((user) => {
        if(!findMe){
            findMe = user.id == state.user.id
        }
    });
    if(!findMe){
        console.log('find me user');
        newState.user = initialGeneralState.user
    }
    return newState;
};

const clearHistory = function (state = initialGeneralState, action) {
    let newState = Object.assign({}, state);
    newState.history = {
        isFetching: state.history.isFetching,
        items: []
    };

    return newState;
};
const loadHistory = function (state = initialGeneralState, action) {
    let newState = Object.assign({}, state);
    console.log(action.historyJson);
    console.log('history json')
    newState.history = {
        isFetching: state.history.isFetching,
        items: []
    };

    newState.history.items = [...action.historyJson];

    return newState;
};

const addMessageReducer = function (state = initialGeneralState, action) {
    let newState = Object.assign({}, state);
    let message = action.message;
    if (message != undefined) {
        newState.history = {
            isFetching: state.history.isFetching,
            items: [...state.history.items, action.message]
        };
    }
    return newState;
};
const addUser = function (state = initialGeneralState, action) {
    let newState = Object.assign({}, state);

    newState.user = {
        isFetching: state.user.isFetching,
        id: action.user.id,
        name: action.user.name,
    };

    return newState;
};

const chat = combineReducers({
    general,
});

export default chat;