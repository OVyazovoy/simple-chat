import React , {Component} from 'react';
import classNames from 'classnames';
import UserList from './usersList';
class Chat extends Component {
    constructor(props = {}){
        super(props);
    }
    render(){
        return(
            <div className="container chat-container  ">
                <div className="row">

                    <UserList />

                    <div className="col s8 chat-list  lighten-5 card-panel grey">
                        <div className="col s12">
                            <div className="card-panel white lighten-5 z-depth-1">
                                <div className="row valign-wrapper">
                                    <div className="col s4 m2">
                                        <img src="images/yuna.jpg" alt="" className="circle responsive-img valign"/>
                                    </div>
                                    <div className="col s8 m10">
                                        <span className="black-text">This is a square image. Add the "circle" className to it to make it appear circular. </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s12">
                            <div className="card-panel white lighten-5 z-depth-1">
                                <div className="row valign-wrapper">
                                    <div className="col s4 m2">
                                        <img src="images/yuna.jpg" alt="" className="circle responsive-img valign"/>
                                    </div>
                                    <div className="col s8 m10">
                                        <span className="black-text">This is a square image. Add the "circle" className to it to make it appear circular. </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s12">
                            <div className="card-panel white lighten-5 z-depth-1">
                                <div className="row valign-wrapper">
                                    <div className="col s4 m2">
                                        <img src="images/yuna.jpg" alt="" className="circle responsive-img valign"/>
                                    </div>
                                    <div className="col s8 m10">
                                        <span className="black-text">This is a square image. Add the "circle" className to it to make it appear circular. </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 white">
                            <form action="#">
                                <div className="file-field input-field white">
                                    <div className="input-field col s12">
                                        <textarea id="textarea1" className="materialize-textarea col s9"  placeholder="Textarea" />
                                        <div className="btn col s2 offset-s1">
                                            <span>File</span>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default Chat;