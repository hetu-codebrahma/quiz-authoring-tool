import { 
  ADD_QUESTION,
  DELETE_QUESTION,
} from "./constants";

const initialState = {
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

    default:
      return state
  }
}


export default reducer;
