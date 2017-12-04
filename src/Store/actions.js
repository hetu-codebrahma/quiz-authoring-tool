import { 
  ADD_QUESTION,
  DELETE_QUESTION,
  QUESTION_SELECTED,
} from './constants';

export const addQuestion = (question) => ({
  type: ADD_QUESTION,
  payload: { question },
});

export const deleteQuestion = (questionID) => ({
  type: DELETE_QUESTION,
  payload: { questionID },
})

export const selectQuestion = (questionID) => ({
  type: QUESTION_SELECTED,
  payload: { questionID },
})