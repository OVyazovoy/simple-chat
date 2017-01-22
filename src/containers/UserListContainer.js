import {connect} from 'react-redux';
import UserList from '../components/usersList';
import {loadUsers} from '../actions'
const getUser = function (state) {
    return state.general.user;
}
const getUsers = function (state) {
    return state.general.users
};
const mapStateToProps = (state, ownProps) => {
    return {
        users: getUsers(state),
        user: getUser(state)
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (id) => {
            console.log('deleteUser id',  id);
            fetch(`/user/delete/${id}`).then(res => res.json())
                .then(user => {
                    dispatch(loadUsers(user))
                });
            console.log('delete user')
        }
    }
};

const userListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);
export default userListContainer