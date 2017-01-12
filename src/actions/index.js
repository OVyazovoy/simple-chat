export const addMessage = (message) => {
    console.log(message);
    return { type: 'ADD_MESSAGE', message}
};
export const loadHistory = (historyJson) => {
    return { type: 'LOAD_HISTORY', historyJson}
};