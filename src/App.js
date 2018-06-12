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


class App extends Component {
  render() {
    return (
      <div className="App">
        <Form fields={fieldsArr}/>
      </div>
    );
  }
}

export default App;
