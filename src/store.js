import { combineReducers } from 'redux';
import questions from './Containers/QuestionList/reducer';
import editor from './Containers/QuestionEditor/reducer';

export default combineReducers({
  questions,
  editor,
});
