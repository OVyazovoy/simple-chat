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
                        {/*<div className="col s4 m2">*/}
                            {/*<img src="images/yuna.jpg" alt="" className="circle responsive-img valign"/>*/}
                        {/*</div>*/}
                        <div className="col s12 m12">
                            <span className="black-text">{this.props.text}</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s2 offset-s10">
                            {this.props.user}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default ChatElement;