import React, { Component } from 'react';
import Field from '../Field/Field';
import Button from '../FieldsRepo/Button/Button';

class Card extends Component {
    constructor(props) {
        super();
        this.state = {
            clickCount: 0,
            doUpdate: true
        }
    }

    onClickHandler(){
        console.log("Card->", 'clicked');
        let updateClickCount = this.state.clickCount + 1;
        this.setState({clickCount: updateClickCount});
    }

    render() {
        let resp = [];
        if (!!this.props.content && !!this.props.content.fields) {
            this.props.content.fields.map(field=>{
                resp.push( <Field field={field} key={field.id}/>);
            })
        }
        if(!!this.props.content && !!this.props.content.navigation){
            this.props.content.navigation.map(button => {
                resp.push(<Button field={button} click={this.onClickHandler.bind( this, {})} key={button.id} clickCount={this.state.clickCount} doUpdate={this.state.doUpdate}/>)
            })
        }
        return (
            <div>
                {this.props.content.name} - in card
            {resp}
            </div>
        )
    }
}

export default Card;