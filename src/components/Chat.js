import React , {Component} from 'react';
import classNames from 'classnames';
import UserList from './usersList';
import ChatList from './ChatList';
class Chat extends Component {
    constructor(props = {}){
        super(props);

    }
    render(){
        return(
            <div className="container chat-container  ">
                <div className="row">
                    <UserList />
                    <ChatList />
                </div>

            </div>
        )
    }
}
export default Chat;