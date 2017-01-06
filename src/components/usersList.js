import React, {Component} from 'react';
import Users from '../store/users';

class UserList extends Component {
    constructor(props = {}) {
        super(props);
        this.state = {
            Users
        }
    }

    getList() {
        return this.state.Users.map((user, id) =>
            <li
                key={id}
            >
                {user.first}
                <button
                    onClick={this.clickHandler.bind(this, id)}
                >
                    del
                </button>
            </li>)
    }

    clickHandler(id) {
        let state = this.state.Users;
        state.splice(id,1);
        this.setState({state})
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

export default UserList;