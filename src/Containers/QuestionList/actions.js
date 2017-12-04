import { ADD_QUESTION } from './constants';

export const addQuestion = (question) => ({
  type: ADD_QUESTION,
  payload: { question },
});