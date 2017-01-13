import React, {Component} from 'react';
import ChatElement from './ChatElement';
import SendForm from './SendForm';

class ChatList extends Component {
    constructor(props){
        super(props);
        this.props.onLoad();
    }
    _getHistory(){
        console.log(this.props.history.isFetching);
        if(this.props.history.isFetching){
            return (<p>Загружается...</p>)
        }
        if(this.props.history.items.length <= 0){
            return <ChatElement
                key={0}
                message={{
                    text: "HELLO",
                    user: "TEST",
                    time: "NOW"
                }}
            />
        }
        console.log(this.props.history.items);
        return this.props.history.items.map((message, i) => <ChatElement
            key={i}
            message={message}
        />);
    }
    componentDidUpdate() {
        var objDiv = document.getElementById("chatList");
            objDiv.scrollTop = objDiv.scrollHeight;
    }
    componentDidMount() {

    }
    render() {
        const history = this._getHistory();

        console.log(history);
        return (
            <div className="col s8 chat-list  lighten-5 card-panel grey">
                <div
                    style={{
                        height:500 + 'px',
                        overflowX:'hidden',
                        overflowY:'visible'
                    }}
                    className="col s12"
                    id="chatList"
                >
                    {history}
                </div>
                <SendForm
                    addToHistory={this.props.addToHistory.bind(this)}
                />
                <button
                    onClick={this.props.clearHistory.bind(this)}
                />
            </div>
        )
    }
}

export default ChatList;
