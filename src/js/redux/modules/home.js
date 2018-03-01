import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

export const constants = {};

// ------------------------------------
// Actions
// ------------------------------------

export const actions = {};

export const reducers = {};

export const initialState = Map({
  result: '',
});

export default handleActions(reducers, initialState);
