import React, {Component} from 'react';

class UserList extends Component {
    constructor(props = {}) {
        super(props);
    }

    getList() {
        if (!this.props.users.items.length) {
            return (
                <span>sorry no users</span>
            )
        }

        return this.props.users.items.map((user, id) =>
            <UserCmponent
                user={user}
                me={this.props.user}
                clickHandler={this.clickHandler.bind(this)}
            />
        )
    }

    clickHandler(id) {
        this.props.deleteUser(id)
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

    _getDeleteBtn() {
        return (<button
            onClick={() => this.props.clickHandler(this.props.user.id)}
        >
            delete
        </button>)
    }
    _isYou(){
        return this.props.me.id == this.props.user.id
    }
    showDeleteBtn() {
        return this._isYou() ?
            this._getDeleteBtn() :
            null
    }

    render() {
        const user = this.props.user;
        const isYouClass = this._isYou() ? 'green-text' : ''
        return (
            <li
                className={isYouClass}
                key={user.id}>
                {user.name}
                {this.showDeleteBtn()}
            </li>
        )
    }
}
export default UserList;