import { combineReducers } from 'redux'
import initialGeneralState from '../store/initialGeneralState'


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
        case 'ADD_USER':
            return addUser(state, action);
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

    newState.history.items = [...action.historyJson]
    // action.historyJson.forEach((element) =>{
    //         console.log(element);
    //         newState.history.items.push(element.message)
    // }
    // );

    return newState;
};
const startFetchingHistory = function (state = initialGeneralState, action){
    let newState = Object.assign({}, state);
    newState.history = {
        isFetching: true,
        items: state.history.items
    };
    return newState;
};

const stopFetchingHistory = function (state = initialGeneralState, action){
    let newState = Object.assign({}, state);
    newState.history = {
        isFetching: false,
        items: state.history.items
    };
    return newState;
};

const addMessageReducer = function (state = initialGeneralState, action){
    let newState = Object.assign({}, state);
    let message = action.message;
    if(message != undefined){
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