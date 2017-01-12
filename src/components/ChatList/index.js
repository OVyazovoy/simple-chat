import React, {Component} from 'react';
import ChatElement from './ChatElement';
import SendForm from './SendForm';

class ChatList extends Component {
    constructor(props){
        super(props);

    }
    _getHistory(){
        if(this.props.history.length <= 0){
            return <ChatElement
                key={0}
                message={{
                    text: "HELLO",
                    user: "TEST",
                    time: "NOW"
                }}
            />
        }
        return this.props.history.map((message, i) => <ChatElement
            key={i}
            message={message}
        />);
    }
    render() {
        const history = this._getHistory();
        return (
            <div className="col s8 chat-list  lighten-5 card-panel grey">
                <div
                    style={{maxHeight:300 + 'px', overflow: 'scroll'}}
                    className="col s12"
                >
                    {history}
                </div>
                <SendForm
                    addToHistory={this.props.addToHistory.bind(this)}
                />
            </div>
        )
    }
}

export default ChatList;
