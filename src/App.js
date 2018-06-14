import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './Containers/Form/Form';
import './App.css';

const fieldsArr = [
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
      name: 'Sign in / up',
      cards: [
        {
          id: 21,
          name: 'Sign in',
          fields: [
            {
              id: 102,
              type: 'input',
              options: {
                label: 'User ID'
              },
              input: {
                type: 'text',
                value: 'ABC',
                placeholder: 'enter name'
              },
              required: true,
              validation: {
                rule: 'not-empty'
              }
            }, {
              id: 103,
              type: 'input',
              input: {
                type: 'password',
                placeholder: 'enter password'
              },
              options: {
                label: 'Password'
              },
              required: true
            }
          ]
        },
        {
          id: 1001,
          name: 'Sign up',
          fields: [
            {
              id: 104,
              type: 'input',
              input: {
                type: 'text',
                placeholder: 'user@example.com'
              },
              options: {
                label: 'email id'
              },
              required: true,
              validation: {
                rule: 'email'
              }
            }, 
            {
              id: 102,
              type: 'input',
              options: {
                label: 'User ID'
              },
              input: {
                type: 'text',
                value: 'ABC',
                placeholder: 'enter name'
              },
              required: true,
              validation: {
                rule: 'not-empty'
              }
            }, {
              id: 103,
              type: 'input',
              input: {
                type: 'password',
                placeholder: 'enter password'
              },
              options: {
                label: 'Password'
              },
              required: true
            }
          ]
        }
      ]
    },
    {
      
    }
  ]
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <Form cards={formResp} key={formResp.id} />
      </div>
    );
  }
}

export default App;
