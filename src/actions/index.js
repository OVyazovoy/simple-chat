export const addNew = (messageJson) => {
    return { type: 'ADD_NEW_MESSAGE', message: messageJson}
};
export const loadHistory = (historyJson) => {
    return { type: 'LOAD_HISTORY', historyJson}
};