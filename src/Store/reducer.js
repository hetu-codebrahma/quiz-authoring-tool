import {
  ADD_QUESTION,
  DELETE_QUESTION,
  SELECT_QUESTION,
  UPDATE_QUESTION_VALUE,
  UPDATE_QUESTION_IMAGE,
  UPDATE_OPTION_VALUE,
  ADD_OPTION,
  DELETE_OPTION,
} from "./constants";

const initialState = {
  selectedQuestionID: null,
  questions: [],
  options: [],
}

/*
Data Structure

question: {
  id: string,
  value: string,
  image: Base64 Image string | null,
}

option: {
  id: string,
  questionID: string,
  value: string,
}

*/

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTION:
      // Add a new question
      return Object.assign({}, state, {
        questions: state.questions.concat([action.payload.question])
      });

    case DELETE_QUESTION:
      // Delete a question
      return Object.assign({}, state, {
        questions: state.questions.filter(question =>
          question.id !== action.payload.questionID
        )
      })

    case SELECT_QUESTION:
      // set a question as selected
      return Object.assign({}, state, {
        selectedQuestionID: action.payload.questionID,
      });

    case UPDATE_QUESTION_VALUE:
      // update the value of the given question
      return Object.assign({}, state, {
        questions: state.questions.map(question => {
          if(question.id === action.payload.questionID){
            return Object.assign({}, question, {
              value: action.payload.value,
            });
          }
          return question;
        })
      })

    case UPDATE_QUESTION_IMAGE:
      return Object.assign({}, state, {
        questions: state.questions.map(question => {
          if(question.id === action.payload.questionID){
            return Object.assign({}, question, {
              image: action.payload.imageDetails,
            })
          }
          return question;
        })
      })

    case ADD_OPTION: {
      const { questionID, optionID } = action.payload;
      return Object.assign({}, state, {
        options: state.options.concat([{
          id: optionID,
          value: 'Option',
          questionID,
        }])
      })
    }

    case DELETE_OPTION: {
      const { optionID } = action.payload;
      return Object.assign({}, state, {
        options: state.options.filter(option => option.id !== optionID)
      })
    }

    case UPDATE_OPTION_VALUE: {
      const { optionID, value } = action.payload;
      return Object.assign({}, state, {
        options: state.options.map(option => {
          if(option.id === optionID) {
            return Object.assign({}, option, { value })
          }
          return option;
        })
      })
    }

    default:
      return state
  }
}


export default reducer;
