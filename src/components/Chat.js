import React , {Component} from 'react';
import classNames from 'classnames';
import UserList from './usersList';
import ChatListContainer from '../containers/ChatListContainer';
class Chat extends Component {
    constructor(props = {}){
        super(props);

        console.log(props);

    }
    render(){
        return(
            <div className="container chat-container  ">
                <div className="row">
                    <UserList />
                    <ChatListContainer />
                </div>

            </div>
        )
    }
}
export default Chat;