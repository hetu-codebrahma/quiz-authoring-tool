import { 
  ADD_QUESTION,
  DELETE_QUESTION,
} from './constants';

export const addQuestion = (question) => ({
  type: ADD_QUESTION,
  payload: { question },
});

export const deleteQuestion = (questionID) => ({
  type: DELETE_QUESTION,
  payload: { questionID },
})