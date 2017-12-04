import { QUESTION_SELECTED } from "./constants";

const initialState = {
  selectedQuestion: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
