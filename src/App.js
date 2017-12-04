import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducers from './Store/';
import QuestionList from './Containers/QuestionList';
import QuestionEditor from './Containers/QuestionEditor';
import './App.css';

const store = createStore(reducers, applyMiddleware(logger));

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
