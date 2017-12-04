import { 
  ADD_QUESTION,
  DELETE_QUESTION,
  QUESTION_SELECTED,
  QUESTION_VALUE_CHANGED,
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

    case QUESTION_VALUE_CHANGED:
      // update the value of the given question
      return Object.assign({}, state, {
        list: state.list.map(question => {
          if(question.id === action.payload.questionID){
            return Object.assign({}, question, {
              title: action.payload.value,
            });
          }
          return question;
        })
      })

    default:
      return state
  }
}


export default reducer;
