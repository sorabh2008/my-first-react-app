import React from 'react';
import Cards from '../Cards/Cards';

/**
 * 
 * @param {*} props 
 * : cards
 * : key
 */
const Form = (props) => {
    const cardArr = [];
    if(!!props.cards && !!props.cards.cards){
        props.cards.cards.map(card => {
            cardArr.push(<Cards cards={card} key={card.id}/>);
        });
    }
    return (
        <fieldset>
        <div className="form-head">{props.cards.name} - in form js</div>
        
        {cardArr}
        </fieldset>
    )
}

export default Form;