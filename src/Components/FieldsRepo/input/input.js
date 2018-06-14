import React, { Component } from 'react';

/**
 * 
 * @param {*} props 
 * 1. field
 */
const Input = (props) => {
    console.log('props --> ', props);
 return (
    <p>
         {props.field.options.label}  
         <input type={props.field[props.field.type].type} 
         required={props.field.required}/>
    </p>
 )
}

export default Input;