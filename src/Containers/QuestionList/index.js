import { connect } from 'react-redux';
import { addQuestion, deleteQuestion } from './actions';
import { selectQuestion } from '../QuestionEditor/actions';
import QuestionList from './component';

const mapStateToProps = (state) => ({
  questions: state.questions,
  selectedQuestion: state.editor.selectedQuestion,
});

const mapDispatchToProps = (dispatch) => ({
  addQuestion: (question) => dispatch(addQuestion(question)),
  deleteQuestion: (questionID) => dispatch(deleteQuestion(questionID)),
  selectQuestion: (questionID) => dispatch(selectQuestion(questionID)),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
