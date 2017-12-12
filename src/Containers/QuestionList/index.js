import { connect } from 'react-redux';
import {
  addQuestion,
  deleteQuestion,
  selectQuestion,
  addOption,
} from '../../Store/actions';
import QuestionList from './component';

const mapStateToProps = (state) => ({
  questions: state.questions,
  selectedQuestionID: state.selectedQuestionID,
});

const mapDispatchToProps = (dispatch) => ({
  addQuestion: (question) => dispatch(addQuestion(question)),
  addOption: (questionID, optionID) => dispatch(addOption(questionID, optionID)),
  deleteQuestion: (questionID) => dispatch(deleteQuestion(questionID)),
  selectQuestion: (questionID) => dispatch(selectQuestion(questionID)),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
