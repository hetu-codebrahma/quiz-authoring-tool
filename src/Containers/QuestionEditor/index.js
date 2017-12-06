import { connect } from 'react-redux';
import QuestionEditor from './component';
import {
  updateQuestionValue,
  updateOptionValue,
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
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEditor);
