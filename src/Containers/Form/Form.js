import React from 'react';
import Cards from '../Cards/Cards';

const Form = (props) => {
    return (
        <fieldset>
        <div className="form-head">{props.cards.name}</div>
        <Cards cards={props.cards.cards}/>
        </fieldset>
    )
}

export default Form;