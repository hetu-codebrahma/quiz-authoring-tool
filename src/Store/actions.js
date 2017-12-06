import {
  ADD_QUESTION,
  DELETE_QUESTION,
  QUESTION_SELECTED,
  QUESTION_VALUE_CHANGED,
  OPTION_VALUE_CHANGED,
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

export const updateQuestionValue = (value, questionID) => ({
  type: QUESTION_VALUE_CHANGED,
  payload: { value, questionID },
})

export const updateOptionValue = (value, optionIndex, questionID) => ({
  type: OPTION_VALUE_CHANGED,
  payload: { value, optionIndex, questionID }
})
