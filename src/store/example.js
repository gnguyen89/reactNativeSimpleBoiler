import { createSelector } from 'reselect';

const EXAMPLE = 'EXAMPLE';

// actions

export function doSomething() {
  return (dispatch) => {
    dispatch({
      type: EXAMPLE,
      payload: 'Example',
    });
  };
}

// state
const INITIAL_STATE = {
  example: '',
};

// selectors
const example = state => state.example;

export const getExample = createSelector(
  example,
  a => a.example,
);

// reducers

export default (state = INITIAL_STATE, action) => {
  const { payload } = action;
  switch (action.type) {
    case EXAMPLE:
      return { ...state, example: payload };
    default:
      return state;
  }
};