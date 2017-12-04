import { 
  ADD_QUESTION,
  DELETE_QUESTION,
  QUESTION_SELECTED,
} from "./constants";

const initialState = {
  selectedQuestion: null,
  list: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      // Add a new question
      return Object.assign({}, state, {
        list: state.list.concat([action.payload.question])
      });
    
    case DELETE_QUESTION:
      // Delete a question
      return Object.assign({}, state, {
        list: state.list.filter(question => 
          question.id !== action.payload.questionID
        )
      })

    case QUESTION_SELECTED:
      // set a question as selected
      return Object.assign({}, state, {
        selectedQuestion: action.payload.questionID,
      });

    default:
      return state
  }
}


export default reducer;
