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
    onClickHandler(){
        console.log('clicked!!!');
    }
    render() {
        console.log('button props --> ', this.props);
        return (
            <p>
                <button className="btn-click-me" name={this.props.field.options.label} onClick={this.onClickHandler}>{this.props.field.options.label}</button>
            </p>
        )
    }
}

export default Button;