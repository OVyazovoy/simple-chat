import React, {Component} from 'react';

class UserList extends Component {
    constructor(props = {}) {
        super(props);
    }

    getList() {
        let users = this.props.users;
        if(users.isFetching){
            return (
                <span>Загружается...</span>
            )
        }
        if (!users.items.length) {
            return (
                <span>sorry no users</span>
            )
        }

        return this.props.users.items.map((user, id) =>
            <UserComponent
                key={id}
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
class UserComponent extends Component {
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
            >
                {user.name}
                {this.showDeleteBtn()}
            </li>
        )
    }
}
export default UserList;