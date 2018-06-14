import React from 'react';
import Input from '../FieldsRepo/input/input';
import Button from '../FieldsRepo/Button/Button';

/**
 * 
 * @param {*} props 
 * 1. field
 */
const Field = (props) => {
    let resp = [];
    console.log('switch on ->', props.field.type);
    switch(props.field.type){
        case 'input':
            resp.push(<Input field={props.field} key={props.field.id}/>);
            break;
        case 'button':
            resp.push(<Button field={props.field} key={props.field.id}/>);
            break;
        default:

    }
 return  resp;
 
}

export default Field;