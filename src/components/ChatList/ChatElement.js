import React, {Component} from 'react';

class ChatElement extends Component {
    constructor(props){
        super(props)
    }
    render(){
        let message  = this.props.message;
        console.log(message);
        return(
            <div className="col s12">
                <div className="card-panel white lighten-5 z-depth-1">
                    <div className="row">
                        {/*<div className="col s3">*/}
                            {/*<img src="default-avatar.png" alt="" className="circle responsive-img valign"/>*/}
                        {/*</div>*/}
                        <div className="col s7">
                            <span className="black-text">{message.text}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s3 grey-text">
                            {message.time}
                        </div>
                        <div className="col s2 offset-s7">
                            {message.user}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ChatElement;