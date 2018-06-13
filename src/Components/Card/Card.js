import React, {Component} from 'react';

const Card = (props) => {
    console.log(props);
    return (
        <div>
            {props.content.name}
        </div>
    )
}

export default Card;