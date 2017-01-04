import React, {Component} from 'react';
import Users from '../stubs/users';

class UserList extends Component {
    constructor(props = {}) {
        super(props);
        this.state = {
            Users
        }
    }

    getList() {
        return this.state.Users.map((user, id) =>
            <li key={id}
            >{user.first}
                <button
                    onClick={this.clickHandler.bind(this, id)}
                >
                    del
                </button>
            </li>)
    }

    clickHandler(id) {
        const state  = this.state.Users.slice(1,id+1);
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