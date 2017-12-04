import React, { Component } from 'react';
import QuestionList from './Containers/QuestionList';
import QuestionEditor from './Containers/QuestionEditor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuestionList />
        <QuestionEditor />
      </div>
    );
  }
}

export default App;
