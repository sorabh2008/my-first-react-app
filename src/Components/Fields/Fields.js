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
                return <Field name={field.name} value={field.value}/>
            })
        )
    }
}

export default Fields;