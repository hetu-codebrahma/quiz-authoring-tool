import { ADD_QUESTION } from "./constants";

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

    default:
      return state
  }
}


export default reducer;
