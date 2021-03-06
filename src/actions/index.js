export const addMessage = (message) => {
    console.log('Action message: ' + message);
    return { type: 'ADD_MESSAGE', message}
};
export const loadHistory = (historyJson) => {
    console.log('Action message: ' + historyJson);
    return { type: 'LOAD_HISTORY', historyJson}
};
export const startFetchHistory = () => {
    return { type: 'START_FETCHING_HISTORY'}
};
export const stopFetchHistory = () => {
    return { type: 'STOP_FETCHING_HISTORY'}
};
export const clearHistory = () => {
    return { type: 'CLEAR_HISTORY'}
};
export const addUser = (user) => {
    return { type: 'ADD_USER', user}
};

export const loadUsers = (users) => {
    return { type: 'LOAD_USERS', users}
};

export const startFetching = (state) => {
  return {type: 'START_FETCHING', state}
};

export const stopFetching = (state) => {
    return {type: 'STOP_FETCHING', state}
};