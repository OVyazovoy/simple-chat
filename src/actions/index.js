export const addMessage = (message) => {
    console.log('Action message: ' + message);
    return { type: 'ADD_MESSAGE', message}
};
export const loadHistory = (historyJson) => {
    console.log('Action message: ' + historyJson);
    return { type: 'LOAD_HISTORY', historyJson}
};
export const startFetchHistory = () => {
    return { type: 'FETCHING_HISTORY'}
};
export const stopFetchHistory = () => {
    return { type: 'STOP_FETCHING_HISTORY'}
};
export const clearHistory = () => {
    return { type: 'CLEAR_HISTORY'}
};