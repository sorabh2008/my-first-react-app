import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './Containers/Form/Form';
import './App.css';

const fieldsArr=[
  {
    id: 'fld1',
    type: 'text',
    name: 'Name',
    value: 'ABC'
  }
];

const formResp = {
  id: 123,
  name: 'Demo Form',
  cards: [
    {
      id: 1,
      name: 'Demo Card L 1',
      cards: [
        {
          id: 21,
          name: 'Demo Card L 2',
          
              fields: [
                {
                  id: 101,
                  type: 'label',
                  label: {
                    text: 'Name'
                  }
                },
                {
                  id: 102,
                  type: 'input',
                  input: {
                    value: 'ABC',
                    placeholder: 'Enter Name'
                  }
                }
              ]
            
        },
        {
          id: 1001,
          name: 'Demo Card Inner layer 1',
          cards: [
            {
              id: 1011,
              name: 'Demo Card Inner layer 2',
              fields: [
                {
                  id: 10111,
                  type: 'label',
                  label: {
                    text: 'Password'
                  }
                }, {
                  id: 10112,
                  type: 'password',
                  password: {
                    placeholder: 'Enter password',
                    required: true,
                    validationRegex: ''
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <Form cards={formResp} key={formResp.id}/>
      </div>
    );
  }
}

export default App;
