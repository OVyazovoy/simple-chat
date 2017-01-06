import React , {Component} from 'react';
import classNames from 'classnames';
import UserList from './usersList';
import ChatList from './ChatList';
import { connect } from 'react-redux'
class Chat extends Component {
    constructor(props = {}){
        super(props);

        // console.log(store.getState());
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