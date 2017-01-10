import React, {Component} from 'react';

class ChatElement extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="col s12">
                <div className="card-panel white lighten-5 z-depth-1">
                    <div className="row">
                        {/*<div className="col s3">*/}
                            {/*<img src="default-avatar.png" alt="" className="circle responsive-img valign"/>*/}
                        {/*</div>*/}
                        <div className="col s7">
                            <span className="black-text">{this.props.message.text}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s3 grey-text">
                            {this.props.message.time}
                        </div>
                        <div className="col s2 offset-s7">
                            {this.props.message.user}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ChatElement;