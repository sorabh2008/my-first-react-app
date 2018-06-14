import React, {Component} from 'react';
import Card from '../../Components/Card/Card';


class Cards extends Component{
    /**
     * 
     * @param {*} props 
     * 1. cards
     * 2. key
     */
    constructor(props){
        super();
    }

    render(){
        console.log('in cards ->', this.props);
        const resp = [];
        if(!!this.props.cards && !!this.props.cards.cards){
            this.props.cards.cards.map(card => {
                resp.push(<Card content={card} key={card.id}/>);    
            })
            
        } else if(!!this.props.cards) {
            
                resp.push(<Card content={this.props.cards} key={this.props.cards.id}/>)
            
        }
        
        return resp;
        
    }
}

export default Cards;