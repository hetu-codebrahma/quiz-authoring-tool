import { connect } from 'react-redux';
import QuestionEditor from './component';
import {
  updateQuestionValue,
  updateOptionValue,
  addNewOptionToQuestion,
  deleteOptionOfQuestion,
} from '../../Store/actions';

const mapStateToProps = (state) => {
  const { list, selectedQuestion } = state.questions;
  const question = list.filter(ques => ques.id === selectedQuestion)[0]
  return {
    question,
  }
};

const mapDispatchToProps = (dispatch) => ({
  updateQuestionValue: (value, questionID) => {
    return dispatch(updateQuestionValue(value, questionID));
  },
  updateOptionValue: (value, optionIndex, questionID) => {
    return dispatch(updateOptionValue(value, optionIndex, questionID))
  },
  addNewOptionToQuestion: (questionID) => {
    return dispatch(addNewOptionToQuestion(questionID))
  },
  deleteOptionOfQuestion: (optionIndex, questionID) => {
    return dispatch(deleteOptionOfQuestion(optionIndex, questionID))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEditor);
