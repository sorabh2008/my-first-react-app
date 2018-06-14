import React, {Component} from 'react';
import Fields from '../Fields/Fields';

const Card = (props) => {
    console.log(props);
    let resp = [];
    if(!!props.content && !!props.content.fields){
        resp.push(<Fields fields={props.content.fields} key={props.content.id}/>);
    }
    return (
        <div>
            {props.content.name} - in card
            {resp}
        </div>
    )
}

export default Card;