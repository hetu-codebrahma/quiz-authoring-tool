import { connect } from 'react-redux';
import QuestionEditor from './component';

const mapStateToProps = (state) => {
  const { selectedQuestion } = state.editor;
  const { list } = state.questions;
  const question = list.filter(ques => ques.id === selectedQuestion)[0]
  return {
    question,
  }
};

const mapDispatchToProps = (dispatch) => ({
  // addQuestion: (question) => dispatch(addQuestion(question)),
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionEditor);
