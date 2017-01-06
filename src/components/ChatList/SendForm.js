import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { connect } from 'react-redux'
class SendForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            textareaError: false
        };

        const { dispatch } =  props;
        console.log(arguments);
        dispatch({type: 'ADD_MESSAGE'});
    }
    submitHandler(e){
        e.preventDefault()

        const val = ReactDOM.findDOMNode(this.refs.textarea).value;

        if(val == ''){
            this.setState({textareaError:true})
        }else {
            this.setState({textareaError:false})
            this.props.addToHistory(val)
        }
    }
    render(){
        const textareaClass = classNames({
            'materialize-textarea':true,
            'col':true,
            's9':true,
            'invalid':this.state.textareaError
        })
        return(
            <div className="col s12 white">
                <form action="#">
                    <div className="file-field input-field white">
                        <div className="input-field col s12">
                            <textarea
                                id="textarea1"
                                className={textareaClass}
                                placeholder="Textarea"
                                ref='textarea'
                            />
                            <button
                                className="btn col s2 offset-s1"
                                type="submit"
                                onClick={this.submitHandler.bind(this)}
                            >
                                <span>SEND</span>
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}

export default connect(store => store)(SendForm);