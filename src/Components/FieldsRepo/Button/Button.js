import React, { Component } from 'react';
import './Button.css';

/**
 * 
 * @param {*} props 
 * 1. field
 */
class Button extends Component {
    constructor(props) {
        super();
    }

componentWillMount(){
    console.log("button-> component will mount");
}

componentDidMount(){
    console.log("button-> component did mount");
}

componentWillReceiveProps(newProps){
    console.log("button-> component will receive props", newProps);
}

shouldComponentUpdate(newProps, newState){
    console.log("button-> should component update", newProps, newState);
    return newProps.doUpdate
}

componentWillUpdate(newProps, newState){
    console.log("button-> component will update", newProps, newState);
}

componentDidUpdate(){
    console.log("button-> component did update");
}

    onClickHandler(data){
        console.log('clicked!!!', data);
        this.props.click();
    }

    render() {
        return (
            <p>
                <button className="btn-click-me" name={this.props.field.options.label} onClick={this.onClickHandler.bind(this, {data: 'Hello'})}>{this.props.field.options.label}</button>
                click count = {this.props.clickCount}
            </p>
        )
    }
}

export default Button;