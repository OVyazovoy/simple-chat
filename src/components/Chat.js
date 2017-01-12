import React , {Component} from 'react';
import classNames from 'classnames';
import UserList from './usersList';
import ChatListContainer from '../containers/ChatListContainer';
class Chat extends Component {
    constructor(props = {}){
        super(props);
        this.props.init()
    }
    render(){
        const socket = this.props.socket;
        return(
            <div className="container chat-container  ">
                <div className="row">
                    <UserList />
                    <ChatListContainer
                        socket = {socket}
                    />
                </div>

            </div>
        )
    }
}
export default Chat;