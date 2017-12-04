import { connect } from 'react-redux';
import { addQuestion } from './actions';
import QuestionList from './component';

const mapStateToProps = (state) => ({
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  addQuestion: (question) => dispatch(addQuestion(question)),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
