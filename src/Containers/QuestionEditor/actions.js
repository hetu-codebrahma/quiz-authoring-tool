import { QUESTION_SELECTED } from './constants';

export const selectQuestion = (questionID) => ({
  type: QUESTION_SELECTED,
  payload: { questionID },
})