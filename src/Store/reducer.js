import {
  ADD_QUESTION,
  DELETE_QUESTION,
  QUESTION_SELECTED,
  QUESTION_VALUE_CHANGED,
  OPTION_VALUE_CHANGED,
  ADD_OPTION_TO_QUESTION,
  DELETE_OPTION_FROM_QUESTION,
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

    case OPTION_VALUE_CHANGED: {
      // Update the value of the option in a question
      const { questionID,  optionIndex, value } = action.payload;
      return Object.assign({}, state, {
        // Go through the questions
        list: state.list.map(question => {
          // If the question id matches
          if(question.id === questionID) {
            // edit the question
            return Object.assign({}, question, {
              // go through its options
              options: question.options.map((option, i) => {
                // if the option index matches
                if(i === optionIndex){
                  // Update the option with the new value
                  return value;
                }
                // else return as is
                return option;
              })
            })
          }
          // else return as is
          return question;
        })
      })
    }

    case ADD_OPTION_TO_QUESTION: {
      // Add an option to question
      const { questionID } = action.payload;
      return Object.assign({}, state, {
        list: state.list.map(question => {
          if(question.id === questionID){
            return Object.assign({}, question, {
              options: question.options.concat([`Option`])
            })
          }
          return question;
        })
      })
    }

    case DELETE_OPTION_FROM_QUESTION: {
      // Remove an option from question
      const { questionID, optionIndex } = action.payload;
      return Object.assign({}, state, {
        list: state.list.map(question => {
          if(question.id === questionID){
            return Object.assign({}, question, {
              options: question.options.filter((option, i) => i !== optionIndex)
            })
          }
          return question;
        })
      })
    }

    default:
      return state
  }
}


export default reducer;
