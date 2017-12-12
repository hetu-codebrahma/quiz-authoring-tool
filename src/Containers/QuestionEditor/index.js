import { connect } from 'react-redux';
import QuestionEditor from './component';
import {
  updateQuestionValue,
  updateOptionValue,
  addOption,
  deleteOption,
  updateQuestionImage,
} from '../../Store/actions';

const mapStateToProps = (state) => {
  const { options, questions, selectedQuestionID } = state;
  const question = questions.filter(ques => ques.id === selectedQuestionID)[0]
  const selectedOptions = options.filter(opt => opt.questionID === selectedQuestionID)
  return {
    question,
    options: selectedOptions,
  }
};

const mapDispatchToProps = (dispatch) => ({
  updateQuestionValue: (value, questionID) => {
    return dispatch(updateQuestionValue(value, questionID));
  },
  updateQuestionImage: (questionID, imageDetails) => {
    return dispatch(updateQuestionImage(questionID, imageDetails))
  },
  updateOptionValue: (value, optionID) => {
    return dispatch(updateOptionValue(value, optionID));
  },
  addOption: (questionID, optionID) => {
    return dispatch(addOption(questionID, optionID))
  },
  deleteOption: (optionID) => dispatch(deleteOption(optionID)),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEditor);
