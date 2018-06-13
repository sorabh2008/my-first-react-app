import React, {Component} from 'react';
import Card from '../../Components/Card/Card';

class Cards extends Component{
    constructor(props){
        super();
    }

    render(){
        console.log('in cards ->', this.props);
        const resp = [];
        if(!!this.props.cards && !this.props.cards.cards){
            resp.push(<Card content={this.props.cards[0].cards[0]}/>);
        }
        
        return resp;
        
    }
}

export default Cards;