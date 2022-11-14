import { ActionTypes } from "../actions/ActionTypes";

const initialState = {
  slideInDisplay: 1,
};

export default function DisplayingSlideReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SLIDE_TO_SHOW:
      return Object.assign({}, state, {
        slideInDisplay: parseInt(action.payload),
      });
    default:
      return state;
  }
}
