import React, { Component } from 'react';

const Field = (props) => {
 return (
    <p>
         {props.name}  <input type="text" value={props.value}/>
    </p>
 )
}

export default Field;