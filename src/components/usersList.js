import React, {Component} from 'react';

class UserList extends Component {
    constructor(props = {}) {
        super(props);
    }

    getList() {
        if (!this.props.users.items.length){
            return(
                <span>sorry no users</span>
            )
        }

        return this.props.users.items.map((user, id) =>
            <UserCmponent
                user={user}
                clickHandler={this.clickHandler.bind(this)}
            />
        )
    }

    clickHandler(id) {
        this.props.deleteUser(id)
        //delete user on server
    }

    render() {
        var list = this.getList();
        return (
            <ul
                className="collection col s2 white"
            >
                { list }
            </ul>
        )
    }
}
class UserCmponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const user = this.props.user
        return (<li key={user.id}>
            {user.name}
            <button
                onClick={() => this.props.clickHandler(user.id)}
            >
                delete
            </button>
        </li>)
    }
}
export default UserList;