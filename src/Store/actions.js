import {
  ADD_QUESTION,
  DELETE_QUESTION,
  SELECT_QUESTION,
  UPDATE_QUESTION_VALUE,
  UPDATE_QUESTION_IMAGE,
  UPDATE_OPTION_VALUE,
  ADD_OPTION,
  DELETE_OPTION,
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
  type: SELECT_QUESTION,
  payload: { questionID },
})

export const updateQuestionValue = (value, questionID) => ({
  type: UPDATE_QUESTION_VALUE,
  payload: { value, questionID },
})

export const updateQuestionImage = (questionID, imageDetails) => ({
  type: UPDATE_QUESTION_IMAGE,
  payload: { questionID, imageDetails },
})

export const updateOptionValue = (value, optionID) => ({
  type: UPDATE_OPTION_VALUE,
  payload: { value, optionID },
})

export const addOption = (questionID, optionID) => ({
  type: ADD_OPTION,
  payload: { questionID, optionID },
})

export const deleteOption = (optionID) => ({
  type: DELETE_OPTION,
  payload: { optionID },
})
