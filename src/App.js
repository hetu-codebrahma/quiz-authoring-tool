import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './Store/';
import QuestionList from './Containers/QuestionList';
import QuestionEditor from './Containers/QuestionEditor';
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <QuestionList />
          <QuestionEditor />
        </div>
      </Provider>
    );
  }
}

export default App;
