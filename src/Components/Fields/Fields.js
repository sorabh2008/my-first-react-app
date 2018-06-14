import React, { Component } from 'react';
import Field from '../Field/Field';

class Fields extends Component {

    constructor(props){
        super();
        this.state = {
            fieldArr: []
        };
    }

    render(){
        
        return (
            this.props.fields.map(field=>{
                return <Field field={field} key={field.id}/>
            })
        )
    }
}

export default Fields;