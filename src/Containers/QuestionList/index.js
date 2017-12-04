import { connect } from 'react-redux';
import { 
  addQuestion, 
  deleteQuestion, 
  selectQuestion,
} from '../../Store/actions';
import QuestionList from './component';

const mapStateToProps = (state) => ({
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  addQuestion: (question) => dispatch(addQuestion(question)),
  deleteQuestion: (questionID) => dispatch(deleteQuestion(questionID)),
  selectQuestion: (questionID) => dispatch(selectQuestion(questionID)),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
