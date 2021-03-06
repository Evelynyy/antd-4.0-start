import { handleActions } from 'redux-actions';
import { INCREMENT } from './actionTypes';

const defaultState = { counter: 0, summary: 'Table' };

export const reducer = handleActions(
  {
    [INCREMENT]: (state, action) => ({
      ...defaultState,
      counter: state.counter + 1,
    }),
  },
  defaultState,
);
