import {
  ADD_QUESTION,
  DELETE_QUESTION,
  QUESTION_SELECTED,
  QUESTION_VALUE_CHANGED,
  OPTION_VALUE_CHANGED,
  ADD_OPTION_TO_QUESTION,
  DELETE_OPTION_FROM_QUESTION,
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

export const addNewOptionToQuestion = (questionID) => ({
  type: ADD_OPTION_TO_QUESTION,
  payload: { questionID },
})

export const deleteOptionOfQuestion = (optionIndex, questionID) => ({
  type: DELETE_OPTION_FROM_QUESTION,
  payload: { optionIndex, questionID },
})
