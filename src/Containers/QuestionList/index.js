import { connect } from 'react-redux';
import { addQuestion } from './actions';
import { selectQuestion } from '../QuestionEditor/actions';
import QuestionList from './component';

const mapStateToProps = (state) => ({
  questions: state.questions,
  selectedQuestion: state.editor.selectedQuestion,
});

const mapDispatchToProps = (dispatch) => ({
  addQuestion: (question) => dispatch(addQuestion(question)),
  selectQuestion: (questionID) => dispatch(selectQuestion(questionID)),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
