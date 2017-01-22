/**
 * Created by vazovojoleg on 1/22/17.
 */
const initialGeneralState = {
    history: {
        isFetching: false,
        items: [],
    },
    user: {
        isFetching: false,
        id: null,
        name: null
    },
    users: {
        isFetching: false,
        items: []
    }
}
export default initialGeneralState