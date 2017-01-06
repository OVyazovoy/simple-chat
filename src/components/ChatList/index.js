import React, {Component} from 'react';
import ChatElement from './ChatElement';
import SendForm from './SendForm';
import History from '../../store/chatHistory';
import { connect } from 'react-redux';


class ChatList extends Component {
    constructor(props){
        super(props);
        this.state = {
            History: props.message
        }
    }
    _getHistory(){
        if(this.state.History)
            return this.state.History.map((element) => <ChatElement
                        key={element.id}
                        text={element.text}
                        user={element.user}
                    />);
        else
            return []
    }
    _getLastId(){
        return History[History.length - 1].id
    }
    addToHistory(text){
        History.push({
            id: this._getLastId() + 1,
            user: 'sdf',
            text
        });
        this.setState({History});
    }
    render() {
        const history = this._getHistory();
        return (
            <div className="col s8 chat-list  lighten-5 card-panel grey">
                {history}
                <SendForm
                    addToHistory={this.addToHistory.bind(this)}
                />

            </div>
        )
    }
}

export default connect(store => store)(ChatList);
